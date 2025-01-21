import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';

const ComponentToPrint = React.forwardRef((props, ref) => (
    <div ref={ref}>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
    </div>
));

const GeneratePDF = () => {
    const componentRef = useRef();
    const [capturedImages, setCapturedImages] = useState([]);

    const captureImages = async () => {
        setCapturedImages([]); // Clear captured images array

        try {
            const element = componentRef.current;
            const images = [];
            const pages = element.querySelectorAll('div'); // Select all page divs
            
            for (let page of pages) {
                const canvas = await html2canvas(page, {
                    useCORS: true,
                    scale: 2, // Scale for higher resolution
                    logging: true, // Log information during rendering (can be removed later)
                    scrollX: 0,
                    scrollY: -window.scrollY, // Handle any page scrolling
                    backgroundColor: null, // Set to null to preserve transparency
                });

                const imgData = canvas.toDataURL('image/jpeg'); // Capture image as JPEG
                images.push(imgData);
            }

            setCapturedImages(images);
        } catch (error) {
            console.error('Error capturing images:', error);
        }
    };

    const generatePDF = () => {
        if (capturedImages.length === 0) {
            console.error('No images captured to generate PDF');
            return;
        }

        const pdf = new jsPDF();
        const imgWidth = 210; // A4 width in mm

        capturedImages.forEach((image, index) => {
            const img = new Image();
            img.src = image;

            img.onload = () => {
                const imgHeight = (img.height * imgWidth) / img.width; // Maintain aspect ratio

                if (index > 0) {
                    pdf.addPage(); // Add a new page if it's not the first image
                }

                pdf.addImage(image, 'JPEG', 0, 0, imgWidth, imgHeight);

                if (index === capturedImages.length - 1) {
                    pdf.save('report.pdf'); // Save the PDF after the last image is added
                }
            };
        });
    };

    return (
        <React.Fragment>
            <ComponentToPrint ref={componentRef} />
            <div className="flex w-full my-5 justify-center items-center gap-5">
                <button
                    className="px-4 py-2 border border-black rounded-full"
                    onClick={captureImages}
                >
                    Capture Images as JPEG
                </button>
                <button
                    className="px-4 py-2 border border-black rounded-full"
                    onClick={generatePDF}
                >
                    Generate PDF from Images
                </button>
            </div>
        </React.Fragment>
    );
};

export default GeneratePDF;

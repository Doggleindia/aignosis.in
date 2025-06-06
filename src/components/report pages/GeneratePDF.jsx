import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Commnpdfpage from './Commnpdfpage';
import watermark from '../../assets/report/watermark.png';

const pdfData = [
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738767409455_page1.png',
    alttext: 'report first page',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738767504591_page2.png',
    alttext: 'report second page',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738768231265_page3.png',
    alttext: 'report third page',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738768279180_page4.png',
    alttext: 'report four page',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738768308524_page5.png',
    alttext: 'report fifth page',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738768377852_page6.png',
    alttext: 'report six page',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738768391375_page7.png',
    alttext: 'report seven page',
  },
];

const SecondpdfData = [
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738768677082_page8.png',
    alttext: 'report eight page',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738768918579_page9.png',
    alttext: 'report nine page',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738768941181_page10.png',
    alttext: 'report ten page',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738768955924_page11.png',
    alttext: 'report eleven page',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738769196127_page12.png',
    alttext: 'report tweleve page',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738769245551_page13.png',
    alttext: 'report thireteen page',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738769259360_page14.png',
    alttext: 'report  page 14',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738769273519_page15.png',
    alttext: 'report page 15',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738769286119_page16.png',
    alttext: 'report page 16',
  },
  {
    url: 'https://storage.googleapis.com/aignosis_static_assets/Website_assets/1738769299141_page17.png',
    alttext: 'report page 17',
  },
];

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div id="pdf-container" ref={ref} className="p-5">
    {pdfData.map((item, index) => (
      <Commnpdfpage key={index} src={item.url} alttext={item.alttext} />
    ))}
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
    {SecondpdfData.map((item, index) => (
      <Commnpdfpage key={index} src={item.url} alttext={item.alttext} />
    ))}
  </div>
));

const GeneratePDF = () => {
  const [loading, setLoading] = useState(false);
  const componentRef = useRef();
  const generatePDF = async () => {
    setLoading(true);
    const images = document.querySelectorAll('.pdf-image');

    if (!images.length) {
      console.error('No images found!');
      setLoading(false);
      return;
    }

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = 218;
    const pageHeight = 297;

    for (let i = 0; i < images.length; i++) {
      const imgElement = images[i];

      try {
        // Capture the content as an image
        const canvas = await html2canvas(imgElement, {
          useCORS: true,
          scale: 5, // High-quality rendering
          backgroundColor: null,
          width: imgElement.clientWidth,
          height: imgElement.clientHeight,
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.8); // 80% quality
        const watermarkImg = await loadImage(watermark); // Load watermark image

        if (i !== 0) pdf.addPage();

        // Add main content image
        pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight, undefined, 'FAST');

        // Overlay watermark (centered & transparent)
        pdf.addImage(watermarkImg, 'PNG', 40, 80, 130, 130, undefined, 'FAST');
      } catch (error) {
        console.error('Error generating PDF page:', error);
      }
    }

    pdf.save('watermarked_report.pdf');
    setLoading(false);
  };

  // Helper function to load an image as base64
  const loadImage = async (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous'; // Enable CORS
      img.src = src;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.globalAlpha = 0.5; // Adjust watermark transparency
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="text-center">
      <ComponentToPrint ref={componentRef} />
      <button className="mt-5 rounded bg-blue-600 px-4 py-2 text-white" onClick={generatePDF} disabled={loading}>
        {loading ? 'Generating .....' : 'Generate PDF'}
        {/* Generate PDF */}
      </button>
    </div>
  );
};

export default GeneratePDF;

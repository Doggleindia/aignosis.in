import React, { lazy, Suspense } from "react";
// Lazy load components
const Divider = lazy(() => import("./Divider"));
const MemberCard = lazy(() => import("./MemberCard"));
import member from "../../assets/members/image1.jpg";
import member2 from "../../assets/members/image2.png";
import member3 from "../../assets/members/image3.png";
import member4 from "../../assets/members/image4.png";
import member5 from "../../assets/members/image5.png";
import member6 from "../../assets/members/image6.png";
import member7 from "../../assets/members/image7.png";
import member8 from "../../assets/members/image10.jpg";
import member9 from "../../assets/members/image9.png";
import raj from "./raj.jpeg";
import amit from './amit.jpeg'
import mem from './05 (1).jpg'



const AignosisTeam = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex rounded-2xl py-[5vw] mt-[8vw] flex-col my-8 max-sm:mx-2 mx-8 border border-solid bg-gray-800 bg-opacity-30 border-white border-opacity-10 min-h-auto">
            <Divider
             title="Our Project team"
             subtitle="The Minds Behind Ai.gnosis"
             desc={
        <>
            At Aignosis, we are driven by the vision to revolutionize early detection of neurodevelopmental disorders through cutting-edge AI technology.
            <br />
            Our passionate and diverse team brings together expertise in healthcare, artificial intelligence, and entrepreneurship to make autism screening.
            <br />
            <div className="text-center">accessible, affordable, and scalable for every child.</div>
        </>
    }
/>
                <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw]  gap-4 px-10">
                    <MemberCard
                        title="Divyansh ​Mangal"
                        subtitle="Co Founder & CEO"
                        desc="Divyansh Mangal is a passionate entrepreneur and AI researcher dedicated to transforming healthcare accessibility. With a strong academic foundation in Physics from BITS Pilani and Quantum Information Technology from the University of Gdansk"

                        src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/IMG_5761.PNG"
                    />
                    <MemberCard
                        title="Raksheet ​Jain"
                        subtitle="Co-Founder & CTO"
                        desc="Raksheet Jain is an AI specialist with a B.Tech in Artificial Intelligence from Virginia Tech and NMIMS Mumbai. His technical expertise spans deep learning and AI model development, with co-authored research on diabetic retinopathy detection."
                        src={member3}
                    />
                </div>
                <div className="flex flex-col mt-10 max-sm:p-[0vw] max-sm:gap-[1vw] gap-4 px-10">
                    <span className="text-center text-3xl font-semibold w-full">Advisory Board</span>
                    <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw] gap-4 px-10">
                        <MemberCard
                            title="Dr. S. Sitaraman"
                            subtitle="DIRECTOR & DEVELOPMENTAL NEUROLOGIST"
                            desc="Dr. S. Sitaraman is a highly respected developmental paediatrician with over 40 years of experience in child health. As Vice-Chancellor of the Indian College of Pediatrics, he has been instrumental in shaping pediatric care in India."
                            src={mem}
                        />
                        <MemberCard
                            title="Dr. Ramesh Agrawal"
                            subtitle="HOD mother & child block, AIIMS Delhi"
                            desc="Dr. Ramesh Agrawal is a leading expert in pediatric healthcare, serving as the Head of the Child and Mother Block at AIIMS Delhi. With over 200 publications and 300+ research papers"
                            src={member6}
                        />
                    </div>
                    <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw] gap-4 px-10">
                        <MemberCard
                            title="Dr. Rajesh Jain"
                            subtitle="Director & Consultant Pediatrician, Raksheet Hospital, Jaipur"
                            desc="Dr Rajesh Jain is a renowned paediatrician and the Director at Raksheet Hospital, Jaipur. With extensive experience in pediatric care and developmental health, Dr. Jain has been a vital contributor to Aignosis’s clinical approach."
                            src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/Dr+Rajesh+Jain.PNG"
                        />
                        <MemberCard
                            title="Dr. Dhananajay Mangal"
                            subtitle="Director & Consultant Pediatrician, Babylon Hospital, Jaipur"
                            desc="Dr. Dhananjay Mangal brings over 27 years of pediatric healthcare experience and currently serves as the President of the Rajasthan Chapter of the Telemedicine Society of India."
                            src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/Dr+Dhananjay+Mangal.PNG"
                        />
                    </div>
                    <div className="flex flex-col mt-10 max-sm:p-[0vw] max-sm:gap-[1vw] gap-4 px-10">
                    <span className="text-center text-3xl font-semibold w-full">Strategic Investors & Mentors</span>
                    <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw] gap-4 px-10">
                        <MemberCard
                            title=" Mr. Amit Jain"
                            subtitle="Strategic Mentor & Investor"
                            desc="Amit Jain, an alumnus of IIT Delhi, is the Co-Founder and CEO of CarDekho Group, a prominent Autotech company in India that has achieved unicorn status with a valuation of $1.2 billion in 2021."
                            src={amit}
                        />
                        <MemberCard
                            title="Mr. Rajneesh Bhandari"
                            subtitle="Founder, NeuroEquilibrium Diagnostic Systems Pvt. Ltd."
                            desc="Rajneesh Bhandari is a seasoned entrepreneur in healthcare diagnostics, having founded NeuroEquilibrium, India’s leading vestibular diagnostic network. With 250+ centers nationwide"
                            src={member9}
                        />
                    </div>
                    <div className="flex mt-10 max-sm:p-[0vw] max-sm:gap-[1vw] gap-4 px-[20vw]">
                        <MemberCard
                            title="Mr. Rajendra Setia"
                            subtitle="Strategic Mentor & Advisor"
                            desc="Rajendra Kumar Setia is the Managing Director and the Chief Executive Officer of SK fInance. He holds a bachelor’s degree in science from the University of Rajasthan, Jaipur, Rajasthan, India."
                            src={raj}
                        />

                    </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default AignosisTeam;

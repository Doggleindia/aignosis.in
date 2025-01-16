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


const AignosisTeam = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="flex rounded-2xl py-[5vw] mt-[8vw] flex-col my-8 max-sm:mx-2 mx-8 border border-solid bg-gray-800 bg-opacity-30 border-white border-opacity-10 min-h-auto">
                <Divider
                    title="Our Project team"
                    subtitle={"The Minds Behind Ai.gnosis"}
                    desc={"Working together for a brighter future."}
                />
                <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw]  gap-4 px-10">
                    <MemberCard
                        title="Divyansh ​Mangal"
                        subtitle="Co-Founder"
                        desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                        src={member2}
                    />
                    <MemberCard
                        title="Raksheet ​Jain"
                        subtitle="Co-Founder"
                        desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                        src={member3}
                    />
                </div>
                <div className="flex flex-col mt-10 max-sm:p-[0vw] max-sm:gap-[1vw] gap-4 px-10">
                    <h1 className="text-center text-3xl font-semibold w-full">Advisors</h1>
                    <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw] gap-4 px-10">
                        <MemberCard
                            title="Dr. S. Sitaraan"
                            subtitle="DIRECTOR & DEVELOPMENTAL NEUROLOGIST"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                        <MemberCard
                            title="Dr. Ramesh Agrawal"
                            subtitle="HOD mother & child block, AIIMS Delhi"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member6}
                        />
                    </div>
                    <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw] gap-4 px-10">
                        <MemberCard
                            title="Dr. Rajesh Jain"
                            subtitle="Consultant Pediatrician Raksheet Hospital"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member4}
                        />
                        <MemberCard
                            title="Dr. Dhananajay Mangal"
                            subtitle="Consultant Pediatrician Babylon Hospital"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member5}
                        />
                    </div>
                    <div className="flex mt-10 max-sm:p-[0vw] max-sm:flex-col max-sm:gap-[10vw] gap-4 px-10">
                        <MemberCard
                            title="Dr. Anami Gour"
                            subtitle="Consultant Paediatric Intensive Care, London"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member7}
                        />
                        <MemberCard
                            title="Mr. Rajneesh Bhandari"
                            subtitle="NeuroEquilibrium Diagnostics Pvt. LMT."
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member9}
                        />
                    </div>
                    <div className="flex mt-10 max-sm:p-[0vw] max-sm:gap-[1vw] gap-4 px-[20vw]">
                        <MemberCard
                            title="Mr. Arcchit Jain"
                            subtitle="Vice President, Goldman Sachs"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member8}
                        />

                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default AignosisTeam;

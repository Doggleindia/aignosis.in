import React from "react";
import Divider from "./Divider";
import MemberCard from "./MemberCard";
import member from "../../assets/images/aboutUs/member.png";

const AignosisTeam = () => {
return (
    <>
        <div className="flex rounded-2xl py-8 flex-col my-8 mx-8 border border-solid bg-gray-800 bg-opacity-30 border-white border-opacity-10 min-h-[auto] ">
            <Divider
                title="Our Project team"
                subtitle={"The Minds Behind Ai.gnosis"}
                desc={" Working together for a brighter future."}
            />
            <div className="flex flex-wrap pt-10 mx-10 flex-wrap ">
                <div className="flex w-full  sm:flex-col md:w-full md:flex-row lg:flex-row  p-2  p-2 ">
                    <div className="w-1/2 p-2">
                        <MemberCard
                            title="Divyansh ​Mangal"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                    </div>
                    <div className="w-1/2 p-2">
                        <MemberCard
                            title="Divyansh ​Mangal"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                    </div>
                </div>
            </div>
            <span className="m-[auto] font-bold text-4xl py-8">Advisors</span>
            <div className="flex pt-10 mx-10 flex-wrap">
                <div className="flex flex-wrap w-full">
                    <div className="w-1/2 p-2">
                        <MemberCard
                            title="Divyansh ​Mangal"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                    </div>
                    <div className="w-1/2 p-2">
                        <MemberCard
                            title="Divyansh ​Mangal"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                    </div>
                    <div className="w-1/2 p-2">
                        <MemberCard
                            title="Divyansh ​Mangal"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                    </div>
                    <div className="w-1/2 p-2">
                        <MemberCard
                            title="Divyansh ​Mangal"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                    </div>
                    <div className="w-1/2 p-2">
                        <MemberCard
                            title="Divyansh ​Mangal"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                    </div>
                    <div className="w-1/2 p-2">
                        <MemberCard
                            title="Divyansh ​Mangal"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
);
};

export default AignosisTeam;

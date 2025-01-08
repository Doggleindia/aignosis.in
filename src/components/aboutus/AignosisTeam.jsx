import React from "react";
import Divider from "./Divider";
import MemberCard from "./MemberCard";
import member from "../../assets/images/aboutUs/member.png";
import linebg2 from "../../assets/images/aboutUs/linebg2.png";
import linebg1 from "../../assets/images/aboutUs/linebg1.png";

const AignosisTeam = () => {
    return (
        <>
            <div className="flex rounded-2xl py-[5vw] mt-[8vw] flex-col my-8 max-sm:mx-2 mx-8 border border-solid bg-gray-800 bg-opacity-30 border-white border-opacity-10 min-h-auto">
                <Divider
                    title="Our Project team"
                    subtitle={"The Minds Behind Ai.gnosis"}
                    desc={"Working together for a brighter future."}
                />
                <div className="flex mt-10 gap-4 px-10">
                    <MemberCard
                        title="Divyansh ​Mangal"
                        subtitle="Co-Founder"
                        desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                        src={member}
                    />
                    <MemberCard
                        title="Raksheet ​Jain"
                        subtitle="Co-Founder"
                        desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                        src={member}
                    />
                </div>
                <div className="flex flex-col mt-10 gap-4 px-10">
                    <h1 className="text-center text-3xl font-semibold w-full">Advisors</h1>
                    <div className="flex mt-10 gap-4 px-10">
                        <MemberCard
                            title="Divyansh ​Mangal"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                        <MemberCard
                            title="Raksheet ​Jain"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                    </div>
                    <div className="flex mt-10 gap-4 px-10">
                        <MemberCard
                            title="Divyansh ​Mangal"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                        <MemberCard
                            title="Raksheet ​Jain"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                    </div>
                    <div className="flex mt-10 gap-4 px-10">
                        <MemberCard
                            title="Divyansh ​Mangal"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                        <MemberCard
                            title="Raksheet ​Jain"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />
                    </div>
                    <div className="flex mt-10 gap-4 px-[20vw]">
                        <MemberCard
                            title="Divyansh ​Mangal"
                            subtitle="Co-Founder"
                            desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                            src={member}
                        />

                    </div>
                </div>
            </div>
        </>
    );
};

export default AignosisTeam;

import React from "react";
import Divider from "./Divider";
import MemberCard from "./MemberCard";
import member from "../../assets/images/aboutUs/member.png";
import linebg2 from "../../assets/images/aboutUs/linebg2.png";
import linebg1 from "../../assets/images/aboutUs/linebg1.png";

const AignosisTeam = () => {
    return (
        <>
            <div className="flex rounded-2xl py-8 flex-col my-8 max-sm:mx-2 mx-8 border border-solid bg-gray-800 bg-opacity-30 border-white border-opacity-10 min-h-auto">
                <Divider
                    title="Our Project team"
                    subtitle={"The Minds Behind Ai.gnosis"}
                    desc={"Working together for a brighter future."}
                />
                {/* Project Team Section */}
                <div
                    className="flex flex-wrap pt-10 mx-10 max-sm:mx-2"
                    style={{ backgroundImage: `url(${linebg1})`, backgroundSize: 'cover' }}
                >
                    <div className="flex w-full flex-wrap sm:flex-col md:flex-row lg:flex-row">
                        {Array.from({ length: 2 }).map((_, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-full md:w-1/2 lg:w-1/2 p-2 flex justify-center"
                            >
                                <MemberCard
                                    title="Divyansh ​Mangal"
                                    subtitle="Co-Founder"
                                    desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                                    src={member}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Advisors Section */}
                <span className="m-auto font-bold text-4xl py-8">Advisors</span>
                <div
                    className="flex pt-10 mx-10 max-sm:mx-2 flex-wrap"
                    style={{ backgroundImage: `url(${linebg2})`, backgroundSize: 'cover' }}
                >
                    <div className="flex w-full flex-wrap sm:flex-col md:flex-row lg:flex-row">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-full md:w-1/2 lg:w-1/2 p-2 flex justify-center"
                            >
                                <MemberCard
                                    title="Divyansh ​Mangal"
                                    subtitle="Co-Founder"
                                    desc="Explore educational trends, teaching strategies, and edtech innovations that are shaping the future of learning. Dive into our latest articles and fuel your passion for education today!"
                                    src={member}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AignosisTeam;

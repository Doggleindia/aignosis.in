import React from "react";
import { useParams } from "react-router-dom";


const BlogContent = ({aboutContent}) => {
    const { id } = useParams();
    const blog = aboutContent.blogs.find((b) => b.id === parseInt(id));
    console.log(blog, "aboutContent");
    const {content,title,metaDescription} = blog
    
  return (
    <>
<div className="flex flex-col gap-5">
        <h1 className="text-[#F6E8FB] font-raleway text-[32px]">{title}</h1>
        <p className="font-raleway text-[#F6E8FB] text-[20px]">{metaDescription}</p>
        {content.map((section, index) => (
          <div key={index} className="mt-4">
            <h2 className="text-[#F6E8FB] font-raleway text-[24px]">
              {section.sectionTitle}
            </h2>
            <p className="font-raleway text-[#F6E8FB]">{section.text}</p>
            {section.subsections &&
              section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mt-2">
                  <h3 className="text-[#F6E8FB] font-raleway text-[20px]">
                    {subsection.subtitle}
                  </h3>
                  <p className="font-raleway text-[#F6E8FB]">{subsection.text}</p>
                  <ul className="list-disc ml-5">
                    {subsection.points &&
                      subsection.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="text-[#F6E8FB]">
                          {point}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            {section.steps && (
              <ul className="list-decimal ml-5 mt-2">
                {section.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="text-[#F6E8FB]">
                    {step}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <div className="w-[800px] h-[300px] bg-[#D9D9D9]"></div>
        <div className="w-[800px] h-[300px] bg-[#D9D9D9]"></div>
      </div>
      <div></div>
    </>
  );
};

export default BlogContent;

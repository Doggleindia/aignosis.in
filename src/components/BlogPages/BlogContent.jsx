import React from 'react';
import { Helmet } from 'react-helmet'; // For adding meta tags dynamically
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify'; // Import DOMPurify

const BlogContent = ({ aboutContent }) => {
  const { id } = useParams();
  const blog = aboutContent.blogs.find((b) => b.id === id);

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  const {
    content = [], // Default to an empty array if content is undefined or not an array
    title,
    metaDescription,
    author,
    blogimg,
    ogMetadata = {}, // Default to an empty object if ogMetadata is undefined
    imageOptimization = {}, // Default to an empty object if imageOptimization is undefined
    keywords = [], // Default to an empty array if keywords is undefined
  } = blog;

  const hasImage = ogMetadata?.ogImage || imageOptimization?.fileName || blogimg;

  // Function to sanitize HTML content
  const sanitizeHTML = (html) => DOMPurify.sanitize(html);

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : ''} />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={ogMetadata?.ogTitle || 'Default Title'} />
        <meta property="og:description" content={ogMetadata?.ogDescription || 'Default Description'} />
        <meta property="og:image" content={ogMetadata?.ogImage || 'default-image.jpg'} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="flex flex-col gap-5 px-4 max-sm:px-[8vw] lg:px-8">
        {/* Blog Title */}
        <h1 className="font-raleway text-[32px] text-[#F6E8FB]">{title}</h1>

        {/* Author and Image */}
        <div className="mt-2 flex flex-col items-start">
          <p className="font-raleway text-[18px] text-[#F6E8FB]">By {author}</p>

          {/* Image (only if available) */}
          {(ogMetadata?.ogImage || imageOptimization?.fileName) && (
            <div className="mt-2 flex gap-2">
              <img
                loading="lazy"
                src={imageOptimization?.fileName}
                alt={imageOptimization?.altText || ''}
                className="h-[300px] w-[800px] object-cover text-white max-sm:object-contain"
              />
            </div>
          )}
        </div>

        {/* Meta Description */}
        <p className="font-raleway text-[20px] text-[#F6E8FB]">{metaDescription}</p>

        {/* Blog Content Sections */}
        {content.length > 0 ? (
          content.map((section, index) => (
            <div key={index} className="mt-4">
              <h2 className="font-raleway text-[24px] text-[#F6E8FB]">{section.sectionTitle}</h2>
              {/* Render sanitized HTML content */}
              <p
                className="font-raleway text-[#F6E8FB]"
                dangerouslySetInnerHTML={{ __html: sanitizeHTML(section.text) }}
              ></p>

              {/* Subsections */}
              {section.subsections &&
                section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="mt-2">
                    <h3 className="font-raleway text-[20px] text-[#F6E8FB]">{subsection.subtitle}</h3>
                    <p
                      className="font-raleway text-[#F6E8FB]"
                      dangerouslySetInnerHTML={{ __html: sanitizeHTML(subsection.text) }}
                    ></p>
                  </div>
                ))}

              {/* Steps */}
              {section.steps && (
                <ul className="ml-5 mt-2 list-decimal">
                  {section.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-[#F6E8FB]">
                      {step}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
        ) : (
          <p>No content available.</p>
        )}
      </div>
    </>
  );
};

export default BlogContent;

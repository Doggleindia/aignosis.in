import React from 'react';
import Divider from '../aboutus/Divider';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, subtitle, description, link, externalLink }) => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Desktop View */}
      <div className="relative mx-4 hidden w-[30vw] rounded-3xl bg-[#43284C4D] p-11 text-left font-raleway text-white shadow-2xl md:block">
        <h3 className="w-full items-center justify-center text-xl">
          <span className="text-3xl font-semibold italic">{title}</span>{' '}
          <span className="ml-1 font-medium">{subtitle}</span>
          <span className="absolute bottom-10 right-10 ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-red-800 px-1 py-1 text-[11px] font-bold text-white">
            SOS
          </span>
        </h3>
        <p className="mb-8 mt-4 text-sm">{description}</p>
        <button onClick={() => handleLinkClick(link)} className="-ml-2 rounded-[30px] border border-[#B740A1] p-2 px-5">
          <span className="2xl:text-base m-auto text-2xl text-white md:text-sm">Learn More</span>
        </button>
        {externalLink && (
          <p className="mt-4">
            <a
              href={externalLink}
              className="text-[.4vw] text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {externalLink}
            </a>
          </p>
        )}
      </div>

      {/* Mobile View */}
      <div className="relative mx-4 mt-4 block w-[90vw] rounded-2xl bg-[#43284C4D] p-8 text-left font-raleway text-white shadow-lg md:hidden">
        <h3 className="w-full items-center justify-center text-lg">
          <span className="text-2xl font-semibold italic">{title}</span>{' '}
          <span className="ml-1 font-medium">{subtitle}</span>
          <span className="absolute bottom-6 right-6 ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-800 px-1 py-1 text-[9px] font-bold text-white">
            SOS
          </span>
        </h3>
        <p className="mb-6 mt-3 text-xs">{description}</p>
        <button onClick={() => handleLinkClick(link)} className="-ml-2 rounded-[20px] border border-[#B740A1] p-1 px-4">
          <span className="m-auto text-sm text-white">Learn More</span>
        </button>
        {externalLink && (
          <p className="mt-4">
            <a
              href={externalLink}
              className="text-[1vw] text-white underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {externalLink}
            </a>
          </p>
        )}
      </div>
    </>
  );
};

const UnderStandingNumber = () => {
  return (
    <div className="mt-[5vw] flex w-full flex-col items-center justify-center px-[2vw] text-center md:px-[14vw]">
      <Divider
        title="Know More"
        desc="Research has shown that early signs of developmental differences can appear in the first few years of life. Understanding these patterns helps us support children during their most crucial years of growth."
        subtitle="Why Early Detection Matters?"
      />
      <div className="mb-[4vw] mt-[6vw] flex flex-col justify-center md:flex-row">
        <Card
          title="1 in 10 "
          subtitle="children experience developmental delays"
          description="Early identification is crucial for support"
          link="/blog/early-detection-diagnosis-autism-india"
          // externalLink="https://www.indiaautismcenter.org/early-detection-and-diagnosis-of-autism-in-india-importance-and-challenges/#:~:text=According%20to%20a%202021%20study,ratio%20of%20approximately%203%3A1"
        />
        <Card
          title="1 in 36"
          subtitle="children are autistic in India"
          description="Autism awareness and early detection can make a difference."
          link="/blog/developmental-delay-identification-management-primary-care"
          // externalLink="https://pmc.ncbi.nlm.nih.gov/articles/PMC6441684/"
        />
      </div>
    </div>
  );
};

export default UnderStandingNumber;

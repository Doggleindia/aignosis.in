import React, { useState } from 'react';
import Header from '../Header';
import DOMPurify from 'dompurify';
import { FaMicroscope, FaClipboardCheck, FaBrain, FaGlobe, FaHistory } from 'react-icons/fa';
import BlogFooter from './BlogFooter';
import SEO from '../config/Seo.jsx';
import Newnavbar from '../Newnavbar';
import background from './background.png';

const Howework = () => {
  const [openMilestone, setOpenMilestone] = useState(null);

  // Static hardcoded data
  const pageTitle = 'Aignosis Developmental Screening Test';
  const image = background; // Replace with the actual path to your image
  const sanitizedPageTitle = DOMPurify.sanitize(
    pageTitle
      .split(' ')
      .map((word, index) => (index === 7 ? `${word}<br/>` : word))
      .join(' ')
  );

  const milestones = [
    {
      title: 'Attention Features and Their Statistics That Support Early Screening',
      content:
        'Aignosis is India’s first scalable autism screening tool designed for children aged 2 to 8 years. It aims to identify developmental disorders through a seamless combination of audio-visual prompts and attention-based metrics. Discover the key milestones behind the tool’s development, from the foundational hypothesis to its rigorous testing and validation. Learn how real-world performance data has shaped its evolution.',
      icon: <FaMicroscope />,
    },
    {
      title: 'Early Stage Development',
      content:
        'Foundational research began at Babylon Hospital’s Newton Institute of Child and Adolescent Development, guided by Dr. Dhananajay Mangal, a luminary in developmental pediatrics with 40 years of experience. Insights from Dr. Sitaraman highlighted that autism diagnosis in middle- and low-income countries is often delayed until 4.5 years of age, well beyond the optimal neuroplasticity window for sensorimotor and language development. This delay stems from the lack of scalable, non-expert-dependent tools Dr. Sitaraman’s observations on attention behaviors in autistic children—such as poor eye contact, reduced social cues, and atypical object tracking—formed the foundation for a hypothesis: autistic children process visual and social stimuli differently. Guided by these insights, the 2 Aignosis founders designed an initial prototype that could detect these subtle behavioral markers without the need for an expert in the room.',
      icon: <FaClipboardCheck />,
    },
    {
      title: 'Pilot: Testing the Hypothesis',
      content:
        'Our initial pilot study focused on encoding expert observations into computer vision models using standard cameras. We collected data from 147 children, combining parent-child interactions with machine-recorded metrics. Statistical analysis of this dataset yielded promising results: a sensitivity of 87%, specificity of 84%, and an overall accuracy of 86%. This pilot study confirmed the feasibility of detecting subtle autism biomarkers using non-invasive technology.',
      icon: <FaBrain />,
    },
    {
      title: 'Prospective Validation and Dataset Expansion',
      content:
        'To improve accuracy and robustness, we expanded the dataset to include data from 390 children, tripling the pilot size. This phase involved collaboration with multiple centers across diverse socio-economic backgrounds, autistic/non-autistic cohorts, and genders. The standardized protocol enhanced the reliability of results, achieving an overall accuracy of 95% on test data, a sensitivity of 97%, and improving a specificity to 87%. Real-world variability was incorporated, ensuring the tool’s generalizability.',
      icon: <FaGlobe />,
    },
    {
      title: 'Real-World Integration',
      content:
        'To achieve true scalability, Aignosis developmental screening test evolved into a cloud-hosted platform, ensuring seamless integration into real-world settings. The tool’s architecture was optimized to work across varying internet infrastructures, enabling accessibility in urban and rural areas alike. Alongside the screening tool, systems were developed to guide parents and clinicians through the journey of screening, counseling, and therapeutic intervention pathways.',
      icon: <FaHistory />,
    },
  ];

  const references = [
    {
      text: 'U.S. Food & Drug Administration. FDA Authorizes Marketing of Diagnostic Aid for Autism Spectrum Disorder.',
      link: 'https://www.fda.gov/news-events/press-announcements/fda-authorizes-marketing-diagnostic-aid-autism-spectrum-disorder',
    },
    {
      text: 'Gordon-Lipkin, E., Foster, J. & Peacock, G. Whittling down the wait time: exploring models to minimize the delay from initial concern to diagnosis and treatment of autism spectrum disorder. Pediatr. Clin. 63, 851–859 (2016).',
      link: 'https://pubmed.ncbi.nlm.nih.gov/27565363/',
    },
    {
      text: 'Kosmicki, J. A., Sochat, V., Duda, M. & Wall, D. P. Searching for a minimal set of behaviors for autism detection through feature selection-based machine learning. Transl. Psychiatry 5, e514–e514 (2015).',
      link: 'https://pubmed.ncbi.nlm.nih.gov/25710120/',
    },
    {
      text: 'Levy, S., Duda, M., Haber, N. & Wall, D. P. Sparsifying machine learning models identify stable subsets of predictive features for behavioral detection of autism. Mol. Autism 8, 1–17 (2017).',
      link: 'https://pubmed.ncbi.nlm.nih.gov/29270283/',
    },
    {
      text: 'Wall, D. P., Dally, R., Luyster, R., Jung, J.-Y. & DeLuca, T. F. Use of artificial intelligence to shorten the behavioral diagnosis of autism. (2012). PLoS One. 2012;7(8):e43855.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/22952789/',
    },
    {
      text: 'Duda, M., Daniels, J. & Wall, D. P. Clinical evaluation of a novel and mobile autism risk assessment. J. Autism Dev. Disord. 46, 1953–1961 (2016).',
      link: 'https://pubmed.ncbi.nlm.nih.gov/26873142/',
    },
    {
      text: 'Duda, M., Kosmicki, J. A. & Wall, D. P. Testing the accuracy of an observation-based classifier for rapid detection of autism risk. Transl. Psychiatry 4, e424–e424 (2014).',
      link: 'https://pubmed.ncbi.nlm.nih.gov/25116834/',
    },
    {
      text: 'Wall, D. P., Kosmicki, J., Deluca, T. F., Harstad, E. & Fusaro, V. A. Use of machine learning to shorten observation-based screening and diagnosis of autism. Transl. Psychiatry 2, e100–e100 (2012).',
      link: 'https://www.nature.com/articles/tp201210',
    },
    {
      text: 'Tariq, Q. et al. Mobile detection of autism through machine learning on home video: A development and prospective validation study. PLoS Med. 15, e1002705 (2018).',
      link: 'https://pubmed.ncbi.nlm.nih.gov/30481180/',
    },
    {
      text: 'Kanne, S. M., Carpenter, L. A. & Warren, Z. Screening in toddlers and preschoolers at risk for autism spectrum disorder: Evaluating a novel mobile‐health screening tool. Autism Res. 11, 1038–1049 (2018).',
      link: 'https://pubmed.ncbi.nlm.nih.gov/29734507/',
    },
    {
      text: 'Abbas, H., Garberson, F., Glover, E. & Wall, D. P. Machine learning approach for early detection of autism by combining questionnaire and home video screening. J. Am. Med. Inform. Assoc. 25, 1000–1007 (2018).',
      link: 'https://pubmed.ncbi.nlm.nih.gov/29741630/',
    },
    {
      text: 'Abbas, H., Garberson, F., Liu-Mayo, S., Glover, E. & Wall, D. P. Multi-modular AI approach to streamline autism diagnosis in young children. Sci. Rep. 10, 1–8 (2020).',
      link: 'https://www.nature.com/articles/s41598-020-61213-w',
    },
    {
      text: 'Megerian, J. T. et al. Evaluation of an Artificial Intelligence-Based Medical Device for Diagnosis of Autism Spectrum Disorder. Nat. Partn. J.- Digit. Med. (2022) doi:10.1038/s41746-022-00598-6.',
      link: 'https://www.nature.com/articles/s41746-022-00598-6',
    },
    {
      text: 'Brian, J. A., Zwaigenbaum, L. & Ip, A. Standards of diagnostic assessment for autism spectrum disorder. Paediatr. Child Health 24, 444–451 (2019).',
      link: 'https://pubmed.ncbi.nlm.nih.gov/31660042/',
    },
    {
      text: 'Wall, D. P., et al. Optimizing a de novo artificial intelligence-based medical device under a predetermined change control plan: Improved ability to detect or rule out pediatric autism, Intelligence-Based Medicine, Volume 8, 2023, 100102, ISSN 2666-5212.',
      link: 'https://www.sciencedirect.com/science/article/pii/S2666521223000169?via%3Dihub',
    },
    // Add other references here
  ];

  const handleToggle = (index) => {
    setOpenMilestone(openMilestone === index ? null : index);
  };

  return (
    <>
      <SEO
        canonicalUrl={'https://aignosis.in/blog'}
        metaDescription={
          'Stay updated with the latest insights on autism, AI-powered assessments, and special education. Explore expert articles on Aignosis Blog for valuable knowledge.'
        }
        pageTitle={'Aignosis Blog | Insights on Autism, AI, and Special Education'}
      />
      <div className="bg-[#1A0C25] max-sm:pt-2 md:p-2">
        <Header />
        <div className="mt-[5vw] min-h-screen bg-[#1A0C25]">
          <div className="relative">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img src={image} alt="Blog Header" className="h-[30vh] w-full object-cover md:h-[10vw]" />
            <h1
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform px-4 text-center text-xl font-bold text-white md:text-3xl"
              dangerouslySetInnerHTML={{ __html: sanitizedPageTitle }}
            />
          </div>

          {/* Milestones Section */}
          <div className="space-y-6 px-36 py-8 max-sm:p-6">
            <h1 className="text-left text-3xl font-bold text-white">Data-Driven, Science-Based, Published</h1>
            <p className="mt-4 text-left text-lg text-white">
              The Aignosis developmental screening test is designed to detect early signs of autism and other
              developmental disorders.
              <br /> Built on robust science, our test leverages advanced research and clinical insights to flag
              developmental delays.
            </p>
            <div className="mt-6 flex w-[70%] justify-between space-x-4">
              <img
                src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/child1.jpeg"
                alt="Description of image 1"
                className="h-[20vw] w-1/2 rounded-lg shadow-lg"
              />
              <img
                src="https://storage.googleapis.com/aignosis_static_assets/Website_assets/images/child2.jpeg"
                alt="Description of image 2"
                className="h-[20vw] w-1/2 rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-6 px-36 py-8 max-sm:p-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="mb-8">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#9C00AD] text-white">
                      <span className="text-base font-bold">{milestone.icon}</span>
                    </div>
                    <h2 className="font-raleway text-2xl font-semibold text-[#F6E8FB] max-sm:text-[2vw]">
                      {milestone.title}
                    </h2>
                  </div>
                  {/* Toggle Icon */}
                  <span className="cursor-pointer text-2xl text-[#F6E8FB]" onClick={() => handleToggle(index)}>
                    {openMilestone === index ? '−' : '+'}
                  </span>
                </div>

                {/* Content (conditionally shown) */}
                {openMilestone === index && (
                  <p className="mb-6 pl-[4vw] font-raleway leading-relaxed text-[#F6E8FB]">{milestone.content}</p>
                )}
              </div>
            ))}
          </div>

          {/* References Section */}
          <div className="bg-gradient-to-b from-[#241E22] to-[#43284C] px-36 py-8 text-white max-sm:p-6">
            <h2 className="mb-4 text-2xl text-white">References</h2>
            <ul className="list-inside list-disc text-white">
              {references.map((reference, index) => (
                <li key={index}>
                  <a
                    href={reference.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white underline"
                  >
                    {reference.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <BlogFooter />
        </div>
      </div>
    </>
  );
};

export default Howework;

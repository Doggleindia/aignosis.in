import Header from './Header';

import sideleft from '../assets/founder.png';
import doctor1 from '../assets/homepage/white screen.png';
import doctor2 from '../assets/images/aboutUs/doctors2.svg';
import doctor3 from '../assets/images/aboutUs/doctors3.svg';
import vission from './aboutus/vission.jpg';
import thegoal from './aboutus/thegoal.jpg';
import blog_icon from '../assets/images/aboutUs/blog_icon.png';
import birt_aignosis from '../assets/dna.png';
import Footer from './Footer';
import AignosisTeam from './aboutus/AignosisTeam';
// import Divider from "./aboutus/Divider";
import Awards from './clinic/Awards';
import Endrosed from './clinic/Endrosed';
import BlogFooter from './BlogPages/BlogFooter';
import SEO from './config/Seo';
import arrow from './aboutus/arrow.png';
import ContactPage from './aboutus/ContactPage';
import eye from './aboutus/eye.png';
import ship from './aboutus/ship.png';
import bear from './aboutus/bear.png';
import anim from './aboutus/anim.png';
import Newnavbar from './Newnavbar';
import WhatsAppButton from './WhatsAppButton';

const TeamMember = ({ name, img, description, height }) => (
  <div className="mx-auto flex w-[80%] flex-col items-center text-center sm:w-[30%] md:w-[20%]">
    <div className="flex h-[50vw] w-full items-center justify-center bg-[#D9D9D947] sm:h-[30vw] md:h-[20vw]">
      <img src={img} className="h-full w-full object-cover" alt="" />
    </div>
    <div className="mt-2 flex w-full flex-col items-center">
      <h1 className={`text-lg sm:text-xl md:text-2xl ${height || 'h-[3rem]'} flex items-center justify-center`}>
        {name}
      </h1>
      <p className="flex h-[2rem] items-center justify-center text-xs uppercase sm:text-sm">{description}</p>
    </div>
  </div>
);
const Divider = ({ title, desc, subtitle, img }) => {
  return (
    <>
      <div className="mx-auto flex h-auto w-full max-w-4xl flex-col items-center px-4">
        {/* DIVIDER CODE */}
        <div className="flex w-full flex-row items-center justify-center space-x-4">
          <span className="h-2 w-28 rounded-full bg-gradient-to-r from-pink-400 to-transparent sm:w-16"></span>
          <span className="text-lg font-medium text-[#F1C6FE] sm:text-sm">{title}</span>
          <span className="h-2 w-28 rounded-full bg-gradient-to-l from-pink-400 to-transparent sm:w-16"></span>
        </div>

        {/* CONTENT ALIGNMENT */}
        <div className="mt-4 flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          {/* Animation/Image */}
          {img && <img src={img} alt="Animation" className="hidden w-24 scale-x-[-1] transform sm:w-16 md:block" />}

          {/* Subtitle */}
          <h1 className="text-center text-xl font-bold text-[#F6E8FB] sm:text-lg md:text-left">{subtitle}</h1>
        </div>

        {/* Description */}
        <span className="mt-4 px-4 text-center text-base text-white sm:text-sm">{desc}</span>
      </div>
    </>
  );
};

const AboutUs = () => {
  return (
    <>
      <SEO
        canonicalUrl={'https://aignosis.in/about-us'}
        metaDescription={
          'Learn about Aignosis and our mission to provide innovative AI-driven autism care solutions. Discover how we support families with early autism detection and care.'
        }
        pageTitle={'About Us | Aignosis - AI Autism Care Solutions'}
      />
      <div className="bg-[#1A0C25] font-montserrat text-white max-sm:px-2">
        <div className="pb-8 pt-28">
          <Header />
          <WhatsAppButton />
          <Divider
            title="About Us"
            desc=" Working together for a brighter future."
            subtitle=" Aignosis – Empowering Early Detection"
          />
        </div>
        <div className="relative mt-[3vw] flex justify-center gap-6 max-sm:flex-col max-sm:p-4">
          <img src={sideleft} alt="about" className="h-[400px] w-[400px] rounded-3xl object-cover" />
          <div className="flex flex-col justify-center p-3 px-4 max-sm:pt-4 md:w-[50%]">
            <span className="font-medium">How it all began</span>
            <span className="block pt-4">
              With a strong foundation in deep science research and technical expertise in physics, computer science,
              and AI, we’ve always believed that healthcare is one of the most meaningful and impactful applications of
              artificial intelligence. Coming from a family of doctors, we became acutely aware of the alarming rise in
              autism prevalence. During our research at a child development center, we witnessed the transformative
              power of early intervention - yet saw too many children missing that critical window. We also recognized a
              major gap: the lack of objective, rapid, and scalable methods for autism screening. This inspired us to
              create an AI-driven tool for early detection of Autism Spectrum Disorder (ASD), aiming to be a crucial
              link in the chain of timely intervention.
            </span>
            <span className="relative pt-4">
              That’s when we realized something needed to change. We wanted to create a way to help identify these
              issues early, so children could receive the right support at the right time. And that’s how Aignosis was
              born.
              <img src={bear} className="ml-[32vw] mt-[-12vw] hidden -rotate-45 scale-[.4] md:block" />
            </span>
          </div>

          {/* <div className="absolute right-0 top-0 h-full w-[15%] rounded-xl bg-[#B740A1A6] opacity-65 blur-[120px]"></div> */}

          <div className="absolute h-[40%] rounded-xl opacity-65 blur-[80px] max-sm:right-[1vw] max-sm:top-[110vw] max-sm:w-[100%] max-sm:bg-[#B740A1A6] sm:h-[100%] sm:w-[30%]"></div>
        </div>

        {/* <div className="flex flex-row max-sm:flex-col items-start justify-center mt-8">
        <div className="flex max-sm:pt-4 flex-col items-start">
          <img
            src={doctor1}
            alt="about"
            className="rounded-3xl w-[600px] h-[600px] object-cover"
          />
        </div>
        <div className="flex max-sm:pt-4 flex-col items-start ml-8">
          <img
            src={doctor2}
            alt="about"
            className="rounded-3xl max-sm:hidden w-[600px] h-[291px] object-cover"
          />
          <img
            src={doctor3}
            alt="about"
            className="rounded-3xl w-[600px] max-sm:hidden max-sm:pt-4 h-[291px] object-cover mt-4"
          />
        </div>
      </div> */}

        {/* The Goal Section of About us Page*/}

        <div className="flex w-full justify-center">
          <div className="relative mt-[3vw] flex justify-center gap-6 max-sm:flex-col max-sm:p-4">
            <div className="mr-2 max-w-[700px] overflow-hidden rounded-xl bg-white bg-opacity-10 pl-8 max-md:pl-5 max-sm:pb-6">
              <div className="flex gap-5 max-md:flex-col">
                {/* Text Section */}
                <div className="flex w-[50%] flex-col max-md:ml-0 max-md:w-full">
                  <div className="my-auto flex flex-col items-start self-stretch max-md:mt-10">
                    <div className="mt-8 text-xl font-semibold leading-none text-white">The Goal of Aignosis</div>
                    <div className="font-inter mt-6 self-stretch text-sm leading-5 tracking-wide text-white text-opacity-80">
                      At Aignosis, our mission is to ensure that every child has the opportunity to thrive by meeting
                      their developmental milestones. We aim to identify children who may be struggling early on and
                      provide the tools to enable timely interventions. Our goal is to make a profound impact by
                      supporting parents, empowering families, and equipping clinicians with the resources to provide
                      the care every child deserves.
                    </div>
                  </div>
                </div>

                {/* Image Section in the The Goal div*/}
                <div className="ml-5 flex w-[50%] flex-col self-stretch max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src={thegoal}
                    alt="Goal section featured image"
                    className="h-full w-full object-cover max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[8vw] flex flex-row items-center justify-center gap-4 max-sm:mt-4 max-sm:flex-col">
          <div className="mr-2 max-w-[700px] overflow-hidden rounded-xl bg-white bg-opacity-10 pl-8 max-md:pl-5 max-sm:pb-6">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex w-[50%] flex-col max-md:ml-0 max-md:w-full">
                <div className="my-4 flex flex-col items-start self-stretch max-md:mt-10">
                  <div
                    className="w-[90px] rounded-lg p-2"
                    style={{
                      background: `radial-gradient(
                      100% 100% at 50% -4950%, 
                      rgba(255, 255, 255, 0.3) 0%, 
                      rgba(255, 255, 255, 0) 100%
                    ), rgba(255, 255, 255, 0.2)`,
                    }}
                  >
                    <img
                      loading="lazy"
                      src={eye}
                      alt="Blog section icon"
                      className="aspect-[1.04] w-[90px] justify-center rounded-2xl object-contain"
                    />
                  </div>
                  <div className="mt-8 text-xl font-semibold leading-none text-white">Vision</div>
                  <div className="font-inter mt-6 self-stretch text-sm leading-5 tracking-wide text-white text-opacity-80">
                    To create a world where every child has the opportunity to thrive through early detection and
                    personalized developmental support, breaking barriers to accessibility and affordability in autism
                    screening.
                  </div>
                </div>
              </div>
              <div className="ml-5 flex w-[69%] flex-col max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={vission}
                  alt="Blog section featured image"
                  className="aspect-[0.95] w-full grow object-contain max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="max-w-[700px] overflow-hidden rounded-xl bg-white bg-opacity-10 pl-8 max-md:pl-5 max-sm:mt-4 max-sm:pb-6">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex w-[50%] flex-col max-md:ml-0 max-md:w-full">
                <div className="my-auto flex flex-col items-start self-stretch max-md:mt-10">
                  <div
                    className="w-[90px] rounded-lg p-2"
                    style={{
                      background: `radial-gradient(
                      100% 100% at 50% -4950%, 
                      rgba(255, 255, 255, 0.3) 0%, 
                      rgba(255, 255, 255, 0) 100%
                    ), rgba(255, 255, 255, 0.2)`,
                    }}
                  >
                    <img
                      loading="lazy"
                      src={ship}
                      alt="Blog section icon"
                      className="aspect-[1.04] w-[90px] justify-center rounded-2xl object-contain"
                    />
                  </div>
                  <div className="mt-8 text-xl font-semibold leading-none text-white">Mission</div>
                  <div className="font-inter mt-6 self-stretch text-sm leading-5 tracking-wide text-white text-opacity-80">
                    To revolutionize early autism detection by leveraging AI and cutting-edge technology to deliver
                    accurate, affordable, and non-invasive screening solutions. We aim to empower families, educators,
                    and clinicians with actionable insights, fostering early intervention.
                  </div>
                </div>
              </div>
              <div className="ml-5 flex w-[69%] flex-col max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/DSC_7765.jpeg"
                  alt="Blog section featured image"
                  className="aspect-[0.95] w-full grow object-contain max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[4vw] flex flex-row items-center justify-center gap-4 max-sm:mt-[8vw] max-sm:flex-col">
          <div className="mr-2 max-w-[700px] overflow-hidden rounded-xl bg-white bg-opacity-10 pl-8 max-md:pl-5 max-sm:pb-6">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex w-[50%] flex-col max-md:ml-0 max-md:w-full">
                <div className="my-auto flex flex-col items-start self-stretch max-md:mt-10 max-sm:mt-4 max-sm:pb-1">
                  <div
                    className="w-[90px] rounded-lg p-2"
                    style={{
                      background: `radial-gradient(
                100% 100% at 50% -4950%, 
                rgba(255, 255, 255, 0.3) 0%, 
                rgba(255, 255, 255, 0) 100%
              ), rgba(255, 255, 255, 0.2)`,
                    }}
                  >
                    <img
                      loading="lazy"
                      src={arrow}
                      alt="Purpose section icon"
                      className="aspect-[1.04] w-[90px] justify-center rounded-2xl object-contain"
                    />
                  </div>
                  <div className="mt-8 text-xl font-semibold leading-none text-white">Purpose</div>
                  <div className="font-inter mt-6 self-stretch text-sm leading-5 tracking-wide text-white text-opacity-80">
                    To bridge the gap between late diagnosis and timely intervention, ensuring that every child’s unique
                    potential is recognized and nurtured. By making autism screening accessible to all, we strive to
                    transform lives, enhance developmental outcomes, and contribute to a more inclusive society.
                  </div>
                </div>
              </div>
              <div className="ml-5 flex w-[69%] flex-col max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/IMG_3535.JPG"
                  alt="Purpose section featured image"
                  className="aspect-[0.95] w-full grow object-contain max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="px-[5vw]">
          <AignosisTeam />
        </div>
        <div>
          <ContactPage />
        </div>
        {/* <Awards />
      <Endrosed /> */}
        <BlogFooter />
      </div>
    </>
  );
};

export default AboutUs;

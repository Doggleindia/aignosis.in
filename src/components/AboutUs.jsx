import Header from "./Header";

import sideleft from "../assets/founder.png";
import doctor1 from "../assets/homepage/white screen.png";
import doctor2 from "../assets/images/aboutUs/doctors2.svg";
import doctor3 from "../assets/images/aboutUs/doctors3.svg";
import vission from "./aboutus/vission.jpg";
import thegoal from "./aboutus/thegoal.jpg";
import blog_icon from "../assets/images/aboutUs/blog_icon.png";
import birt_aignosis from "../assets/dna.png";
import Footer from "./Footer";
import AignosisTeam from "./aboutus/AignosisTeam";
// import Divider from "./aboutus/Divider";
import Awards from "./clinic/Awards";
import Endrosed from "./clinic/Endrosed";
import BlogFooter from "./BlogPages/BlogFooter";
import SEO from "./config/Seo";
import arrow from "./aboutus/arrow.png";
import ContactPage from "./aboutus/ContactPage";
import eye from "./aboutus/eye.png";
import ship from "./aboutus/ship.png";
import bear from "./aboutus/bear.png";
import anim from "./aboutus/anim.png";
import Newnavbar from "./Newnavbar";
import WhatsAppButton from "./WhatsAppButton";

const TeamMember = ({ name, img, description, height }) => (
  <div className="w-[80%] sm:w-[30%] md:w-[20%] text-center flex flex-col items-center mx-auto">
    <div className="w-full h-[50vw] sm:h-[30vw] md:h-[20vw] bg-[#D9D9D947] flex justify-center items-center">
      <img src={img} className="w-full h-full object-cover" alt="" />
    </div>
    <div className="w-full mt-2 flex flex-col items-center">
      <h1
        className={`text-lg sm:text-xl md:text-2xl ${
          height || "h-[3rem]"
        } flex items-center justify-center`}
      >
        {name}
      </h1>
      <p className="text-xs sm:text-sm uppercase h-[2rem] flex items-center justify-center">
        {description}
      </p>
    </div>
  </div>
);
const Divider = ({ title, desc, subtitle, img }) => {
  return (
    <>
      <div className="flex flex-col items-center h-auto w-full max-w-4xl mx-auto px-4">
        {/* DIVIDER CODE */}
        <div className="flex flex-row justify-center items-center space-x-4 w-full">
          <span className="h-2 w-28 rounded-full sm:w-16 bg-gradient-to-r from-pink-400 to-transparent"></span>
          <span className="text-lg sm:text-sm text-[#F1C6FE] font-medium">{title}</span>
          <span className="h-2 w-28 rounded-full sm:w-16 bg-gradient-to-l from-pink-400 to-transparent"></span>
        </div>

        {/* CONTENT ALIGNMENT */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-4 md:space-y-0 md:space-x-4 mt-4">
          {/* Animation/Image */}
          {img && (
            <img
              src={img}
              alt="Animation"
              className="w-24 sm:w-16 md:block hidden transform scale-x-[-1]"
            />
          )}

          {/* Subtitle */}
          <h1 className="text-[#F6E8FB] font-bold text-xl sm:text-lg text-center md:text-left">
            {subtitle}
          </h1>
        </div>

        {/* Description */}
        <span className="text-white text-center text-base sm:text-sm px-4 mt-4">
          {desc}
        </span>
      </div>
    </>
  );
};


const AboutUs = () => {
  return (
    <>
      <div>
        
      </div>
      <SEO
        canonicalUrl={"https://aignosis.in/about-us"}
        metaDescription={
          "Learn about Aignosis and our mission to provide innovative AI-driven autism care solutions. Discover how we support families with early autism detection and care."
        }
        pageTitle={"About Us | Aignosis - AI Autism Care Solutions"}
      />
      <div className="bg-[#1A0C25] max-sm:px-2 font-montserrat text-white">
        <div className="pt-28 pb-8">
          <Header />
          <WhatsAppButton/>
          <Divider
            title="About Us"
            desc=" Working together for a brighter future."
            subtitle=" Ai.gnosis – Empowering Early Detection"
          />
        </div>
        <div className="max-sm:p-4 flex max-sm:flex-col mt-[3vw] gap-6 justify-center relative">
          <img
            src={sideleft}
            alt="about"
            className="rounded-3xl w-[400px] h-[400px] object-cover"
          />
          <div className="md:w-[50%] flex flex-col justify-center  max-sm:pt-4 px-4 p-3">
            <span className="font-medium">How it all began</span>
            <span className="pt-4 block">
            With a strong foundation in deep science research and technical expertise in physics, computer science, and AI, 
            we’ve always believed that healthcare is one of the most meaningful and impactful applications of artificial intelligence. 
            Coming from a family of doctors, we became acutely aware of the alarming rise in autism prevalence. 
            During our research at a child development center, 
            we witnessed the transformative power of early intervention — yet saw too many children missing that critical window. 
            We also recognized a major gap: the lack of objective, rapid, and scalable methods for autism screening. 
            This inspired us to create an AI-driven tool for early detection of Autism Spectrum Disorder (ASD), 
            aiming to be a crucial link in the chain of timely intervention.
            </span>
            <span className="pt-4 relative">
              That’s when we realized something needed to change. We wanted to
              create a way to help identify these issues early, so children
              could receive the right support at the right time. And that’s how
              Aignosis was born.
              <img
                src={bear}
                className="hidden md:block scale-[.4] mt-[-12vw] ml-[32vw] -rotate-45"
              />
            </span>
          </div>

          <div className="absolute top-0 right-0 w-[15%] h-full bg-[#B740A1A6] opacity-65 blur-[120px] rounded-xl"></div>

          <div className="absolute max-sm:top-[110vw] max-sm:right-[1vw] max-sm:w-[50%] sm:w-[30%] max-sm:w-[100%] sm:h-[100%] h-[40%] max-sm:bg-[#B740A1A6] opacity-65 blur-[80px] rounded-xl"></div>
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

        <div className="flex justify-center w-full">
          <div className="max-sm:p-4 flex max-sm:flex-col mt-[3vw] gap-6 justify-center relative">
            <div className="pl-8 rounded-xl bg-white overflow-hidden bg-opacity-10 max-sm:pb-6 max-w-[700px] mr-2 max-md:pl-5">
              <div className="flex gap-5 max-md:flex-col">
                {/* Text Section */}
                <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col items-start self-stretch my-auto max-md:mt-10">
                    <div className="mt-8 text-xl font-semibold leading-none text-white">
                      The Goal of Aignosis
                    </div>
                    <div className="self-stretch font-inter mt-6 text-sm tracking-wide leading-5 text-white text-opacity-80">
                      At Aignosis, our mission is to ensure that every child has the opportunity 
                      to thrive by meeting their developmental milestones. We aim to identify 
                      children who may be struggling early on and provide the tools to enable 
                      timely interventions. Our goal is to make a profound impact by supporting 
                      parents, empowering families, and equipping clinicians with the resources 
                      to provide the care every child deserves.
                    </div>
                  </div>
                </div>

                {/* Image Section in the The Goal div*/}
                <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full self-stretch">
                  <img
                    loading="lazy"
                    src={thegoal}  
                    alt="Goal section featured image"
                    className="w-full h-full object-cover max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-row max-sm:flex-col gap-4 max-sm:mt-4  items-center  justify-center mt-[8vw] ">
          <div className="pl-8 rounded-xl bg-white overflow-hidden bg-opacity-10 max-sm:pb-6  max-w-[700px]  mr-2 max-md:pl-5">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[50%] max-md:ml-0  max-md:w-full">
                <div className="flex flex-col items-start self-stretch my-auto max-md:mt-10">
                  <div
                    className="rounded-lg w-[90px] p-2 "
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
                      className="object-contain rounded-2xl aspect-[1.04] justify-center w-[90px] "
                    />
                  </div>
                  <div className="mt-8 text-xl font-semibold leading-none text-white">
                    Vision
                  </div>
                  <div className="self-stretch font-inter mt-6 text-sm  tracking-wide leading-5 text-white text-opacity-80">
                    To create a world where every child has the opportunity to
                    thrive through early detection and personalized
                    developmental support, breaking barriers to accessibility
                    and affordability in autism screening.
                  </div>
                </div>
              </div>
              <div className="flex flex-col  ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={vission}
                  alt="Blog section featured image"
                  className="object-contain grow w-full aspect-[0.95] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="pl-8 rounded-xl max-sm:mt-4 overflow-hidden bg-white bg-opacity-10 max-sm:pb-6  max-w-[700px] max-md:pl-5">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start self-stretch my-auto max-md:mt-10">
                  <div
                    className="rounded-lg w-[90px] p-2 "
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
                      className="object-contain rounded-2xl aspect-[1.04] justify-center w-[90px] "
                    />
                  </div>
                  <div className="mt-8 text-xl font-semibold leading-none text-white">
                    Mission
                  </div>
                  <div className="self-stretch font-inter mt-6 text-sm  tracking-wide leading-5 text-white text-opacity-80">
                    To revolutionize early autism detection by leveraging AI and
                    cutting-edge technology to deliver accurate, affordable, and
                    non-invasive screening solutions. We aim to empower
                    families, educators, and clinicians with actionable
                    insights, fostering early intervention.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/DSC_7765.jpeg"
                  alt="Blog section featured image"
                  className="object-contain grow w-full aspect-[0.95] max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row max-sm:flex-col gap-4 max-sm:mt-[8vw] items-center justify-center mt-[4vw]">
          <div className="pl-8 rounded-xl bg-white overflow-hidden bg-opacity-10 max-sm:pb-6 max-w-[700px] mr-2 max-md:pl-5">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-sm:mt-4 max-sm:pb-1 items-start self-stretch my-auto max-md:mt-10">
                  <div
                    className="rounded-lg w-[90px] p-2"
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
                      className="object-contain rounded-2xl aspect-[1.04] justify-center w-[90px]"
                    />
                  </div>
                  <div className="mt-8 text-xl font-semibold leading-none text-white">
                    Purpose
                  </div>
                  <div className="self-stretch font-inter mt-6 text-sm tracking-wide leading-5 text-white text-opacity-80">
                    To bridge the gap between late diagnosis and timely
                    intervention, ensuring that every child’s unique potential
                    is recognized and nurtured. By making autism screening
                    accessible to all, we strive to transform lives, enhance
                    developmental outcomes, and contribute to a more inclusive
                    society.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://prod-aignosis-terraform-state.s3.ap-south-1.amazonaws.com/aignosis/Images/IMG_3535.JPG"
                  alt="Purpose section featured image"
                  className="object-contain grow w-full aspect-[0.95] max-md:mt-10 max-md:max-w-full"
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

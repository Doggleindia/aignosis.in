
import Header from "./Header";

import sideleft from "../assets/images/aboutUs/about.png";
import doctor1 from "../assets/homepage/white screen.png";
import doctor2 from "../assets/images/aboutUs/doctors2.svg";
import doctor3 from "../assets/images/aboutUs/doctors3.svg";
import blog_icon from "../assets/images/aboutUs/blog_icon.png";
import birt_aignosis from "../assets/images/aboutUs/birth_aignosis.png";
import Footer from "./Footer";
import AignosisTeam from "./aboutus/AignosisTeam";
import Divider from "./aboutus/Divider";
import Awards from "./clinic/Awards";
import Endrosed from "./clinic/Endrosed";
import BlogFooter from "./BlogPages/BlogFooter";


const TeamMember = ({ name, img, description, height }) => (
  <div className="w-[80%] sm:w-[30%] md:w-[20%] text-center flex flex-col items-center mx-auto">
    <div className="w-full h-[50vw] sm:h-[30vw] md:h-[20vw] bg-[#D9D9D947] flex justify-center items-center">
      <img src={img} className="w-full h-full object-cover" alt="" />
    </div>
    <div className="w-full mt-2 flex flex-col items-center">
      <h1
        className={`text-lg sm:text-xl md:text-2xl ${height || "h-[3rem]"
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

const AboutUs = () => {
  return (
    <div className="bg-[#1A0C25] max-sm:px-2 font-montserrat text-white">
      <div className="pt-28 pb-8">
        <Header />
        <Divider title="About Us" desc=' Working together for a brighter future.' subtitle=' Ai.gnosis – Empowering Early Detection' />

      </div>

      <div className=" max-sm:p-4 flex max-sm:flex-col gap-6 justify-center">
        <img
          src={sideleft}
          alt="about"
          className="rounded-3xl w-[400px] h-[400px] object-cover"
        />
        <div className="md:w-[50%] flex flex-col justify-center max-sm:pt-4 px-4 p-3">
          <span className="font-medium">How it all began</span>
          <span className="pt-4 block">
            Embark on a journey through our narrative, where innovation meets
            purpose.
          </span>
          <span className="pt-4 block">
            Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames.
            Blandit et purus mollis convallis malesuada egestas risus quam enim.
            Semper lorem rhoncus et felis tristique tellus volutpat orci. Dui
            elementum a sed.
          </span>
          <span className="pt-4 block">
            Lorem ipsum dolor sit amet consectetur. Sit non diam justo fames.
            Blandit et purus mollis convallis malesuada egestas risus quam enim.
            Semper lorem rhoncus et felis tristique tellus volutpat orci. Dui
            elementum a sed.
          </span>
        </div>
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

      <div className="flex max-sm:flex-col items-center px-10 justify-center mt-[8vw] ">
        <div className="flex flex-col items-start w-[50%] h-[500px] bg-gradient-to-b p-16 from-[#241E22] to-[#43284C]">
          <span className="font-medium font-raleway text-2xl">
            The birth of aignosis
          </span>
          <span className="pt-4 block font-manrope">
            Embark on a journey through our narrative, where innovation meets
            purpose.
          </span>
          <span className="pt-4 block font-manrope">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
            cumque molestias molestiae! Nostrum in ratione nulla velit unde,
            illo neque vitae numquam aut recusandae doloremque cupiditate
            maiores, corporis reprehenderit.
          </span>
          <span className="pt-4 block font-manrope">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
            cumque molestias molestiae! Nostrum in ratione nulla velit unde,
            illo neque vitae numquam aut recusandae doloremque cupiditate
            maiores, corporis reprehenderit.
          </span>
        </div>
        <div className="flex items-end w-[50%] h-[500px] bg-gradient-to-b p-16 from-[#241E22] to-[#43284C]">
          {/* <img
            src={birt_aignosis}
            alt="about"
            className=" w-[600px] h-[600px] object-cover"
          /> */}
        </div>
      </div>
      <div className="flex flex-row max-sm:flex-col max-sm:mt-4  items-center  justify-center mt-[8vw] ">
        <div className="pl-8 rounded-xl bg-white bg-opacity-10 max-sm:pb-6  max-w-[700PX]  mr-2 max-md:pl-5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-sm:mt-4 max-sm:pb-1 items-start self-stretch my-auto max-md:mt-10">
                <div className="rounded-lg w-[90px] p-2 "
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
                    src={blog_icon}
                    alt="Blog section icon"
                    className="object-contain rounded-2xl aspect-[1.04] justify-center w-[90px] "
                  />
                </div>
                <div className="mt-8 text-xl font-semibold leading-none text-white">
                  Blog
                </div>
                <div className="self-stretch font-inter mt-6 text-sm  tracking-wide leading-5 text-white text-opacity-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  commodi consequatur vero sit. Est excepturi nisi reprehenderit
                  repudiandae sunt veritatis fugiat perferendis a harum
                  nesciunt. Tempore veniam corporis libero nisi.
                </div>
              </div>
            </div>
            <div className="flex flex-col  ml-5 w-[69%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={doctor1}
                alt="Blog section featured image"
                className="object-contain grow w-full aspect-[0.95] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="pl-8 rounded-xl max-sm:mt-4  bg-white bg-opacity-10 max-sm:pb-6  max-w-[700px] max-md:pl-5">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch my-auto max-md:mt-10">
                <div className="rounded-lg w-[90px] p-2 "
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
                    src={blog_icon}
                    alt="Blog section icon"
                    className="object-contain rounded-2xl aspect-[1.04] justify-center w-[90px] "
                  />
                </div>
                <div className="mt-8 text-xl font-semibold leading-none text-white">
                  The birth of aignosis
                </div>
                <div className="self-stretch font-inter mt-6 text-sm  tracking-wide leading-5 text-white text-opacity-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  commodi consequatur vero sit. Est excepturi nisi reprehenderit
                  repudiandae sunt veritatis fugiat perferendis a harum
                  nesciunt. Tempore veniam corporis libero nisi.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={doctor1}
                alt="Blog section featured image"
                className="object-contain grow w-full aspect-[0.95] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[5vw]">
        <AignosisTeam />
      </div>
      {/* <Awards />
      <Endrosed /> */}
      <BlogFooter />
    </div>
  );
};

export default AboutUs;

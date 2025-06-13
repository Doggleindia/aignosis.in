import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

const BlogFooter = () => {
  return (
    <div>
      <footer className="bg-[#811F67] px-[10vw] py-[10vh] text-white">
        <div className="container mx-auto grid grid-cols-1 justify-center gap-8 px-[1vw] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-y-6 md:grid-cols-4">
          {/* Pages Section */}
          <div className="max-sm:w-full max-sm:text-left">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-lg"></div>
              <Link to="/" className="2xl:text-3xl relative z-10 font-semibold tracking-wide text-white md:text-2xl">
                Aignosis
              </Link>
            </div>
            <p className="mt-5">
              Aignosis is here to offer AI-powered tools that help you understand your child’s unique way of
              experiencing the world.
            </p>
            <ul className="hidden flex-row items-start justify-start space-x-4 pt-4 max-sm:flex-row max-sm:space-x-4 max-sm:space-y-0 max-sm:pl-0 md:flex">
              <li>
                <a
                  href="https://www.instagram.com/aignosis.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaInstagram size={26} className="text-pink-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/19HxXZyVyE/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaFacebook size={26} className="text-blue-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@aignosis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaYoutube size={26} className="text-red-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/aignosisai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaLinkedin size={26} className="text-blue-500" />
                </a>
              </li>
            </ul>
          </div>
          <div className="max-sm:w-full max-sm:text-left">
            <h3 className="mb-4 text-lg font-semibold">Pages</h3>
            <ul className="list-disc space-y-2 pl-[2vw] max-sm:list-none max-sm:pl-0">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/clinic">
                <li>Clinic</li>
              </Link>
              <Link to={'/about-us'}>
                <li>About us</li>
              </Link>
              <Link to={'/assessments-evaluation'}>
                <li>Services</li>
              </Link>
              <Link>
                <li>Contact us</li>
              </Link>
              <Link to={'/career'}>
                <li>Career</li>
              </Link>
            </ul>
          </div>

          {/* Information Section */}
          <div className="max-sm:w-full max-sm:text-left">
            <h3 className="mb-4 text-lg font-semibold">Information</h3>
            <ul className="list-disc space-y-2 pl-[2vw] max-sm:list-none max-sm:pl-0">
              {/* <li>Brand Story</li> */}
              <Link to={'/terms'}>
                <li>Terms & Conditions</li>
              </Link>
              <Link to={'/refund-reschedule'}>
                <li>Return Policy</li>
              </Link>
              <Link to={'/refund-reschedule'}>
                <li>Refund Policy</li>
              </Link>
              <Link to={'/privacy-policy'}>
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>

          {/* Customer Service Section */}
          {/* <div className="max-sm:w-full max-sm:text-center">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 list-disc pl-[2vw] max-sm:pl-0 max-sm:list-none">
              <Link to={"/about-us"}>
                {" "}
                <li>Our Team</li>
              </Link>
              <Link to={"/blog"}>
                {" "}
                <li>Blog</li>
              </Link>
            </ul>
          </div> */}

          {/* Contact Us Section */}
          <div className="max-sm:w-full max-sm:text-left">
            <h3 className="mb-4 text-left text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 not-italic max-sm:text-left">
              <p>Registered Office: 311, Adarsh Nagar Jaipur, Rajasthan, 302004</p>
              <p>+91 8209860578</p>
              <p>support@aignosis.in</p>
            </address>
            {/* <ul className="space-y-2 list-disc pl-[2vw] max-sm:pl-0 max-sm:list-none">
              <Link
                to={
                  "https://www.instagram.com/aignosis.in?igsh=MTU0dmUybjViOTIzZw=="
                }
              >
                {" "}
                <li>Instagram </li>
              </Link>
              <Link to={'https://www.facebook.com/share/19HxXZyVyE/?mibextid=wwXIfr'}>
                <li>Facebook</li>
              </Link>
              <Link to={'https://youtube.com/@aignosis?si=gozM9TLj4ZToY5-k'}>
                <li>YouTube</li>
              </Link>{" "}
              <Link to={'https://www.linkedin.com/company/aignosisai/'}> 
                <li>Linkedin</li>
              </Link>{" "}
            </ul> */}
          </div>
          <div className="block max-sm:w-full max-sm:text-left md:hidden">
            <h3 className="mt-5 text-lg font-medium">Follow us</h3>
            <ul className="flex flex-row items-start justify-start space-x-4 pt-4 max-sm:flex-row max-sm:space-x-4 max-sm:space-y-0 max-sm:pl-0">
              <li>
                <a
                  href="https://www.instagram.com/aignosis.in?igsh=MTU0dmUybjViOTIzZw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaInstagram size={26} className="text-pink-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/share/19HxXZyVyE/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaFacebook size={26} className="text-blue-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@aignosis?si=gozM9TLj4ZToY5-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaYoutube size={26} className="text-red-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/aignosisai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaLinkedin size={26} className="text-blue-500" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-full items-center justify-center border-t-2 border-[#F6E8FB80] md:hidden">
            <h3 className="mt-4 text-center text-[10px]">
              <p>&copy; 2025 All rights reserved by Aignosis Artificial Intelligence Private Limited</p>
            </h3>
          </div>
        </div>
        <div className="mt-[5vw] hidden w-full items-center justify-center border-t-2 border-[#F6E8FB80] md:flex">
          <h3 className="mt-4 text-center text-[10px]">
            <p>&copy; 2025 All rights reserved by Aignosis Artificial Intelligence Private Limited</p>
          </h3>
        </div>
      </footer>
    </div>
  );
};

export default BlogFooter;

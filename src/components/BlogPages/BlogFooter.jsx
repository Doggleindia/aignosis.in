import React from "react";
import { Link } from "react-router-dom";

const BlogFooter = () => {
  return (
    <div>
      <footer className="bg-[#811F67] px-[10vw] text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-[1vw] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-y-6">
          {/* Pages Section */}
          <div className="max-sm:w-full max-sm:text-center">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 list-disc pl-[2vw] max-sm:pl-0 max-sm:list-none">
              <Link to="/">
                {" "}
                <li>Home</li>
              </Link>{" "}
              <Link to="/clinic">
                {" "}
                <li>Clinic</li>
              </Link>{" "}
              <Link to={"/about-us"}>
                {" "}
                <li>About us</li>
              </Link>
              <Link to={"/assessments-evaluation"}>
                {" "}
                <li>Services</li>
              </Link>
              <Link>
                {" "}
                <li>Contact us</li>
              </Link>
            </ul>
          </div>

          {/* Information Section */}
          <div className="max-sm:w-full max-sm:text-center">
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 list-disc pl-[2vw] max-sm:pl-0 max-sm:list-none">
              {/* <li>Brand Story</li> */}
              <Link to={"/terms"}>
                {" "}
                <li>Terms & Conditions</li>
              </Link>
              <Link to={"/refund-reschedule"}>
                {" "}
                <li>Return Policy</li>
              </Link>{" "}
              <Link to={"/refund-reschedule"}>
                {" "}
                <li>Refund Policy</li>
              </Link>{" "}
              <Link to={"/privacy-policy"}>
                {" "}
                <li>Privacy Policy</li>
              </Link>{" "}
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="max-sm:w-full max-sm:text-center">
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 list-disc pl-[2vw] max-sm:pl-0 max-sm:list-none">
              <Link to={"/about-us"}>
                {" "}
                <li>Our Team</li>
              </Link>
              {/* <li>My Account</li>
              <li>FAQ</li> */}
              <Link to={"/blog"}>
                {" "}
                <li>Blog</li>
              </Link>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="max-sm:w-full max-sm:text-center">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 max-sm:text-center">
              <p>
                Plot No. 741, Mahavir Nagar-Ist, Mandir Marg, Tonk Road,
                Durgapura, Jaipur, Rajasthan 302018
              </p>
              <p>+91-9024788312 / +91-9983432333</p>
              <p>info@momshome.in</p>
            </address>
            <ul className="space-y-2 list-disc pl-[2vw] max-sm:pl-0 max-sm:list-none">
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
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogFooter;

import React, { useEffect, useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import axiosInstance from './config/axiosInstance';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [selectedService, setSelectedService] = useState(''); // Renamed state variable
  const [authUser, setAuthUser] = useState(false); // Authenticated user
  // Menu visibility
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // Services dropdown visibility
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Navigate to home with state to trigger scrolling
    navigate('/', { state: { scrollToContact: true } });
  };

  const handleServiceClick = (link) => {
    setActiveLink(link);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); // Close dropdown if main menu is toggled
  };

  const location = useLocation();

  // Update activeLink when the location changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('authToken');

    // Clear other user-related data if necessary
    setAuthUser(null); // Update state to reflect logged-out status
    sessionStorage.clear();

    // Redirect to login page
    window.location.href = '/';
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken');
      try {
        console.log(authUser, 'authUser1');
        console.log(token);
        // Verify the token with the backend
        const response = await axiosInstance.post(
          '/verifyJwt',
          {}, // Empty body for the POST request
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add the token in the headers
            },
          }
        );
        setAuthUser(true);

        if (!response.data.success) {
          console.log(authUser, 'authUser2');
          // Token verification failed, redirect to login
          setAuthUser(false);
        }
      } catch (error) {
        console.error('Token verification failed:', error);
        setAuthUser(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <div className="2xl:h-[4vw] fixed top-0 z-[100] flex w-full translate-y-0 items-center justify-center bg-[#1A0C25]/60 font-montserrat text-white backdrop-blur-md transition-transform duration-300 max-sm:h-[12vw] md:h-[4vw]">
      <div className="navbar 2xl:py-[10px] flex w-full items-center justify-between px-[5vw] py-[4vw] text-center max-sm:mt-[-1.5vw] max-sm:py-[1vw] md:py-[14px]">
        {/* Logo Section */}
        <div className="relative inline-block">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-60 blur-lg"></div>
          <Link
            to="/"
            onClick={() => handleLinkClick('/')}
            className="2xl:text-3xl relative z-10 font-semibold tracking-wide text-white max-sm:top-[1vw] md:text-xl"
          >
            Aignosis
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden items-center justify-center gap-[4rem] font-medium md:flex">
          <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {/* <Link
              to=""
              onClick={() => handleServiceClick("/assessments-evaluation")} // Updated function name
              className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${selectedService === "/assessments-evaluation" ? "border-b-2 border-white" : ""
                }`} // Updated condition
            >
              Services
            </Link> */}
            {/* Dropdown menu */}
            {isHovered && (
              <div
                className="absolute -left-[8vw] top-[70%] z-10 mt-2 w-[22vw] rounded-lg p-2 text-white shadow-lg transition-all duration-200 ease-in-out"
                style={{
                  background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, #300834 100%)',

                  padding: '1rem 0',

                  borderRadius: '8px',
                }}
              >
                <ul className="flex flex-col items-center justify-center space-y-2">
                  <li>
                    <Link
                      to="/assessments-evaluation"
                      onClick={() => handleServiceClick('/service1')}
                      className={`block w-[18vw] border-b-2 border-[#952981] p-3 transition duration-200 hover:text-[#B740A1] ${
                        activeLink === '/assessments-evaluation' ? 'text-[#B740A1]' : ''
                      }`}
                      aria-label="/assessments-evaluation"
                    >
                      Assessments & Evaluation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/speech-language"
                      onClick={() => handleServiceClick('/speech-language')}
                      className={`block w-[18vw] border-b-2 border-[#952981] p-3 transition duration-200 hover:text-[#B740A1] ${
                        activeLink === '/speech-language' ? 'text-[#B740A1]' : ''
                      }`}
                      aria-label="Service 2"
                    >
                      Speech & Language
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/behaviour-therapy"
                      onClick={() => handleServiceClick('/behaviour-therapy')}
                      className={`block w-[18vw] border-b-2 border-[#952981] p-3 transition duration-200 hover:text-[#B740A1] ${
                        activeLink === '/behaviour-therapy' ? 'text-[#B740A1]' : ''
                      }`}
                      aria-label="Service 3"
                    >
                      Behaviour Therapy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/occupational-therapy"
                      onClick={() => handleServiceClick('/occupational-therapy')}
                      className={`block w-[18vw] border-b-2 border-[#952981] p-3 transition duration-200 hover:text-[#B740A1] ${
                        activeLink === '/occupational-therapy' ? 'text-[#B740A1]' : ''
                      }`}
                      aria-label="Service 4"
                    >
                      Occupational Therapy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/special-education"
                      onClick={() => handleServiceClick('/special-education')}
                      className={`block w-[18vw] border-b-2 border-[#952981] p-3 transition duration-200 hover:text-[#B740A1] ${
                        activeLink === '/service5' ? 'text-[#B740A1]' : ''
                      }`}
                      aria-label="special-education"
                    >
                      Special Education
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link
            to="/about-us"
            onClick={() => handleLinkClick('/about-us')}
            className={`font-raleway text-sm text-[#F6E8FB] md:text-base ${
              activeLink === '/about-us' ? 'border-b-2 border-white' : ''
            }`}
          >
            About Us
          </Link>
          <Link
            to="/test"
            onClick={() => handleLinkClick('/prices')}
            className={`font-raleway text-sm text-[#F6E8FB] md:text-base ${
              activeLink === '/test' ? 'border-b-2 border-white' : ''
            }`}
          >
            Test
          </Link>
          {/* <Link
            to="/therapy"
            onClick={() => handleLinkClick("/prices")}
            className={`text-sm md:text-base font-raleway text-[#F6E8FB] ${activeLink === "/therapy" ? "border-b-2 border-white" : ""
              }`}
          >
            Therapy
          </Link> */}
          <Link
            to="/clinic"
            onClick={() => handleLinkClick('/clinic')}
            className={`font-raleway text-sm text-[#F6E8FB] md:text-base ${
              activeLink === '/clinic' ? 'border-b-2 border-white' : ''
            }`}
          >
            Clinic
          </Link>
          <div className="group relative">
            <button className="font-raleway text-sm text-[#F6E8FB] hover:underline md:text-base">Blog</button>
            <div
              className="absolute -left-[8vw] top-[70%] z-10 mt-2 hidden w-[22vw] rounded-lg p-2 text-white shadow-lg transition-all duration-200 ease-in-out group-hover:block"
              style={{
                background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, #300834 100%)',
                padding: '1rem 0',
                borderRadius: '8px',
              }}
            >
              <ul className="flex flex-col items-center justify-center space-y-2">
                <li>
                  <Link
                    to="/blog"
                    onClick={() => handleLinkClick('/blog')}
                    className={`block w-[18vw] border-b-2 border-[#952981] p-3 transition duration-200 hover:text-[#B740A1] ${
                      activeLink === '/blog' ? 'text-[#B740A1]' : ''
                    }`}
                    aria-label="Blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Howework"
                    onClick={() => handleLinkClick('/Howework')}
                    className={`block w-[18vw] border-b-2 border-[#952981] p-3 transition duration-200 hover:text-[#B740A1] ${
                      activeLink === '/Howework' ? 'text-[#B740A1]' : ''
                    }`}
                    aria-label="How We Work"
                  >
                    How We Work
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {authUser ? (
            <>
              <div className="">
                <div
                  className="relative"
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                >
                  <Link
                    to=""
                    onClick={() => handleServiceClick('/dashboard')} // Updated function name
                    className={`font-raleway text-sm text-[#F6E8FB] md:text-base ${
                      selectedService === '/assessments-evaluation' ? 'border-b-2 border-white' : ''
                    }`} // Updated condition
                  >
                    Dashboard
                  </Link>
                  {/* Dropdown menu */}
                  {isHovered2 && (
                    <div
                      className="absolute -left-[8vw] top-[70%] z-10 mt-2 w-[22vw] rounded-lg p-2 text-white shadow-lg transition-all duration-200 ease-in-out"
                      style={{
                        background: 'radial-gradient(101.54% 60.98% at 50% 39.02%, #070B0E 0%, #300834 100%)',

                        padding: '1rem 0',

                        borderRadius: '8px',
                      }}
                    >
                      <ul className="flex flex-col items-center justify-center space-y-2">
                        <li>
                          <Link
                            to="/profile1"
                            onClick={() => handleServiceClick('/service1')}
                            className={`block w-[18vw] border-b-2 border-[#952981] p-3 transition duration-200 hover:text-[#B740A1] ${
                              activeLink === '/assessments-evaluation' ? 'text-[#B740A1]' : ''
                            }`}
                            aria-label="/assessments-evaluation"
                          >
                            User Dashboard
                          </Link>
                        </li>
                        <li>
                          {/* <Link
                            to="/profile"
                            onClick={() => handleServiceClick("/profile")}
                            className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1]  transition duration-200 ${activeLink === "/speech-language" ? "text-[#B740A1]" : ""
                              }`}
                            aria-label="Service 2"
                          >
                            Profile
                          </Link> */}
                          <Link
                            to="/dashboard"
                            onClick={() => handleServiceClick('/profile1')}
                            className={`block w-[18vw] border-b-2 border-[#952981] p-3 transition duration-200 hover:text-[#B740A1] ${
                              activeLink === '/speech-language' ? 'text-[#B740A1]' : ''
                            }`}
                            aria-label="Service 2"
                          >
                            Profile
                          </Link>
                          <Link
                            to="/orderhistory"
                            onClick={() => handleServiceClick('/orderhistory')}
                            className={`block w-[18vw] border-b-2 border-[#952981] p-3 transition duration-200 hover:text-[#B740A1] ${
                              activeLink === '/speech-language' ? 'text-[#B740A1]' : ''
                            }`}
                            aria-label="Service 2"
                          >
                            Order History
                          </Link>
                        </li>
                        {/* <li>
                      <Link
                        to="/behaviour-therapy"
                        onClick={() => handleServiceClick("/behaviour-therapy")}
                        className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1]  transition duration-200 ${activeLink === "/behaviour-therapy" ? "text-[#B740A1]" : ""
                          }`}
                        aria-label="Service 3"
                      >
                        Behaviour Therapy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/occupational-therapy"
                        onClick={() => handleServiceClick("/occupational-therapy")}
                        className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1]  transition duration-200 ${activeLink === "/occupational-therapy" ? "text-[#B740A1]" : ""
                          }`}
                        aria-label="Service 4"
                      >
                        Occupational Therapy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/special-education"
                        onClick={() => handleServiceClick("/special-education")}
                        className={`block p-3 border-b-2 border-[#952981] w-[18vw] hover:text-[#B740A1] transition duration-200 ${activeLink === "/service5" ? "text-[#B740A1]" : ""
                          }`}
                        aria-label="special-education"
                      >
                        Special Education
                      </Link>
                    </li> */}
                      </ul>
                      <button
                        onClick={handleLogout}
                        className="w-[18vw] border-b-2 border-[#952981] p-3 transition duration-200 hover:text-[#B740A1] md:text-base"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <Link
                to={'/test'}
                className="2xl:w-[17rem] 2xl:h-[3rem] group flex cursor-pointer items-center justify-center gap-3 rounded-full bg-white text-[#0D0C0A] transition-colors duration-300 hover:bg-[#B7407D] hover:text-white md:h-[3rem] md:w-[14rem]"
              >
                <span className="2xl:text-base md:text-sm">Book an appointment</span>
                <div className="2xl:w-[2.5rem] 2xl:h-[2.5rem] flex items-center justify-center rounded-full bg-[#B740A1] text-xl text-white group-hover:bg-white group-hover:text-black md:h-[2rem] md:w-[2rem]">
                  <GoArrowUpRight />
                </div>
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => handleLinkClick('/login')}
              className="group rounded-[30px] border border-[#B740A1] p-2 px-4 transition-all duration-200 hover:bg-pink-500"
            >
              <span className="2xl:text-base m-auto flex items-center text-xl text-white md:text-sm">
                Log in
                <div className="ml-2 flex h-[1.8rem] w-[1.8rem] items-center justify-center rounded-full bg-[#B740A1] text-xl text-white transition duration-300 group-hover:bg-white group-hover:text-black">
                  <GoArrowUpRight />
                </div>
              </span>
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="mt-2 flex items-center md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-white">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute left-0 top-[5.1vh] z-10 flex w-full flex-col items-center bg-[#1A0C25] p-6 text-left md:hidden">
          <Link
            to="/"
            onClick={() => {
              handleLinkClick('/');
              toggleMenu();
            }}
            className={`w-full p-4 text-left text-lg ${activeLink === '/' ? 'text-[#B740A1]' : ''}`}
          >
            Home
          </Link>
          {/* <div className="border-t-2 w-full border-[#952981]"></div> */}
          <div
            // className="relative text-lg p-4 w-full text-left"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {/* <span className="flex justify-between items-center">
              Services
              {dropdownOpen ? (
                <RiArrowDropUpLine size={30} />
              ) : (
                <RiArrowDropDownLine size={30} />
              )}
            </span> */}
            {dropdownOpen && (
              <div className="left-0 top-full w-full bg-[#1A0C25] p-2 text-left text-base">
                <Link
                  to="/assessments-evaluation"
                  onClick={() => {
                    handleLinkClick('/assessments-evaluation');
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === '/assessments-evaluation' ? 'text-[#B740A1]' : ''}`}
                >
                  Assessments & Evaluation
                </Link>
                <div className="w-full border-t-2 border-[#952981]"></div>

                <Link
                  to="/speech-language"
                  onClick={() => {
                    handleLinkClick('/speech-language');
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === '/speech-language' ? 'text-[#B740A1]' : ''}`}
                >
                  Speech & Language
                </Link>
                <div className="w-full border-t-2 border-[#952981]"></div>

                <Link
                  to="/behaviour-therapy"
                  onClick={() => {
                    handleLinkClick('/behaviour-therapy');
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === '/behaviour-therapy' ? 'text-[#B740A1]' : ''}`}
                >
                  Behaviour Therapy
                </Link>
                <div className="w-full border-t-2 border-[#952981]"></div>

                <Link
                  to="/occupational-therapy"
                  onClick={() => {
                    handleLinkClick('/occupational-therapy');
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === '/occupational-therapy' ? 'text-[#B740A1]' : ''}`}
                >
                  Occupational Therapy
                </Link>
                <div className="w-full border-t-2 border-[#952981]"></div>

                <Link
                  to="/special-education"
                  onClick={() => {
                    handleLinkClick('/special-education');
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === '/special-education' ? 'text-[#B740A1]' : ''}`}
                >
                  Special Education
                </Link>
              </div>
            )}
          </div>
          <div className="w-full border-t-2 border-[#952981]"></div>
          <Link
            to="/about-us"
            onClick={() => {
              handleLinkClick('/about-us');
              toggleMenu();
            }}
            className={`w-full p-4 text-left text-lg ${activeLink === '/about-us' ? 'text-[#B740A1]' : ''}`}
          >
            About Us
          </Link>
          <div className="w-full border-t-2 border-[#952981]"></div>
          <Link
            to="/test"
            onClick={() => {
              handleLinkClick('/test');
              toggleMenu();
            }}
            className={`w-full p-4 text-left text-lg ${activeLink === '/test' ? 'text-[#B740A1]' : ''}`}
          >
            Test
          </Link>
          <div className="w-full border-t-2 border-[#952981]"></div>
          {/* <Link
            to="/therapy"
            onClick={() => {
              handleLinkClick("/therapy");
              toggleMenu();
            }}
            className={` text-lg p-4 w-full text-left ${activeLink === "/therapy" ? "text-[#B740A1]" : ""
              }`}
          >
            Therapy
          </Link> */}
          <div className="w-full border-t-2 border-[#952981]"></div>

          <Link
            to="/clinic"
            onClick={() => {
              handleLinkClick('/clinic');
              toggleMenu();
            }}
            className={`w-full p-4 text-left text-lg ${activeLink === '/clinic' ? 'text-[#B740A1]' : ''}`}
          >
            Clinic
          </Link>
          <div className="w-full border-t-2 border-[#952981]"></div>
          <div
            className="relative w-full p-4 text-left text-lg"
            onClick={() => setDropdownOpen3(!dropdownOpen3)} // Toggle dropdown
          >
            <span className="flex items-center justify-between">
              Blog
              {dropdownOpen3 ? <RiArrowDropUpLine size={30} /> : <RiArrowDropDownLine size={30} />}
            </span>
            {dropdownOpen3 && (
              <div className="left-0 top-full w-full bg-[#1A0C25] p-2 text-left text-base">
                {/* Blogs Link */}
                <Link
                  to="/blog"
                  onClick={() => {
                    handleLinkClick('/blog');
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === '/blog' ? 'text-[#B740A1]' : ''}`}
                >
                  Blogs
                </Link>
                <div className="w-full border-t-2 border-[#952981]"></div>

                {/* How We Work Link */}

                {/* Additional Blog Categories */}
                <Link
                  to="/Howework"
                  onClick={() => {
                    handleLinkClick('/case-studies');
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === '/Howework' ? 'text-[#B740A1]' : ''}`}
                >
                  How We Work
                </Link>
              </div>
            )}
          </div>

          {authUser ? (
            <>
              <div className="w-full border-t-2 border-[#952981]"></div>
              <button onClick={handleLogout} className="w-full p-4 text-left text-lg">
                Logout
              </button>
              <div className="w-full border-t-2 border-[#952981]"></div>

              <div className="relative w-full p-4 text-left text-lg" onClick={() => setDropdownOpen2(!dropdownOpen2)}>
                <span className="flex items-center justify-between">
                  Dashboard
                  {dropdownOpen2 ? <RiArrowDropUpLine size={30} /> : <RiArrowDropDownLine size={30} />}{' '}
                </span>
                {dropdownOpen2 && (
                  <div className="left-0 top-full w-full bg-[#1A0C25] p-2 text-left text-base">
                    <Link
                      to="/dashboard"
                      onClick={() => {
                        handleLinkClick('/dashboard');
                        toggleMenu();
                      }}
                      className={`block p-4 ${activeLink === '/assessments-evaluation' ? 'text-[#B740A1]' : ''}`}
                    >
                      User Dashboard
                    </Link>
                    {/* <div className="border-t-2 w-full border-[#952981]"></div> */}

                    {/* <Link
                      to="/profile"
                      onClick={() => {
                        handleLinkClick("/speech-language");
                        toggleMenu();
                      }}
                      className={`block p-4  ${activeLink === "/speech-language" ? "text-[#B740A1]" : ""
                        }`}
                    >
                      Profile
                    </Link> */}
                    <div className="w-full border-t-2 border-[#952981]"></div>
                    <Link
                      to="/profile1"
                      onClick={() => {
                        handleLinkClick('/profile1');
                        toggleMenu();
                      }}
                      className={`block p-4 ${activeLink === '/speech-language' ? 'text-[#B740A1]' : ''}`}
                    >
                      Profile1
                    </Link>
                    <div className="w-full border-t-2 border-[#952981]"></div>
                    <Link
                      to="/orderhistory"
                      onClick={() => {
                        handleLinkClick('/orderhistory');
                        toggleMenu();
                      }}
                      className={`block p-4 ${activeLink === '/speech-language' ? 'text-[#B740A1]' : ''}`}
                    >
                      Order History
                    </Link>
                    <div className="w-full border-t-2 border-[#952981]"></div>
                    {/* <div className="border-t-2 w-full border-[#952981]"></div> */}

                    {/* <Link
                  to="/behaviour-therapy"
                  onClick={() => {
                    handleLinkClick("/behaviour-therapy");
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === "/behaviour-therapy" ? "text-[#B740A1]" : ""
                    }`}
                >
                  Behaviour Therapy
                </Link>
                <div className="border-t-2 w-full border-[#952981]"></div>

                <Link
                  to="/occupational-therapy"
                  onClick={() => {
                    handleLinkClick("/occupational-therapy");
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === "/occupational-therapy" ? "text-[#B740A1]" : ""
                    }`}
                >
                  Occupational Therapy
                </Link>
                <div className="border-t-2 w-full border-[#952981]"></div>

                <Link
                  to="/special-education"
                  onClick={() => {
                    handleLinkClick("/special-education");
                    toggleMenu();
                  }}
                  className={`block p-4 ${activeLink === "/special-education" ? "text-[#B740A1]" : ""
                    }`}
                >
                  Special Education
                </Link> */}
                  </div>
                )}
              </div>
              <div className="mb-5 w-full border-t-2 border-[#952981]"></div>

              <Link to={'/test'} className="w-full rounded-full bg-[#B740A1] p-3 text-center text-lg text-white">
                Book an appointment
              </Link>
              {/* <Link
                to="/dashboard"
                onClick={toggleMenu}
                className="w-full text-white text-lg p-3 mt-5 rounded-full text-center border border-[#B740A1]"
              >
                Dashboard
              </Link> */}
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={toggleMenu}
                className="w-full rounded-full bg-[#B740A1] p-3 text-center text-lg text-white"
              >
                Log in
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;

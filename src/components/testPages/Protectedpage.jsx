import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { ToastContainer } from "react-toastify"

const Protectedpage = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) { // max-sm breakpoint (640px)
        toast.error("This feature is not available on mobile. Please use a desktop!", {
          position: "top-center",
          autoClose: 3000, // Auto close after 3 seconds
        });

        setTimeout(() => {
          navigate("/dashboard"); // Redirect to dashboard
        }, 3500); // Redirect after toast is displayed
      }
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Listen for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, [navigate]);

  return ( <>
  {children}
  <ToastContainer/>
  </>
  ); // Render child components if allowed
};

export default Protectedpage;

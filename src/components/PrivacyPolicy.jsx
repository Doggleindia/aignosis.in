import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ContactPage from './ContactPage';

const PrivacyPolicy = () => {
  return (
    <div className='bg-[#1A0C25]'>
      <Header />
      <div className=" min-h-screen text-white px-6 max-sm:py-[20vw] py-[10vw] sm:px-16 font-montserrat">
        <div className="md:max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center space-x-4 mb-8">
            <span
              className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
              style={{
                background:
                  "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
            <span className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-base">
              Privacy Policy
            </span>
            <span
              className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
              style={{
                background:
                  "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
          </div>

          <p className="mb-4 text-sm leading-relaxed sm:text-base">
            Welcome to Aignosis! Your privacy is critically important to us. This Privacy Policy
            outlines how we handle your personal information when you use our services.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-4 sm:text-2xl">Information We Collect</h2>
          <p className="mb-4 text-sm leading-relaxed sm:text-base">
            We collect personal information such as your name, email address, and usage data when
            you interact with our platform. This data helps us provide and improve our services.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-4 sm:text-2xl">How We Use Your Information</h2>
          <p className="mb-4 text-sm leading-relaxed sm:text-base">
            Your information is used to deliver, maintain, and enhance our services. It is also used
            to communicate updates, provide support, and comply with legal requirements.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-4 sm:text-2xl">Sharing of Information</h2>
          <p className="mb-4 text-sm leading-relaxed sm:text-base">
            We do not share your personal information with third parties except as necessary to
            deliver our services, comply with the law, or protect our rights.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-4 sm:text-2xl">Security of Your Data</h2>
          <p className="mb-4 text-sm leading-relaxed sm:text-base">
            We prioritize protecting your personal information. Our systems employ advanced security
            measures to prevent unauthorized access, disclosure, or loss.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-4 sm:text-2xl">Your Rights</h2>
          <p className="mb-4 text-sm leading-relaxed sm:text-base">
            You have the right to access, update, or delete your personal information. Contact us at
            [contact information] to exercise these rights.
          </p>
          <h2 className="text-lg font-semibold mt-6 mb-4 sm:text-2xl">Changes to This Policy</h2>
          <p className="mb-4 text-sm leading-relaxed sm:text-base">
            We may update this Privacy Policy from time to time. Please review it periodically for
            any changes. Your continued use of our services constitutes acceptance of the updated
            policy.
          </p>
        </div>
        
      </div>
      <ContactPage />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

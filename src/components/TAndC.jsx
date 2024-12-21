import React from 'react';
import Footer from './Footer';
import Header from './Header';

const TAndC = () => {
  return (
    <div className='bg-[#1A0C25]'>
      <Header />
      <div className="min-h-screen text-white px-6 max-sm:py-[20vw] py-[10vw] sm:px-16 font-montserrat">
        <div className="md:max-w-4xl mx-auto">
          {/* Privacy Policy Header */}
          <div className="flex flex-wrap justify-center items-center space-x-4 mb-8">
            <span
              className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
              style={{
                background:
                  "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
            <span className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-base">
            Terms & Conditions
            </span>
            <span
              className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
              style={{
                background:
                  "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
          </div>

          {/* Section Headings with Blank Paragraphs */}
          <h2 className="text-lg font-semibold mt-6 mb-4 sm:text-2xl">Terms & Conditions</h2>
<p className="mb-4 text-sm leading-relaxed sm:text-base">
  By using this platform, you agree to the following terms and conditions. Please read them carefully:
</p>
<ul className="mb-4 list-disc pl-6 text-sm leading-relaxed sm:text-base">
  <li><strong>Acceptance of Terms:</strong> By accessing or using our platform, you accept and agree to be bound by these terms, including any future updates or modifications.</li>
  <li><strong>User Responsibilities:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
  <li><strong>Prohibited Activities:</strong> Users are prohibited from engaging in activities that are unlawful, harmful, abusive, or that violate the intellectual property rights of others.</li>
  <li><strong>Content Ownership:</strong> All content, including text, images, and software on this platform, is the property of the platform or its licensors and is protected under copyright laws.</li>
  <li><strong>Limitation of Liability:</strong> The platform is provided "as is," and we are not liable for any damages arising from your use of the service, including data loss or service interruptions.</li>
  <li><strong>Termination:</strong> We reserve the right to terminate or suspend your account at our discretion, with or without notice, for any violation of these terms.</li>
  
  <li><strong>Amendments:</strong> We reserve the right to modify these terms at any time, and changes will be effective immediately upon posting on the platform. Continued use constitutes your acceptance of the revised terms.</li>
</ul>


<h2 className="text-lg font-semibold mt-6 mb-4 sm:text-2xl">Refund & Cancellation Policy</h2>
<p className="mb-4 text-sm leading-relaxed sm:text-base">
  By using this platform, you acknowledge and agree to the following refund and cancellation policy. Please review it carefully:
</p>
<ul className="mb-4 list-disc pl-6 text-sm leading-relaxed sm:text-base">
  <li><strong>Refund Eligibility:</strong> Refunds are only applicable for payments made directly through our platform and are subject to verification. Certain services or fees may be non-refundable as explicitly stated at the time of purchase.</li>
  <li><strong>Refund Process:</strong> To request a refund, users must contact our support team at   <a href="mailto:aignosis7@gmail.com" className="text-blue-600">aignosis7@gmail.com</a>.</li>
  <li><strong>Non-Refundable Services:</strong> Payments for services rendered, such as consultations, subscription fees, or third-party integrations, are non-refundable once availed or processed.</li>
  
  <li><strong>Processing Fee:</strong> In cases where refunds are issued, a processing fee may be deducted from the refunded amount to cover transaction costs.</li>
  <li><strong>Event Cancellations:</strong> In the event of service disruptions or cancellations initiated by us, affected users will receive a full refund or equivalent credits for future use.</li>
  <li><strong>Changes to Policy:</strong> We reserve the right to update this policy at any time, and changes will be effective immediately upon posting. Continued use of the platform constitutes acceptance of the updated policy.</li>
</ul>
<p className="text-sm leading-relaxed sm:text-base">
  If you have any questions or concerns  please contact us at  <a href="mailto:aignosis7@gmail.com" className="text-blue-600">aignosis7@gmail.com</a>.<br />
</p>






          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TAndC;

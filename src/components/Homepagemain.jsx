import Homepage from './Homepage';
import ContactPage from './ContactPage';
import WhatsAppButton from './WhatsAppButton';
import BlogFooter from './BlogPages/BlogFooter';
import SEO from './config/Seo';
const Homepagemain = () => {
  return (
    <>
      <SEO
        pageTitle="AI-Powered Early Autism Screening Tools | Aignosis"
        canonicalUrl="https://aignosis.in/"
        metaDescription="Explore AI-powered tools by Aignosis for early autism screening, diagnosis, and detection. Revolutionize autism care with advanced technology."
      />

      <div className="overflow-x-hidden bg-[#1A0C25]">
        <Homepage />
        <WhatsAppButton />
        <ContactPage />
        <BlogFooter />
      </div>
    </>
  );
};

export default Homepagemain;

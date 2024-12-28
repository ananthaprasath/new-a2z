import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file
import './Component/Solutions/solution.css'
// Import your components
import Layout from "./Component/Header/Layout";
import Home from "./Component/Home/Home";
import TryForFree from "./Component/Forms/TryForFree";
import RequestDemo from "./Component/Forms/RequestDemo";
import Carrer from "./Component/Company/Carrer/Carrer";
import About from "./Component/Company/About/About";
import ContactPage from "./Component/Company/Contact/Contact";
import WhatsappApi from "./Component/Product/Whatsapp/WhatsappApi";
import RcsSms from "./Component/Product/Rcs/RcsSms";
import BulkSms from "./Component/Product/BulkSms/BulkSms";
import VoiceCall from "./Component/Product/VoiceCall/VoiceCall";
import ScrollToTop from "./Scroll/ScrollToTop";
import Terms from "./Component/TermsPrivacy/Terms";
import Privacy from "./Component/TermsPrivacy/Privacy";
import Service from "./Component/Resources/Services/Service";
import MainFaq from "./Component/Resources/FAQ/FAQ";
import NoPage from "./Component/NoPage/NoPage";
import RealEstate from "./Component/Solutions/RealEstate/RealEstate";
import Gaming from "./Component/Solutions/Gaming/Gaming";
import Travel from "./Component/Solutions/Travel/Travel";
import HealthCare from "./Component/Solutions/HealthCare/HealthCare";
import Food from "./Component/Solutions/Food/Food";
import Retail from "./Component/Solutions/Retail/Retail";
import Media from "./Component/Solutions/Media/Media";
import Government from "./Component/Solutions/Government/Government";
import Education from "./Component/Solutions/Education/Education";
import Blog from "./Component/Resources/Blogs/Blog";
import Dec12 from "./Component/Resources/Blogs/December/Dec12";
import Dec13 from "./Component/Resources/Blogs/December/Dec13";
import Dec14 from "./Component/Resources/Blogs/December/Dec14";
import Dec15 from "./Component/Resources/Blogs/December/Dec15";
import Dec16 from "./Component/Resources/Blogs/December/Dec16"; 
import Dec17 from "./Component/Resources/Blogs/December/Dec17";
import Dec18 from "./Component/Resources/Blogs/December/Dec18"; 
import Dec19 from "./Component/Resources/Blogs/December/Dec19";
import Dec20 from "./Component/Resources/Blogs/December/Dec20";
import Dec21 from "./Component/Resources/Blogs/December/Dec21";
import Dec22 from "./Component/Resources/Blogs/December/Dec22";
import Dec23 from "./Component/Resources/Blogs/December/Dec23";
import Dec24 from "./Component/Resources/Blogs/December/Dec24";

function App() {
  useEffect(() => {
    // Initialize AOS with specific settings
    AOS.init({
      duration: 1500,  // Animation duration in milliseconds
      once: true,      // Allow animations to happen only once
      mirror: true,   // Disable mirroring animations when scrolling back
    });
  }, []);

  return (
    <HelmetProvider>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="try-for-free/" element={<TryForFree />} />
          <Route path="request-demo/" element={<RequestDemo />} />
          <Route path="career/" element={<Carrer/>} />
          <Route path="about/" element={<About />} />
          <Route path="contact/" element={<ContactPage />} />
          <Route path="whatsapp-api/" element={<WhatsappApi />} />
          <Route path="rcs-sms/" element={<RcsSms />} />
          <Route path="bulk-sms/" element={<BulkSms />} />
          <Route path="voice-call/" element={<VoiceCall />} />
          <Route path="privacy/" element={<Privacy />} />
          <Route path="terms/" element ={<Terms/>} />
          <Route path="services/" element ={<Service/>} />
          <Route path='faq/' element={<MainFaq/>} />
          <Route path='blogs/' element={<Blog/>} />
          <Route path="real-estate/" element={<RealEstate/>} />
          <Route path="gaming/" element={<Gaming/>} />
          <Route path="tours-travel/" element={<Travel/>} />
          <Route path="health-care/" element={<HealthCare/>} />
          <Route path="food-beverage/" element={<Food/>} />
          <Route path="retail-ecommerce/" element={<Retail/>} />  
          <Route path="media-entertainment/" element={<Media/>} />
          <Route path="government/" element={<Government/>} />
          <Route path="education/" element={<Education/>} />
          <Route path="blogs/streamlined-bulk-voice-calling-system/" element={<Dec12 />} />
          <Route path="/blogs/how-whatsApp-chatbots-can-revolutionize-customer-support-for-indian-sMEs/" element={<Dec13/>} />
          <Route path="blogs/what-is-whatsApp-business-aPI?-a-complete-guide-for-indian-businesses/" element={<Dec14 />} />
          <Route path="blogs/how-to-use-whatsApp-business-aPI-to-automate-customer-communication/" element={<Dec15 />} />
          <Route path="blogs/whatsApp-business-aPI-pricing-in-india-everything-you-need-to-know/" element={<Dec16 />} />
          <Route path="blogs/top-10-benefits-of-whatsApp-chatbots-for-small-businesses-in-bangalore/" element={<Dec17 />} />
          <Route path="blogs/step-by-step-guide-to-integrating-whatsApp-business-aPI-with-your-cRM/" element={<Dec18 />} />
          <Route path="blogs/whatsApp-business-aPI-vs-free-whatsApp-business-app-which-one-is-right-for-you/" element={<Dec19 />} />
          <Route path="/blogs/10-game-changing-marketing-strategies-with-whatsApp-business-aPI/" element={<Dec20/>} />
          <Route path="/blogs/how-bangalore's-small-businesses-are-unlocking-growth-with-whatsApp-business-aPI/" element={<Dec21/>} />
          <Route path="/blogs/whatsApp-business-aPI-integration-essential-tools-and-platforms-for-small-business-growth/" element={<Dec22/>} />
          <Route path="/blogs/why-whatsApp-business-aPI-is-revolutionizing-e-commerce-in-india/" element={<Dec23/>} />
          <Route path="/blogs/whatsApp-business-aPI-use-cases-transforming-healthcare-in-india/" element={<Dec24/>} />

          <Route path='*' element={<NoPage/>} /> 
         </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

import React from 'react'
import Home from './Home'
import ComparisonTable from './ComparisonTable'
import Client from '../Clients'
import StepsSection from './StepsSection'
// import Faq from './Faq'
import Features from './Features'
import Apisupport from '../Apisupport'
import SocialMedia from '../SocialMedia'
import FAQHome from '../../Resources/FAQ/FAQHome'
import { Whatsapp } from '../../Resources/FAQ/FaqData'
import PricingTabs from './WhatsappPricing'
import { Helmet } from 'react-helmet'
// import banner from '../../image/'

const WhatsappApi = () => {
  return (
    <div>
      <Helmet>
  <title>A2ZSMS | WhatsApp API for Business Communication</title>
  <meta
    name="description"
    content="Leverage A2ZSMS WhatsApp API for personalized messaging, automated customer support, and secure OTP services to enhance business communication."
  />
  <meta
    name="keywords"
    content="WhatsApp API, business messaging, customer engagement, secure OTP, automated customer support"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="A2ZSMS | WhatsApp API for Business Communication"
  />
  <meta
    property="og:description"
    content="Leverage A2ZSMS WhatsApp API for personalized messaging, automated customer support, and secure OTP services to enhance business communication."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/whatsapp-api" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | WhatsApp API for Business Communication"
  />
  <meta
    name="twitter:description"
    content="Leverage A2ZSMS WhatsApp API for personalized messaging, automated customer support, and secure OTP services to enhance business communication."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/whatsapp-api" />
</Helmet>

      <Home/>
      <Client/>
      <ComparisonTable/>
      <PricingTabs/>
      <Apisupport/>
      <StepsSection/>
      <Features/>
      <SocialMedia/>
      <FAQHome data={Whatsapp}/>

      {/* <Faq/> */}

    </div>
  )
}

export default WhatsappApi

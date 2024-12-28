import React from 'react'
// import Home from './Home'
import Services from './Services'
// import Pricing from './Pricing'
import PricingTabs from './Pricing'
import Client from '../Clients'
import Industries from './Industries'
import Reviews from './Reviews'
// import Banner from '../../image/Bulk Sms.png'
import Features from './Features'
// import FAQ from './Faq'
import BulkSmsHome from './BulkSmsHome'
import SocialMedia from '../SocialMedia'
import { bulkSmsData } from '../../Resources/FAQ/FaqData'
import FAQHome from '../../Resources/FAQ/FAQHome'
import { Helmet } from 'react-helmet'
const BulkSms = () => {
  return (
    <div>
      <Helmet>
  <title>A2ZSMS | Bulk SMS Service Provider for Businesses</title>
  <meta
    name="description"
    content="Boost your business communication with A2ZSMS's Bulk SMS service. Deliver messages efficiently, ensuring high reach and real-time engagement."
  />
  <meta
    name="keywords"
    content="Bulk SMS service, SMS marketing, business communication, mass messaging, A2ZSMS"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="A2ZSMS | Bulk SMS Service Provider for Businesses"
  />
  <meta
    property="og:description"
    content="Boost your business communication with A2ZSMS's Bulk SMS service. Deliver messages efficiently, ensuring high reach and real-time engagement."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/bulk-sms" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | Bulk SMS Service Provider for Businesses"
  />
  <meta
    name="twitter:description"
    content="Boost your business communication with A2ZSMS's Bulk SMS service. Deliver messages efficiently, ensuring high reach and real-time engagement."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/bulk-sms" />
</Helmet>

      {/* <img src={Banner}  width={'100%'} alt='Bulk sms banner'/> */}
      <Services/>
      <Client/>
      <PricingTabs/>
      <Reviews/>
      <BulkSmsHome/>
      <SocialMedia/>
      {/* <Home/> */}
      <Industries/>
      <Features/>
      <FAQHome data={bulkSmsData}/>
      {/* <FAQ/> */}
    </div>
  )
}

export default BulkSms

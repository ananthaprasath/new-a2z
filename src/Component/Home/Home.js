import React from 'react'
import Video from './Video'
import Content from './Content'
import AboutUs from './AboutUs'
import Testimonials from '../Company/Carrer/Testimonials'
import TrustedBrands from './TrustedBrands'
import SocialMedia from '../Product/SocialMedia'
import Industries from '../Product/BulkSms/Industries'
import Achievements from '../Resources/Services/Achievements'
import { whatsappFaqData } from '../Resources/FAQ/FaqData'
import FAQHome from '../Resources/FAQ/FAQHome'
import { Helmet } from 'react-helmet'
const Home = () => {
  return (
    <>
     <Helmet>
        <title>A2ZSMS | Bulk SMS & WhatsApp Messaging Solutions</title>
        <meta
          name="description"
          content='Discover reliable Bulk SMS and WhatsApp messaging services with A2ZSMS. Enhance your communication with efficient, targeted, and scalable solutions.'
        />
        <meta
          name="keywords"
          content="Bulk SMS service, WhatsApp messaging API, business communication solutions, SMS marketing"
        />
        <meta name="author" content="A2ZSMS" />
        <meta
          property="og:title"
          content="A2ZSMS | Bulk SMS & WhatsApp Messaging Solutions"
        />
        <meta
          property="og:description"
          content='Discover reliable Bulk SMS and WhatsApp messaging services with A2ZSMS. Enhance your communication with efficient, targeted, and scalable solutions.'
        />
        <meta property="og:image" content="URL-to-your-featured-image" />
        <meta property="og:url" content="https://www.a2zsms.in" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="A2ZSMS" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="A2ZSMS | Bulk SMS & WhatsApp Messaging Solutions"
        />
        <meta
          name="twitter:description"
          content='Discover reliable Bulk SMS and WhatsApp messaging services with A2ZSMS. Enhance your communication with efficient, targeted, and scalable solutions.'
        />
        <meta name="twitter:image" content="URL-to-your-featured-image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#007bff" />
        <link rel="canonical" href="https://www.a2zsms.in" />
      </Helmet>
    <Video/>
    <AboutUs/>
    <TrustedBrands/>
    <Content/>
    <SocialMedia/>
    <Industries/>
    <Achievements/>
    <Testimonials/>
    <FAQHome data={whatsappFaqData} />
    

    </>
  )
}

export default Home

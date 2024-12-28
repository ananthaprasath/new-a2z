import React from 'react';
import FAQHome from './FAQHome';
import { Whatsapp, voicecall,bulkSmsData,RcsData } from "./FaqData";
import { Helmet } from 'react-helmet'
const MainFaq =()=>{
    return(
        <>
        <Helmet>
  <title>A2ZSMS | Frequently Asked Questions (FAQ)</title>
  <meta
    name="description"
    content="Find answers to common questions about A2ZSMS's communication services, including Bulk SMS, WhatsApp Business API, and RCS messaging. Get detailed guidance here."
  />
  <meta
    name="keywords"
    content="A2ZSMS FAQ, Bulk SMS questions, WhatsApp Business API answers, RCS messaging help, communication services support"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="A2ZSMS | Frequently Asked Questions (FAQ)"
  />
  <meta
    property="og:description"
    content="Find answers to common questions about A2ZSMS's communication services, including Bulk SMS, WhatsApp Business API, and RCS messaging. Get detailed guidance here."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/faq/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | Frequently Asked Questions (FAQ)"
  />
  <meta
    name="twitter:description"
    content="Find answers to common questions about A2ZSMS's communication services, including Bulk SMS, WhatsApp Business API, and RCS messaging. Get detailed guidance here."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/faq/" />
</Helmet>

       <FAQHome data={Whatsapp}/>
       <FAQHome data={RcsData}/>
       <FAQHome data={voicecall}/>
       <FAQHome data={bulkSmsData}/>
        </>
    )
}

export default MainFaq
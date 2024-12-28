import React from 'react';
import Home from './Home';
import OurService from './OurServices';
import Achievements from './Achievements';
import Industries from '../../Product/BulkSms/Industries';
import Home1 from '../../Product/BulkSms/Home';
import Client from '../../Product/Clients';
import { Helmet } from 'react-helmet'
const Service =()=>{
    return(
        <>
         <Helmet>
  <title>A2ZSMS | Comprehensive Messaging & Communication Services</title>
  <meta
    name="description"
    content="Explore A2ZSMS's full range of services: Bulk SMS, WhatsApp Business API, RCS messaging, voice calls, and more. Tailored solutions for every industry."
  />
  <meta
    name="keywords"
    content="A2ZSMS services, Bulk SMS, WhatsApp Business, RCS messaging, business communication, tailored solutions"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="A2ZSMS | Comprehensive Messaging & Communication Services"
  />
  <meta
    property="og:description"
    content="Explore A2ZSMS's full range of services: Bulk SMS, WhatsApp Business API, RCS messaging, voice calls, and more. Tailored solutions for every industry."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/services/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | Comprehensive Messaging & Communication Services"
  />
  <meta
    name="twitter:description"
    content="Explore A2ZSMS's full range of services: Bulk SMS, WhatsApp Business API, RCS messaging, voice calls, and more. Tailored solutions for every industry."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/services/" />
</Helmet>

        {/* <h2>Service</h2> */}
        <Home/>
        <OurService/>
        <Achievements/>
        <Industries/>
        <Home1/>
        <Client/>



        </>
    )
}

export default Service
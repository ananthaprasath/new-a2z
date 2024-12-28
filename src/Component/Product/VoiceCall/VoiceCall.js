import React from 'react'
// import Banner1 from '../../image/Bulk Sms.png'
import Home from './Home'
import Details from './Details'
import Pricing from './Pricing'
import Client from '../Clients'
import SocialMedia from '../SocialMedia'
import FAQHome from '../../Resources/FAQ/FAQHome'
import { voicecall } from '../../Resources/FAQ/FaqData'
import { Helmet } from 'react-helmet'
// import Apisupport from '../Apisupport'
// import FAQ from './FAQ'

const VoiceCall = () => {
  return (
   <>
     <div>
       {/* <img src={Banner1} alt='Bulk Voice Call' width={'100%'} /> */}
     </div>
     <Helmet>
  <title>A2ZSMS | Bulk Voice Call Service for Businesses</title>
  <meta
    name="description"
    content="Enhance your business communication with A2ZSMS's Bulk Voice Call service. Deliver personalized voice messages to a large audience with ease."
  />
  <meta
    name="keywords"
    content="Bulk Voice Call service, voice message marketing, business communication, mass voice messaging, A2ZSMS"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="A2ZSMS | Bulk Voice Call Service for Businesses"
  />
  <meta
    property="og:description"
    content="Enhance your business communication with A2ZSMS's Bulk Voice Call service. Deliver personalized voice messages to a large audience with ease."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/voice-call" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | Bulk Voice Call Service for Businesses"
  />
  <meta
    name="twitter:description"
    content="Enhance your business communication with A2ZSMS's Bulk Voice Call service. Deliver personalized voice messages to a large audience with ease."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/voice-call" />
</Helmet>

     <Home/>
     <Details/>
     <Client/>
     <Pricing/>
     <SocialMedia/>
     <FAQHome data={voicecall}/>
     {/* <FAQ/> */}
   </>
  )
}

export default VoiceCall

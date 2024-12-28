import React from 'react'
import Home from './Home'
import Service from './Service'
import { Helmet } from 'react-helmet'
const Media = () => {
  return (
    <div>
      <Helmet>
  <title>A2ZSMS | WhatsApp Business for Media & Entertainment</title>
  <meta
    name="description"
    content="Elevate your media and entertainment outreach with A2ZSMS's WhatsApp Business services. Engage audiences with event promotions, updates, and interactive content."
  />
  <meta
    name="keywords"
    content="WhatsApp Business, media marketing, entertainment communication, audience engagement, A2ZSMS"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="A2ZSMS | WhatsApp Business for Media & Entertainment"
  />
  <meta
    property="og:description"
    content="Elevate your media and entertainment outreach with A2ZSMS's WhatsApp Business services. Engage audiences with event promotions, updates, and interactive content."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/media-entertainment/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | WhatsApp Business for Media & Entertainment"
  />
  <meta
    name="twitter:description"
    content="Elevate your media and entertainment outreach with A2ZSMS's WhatsApp Business services. Engage audiences with event promotions, updates, and interactive content."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/media-entertainment/" />
</Helmet>

      <Home/>
      <Service/>
    </div>
  )
}

export default Media

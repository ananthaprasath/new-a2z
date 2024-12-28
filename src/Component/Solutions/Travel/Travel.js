import React from 'react'
import Home from './Home'
import Service from './Service'
import { Helmet } from 'react-helmet'
const Travel = () => {
  return (
    <div>
      <Helmet>
  <title>A2ZSMS | WhatsApp Business for Tours & Travels</title>
  <meta
    name="description"
    content="Enhance your tours and travel business with A2ZSMS's WhatsApp Business services. Engage customers with travel updates, bookings, and promotions."
  />
  <meta
    name="keywords"
    content="WhatsApp Business, travel agency, customer engagement, travel bookings, A2ZSMS"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="A2ZSMS | WhatsApp Business for Tours & Travels"
  />
  <meta
    property="og:description"
    content="Enhance your tours and travel business with A2ZSMS's WhatsApp Business services. Engage customers with travel updates, bookings, and promotions."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/tours-travel/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | WhatsApp Business for Tours & Travels"
  />
  <meta
    name="twitter:description"
    content="Enhance your tours and travel business with A2ZSMS's WhatsApp Business services. Engage customers with travel updates, bookings, and promotions."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/tours-travel/" />
</Helmet>

      <Home/>
      <Service/>
    </div>
  )
}

export default Travel

import React from 'react'
import Home from './Home'
import Services from './Services'
import { Helmet } from 'react-helmet'

const RealEstate = () => {
  return (
    <div>
      <Helmet>
  <title>A2ZSMS | WhatsApp Business for Real Estate</title>
  <meta
    name="description"
    content="Boost your real estate business with A2ZSMS's WhatsApp Business services. Engage clients and prospects with automated messages, property updates, and more."
  />
  <meta
    name="keywords"
    content="WhatsApp Business, real estate marketing, property updates, customer engagement, A2ZSMS"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="A2ZSMS | WhatsApp Business for Real Estate"
  />
  <meta
    property="og:description"
    content="Boost your real estate business with A2ZSMS's WhatsApp Business services. Engage clients and prospects with automated messages, property updates, and more."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/real-estate/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="A2ZSMS | WhatsApp Business for Real Estate"
  />
  <meta
    name="twitter:description"
    content="Boost your real estate business with A2ZSMS's WhatsApp Business services. Engage clients and prospects with automated messages, property updates, and more."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/real-estate/" />
</Helmet>

      <Home/>
      <Services/>
    </div>
  )
}

export default RealEstate

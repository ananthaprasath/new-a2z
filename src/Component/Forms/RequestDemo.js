import React from "react";
import FormComponent from "./FormComponent";
import Timeline from "./TimeLine";
import { Helmet } from 'react-helmet'
const RequestDemo = () => {
  const onFinish = (values) => {
    console.log("Request Demo Form values:", values);
  };

  return (
    <>
    <Helmet>
  <title>Request a Demo - A2ZSMS SMS, WhatsApp & Voice Solutions</title>
  <meta
    name="description"
    content="Schedule a demo with A2ZSMS and discover how our SMS, WhatsApp, and voice call solutions can transform your business communication."
  />
  <meta
    name="keywords"
    content="A2ZSMS, request demo, bulk SMS, WhatsApp API, voice calls"
  />
  <meta name="author" content="A2ZSMS" />
  <meta
    property="og:title"
    content="Request a Demo - A2ZSMS SMS, WhatsApp & Voice Solutions"
  />
  <meta
    property="og:description"
    content="Schedule a demo with A2ZSMS and discover how our SMS, WhatsApp, and voice call solutions can transform your business communication."
  />
  <meta property="og:image" content="URL-to-your-featured-image" />
  <meta property="og:url" content="https://www.a2zsms.in/request-demo/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="A2ZSMS" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Request a Demo - A2ZSMS SMS, WhatsApp & Voice Solutions"
  />
  <meta
    name="twitter:description"
    content="Schedule a demo with A2ZSMS and discover how our SMS, WhatsApp, and voice call solutions can transform your business communication."
  />
  <meta name="twitter:image" content="URL-to-your-featured-image" />
  <meta name="twitter:site" content="@yourtwitterhandle" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#007bff" />
  <link rel="canonical" href="https://www.a2zsms.in/request-demo/" />
</Helmet>

      <Timeline />
      <div className="container py-5 w-50 mx-auto">
        <FormComponent
          title="Request Your Demo"
          buttonText="Request Demo"
          onFinish={onFinish}
        />
      </div>
    </>
  );
};

export default RequestDemo;

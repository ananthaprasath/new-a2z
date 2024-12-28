// src/SchemaMarkup.js
import React from "react";
import { Helmet } from "react-helmet";
import { A2ZSMS_Service } from './Schema/HomeSchema';
import { FAQ } from "./Schema/FaqSchema";
import { Breadcrumb } from './Schema/BreadCrumb';
import { Organization } from "./Schema/Organization";
import { Website_Schema } from "./Schema/Website";
 
const SchemaMarkup = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(A2ZSMS_Service, null, 2)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(FAQ, null, 2)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(Breadcrumb, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(Organization, null, 2)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(Website_Schema, null, 2)}
      </script>

      
    </Helmet>
  );
};
 
export default SchemaMarkup;
 
 
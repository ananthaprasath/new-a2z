import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./custom.css";
import SchemaMarkup from "../../SchemaMarkup";
// import SchemaMarkup from "../../Schema/SchemaMarkup";
const Layout = () => {
  return (
    <div>
      <Header />
      <SchemaMarkup/>
      <Footer />
    </div>
  );
};

export default Layout;

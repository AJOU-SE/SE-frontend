import React from "react";
import Header from "./Header";
import Nav from "./TopNav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

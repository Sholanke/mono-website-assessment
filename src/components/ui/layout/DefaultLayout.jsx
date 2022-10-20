import React, { useState } from "react";
import Footer from "../organisms/footer/Footer";
import NavigationBar from "../organisms/navigationBar/NavigationBar";
import PageLoader from "../organisms/pageLoader/PageLoader";

export default function DefaultLayout({ children, onPageLoad }) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
      <PageLoader {...{ onPageLoad }} />
    </>
  );
}

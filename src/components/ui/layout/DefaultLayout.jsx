import React from "react";
import Footer from "../organisms/footer/Footer";
import NavigationBar from "../organisms/navigationBar/NavigationBar";
import PageLoader from "../organisms/pageLoader/PageLoader";
import AOS from "aos";

export default function DefaultLayout({ children, onPageLoad }) {
  const _onPageLoad = () => {
    AOS.init({
      once: true,
    });
    onPageLoad();
  };

  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
      <PageLoader {...{ onPageLoad: _onPageLoad }} />
    </>
  );
}

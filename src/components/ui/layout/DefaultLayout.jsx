import React from "react";
import NavigationBar from "../organisms/navigationBar/NavigationBar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}

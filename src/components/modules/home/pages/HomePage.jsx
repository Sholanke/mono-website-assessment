import React from "react";
import DefaultLayout from "../../../ui/layout/DefaultLayout";
import HomeHero from "../components/HomeHero";
import "./index.scss";

export default function HomePage() {
  return (
    <DefaultLayout>
      <HomeHero />
    </DefaultLayout>
  );
}

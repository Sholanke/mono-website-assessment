import React, { useState } from "react";
import DefaultLayout from "../../../ui/layout/DefaultLayout";
import HomeApi from "../components/HomeApi";
import HomeBusinesses from "../components/HomeBusinesses";
import HomeFeatures from "../components/HomeFeatures";
import HomeHero from "../components/HomeHero";
import HomeIntegration from "../components/HomeIntegration";
import HomeAccounts from "../components/HomeAccounts";
import "./index.scss";
import HomePerformance from "../components/HomePerformance";
import HomeGetStarted from "../components/HomeGetStarted";

const INTEGRATE_CONNECT_WIDGET = [
  {
    title: "Integrate the Connect Widget",
    screen: "https://mono.co/images/steps-screens/connect-api-screen-1a.png",
    code: `
  const connect = new Connect({
    key: 'mono_public_key',
    onSuccess: ({code}) => console.log("code", code),
    onEvent: (eventName, data) => {
      console.log({
        eventName,
        data
      })
    }
  });
  
  connect.setup();
  connect.open();`,
  },
  {
    title: "User initiates account linking",
    screen: "https://mono.co/images/steps-screens/connect-api-screen-1b.png",
    code: `
    // Incoming event
    {
      eventName: "OPENED",
      data: {
        reference: "ref-code-xyz",
        timestamp: 1234567890
      }
    }`,
  },
  {
    title: "User selects bank and securely logs in",
    screen: "https://mono.co/images/steps-screens/connect-api-screen-2b.png",
    code: `
    // Incoming event
    {
      eventName: "INSTITUTION_SELECTED",
      data: {
        reference: "ref-code-xyz",
        authMethod: "internet_banking",
        institution: {
          id: "66059eO033be88012",
          name: "GTBank"
        },
        timestamp: 1234567890,
      }
    }
    
    // Incoming event
    {
      eventName: "SUBMIT_CREDENTIALS",
      data: {
        reference: "ref-code-xyz",
        timestamp: 1234567890
      }
    }`,
  },
  {
    title: "User's account is successfully connected",
    screen: "https://mono.co/images/steps-screens/connect-api-screen-3.png",
    code: `
    // Next event
    {
      eventName: "ACCOUNT_LINKED",
      data: {
        reference: "ref-code-xyz",
        timestamp: 1234567890
      }
    }`,
  },
];

const STATEMENT_PAGES = [
  {
    title: "Create and share a Statement Page link",
    screen:
      "https://mono.co/_next/image?url=https%3A%2F%2Fmonoassets.com%2Ff%2F118499%2F2200x1300%2F79510ea215%2Fstatement-page-step-1.png&w=3840&q=75",
  },
  {
    title: "The user clicks and shares contact details",
    screen: "/assets/images/bank-statement.gif",
  },
  {
    title: "The user selects bank and securely logs in",
    screen: "/assets/images/select-bank.gif",
  },
  {
    title: "Statements are instantly fetched and shared",
    screen: "/assets/images/linkage-success.gif",
  },
];

export default function HomePage() {
  const [pageLoaded, setPageLoaded] = useState(false);

  return (
    <DefaultLayout onPageLoad={() => setPageLoaded(true)}>
      <HomeHero {...{ pageLoaded }} />
      <HomeBusinesses />
      <HomeFeatures />
      <HomeIntegration steps={INTEGRATE_CONNECT_WIDGET} />
      <HomeApi />
      <HomeIntegration steps={STATEMENT_PAGES} bannerStyle />
      <HomeAccounts />
      <HomePerformance />
      <HomeGetStarted />
    </DefaultLayout>
  );
}

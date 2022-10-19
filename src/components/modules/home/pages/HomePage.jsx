import React from "react";
import DefaultLayout from "../../../ui/layout/DefaultLayout";
import HomeApi from "../components/HomeApi";
import HomeBusinesses from "../components/HomeBusinesses";
import HomeFeatures from "../components/HomeFeatures";
import HomeHero from "../components/HomeHero";
import HomeIntegration from "../components/HomeIntegration";
import "./index.scss";

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

export default function HomePage() {
  return (
    <DefaultLayout>
      <HomeHero />
      <HomeBusinesses />
      <HomeFeatures />
      <HomeIntegration steps={INTEGRATE_CONNECT_WIDGET} />
      <HomeApi />
    </DefaultLayout>
  );
}

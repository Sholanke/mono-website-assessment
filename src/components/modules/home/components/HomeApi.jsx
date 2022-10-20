import React from "react";
import { SvgExternal } from "../../../ui/icons";

const API_FEATURES = [
  {
    title: "Accounts",
    description:
      "Retrieve account holder's full name, account type, account number, balance, currency, and more.",
  },
  {
    title: "Transactions",
    description:
      "Retrieve real-time transaction data from connected financial accounts with the Transactions endpoint.",
  },
  {
    title: "Balance",
    description:
      "Retrieve real-time account balances and currency information from connected financial accounts.",
  },
  {
    title: "Statements",
    description:
      "Retrieve bank statements from 1 to 12 months from connected accounts using the Statements endpoint.      ",
  },
  {
    title: "Income",
    description:
      "Retrieve account holder income values and type from connected accounts in real-time.",
  },
  {
    title: "Identity",
    description:
      "Retrieve account holder's identity information like full name, BVN, date of birth, phone number and more.",
  },
];

export default function HomeApi() {
  return (
    <div className="section-container home-page__api">
      <div className="section-container__content">
        <h3 className="home-page__api__title" data-aos="fade-up">
          Fetching financial data after account linking
        </h3>
        <p className="home-page__api__description" data-aos="fade-up">
          We've built comprehensive API endpoints to retrieve financial data
          from your customers' bank accounts
        </p>

        <a href="/" className="base-button--link" data-aos="fade-up">
          See API Docs <SvgExternal />
        </a>

        <div className="home-page__api__features">
          {API_FEATURES?.map((feature, i) => (
            <div className="home-page__api__feature" data-aos="fade-up" key={i}>
              <h3>{feature?.title}</h3>
              <p>{feature?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

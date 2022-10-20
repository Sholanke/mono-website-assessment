import React from "react";
import SvgExternal from "../../../ui/icons/SvgExternal";

export default function HomeAccounts() {
  return (
    <div className="section-container home-page__connected-accounts">
      <div className="section-container__content ">
        <h1 className="home-page__connected-accounts__title">
          We've securely connected over 400k+ accounts
        </h1>
        <p className="home-page__connected-accounts__description">
          With Mono Connect, your users can securely link their financial
          accounts to your app in seconds. You get real-time account information
          on balances, transactions, and identity.
        </p>

        <a href="/" className="base-button--link">
          See API Docs <SvgExternal />
        </a>
      </div>

      <img
        data-animation="opacity: { -100vh: 0, -50vh: 1 }, transform: { -100vh: scale(2), -30vh: scale(1.1) }"
        className="home-page__connected-accounts__banner"
        src="/assets/images/mono-connected-accounts.webp"
        alt="connected accounts"
      />
    </div>
  );
}

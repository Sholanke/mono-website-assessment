import React from "react";
import HomeHeroIllustration from "./HomeHeroIllustration";

export default function HomeHero() {
  return (
    <div className="section-container">
      <div className="home-page__hero section-container__content">
        <div className="home-page__hero__text">
          <h1>Access real-time financial data</h1>
          <p>
            Securely access your customers' bank statements, transactions,
            income, identity, and much more.
          </p>
          <div className="home-page__hero__actions">
            <button className="base-button--primary">
              Get started with connect
            </button>
            <button className="base-button--secondary">Contact Sales</button>
          </div>
        </div>
        <div className="home-page__hero__illustration">
          <HomeHeroIllustration />
        </div>
      </div>
    </div>
  );
}

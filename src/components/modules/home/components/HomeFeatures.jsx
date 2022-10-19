import React from "react";

const FEATURES = [
  {
    src: "https://monoassets.com/f/118499/x/0ce5596f65/group-305.svg",
    title: "Customizable",
    description:
      "Customize the Mono Connect widget and features to match your brand and user journeys",
  },
  {
    src: "https://monoassets.com/f/118499/x/2d657f84b0/icon_secure-and-reliable.svg",
    title: "Secure",
    description:
      "Mono connect uses bank-grade security encryption to safeguard your customer's information.",
  },
  {
    src: "https://monoassets.com/f/118499/x/36800c0840/icon_enriched-data.svg",
    title: "Customizable",
    description:
      "Retrieve cleaned and categorized financial data so you can extract insights and value in real-time.",
  },
];

export default function HomeFeatures() {
  return (
    <div className="section-container home-page__home-features">
      <div className="section-container__content">
        <h1>Features</h1>

        <div className="home-page__home-features__features-list">
          {FEATURES?.map((feature, i) => (
            <div className="home-page__home-features__feature" key={i}>
              <img src={feature.src} alt="feature icon" />

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

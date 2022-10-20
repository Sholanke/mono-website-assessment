import React from "react";
import { SvgExternal } from "../../../ui/icons";

const POINTS = [
  {
    src: "https://monoassets.com/f/118499/x/caeebb4623/icon_view-analytics-copy-2.svg",
    title: "View Analytics",
    description:
      "Track financial account linking, webhook, and API logs, and view success rates all in one place.",
  },
  {
    src: "https://monoassets.com/f/118499/x/72bed61bf5/icon_account-insights.svg",
    title: "Get account insights",
    description:
      "Access detailed balance, transaction, and identity data from linked accounts per user.",
  },
  {
    src: "https://monoassets.com/f/118499/x/b0986ccb23/icon_talk-to-support.svg",
    title: "Get support",
    description:
      "Get prompt and helpful support right on the dashboard; have an instant chat to get assistance.",
  },
];

export default function HomePerformance() {
  return (
    <div className="section-container home-page__performance">
      <div className="section-container__content">
        <h1 className="home-page__performance__title" data-aos="fade-up">
          Manage performance on the Mono Dashboard
        </h1>
        <a href="/" className="base-button--link" data-aos="fade-up">
          Create an account <SvgExternal />
        </a>

        <div className="home-page__performance__points">
          {POINTS?.map((point, i) => (
            <div
              className="home-page__performance__points__point"
              key={i}
              data-aos="fade-up"
            >
              <img src={point?.src} alt={point?.title} />
              <h3>{point?.title}</h3>
              <p>{point?.description}</p>
            </div>
          ))}
        </div>

        <img
          className="home-page__performance__banner"
          src="https://monoassets.com/f/118499/2200x1200/10fd57c6fa/connect-dash-screen.png"
          alt="mono dashboard"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
}

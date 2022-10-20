import React from "react";
import SvgRight from "../../icons/SvgRight";
import "./index.scss";

const FOOTER_LINKS = [
  {
    title: "Products",
    links: [
      { label: "Connect", link: "/" },
      { label: "Statement Pages", link: "/" },
      { label: "DirectPay", link: "/" },
      { label: "DirectPay Pages", link: "/" },
      { label: "Portal", link: "/" },
      { label: "Transactions", link: "/" },
      { label: "Income", link: "/" },
      { label: "Information", link: "/" },
      { label: "Data Sync", link: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Developer", link: "/" },
      { label: "Documentation", link: "/" },
      { label: "Api references", link: "/" },
      { label: "SDKs", link: "/" },
      { label: "Demo", link: "/" },
      { label: "Join Slack", link: "/" },
      { label: "Consumers", link: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", link: "/" },
      { label: "Partner Stories", link: "/" },
      { label: "Blog", link: "/" },
      { label: "Coverage", link: "/" },
      { label: "Careers", link: "/" },
      { label: "Contact", link: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "End-User Policy", link: "/" },
      { label: "Privacy Policy", link: "/" },
      { label: "Developer Policy", link: "/" },
      { label: "Terms of Use", link: "/" },
      { label: "Cookies", link: "/" },
      { label: "Security", link: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="section-container footer">
      <div className="section-container__content">
        <div className="footer__start-building">
          <h3>Start Building with mono</h3>
          <p>
            Access high-quality financial data and start processing payments
            directly from bank accounts in minutes.
          </p>

          <div className="footer__start-building__btn-holder">
            <button className="base-button--primary">
              Start now for Free <SvgRight />
            </button>
            <button className="base-button--secondary">
              Talk to sales
              <SvgRight />
            </button>
          </div>
        </div>

        <footer>
          <ul className="footer__links">
            {FOOTER_LINKS?.map((section) => (
              <li>
                <p>{section.title}</p>

                <ul className="footer__links__content">
                  {section?.links?.map((link) => (
                    <li className="footer__links__content__link">
                      <a href="/">{link.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          
          <div className="footer__base">
            <div className="footer__base__logo-container">
              <img
                src="https://monoassets.com/f/118499/x/8594c87134/footer-logo.svg"
                alt="mono logo"
              />
              <p>© Mono Technologies Nigeria Limited</p>
            </div>

            <div className="footer__base__links">
              <a href="/" className="base-button--link">
                <img
                  src="https://monoassets.com/f/118499/x/afba8741a5/vector-1.svg"
                  alt="twitter icon"
                />
                Twitter
              </a>
              <a href="/" className="base-button--link">
                <img
                  src="https://monoassets.com/f/118499/x/afba8741a5/vector-1.svg"
                  alt="linkedIn icon"
                />
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

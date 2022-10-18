import React from "react";
import "./index.scss";

export default function NavigationBar() {
  return (
    <nav className="navigation-bar section-container">
      <div className="navigation-bar__content section-container__content">
        <img src="/assets/svg/logo.svg" alt="" srcset="" />

        <div className="navigation-bar__links">
          <button className="base-button--clear">Why Mono</button>
          <button className="base-button--clear">Products</button>
          <button className="base-button--clear">Learn</button>
          <button className="base-button--clear">Developers</button>
        </div>

        <a href="/" className="base-button--primary">
          Create free account
        </a>
      </div>
    </nav>
  );
}

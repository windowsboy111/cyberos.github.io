import React from "react";
import "./heading.css";
import CyberLogo from "./images/cyber-logo.svg";
import getLanguageKey from "./Translations";
import Hamburger from "./Hamburger";

export default class Heading extends React.Component {
  render() {
    return (
      <div className="website-header">
        <p className="website-header-text">
          <img className="header-cyber-logo" src={CyberLogo} />
          CyberOS
        </p>

        <Hamburger>
          <a className="header-button" href="https://dir.omame.tech/cyberos-iso/">
            {getLanguageKey("download")}
          </a>
          <a className="header-button" href="https://github.com/cyberos">
            GitHub
          </a>
          <a className="header-button" href="/docs/">
            {getLanguageKey("docs")}
          </a>
        </Hamburger>
      </div>
    );
  }
}

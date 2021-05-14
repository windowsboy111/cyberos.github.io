import React from "react";
import "./heading.css";
import CyberLogo from "./images/cyber-logo.svg";
import getLanguageKey from "./Translations";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

export default class Heading extends React.Component {
  render() {
    return (
      <div className="website-header">
        <p className="website-header-text">
          <Link to="/">
            <img className="header-cyber-logo" alt="CyberOS" src={CyberLogo} />
            CyberOS
          </Link>
        </p>

        <Hamburger>
          <Link to="/about" className="header-button">
            {getLanguageKey("about")}
          </Link>
          <a
            className="header-button"
            href="https://dir.omame.tech/mirrors/cyberos/iso/latest/"
          >
            {getLanguageKey("download")}
          </a>
          <a
            className="header-button"
            href="https://twitter.com/CyberOS_Linux"
          >
            Twitter
          </a>
          <a
            className="header-button"
            href="https://discord.gg/WjHFeCuHHX"
          >
            Discord
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

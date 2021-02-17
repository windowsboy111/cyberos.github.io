import React from "react";
import "./heading.css";
import CyberLogo from "./images/cyber-logo.svg";

export default class Heading extends React.Component {
  render() {
    return (
      <div className="website-header">
        <h1 className="website-header-text">
          <img className="header-cyber-logo" src={CyberLogo} />
          CyberOS
        </h1>
      </div>
    );
  }
}

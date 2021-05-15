import React from "react";
import getLanguageKey from "./Translations";
import GitHubLink from "./GitHubLink";
import "./about.css";

export default class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <h1>{getLanguageKey("aboutCyberOS")}</h1>
        <p>{getLanguageKey("about-p1")}</p>
        <h2>{getLanguageKey("about-socialMedia")}</h2>
        <p>{getLanguageKey("about-p2")}{" "}
          <a href="https://twitter.com/CyberOS_Linux">Twitter</a>,{" "}
          <a href="https://discord.gg/WjHFeCuHHX">Discord</a>
        </p>
        <h2>{getLanguageKey("about-CyberOSTeam")}</h2>
        <ul>
          <GitHubLink username="ChungZH">Flex Zhong</GitHubLink>
          <GitHubLink username="felixonmars">Felix Yan</GitHubLink>
          <GitHubLink username="omaemae">omame</GitHubLink>
          <GitHubLink username="probonopd">Simon Peter</GitHubLink>
          <GitHubLink username="rekols">Reven Martin</GitHubLink>
          <GitHubLink username="Z-bin" usernameOnly />
        </ul>
      </div>
    );
  }
}

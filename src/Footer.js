import React from "react";
import getLanguageKey from "./Translations";
import { isDarkMode } from "./ThemeMode";
import "./footer.css";

export default class Footer extends React.Component {
  render() {
    let wipDisclaimerHTML = getLanguageKey("wipDisclaimer")
      .replace("[", '<a href="https://github.com/cyberos/cyberos.github.io">')
      .replace("]", "</a>");
    let widgetColor = isDarkMode() ? "black" : "white";
    return (
      <div className="footer-container">
        <div className="footer-content">
          <p>
            <a href="https://hosted.weblate.org/engage/cyberos/">
              <img
                src={`https://hosted.weblate.org/widgets/cyberos/-/287x66-${widgetColor}.png`}
              />
            </a>
          </p>
          <p className="footer-copyright-notice">
            {getLanguageKey("footerCopyright")}
          </p>
          <p
            className="footer-copyright-notice"
            dangerouslySetInnerHTML={{ __html: wipDisclaimerHTML }}
          ></p>
        </div>
      </div>
    );
  }
}

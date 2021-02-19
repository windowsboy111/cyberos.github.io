import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import getLanguageKey from "./Translations";
import { isDarkMode } from "./ThemeMode";
import PreviewImageLight from "./images/preview_light.png";
import PreviewImageDark from "./images/preview_dark.png";

export default class Website extends React.Component {
  render() {
    let previewImage = isDarkMode() ? PreviewImageDark : PreviewImageLight;
    return (
      <div className="website-root">
        <Heading />
        <div className="website-content">
          <center>
            <h1>{getLanguageKey("introQuote")}</h1>
            <div className="button-container">
              <a className="button" href="https://dir.omame.tech/cyberos-iso/">
                {getLanguageKey("download")}
              </a>
              <a className="button" href="https://github.com/cyberos">
                GitHub
              </a>
              <a className="button" href="/docs/">
                {getLanguageKey("docs")}
              </a>
            </div>
            <div className="preview-image-container">
              <a href={previewImage}>
                <img className="preview-image" src={previewImage}></img>
              </a>
            </div>
          </center>
        </div>
        <Footer />
      </div>
    );
  }
}

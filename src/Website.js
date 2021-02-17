import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import getLanguageKey from "./Translations";
import PreviewImage from "./images/preview.png";

export default class Website extends React.Component {
  render() {
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
            </div>
            <img className="preview_image" src={PreviewImage}></img>
          </center>
        </div>
        <Footer />
      </div>
    );
  }
}

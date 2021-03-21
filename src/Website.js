import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import getLanguageKey from "./Translations";
import { isDarkMode } from "./ThemeMode";
import PreviewImageLight from "./images/preview_light.png";
import PreviewImageDark from "./images/preview_dark.png";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Website extends React.Component {
  render() {
    let previewImage = isDarkMode() ? PreviewImageDark : PreviewImageLight;
    return (
      <div className="website-root">
        <Router>
          <Heading />
          <div className="website-content">
            <Switch>
              <Route path="/about">
                <div>
                  <h1>insert about page here</h1>
                </div>
              </Route>
              <Route path="/">
                <center>
                  <h1>{getLanguageKey("introQuote")}</h1>
                  <div className="preview-image-container">
                    <a href={previewImage}>
                      <img className="preview-image" src={previewImage}></img>
                    </a>
                  </div>
                </center>
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

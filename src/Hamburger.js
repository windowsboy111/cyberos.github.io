import React from "react";
import { isDarkMode } from "./ThemeMode";
import iconLight from "./images/hamburger-light.svg";
import iconDark from "./images/hamburger-dark.svg";

export default class Hamburger extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  toggleHamburgerMenu() {
    this.setState({ open: !this.state.open });
  }

  render() {
    if (window.innerWidth > window.innerHeight) {
      // Horizontal, no hamburger menu.
      return (
        <div className="header-button-container">{this.props.children}</div>
      );
    }
    // Vertical, hamburger menu.
    return (
      <div className="header-button-container">
        <button
          className="header-button-hamburger"
          onClick={() => this.toggleHamburgerMenu()}
        >
          <img src={isDarkMode() ? iconDark : iconLight} />
        </button>
        <div
          className={`header-hamburger-button-container ${
            this.state.open ? "shown" : ""
          }`}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

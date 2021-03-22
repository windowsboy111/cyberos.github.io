import React from "react";

export default class GitHubLink extends React.Component {
  render() {
    if (!this.props.usernameOnly) {
      return (
        <li>
          {this.props.children} (
          <a href={`https://github.com/` + this.props.username}>
            @{this.props.username}
          </a>
          )
        </li>
      );
    } else {
      return (
        <li>
          <a href={`https://github.com/` + this.props.username}>
            @{this.props.username}
          </a>
        </li>
      );
    }
  }
}

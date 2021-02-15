import React from 'react';
import './heading.css';
import CyberLogo from './cyber-logo.svg';

export default class Heading extends React.Component {
    render() {
        return (
            <div class="website-header">
                <h1 class="website-header-text">
                    <img className="header-cyber-logo" src={CyberLogo} />
                    CyberOS
                </h1>
            </div>
        );
    }
}

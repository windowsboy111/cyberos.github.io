import React from 'react';
import Heading from './Heading';

export default class Website extends React.Component {
    render() {
        return (
            <div className="website-root">
                <Heading />
                <div className="website-content">
                    <center>
                        <h2>A Linux distribution built with Qt Quick and Arch Linux.</h2>
                        <p>
                            <a className="button" href="https://dir.omame.tech/cyberos-iso/">Download</a>
                            <a className="button" href="https://github.com/cyberos">GitHub</a>
                        </p>
                        <p className="disabled large-margin-top">Psst, this website is a work-in-progress. You can help by <a href="https://github.com/cyberos/cyberos.github.io">sending a pull request</a>.</p>
                    </center>
                </div>
            </div>
        );
    }
}


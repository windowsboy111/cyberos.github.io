import React from 'react';
import Heading from './Heading';

class Website extends React.Component {
    render() {
        return (
            <div className="website-root">
                <Heading />
                <div className="website-content">
                    <center>
                        <h2>A Linux distribution built with Qt Quick and Arch Linux.</h2>
                        <a className="button" href="https://dir.omame.tech/cyberos-iso/">Download</a>
                        <p className="disabled large-margin-top">Psst, this website is a work-in-progress. You can help by <a href="https://github.com/cyberos/cyberos.github.io">sending a pull request</a>.</p>
                    </center>
                </div>
            </div>
        );
    }
}

export default Website;

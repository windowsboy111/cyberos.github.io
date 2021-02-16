import React from 'react';
import Heading from './Heading';
import getLanguageKey from './Translations';

export default class Website extends React.Component {
    render() {
        let wipDisclaimerHTML = getLanguageKey("wipDisclaimer")
            .replace("[", '<a href="https://github.com/cyberos/cyberos.github.io">')
            .replace("]", '</a>');
        return (
            <div className="website-root">
                <Heading />
                <div className="website-content">
                    <center>
                        <h2>{getLanguageKey("introQuote")}</h2>
                        <p>
                            <a className="button" href="https://dir.omame.tech/cyberos-iso/">{getLanguageKey("download")}</a>
                            <a className="button" href="https://github.com/cyberos">GitHub</a>
                        </p>
                        <p className="disabled large-margin-top" dangerouslySetInnerHTML={{__html: wipDisclaimerHTML}}></p>
                    </center>
                </div>
            </div>
        );
    }
}

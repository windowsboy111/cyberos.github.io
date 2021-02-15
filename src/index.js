import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Website from './Website';

ReactDOM.render(
    <React.StrictMode>
        <Website />
    </React.StrictMode>,
    document.getElementById('root')
);

let defaultMode = 'light';
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    defaultMode = 'dark';
}
document.getElementById('root').classList.add(`${defaultMode}-mode`);

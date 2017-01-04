import 'babel-polyfill'; // eslint-disable-line
import React from 'react';
import { render } from 'react-dom';

import App from './containers/App';

if (!window.document.querySelector('[id=app]')) {
    const appTarget = window.document.createElement('div');
    appTarget.id = 'app';
    window.document.body.append(appTarget);
}

render(<App />, window.document.querySelector('[id=app]'));

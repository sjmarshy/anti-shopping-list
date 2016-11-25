import 'babel-polyfill'; // eslint-disable-line
import React from 'react';
import { render } from 'react-dom';

import App from './containers/App';

render(<App />, window.document.querySelector('[id=app]'));

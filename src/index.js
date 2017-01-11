import 'babel-polyfill'; // eslint-disable-line
import { render, h }  from 'preact'; // eslint-disable-line
import App from './containers/App';

render(<App />, window.document.body);


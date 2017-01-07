import 'babel-polyfill'; // eslint-disable-line
import { render, h }  from 'preact'; // eslint-disable-line

if (!window.document.querySelector('[id=app]')) {
    const appTarget = window.document.createElement('div');
    appTarget.id = 'app';
    window.document.body.append(appTarget);
}

render(<App />, window.document.querySelector('[id=app]'));


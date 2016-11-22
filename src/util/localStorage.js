import compose from './compose';

let localStorage; // eslint-disable-line

try {
    localStorage = window.localStorage;
} catch (e) {
    localStorage = { getItem: () => {}, setItem: () => {} };
}

export default localStorage;

export const getItemAndParse = compose(JSON.parse, localStorage.getItem);

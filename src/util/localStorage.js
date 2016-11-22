import compose from './compose';

let localStorage; // eslint-disable-line

try {
    localStorage = window.localStorage;
} catch (e) {
    localStorage = { getItem: () => {}, setItem: () => {} };
}

export default localStorage;

// the best thing about this, is it gets called in an `effect` - it never gets
// directly run - so if there's a JSON parse error it'll end up in a catch
export const getItemAndParse = compose(JSON.parse, localStorage.getItem);

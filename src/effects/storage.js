import localStorage, { getItemAndParse } from '../util/localStorage';
import { effect } from '../util/effect';

export function set(key, val) {
    return effect(localStorage.setItem.bind(localStorage), [key, JSON.stringify(val)]);
}

export function get(key) {
    return effect(getItemAndParse, [key]);
}

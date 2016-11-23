import test from 'tape'; // eslint-disable-line

import localStorage, { getItemAndParse } from '../util/localStorage';
import { set, get } from './storage';
import { effect } from '../util/effect';

test('storage.set', (t) => {
    t.test('should call localStorage.setItem', (tt) => {
        const key = 'hey';
        const val = 389;
        const expected = effect(localStorage.setItem.bind(localStorage), [key, val.toString()]);
        const actual = set(key, val);

        tt.deepEqual(actual.args, expected.args, 'set should call localStorage.setItem');
        tt.end();
    });

    t.test('should stringify objects', (tt) => {
        const key = 'test';
        const obj = { one: 1 };
        const expected = effect(localStorage.setItem.bind(localStorage), [key, '{"one":1}']);
        const actual = set(key, obj);

        tt.deepEqual(actual.args, expected.args);
        tt.end();
    });

    t.end();
});

test('storage.get', (t) => {
    t.test('should call localStorage.getItem', (tt) => {
        const key = 'oneTwo';
        const expected = effect(getItemAndParse, [key]);
        const actual = get(key);

        tt.deepEqual(actual, expected);
        tt.end();
    });
});

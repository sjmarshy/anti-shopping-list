import test from 'tape'; // eslint-disable-line

import { shoppinglistContainsItem } from './shoppinglist';

test('shoppinglistContainsItem', (t) => {
    const expected = true;
    const actual = shoppinglistContainsItem([{ link: 'abc' }], 'abc');

    t.equal(actual, expected);

    const expected2 = false;
    const actual2 = shoppinglistContainsItem([{ link: 'abc' }], 'def');

    t.equal(actual2, expected2);

    t.end();
});

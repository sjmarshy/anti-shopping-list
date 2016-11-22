import test from 'tape'; // eslint-disable-line

import compose from './compose';

test('compose', (t) => {
    t.test('should compose two functions together, rtl', (tt) => {
        const f1 = n => n + 1;
        const f2 = n => n * 2;
        const arg = 2;
        const expected = 5;
        const actual = compose(f1, f2)(arg);

        tt.equal(actual, expected);
        tt.end();
    });
    t.end();
});

import test from 'tape';
import { effect, call } from './effect.js';

test('effect', t => {

    (function () {
        const args = ['one', 'two', 'three'];
        const expected = {
            type: 'EFFECT',
            fn: console.log,
            args
        };
        const actual = effect(console.log, args);

        t.deepEqual(actual, expected, 'effect should return an object describing the effect to be run');
    })();

    (function () {

        const args = [1, 2];
        const expected = 3;
        const eff = effect((a, b) => a + b, args);
        const p = call(eff);

        p.then(actual => {
            t.equal(actual, expected, 'call should run the effect, returning a promise that resolves to the value');
        });
    })();

    t.end();
});

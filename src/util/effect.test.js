/* eslint import/no-extraneous-dependencies: 0, func-names: 0, no-console: 0 */
import test from 'tape';
import { effect, call } from './effect';

test('effect', (t) => {
  (function () {
    const args = ['one', 'two', 'three'];
    const expected = {
      type: 'EFFECT',
      fn: console.log,
      args,
    };
    const actual = effect(console.log, args);

    t.deepEqual(actual, expected, 'effect should return an object describing the effect to be run');
  }());

  (async function () {
    const args = [1, 2];
    const expected = 3;
    const eff = effect((a, b) => a + b, args);
    const actual = await call(eff);
    t.equal(actual, expected, 'call should run the effect, returning a promise that resolves to the value');
  }());

  t.end();
});

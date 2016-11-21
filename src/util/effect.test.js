/* eslint import/no-extraneous-dependencies: 0, func-names: 0, no-console: 0 */
import test from 'tape';
import { effect, call } from './effect';

test('=== effects ===', (t) => {
  t.test('effect', (tt) => {
    const args = ['one', 'two', 'three'];
    const expected = {
      type: 'EFFECT',
      fn: console.log,
      args,
    };
    const actual = effect(console.log, args);

    tt.deepEqual(actual, expected, 'effect should return an object describing the effect to be run');
    tt.end();
  });

  t.test('call - success', async (tt) => {
    const args = [1, 2];
    const expected = 3;
    const eff = effect((a, b) => a + b, args);
    const actual = await call(eff);

    tt.equal(actual, expected, 'call should run the effect, returning a promise that resolves to the value');
    tt.end();
  });

  t.test('failing promise', (tt) => {
    const eff = effect(() => {
      throw new Error('nope');
    }, []);

    call(eff)
        .then(() => tt.fail('call should not resolve a failing promise'))
        .catch(() => tt.pass('call should reject the promise if an error is found'))
        .then(() => tt.end());
  });

  t.end();
});

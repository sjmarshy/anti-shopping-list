import test from 'tape';
import captureRefFactory from './captureRefFactory';

test('captureRefFactory', t => {

    // should: apply the given item using the given key, to the given context.
    // ew, I know.
    const context = {};
    const key = 'ew, I know';
    const value = 'mutatey';

    captureRefFactory(context)(key)(value);

    t.equal(value, context[key], `should set key ${key} to ${value}`);
    t.end();
});

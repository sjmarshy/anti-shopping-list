import test from 'tape'; // eslint-disable-line

import { actions, actionCreators } from './addItemForm';

test('addItemForm actionCreators', (t) => {
    t.test('updateName', (tt) => {
        const update = 'brainslug';
        const expected = {
            type: actions.UPDATE_NAME,
            payload: update,
        };

        const actual = actionCreators[actions.UPDATE_NAME](update);

        tt.equal(
            actual.type,
            expected.type,
            `Action should have the type ${expected.type}`);

        tt.equal(
            actual.payload,
            expected.payload,
            `Action should have the payload ${expected.payload}`);

        tt.end();
    });
});

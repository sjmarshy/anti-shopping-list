import test from 'tape'; // eslint-disable-line

import { actions, actionCreators, actionHandlers } from './addItemForm';

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

    t.test('updateLink', (tt) => {
        const update = 'http://finny.dog';
        const expected = {
            type: actions.UPDATE_LINK,
            payload: update,
        };

        const actual = actionCreators[actions.UPDATE_LINK](update);

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
    t.end();
});

test('addItemForm actionHandlers', (t) => {
    t.test('updateName', (tt) => {
        const update = 'brainslug';
        const expected = {
            name: update,
            link: ''
        };
        const actual = actionHandlers(undefined)[actions.UPDATE_NAME](update);
        tt.equal(
            actual.name,
            expected.name,
            `State should have the name ${expected.name} set`);

        console.log(actual.link);
        tt.equal(
            actual.link,
            expected.link,
            `State should have the link ${expected.link}`);

        tt.end();
    });

    t.end();
});

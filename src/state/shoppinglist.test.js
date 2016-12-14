import test from 'tape'; // eslint-disable-line

import { actions, actionCreators, actionHandlers } from './shoppinglist';

const name = 'ABC';
const description = 'BLAH';
const link = 'https://blah';
const price = 8.34;
const displayedLast = Date.now();

test('shoppinglist actionCreators', (t) => {
    t.test('add', (tt) => {
        const expectedAddAction = {
            type: actions.ADD,
            payload: {
                link,
                name,
                description,
                price,
                displayedLast,
            },
        };
        const actualAddAction = actionCreators[actions.ADD](
            { name, description, link, price, displayedLast });

        tt.deepEqual(actualAddAction, expectedAddAction, 'add action creator');
        tt.end();
    });

    t.test('remove', (tt) => {
        const expectedRemoveAction = {
            type: actions.REMOVE,
            payload: link,
        };
        const actualRemoveAction = actionCreators[actions.REMOVE](link);

        tt.deepEqual(actualRemoveAction, expectedRemoveAction, 'remove action creator');

        tt.end();
    });

    t.end();
});

test('shoppinglist actionHandlers', (t) => {
    t.test('add', (tt) => {
        const action = actionCreators[actions.ADD](
            { name, description, link, price, displayedLast });
        const expected = [action.payload];
        const actual = actionHandlers([])[action.type](action.payload);

        tt.deepEqual(actual, expected, 'should add a new shoppinglist item to state');

        const doubleActual = actionHandlers(
                actionHandlers([])[action.type](action.payload),
            )[action.type](action.payload);

        tt.deepEqual(doubleActual, expected, 'should not add the same link twice');

        const state = [];

        actionHandlers(state)[action.type](action.payload);

        tt.equal(0, state.length, 'addition should not effect the original state');
        tt.end();
    });

    t.test('remove', (tt) => {
        const removeCreator = actionCreators[actions.REMOVE];
        const startingState = [{ link }];
        const removeHandler = actionHandlers(startingState)[actions.REMOVE];

        const action = removeCreator(link);
        const expected = [];
        const actual = removeHandler(link);

        tt.deepEqual(actual, expected, 'should remove a shoppinglist item from state based on the link');

        const state2 = [action.payload];

        actionHandlers(state2)[action.type](action.payload);

        tt.equal(1, state2.length, 'remove should not affect the original state');
        tt.end();
    });
});

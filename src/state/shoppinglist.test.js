import test from 'tape'; // eslint-disable-line

import { actions, actionCreators, actionHandlers } from './shoppinglist';

const name = 'ABC';
const description = 'BLAH';
const link = 'https://blah';
const price = 8.34;
const displayedLast = Date.now();

test('shoppinglist actionCreators', (t) => {
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

    t.deepEqual(actualAddAction, expectedAddAction, 'add action creator');

    const expectedRemoveAction = {
        type: actions.REMOVE,
        payload: link,
    };
    const actualRemoveAction = actionCreators[actions.REMOVE](link);

    t.deepEqual(actualRemoveAction, expectedRemoveAction, 'remove action creator');

    t.end();
});

test('shoppinglist actionHandlers', (t) => {
    const action = actionCreators[actions.ADD](
        { name, description, link, price, displayedLast });
    const expected = [action.payload];
    const actual = actionHandlers([])[action.type](action.payload);

    t.deepEqual(actual, expected, 'should add a new shoppinglist item to state');

    const doubleActual = actionHandlers(
        actionHandlers([])[action.type](action.payload),
    )[action.type](action.payload);

    t.deepEqual(doubleActual, expected, 'should not add the same link twice');

    const state = [];

    actionHandlers(state)[action.type](action.payload);

    t.equal(0, state.length, 'addition should not effect the original state');

    const removeAction = actionCreators[actions.REMOVE](link);
    const removeExpected = [];
    const removeActual = actionHandlers([action.payload])[removeAction.type](removeAction.payload);

    t.deepEqual(removeActual, removeExpected, 'should remove a shoppinglist item from state based on the link');

    const state2 = [action.payload];

    actionHandlers(state2)[removeAction.type](removeAction.payload);

    t.equal(1, state2.length, 'remove should not affect the original state');
    t.end();
});

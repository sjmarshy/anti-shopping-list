import { shoppinglistContainsItem } from '../lib/shoppinglist';
import reducer from './reducer';

export const actions = {
    ADD: 'asl/shoppinglist/add',
    REMOVE: 'asl/shoppinglist/remove',
    LOAD: 'asl/shoppinglist/load',
};

export const actionCreators = {
    [actions.LOAD]: () => ({ type: actions.LOAD }),
    [actions.ADD]: payload => ({ type: actions.ADD, payload }),
    [actions.REMOVE]: payload => ({ type: actions.REMOVE, payload }),
};

export const actionHandlers = state => ({
    [actions.ADD]: (payload) => {
        if (shoppinglistContainsItem(state, payload.link)) {
            return state;
        } else {
            return state.concat(payload);
        }
    },
    [actions.REMOVE]: (payload) => {
        if (shoppinglistContainsItem(state, payload)) {
            return state.filter(i => i.link !== payload);
        } else {
            return state;
        }
    },
    [actions.LOAD]: payload => payload,
});

const defaultState = [];

export default reducer(defaultState, actionHandlers);

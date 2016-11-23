import hasOwnProperty from '../util/hasOwnProperty';

export default (defaultState, actionHandlers) => (state = defaultState, action) => {
    const handler = actionHandlers(state);

    if (hasOwnProperty(handler, action.type)) {
        return handler[action.type](action.payload);
    } else {
        return state;
    }
};

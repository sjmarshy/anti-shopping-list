import { actions } from '../state/shoppinglist';
import { set, get } from '../effects/storage';
import { call } from '../util/effect';

// XXX: config
const APP_KEY = 'ASL/__STORAGE';

export default store => next => (action) => {
    if (action.type === actions.LOAD) {
        call(get(APP_KEY)).then((data) => {
            next(Object.assign({}, action, { payload: data.shoppinglist }));
        });
        return {};
    }

    if (action.type === actions.ADD || action.type === actions.REMOVE) {
        const res = next(action);

        call(set(APP_KEY, store.getState()))
            .catch(err => console.error(err)); // eslint-disable-line

        return res;
    }
    return next(action);
};

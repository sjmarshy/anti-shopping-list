import 'babel-polyfill'; // eslint-disable-line
import store from './store';
import { actions, actionCreators } from './state/shoppinglist';

store.subscribe(() => console.log(store.getState())); // eslint-disable-line
store.subscribe(() => console.log(localStorage)); // eslint-disable-line

store.dispatch(actionCreators[actions.LOAD]());
setTimeout(() => {
    store.dispatch(actionCreators[actions.ADD]({
        link: 'hih',
    }));
}, 2000);

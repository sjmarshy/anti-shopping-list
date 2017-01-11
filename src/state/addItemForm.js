export const actions = {
    UPDATE_NAME: 'asl/addItemForm/update_name',
    UPDATE_LINK: 'asl/addItemForm/update_link',
};

export const actionCreators = {
    [actions.UPDATE_NAME]: payload => ({
        type: actions.UPDATE_NAME,
        payload,
    }),
    [actions.UPDATE_LINK]: payload => ({
        type: actions.UPDATE_LINK,
        payload,
    }),
};

const defaultState = { name: '', link: '' };
export const actionHandlers = ({ name, link } = defaultState) => ({
    [actions.UPDATE_NAME]: payload => ({
        name: payload,
        link,
    }),
    [actions.UPDATE_LINK]: payload => ({
        name,
        link: payload,
    }),
});

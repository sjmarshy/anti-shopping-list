export const actions = {
    UPDATE_NAME: 'asl/addItemForm/update_name',
};

export const actionCreators = {
    [actions.UPDATE_NAME]: payload => ({
        type: actions.UPDATE_NAME,
        payload
    }),
};

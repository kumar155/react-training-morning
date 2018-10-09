
export const simpleReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT_ACTION':
            return action.payload + 1;
        default:
            return state;
    }
}
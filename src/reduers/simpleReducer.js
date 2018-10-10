import { INCREMENT_ACTION } from "../actions/simpleActions";

export const simpleReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT_ACTION:
            return state + 1;
        default:
            return state;
    }
};
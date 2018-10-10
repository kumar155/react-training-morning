
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reduers/rootReducer';

export default function configureStore(initialState={}) {
    return createStore(
        rootReducer, 
        applyMiddleware(logger),
    );
};
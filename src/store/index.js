import {createStore} from 'redux';
import {reducer} from '../reducers/reducer.js';

const rootReducer = reducer;

const initialState = {
    filters: [],
    currency: 'rub'
};

const store = createStore(
    rootReducer,
    initialState
);

export {store};
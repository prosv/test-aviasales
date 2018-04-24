import { createStore } from 'redux';
import { reducer } from '../reducers/reducer.js';

const rootReducer = reducer;

const initialState = {
    checkedFilters: {
        0: true,
        1: false,
        2: false,
        3: false,
        4: false
    },
    currency: 'rub'
};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Exchange Rates

export default store;
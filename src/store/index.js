import { createStore } from 'redux';
import { reducer } from '../reducers/reducer.js';

const rootReducer = reducer;

const initialState = {
    checkedFilters: {
        0: true,
        1: true,
        2: true,
        3: true,
        4: true
    },
    checkedCurrency: 'rub'
};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
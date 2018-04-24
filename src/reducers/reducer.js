export const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_CURRENCY': {
            return {
                ...state,
                checkedCurrency: action.checkedCurrency
            };
        }
        case 'UPDATE_FILTERS': {
            return {
                ...state,
                checkedFilters: action.checkedFilters
            };
        }
        default: {
            return state;
        }
    }
};
export const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_CURRENCY': {
            return {
                ...state,
                currency: action.currency
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
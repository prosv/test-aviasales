export const updateCurrency = (currency) => ({
    type: 'UPDATE_CURRENCY',
    currency: currency
});

export const updateFilters = (checkedFilters) => ({
    type: 'UPDATE_FILTERS',
    checkedFilters: checkedFilters
});
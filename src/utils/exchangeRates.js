export const availableCurrencies = [
    'rub',
    'usd',
    'eur'
];

export const exchangeRates = () => {
    return {
        'rub': 1,
        'usd': 61.6,
        'eur': 75.2
    }
};

export const recountPrice = (price, currency) => {
    return Math.round(price/exchangeRates()[currency]);
};
export const availableCurrencies = [
    'rub',
    'usd',
    'eur'
];

const currencySymbol = {
    'rub': String.fromCharCode(8381),
    'usd': String.fromCharCode(36),
    'eur': String.fromCharCode(8364)
};

const exchangeRates = (currency) => {
    //may be some api exchange rates
    const rates = {
        'rub': 1,
        'usd': 61.6,
        'eur': 75.2
    };
    return rates[currency]
};

export const recountPrice = (price, currency) => {
    const symbol = currencySymbol[currency];
    return currency !== 'rub'
        ? symbol + Math.round(price / exchangeRates(currency)).toLocaleString('ru')
        : price.toLocaleString('ru') + symbol;
};
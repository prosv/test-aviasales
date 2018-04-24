import React from 'react';

const Currency = ({
                      currencies,
                      handleCurrencyClick
                  }) => (
    <section>
        <ul>
            {currencies.map((currency, i) =>
                <li
                    key={i}
                    onClick={event => handleCurrencyClick(currency)}
                >
                    {currency}
                </li>
            )}
        </ul>
    </section>
);

export default Currency;
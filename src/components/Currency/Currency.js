import React from 'react';
import styles from './Currency.css';

const Currency = ({
                      currencies,
                      checkedCurrency,
                      handleCurrencyClick
                  }) => (
    <section className={styles.section}>
        <h2 className={styles.header}>Валюта</h2>
        <ul className={styles.tabs}>
            {currencies.map((currency, i) =>
                <li
                    className={[styles.tab, checkedCurrency===currency ? styles.tabActive : ''].join(' ')}
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
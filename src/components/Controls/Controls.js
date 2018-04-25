import React from 'react';
import StopsFilter from '../StopsFilter/StopsFilter';
import Currency from '../Currency/Currency';
import styles from './Controls.css';

const Controls = ({
                      availableCurrencies,
                      filters,
                      checkedFilters,
                      changeFilters,
                      checkedCurrency,
                      handleCurrencyClick
                  }) => (
    <section className={styles.section}>
        <Currency
            currencies={availableCurrencies}
            checkedCurrency={checkedCurrency}
            handleCurrencyClick={handleCurrencyClick}
        />
        <StopsFilter
            filters={filters}
            checkedFilters={checkedFilters}
            changeFilters={changeFilters}
        />
    </section>
);

export default Controls;
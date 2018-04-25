import React from 'react';
import StopsFilterItem from './StopsFilterItem/StopsFilterItem';
import styles from './StopsFilter.css';

const StopsFilter = ({
                         filters,
                         checkedFilters,
                         changeFilters
                     }) => (
    <section className={styles.filter}>
        <h2 className={styles.header}>Количество пересадок</h2>
        {filters.map((filter, i) =>
            <StopsFilterItem
                id={filter.id}
                key={i}
                filter={filter}
                checked={checkedFilters[filter.id]}
                changeFilters={changeFilters}
            />
        )}
    </section>
);

export default StopsFilter;
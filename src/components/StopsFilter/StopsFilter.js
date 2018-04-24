import React from 'react';

import StopsFilterItem from './StopsFilterItem/StopsFilterItem';

const StopsFilter = ({
                         filters,
                         checkedFilters,
                         changeFilters
                     }) => (
    <section>
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
import React from 'react';

const StopsFilterItem = ({
                             id,
                             filter,
                             checked,
                             changeFilters
                         }) => (
    <label>
        <input
            type="checkbox"
            id={"filter_checkbox_" + id}
            onChange={event => {
                changeFilters(event, id, false);
            }}
            checked={checked}
        />

        <label
            htmlFor={"filter_checkbox_" + id}
        >
            {filter.label}
        </label>

        {Boolean(id) && (<label
                onClick={event => {
                    changeFilters(event, id, true);
                }}>
                только
            </label>
        )}
    </label>
);

export default StopsFilterItem;
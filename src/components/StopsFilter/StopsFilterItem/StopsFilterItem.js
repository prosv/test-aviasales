import React from 'react';

import styles from './StopsFilterItem.css';

const StopsFilterItem = ({
                             id,
                             filter,
                             checked,
                             changeFilters
                         }) => (
    <article className={styles.item}>
        <label
            className={styles.label}
            htmlFor={"filter_checkbox_" + id}
        >
            <input
                className={styles.input}
                type="checkbox"
                id={"filter_checkbox_" + id}
                onChange={event => {
                    changeFilters(event, id, false);
                }}
                checked={checked}
            />

            <span
                className={styles.checkmark}
            >
            </span>

            {filter.label}
        </label>

        {Boolean(id) && (<button
                className={styles.only}
                onClick={event => {
                    changeFilters(event, id, true);
                }}>
                только
            </button>
        )}
    </article>
);

export default StopsFilterItem;
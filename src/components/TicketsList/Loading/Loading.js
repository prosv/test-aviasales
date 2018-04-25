import React from 'react';
import styles from './Loading.css'

const Loading = () => {
    return (
        <article className={styles.loading}>
            <div className={styles.loader}>Loading...</div>
        </article>
    )
};

export default Loading;

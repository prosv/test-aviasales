import React from 'react';
import logo from '../../images/logo.png';
import styles from './Header.css';

const Header = () => (
    <header className={styles.header}>
        <figure>
            <img
                src={logo}
                className={styles.logo}
                alt="Aviasales"
            />
            <figcaption></figcaption>
        </figure>
    </header>
);

export default Header;
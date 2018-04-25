import React from 'react';
import Header from './Header/Header';
import Controls from '../containers/Controls/Controls';
import TicketsList from '../containers/TicketsList/TicketsList';
import styles from './Layout.css';

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.content}>
                <Controls />
                <TicketsList />
            </main>
        </div>
    )
};

export default Layout;
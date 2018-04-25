import React from 'react';
import Ticket from './Ticket/Ticket';
import Loading from './Loading/Loading';
import styles from './TicketsList.css'

const TicketsList = ({
                         tickets,
                         currency,
                         loading
                     }) => {
    return (
        <section className={styles.section}>
            {!loading
                ? tickets.map((ticket, i) => <Ticket key={i} ticket={ticket} currency={currency}/>)
                : <Loading />
            }
        </section>
    )
};

export default TicketsList;
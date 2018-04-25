import React from 'react';
import Ticket from './Ticket/Ticket';
import styles from './TicketsList.css'

const TicketsList = ({
                         tickets,
                         currency
                     }) => {
    return (
        <section className={styles.section}>
            {tickets.map((ticket, i) => <Ticket key={i} ticket={ticket} currency={currency}/>)}
        </section>
    )
};

export default TicketsList;
import React from 'react';

import Ticket from './Ticket/Ticket';

const TicketsList = ({
                         tickets,
                         currency
                     }) => {
    return (
        <section className="tickets-list">
            {tickets.map((ticket, i) => <Ticket key={i} ticket={ticket} currency={currency}/>)}
        </section>
    )
};

export default TicketsList;
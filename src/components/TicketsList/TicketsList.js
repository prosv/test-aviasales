import React from 'react';

import Ticket from '../Ticket/Ticket';

const TicketsList = ({
                         tickets
                     }) => {
    return (
        <section className="tickets-list">
            {tickets.map((ticket, i) => <Ticket key={i} ticket={ticket}/>)}
        </section>
    )
};

export default TicketsList;
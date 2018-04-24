import React from 'react';

// import styles from './Ticket.css';

const Ticket = ({
                    ticket
                }) => {
    return (
        <article className="ticket">
            <section className="ticket-buy_section">
                <figure className="ticket-company_logo">
                    <img src="" alt="Company logo"/>
                    <figcaption></figcaption>
                </figure>

                <button className="ticket-buy_button">
                    <span>Купить</span>
                    <span>за {ticket.price}</span>
                </button>
            </section>

            <section className="ticket-description_section">
                <div className="ticket-origin">
                    <span>{ticket.departure_time}</span>
                    <span>{ticket.origin}, {ticket.origin_name}</span>
                    <span>{ticket.destination_name}, {ticket.destination}</span>
                </div>

                <div className="ticket-path">
                    <span className="ticket-path-stops">
                        {ticket.stops}
                    </span>
                    <div className="ticket-path-line">
                    </div>

                    <div className="ticket-destination">
                        <span>{ticket.arrival_time}</span>
                        <span>{ticket.departure_date}</span>
                        <span>{ticket.arrival_date}</span>
                    </div>
                </div>
            </section>
        </article>
    )
};

export default Ticket;

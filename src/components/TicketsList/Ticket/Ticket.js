import React from 'react';
import { recountPrice } from '../../../utils/currencies';
import { stops } from '../../../utils/stops';
import {
    formatDate,
    formatTime
} from '../../../utils/date';
import styles from './Ticket.css';
import airlane from '../../../images/airplane.svg';

const Ticket = ({
                    ticket,
                    currency
                }) => {
    return (
        <article className={styles.ticket}>
            <section className={styles.buy}>
                <figure className={styles.logo}>
                    <img src={'//pics.avs.io/120/35/' + ticket.carrier + '.png'} alt="Airlines logo"/>
                    <figcaption></figcaption>
                </figure>

                <button className={styles.button}>
                    <span className={styles.buttonText}>Купить</span>
                    <span className={styles.buttonText}>за {recountPrice(ticket.price, currency)}</span>
                </button>
            </section>

            <section className={styles.description}>
                <div className={styles.firstLine}>
                    <span className={styles.time}>
                        {formatTime(ticket.departure_time)}
                    </span>
                    <div className={styles.path}>
                    <span className={styles.stops}>
                        {stops[ticket.stops + 1].label}
                    </span>
                        <div className={styles.line}>
                        </div>
                        <img
                            src={airlane}
                            className={styles.airplane}
                            alt="Airplane pic"
                        />
                    </div>
                    <span className={styles.time}>
                        {formatTime(ticket.arrival_time)}
                    </span>
                </div>
                <div className={styles.secondLine}>
                    <div className={styles.origin}>
                        <span className={styles.city}>
                            {ticket.origin}, {ticket.origin_name}
                        </span>
                        <span className={styles.date}>
                            {formatDate(ticket.departure_date)}
                        </span>
                    </div>
                    <div className={styles.destination}>
                        <span className={styles.city}>
                            {ticket.destination_name}, {ticket.destination}
                        </span>
                        <span className={styles.date}>
                            {formatDate(ticket.arrival_date)}
                        </span>
                    </div>
                </div>
            </section>
        </article>
    )
};

export default Ticket;

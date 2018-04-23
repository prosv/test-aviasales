import React from 'react';

import TicketsListComponent from '../../components/TicketsList/TicketsList';

class TicketsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tickets: [],
            loading: false,
            error: null
        };

        this.loadData = this.loadData.bind(this);
        this.sortByPrice = this.sortByPrice.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    sortByPrice(data) {
        return data.sort(
            (a, b) => {
                return a.price - b.price;
            });
    }

    loadData() {
        this.setState({
            loading: true,
            error: null
        });

        fetch(`/tickets.json`)
            .then(
                (response) => {
                    return response.json();
                }
            )
            .then(
                ({tickets}) => {
                    this.setState({
                        loading: false,
                        tickets: this.sortByPrice(tickets)
                    });

                }
            )
            .catch(
                (error) => {
                    this.setState({
                        loading: false,
                        error: error
                    });
                });
    }

    render() {
        return (
            <TicketsListComponent
                tickets={this.state.tickets}
            />
        );
    }
}

export default TicketsList;


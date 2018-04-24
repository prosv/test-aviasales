import React from 'react';
import { connect } from 'react-redux';

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
        this.filterVisible = this.filterVisible.bind(this);
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

    filterVisible(tickets) {
        if (!this.props.state.checkedFilters[0]) {
            return tickets.filter(
                (ticket) => {
                    return this.props.state.checkedFilters[ticket.stops + 1];
                });
        }
        else {
            return tickets;
        }
    }

    render() {
        return (
            <TicketsListComponent
                tickets={this.filterVisible(this.state.tickets)}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {state};
};

const mapDispatchToProps = (dispatch) => {
    return {dispatch};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TicketsList);


import React from 'react';
import { connect } from 'react-redux';

import TicketsListComponent from '../../components/TicketsList/TicketsList';
import {sort} from '../../utils/sort';

class TicketsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tickets: [],
            loading: false,
            error: null
        };

        this.loadData = this.loadData.bind(this);
        this.filterVisible = this.filterVisible.bind(this);
    }

    componentDidMount() {
        this.loadData();
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
                        tickets: sort(tickets, 'price')
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
                currency={this.props.state.checkedCurrency}
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


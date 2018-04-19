import React from 'react';

import TicketsListView from '../../components/TicketsList/TicketsList';

class TicketsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tickets: [],
            loading: true,
            error: null
        }
    }

    render() {
        return (
            <TicketsListView
                tickets={this.state.tickets}
            />
        );
    }
}

export default TicketsList;


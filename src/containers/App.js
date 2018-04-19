import React from 'react';

import Header from '../components/Header/Header';
import Controls from '../components/Controls/Controls';
import TicketsList from '../components/TicketsList/TicketsList';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Controls />
                <TicketsList />
            </div>
        );
    }
}

export default App;

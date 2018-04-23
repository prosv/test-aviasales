import React from 'react';

import Header from '../components/Header/Header';
import Controls from '../components/Controls/Controls';
import TicketsList from '../containers/TicketsList/TicketsList';

class App extends React.Component {
    render() {
        return ([
                <Header />,
                <main>
                    <Controls />
                    <TicketsList />
                </main>
            ]
        );
    }
}

export default App;

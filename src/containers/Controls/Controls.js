import React from 'react';
import { connect } from 'react-redux';

import StopsFilter from '../../components/StopsFilter/StopsFilter';
import Currency from '../../components/Currency/Currency';
import { updateFilters } from '../../actions/index';

class Controls extends React.Component {
    constructor(props) {
        super(props);

        this.filters = [
            {
                label: 'Все',
                id: 0
            },
            {
                label: 'Без пересадок',
                id: 1
            },
            {
                label: '1 пересадка',
                id: 2
            },
            {
                label: '2 пересадки',
                id: 3
            },
            {
                label: '3 пересадки',
                id: 4
            }
        ];

        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    componentDidMount() {
    }


    handleFilterClick(event, id, only) {
        let filters = {...this.props.state.checkedFilters};
        if (!event.target.checked && !only) {
            filters[id] = false;
        }
        else {
            if (id && !only) {
                filters[id] = true;
            }
            else {
                for (let key in filters) {
                    filters[key] = key == id;
                }
            }
        }
        this.props.dispatch(updateFilters(filters))
    }

    render() {
        return (
            <section className="controls">
                <StopsFilter
                    filters={this.filters}
                    checkedFilters={this.props.state.checkedFilters}
                    changeFilters={this.handleFilterClick}
                />
                <Currency
                    currency={this.props.state.currency}
                />
            </section>
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
)(Controls);


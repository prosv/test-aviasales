import React from 'react';
import { connect } from 'react-redux';
import ControlsComponent from '../../components/Controls/Controls';
import {
    updateFilters,
    updateCurrency
} from '../../actions/index';
import { availableCurrencies } from '../../utils/currencies';
import { stops } from '../../utils/stops';

class Controls extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
        this.isAllFiltersChecked = this.isAllFiltersChecked.bind(this);
    }

    isAllFiltersChecked(filters) {
        for (let key in filters) {
            if (key !== '0' && !filters[key]) {
                return false;
            }
        }
        return true
    }

    handleFilterClick(event, id, only) {
        let filters = {...this.props.state.checkedFilters};
        if(id === 0) {
            filters[0] = event.target.checked;
            for (let key in filters) {
                filters[key] = filters[0];
            }
        }
        else {
            if (!only) {
                filters[id] = event.target.checked;
                filters[0] = this.isAllFiltersChecked(filters);
            }
            else {
                for (let key in filters) {
                    filters[key] = id ? Number(key) === id : true;
                }
            }
        }
        this.props.dispatch(updateFilters(filters))
    }

    handleCurrencyClick(currency) {
        this.props.dispatch(updateCurrency(currency));
    }

    render() {
        return (
            <ControlsComponent
                availableCurrencies={availableCurrencies}
                filters={stops}
                checkedFilters={this.props.state.checkedFilters}
                changeFilters={this.handleFilterClick}
                checkedCurrency={this.props.state.checkedCurrency}
                handleCurrencyClick={this.handleCurrencyClick}
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
)(Controls);


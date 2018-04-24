import React from 'react';
import { connect } from 'react-redux';

import StopsFilter from '../../components/StopsFilter/StopsFilter';
import Currency from '../../components/Currency/Currency';
import {
    updateFilters,
    updateCurrency
} from '../../actions/index';
import {availableCurrencies} from '../../utils/exchangeRates';
import {filters} from '../../utils/filters';

class Controls extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    }

    handleFilterClick(event, id, only) {
        let filters = {...this.props.state.checkedFilters};
        if (!event.target.checked && !only) {
            filters[id] = false;
        }
        else {
            if (id && !only) {
                filters[id] = true;
                filters[0] ? filters[0] = false : null;
            }
            else {
                for (let key in filters) {
                    filters[key] = key == id;
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
            <section className="controls">
                <StopsFilter
                    filters={filters}
                    checkedFilters={this.props.state.checkedFilters}
                    changeFilters={this.handleFilterClick}
                />
                <Currency
                    currencies={availableCurrencies}
                    checkedCurrency={this.props.state.checkedCurrency}
                    handleCurrencyClick={this.handleCurrencyClick}
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


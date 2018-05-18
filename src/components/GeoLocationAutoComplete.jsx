import React, { Component } from 'react';
import { fetchCities } from '../GeoLocationAPI';
import { setLocation } from '../actions';
import AutoComplete from 'react-autocomplete';
import { connect } from 'react-redux';
import debounce from 'debounce-promise';

export class GeoLocationAutoComplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            inputText: ''
        };
        this.fetchCitiesDebounced = debounce(fetchCities, 100);
    }

    render() {
        let autoCompleteAttributes = {
            getItemValue: (item) => {
                return item.name
            },
            renderItem: (item) => {
                let attrs = {
                    lat: item.lat,
                    long: item.long,
                    key: item.geonameId,
                    name: item.name
                };
                return <div {...attrs}>{item.name}</div>
            },
            items: this.state.cities,
            onChange: (event, value) => {
                let time = new Date();
                this.setState({
                    inputText: value
                });
                this.fetchCitiesDebounced(value).then((data) => {
                    if (this.state.searchTime === undefined || this.state.searchTime < time) {
                        this.setState({
                            cities: data,
                            searchTime: time
                        });
                    }
                }).catch((err) => {
                    throw new Error(err);
                });
            },
            onSelect: (value, item) => {
                this.setState({
                    inputText: value
                });
                this.props.onCitySelection(item.lat, item.long);
            },
            inputProps: {
                className: 'form-control'
            },
            value: this.state.inputText
        };

        return <AutoComplete {...autoCompleteAttributes} />
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCitySelection: (lat, long) => {
            dispatch(setLocation(lat, long));
        }
    };
};

export default connect(() => {
    return {};
}, mapDispatchToProps)(GeoLocationAutoComplete);
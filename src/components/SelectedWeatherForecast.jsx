import React, { Component } from 'react';
import { fetchWeatherInformation } from '../WeatherForecastAPI';
import WeatherForecast from './WeatherForecast';
import ReactLoading from 'react-loading';

export default class SelectedWeatherForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: this.props.lat,
            long: this.props.long,
            weatherDataFetched: false
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.lat === nextProps.lat && prevState.long === nextProps.long) {
            return null;
        } else {
            return {
                weatherDataFetched: false,
                lat: nextProps.lat,
                long: nextProps.long
            };
        }
    }

    fetchWeatherInformationFromAPI(lat, long) {
        fetchWeatherInformation(lat, long).then((weatherForecast) => {
            this.setState({
                weatherForecast: weatherForecast.slice(0, 5),
                weatherDataFetched: true
            });
        }).catch((err) => {
            throw new Error(err);
        });
    }

    render() {
        if (this.state.weatherDataFetched) {
            return <WeatherForecast weatherForecast={this.state.weatherForecast} />
        } else {
            this.fetchWeatherInformationFromAPI(this.state.lat, this.state.long);
            return <ReactLoading type="spin" color="#0000FF" height={67} width={37} />
        }
    }
}
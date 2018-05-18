import React, { Component } from 'react';

export default class WeatherForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherForecast: this.props.weatherForecast
        };
    }

    render() {
        if (this.state.weatherForecast) {
            return <table className="table">
                <thead>
                    <tr>
                        {
                            this.state.weatherForecast.map((forecast, index) => {
                                let date = forecast.date;
                                let dateString = date.getDate().toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear().toString()
                                return <th scope="col" key={index}>{dateString}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            this.state.weatherForecast.map((forecast, index) => {
                                return <td key={index}>{forecast.temperature}</td>
                            })
                        }
                    </tr>
                </tbody>
            </table>
        } else {
            return <div></div>
        }
    }
}
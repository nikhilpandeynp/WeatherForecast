import axios from 'axios';

export const fetchWeatherInformation = (latitude, longitude) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/forecast';
    const APPID = 'd19047592c5da3d1f6078f3043adab2f';

    let url = baseURL + '?units=metric&lat=' + latitude + '&lon=' + longitude + '&APPID=' + APPID;

    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url
        }).then((weatherData) => {
            let weatherForecast = [];
            let prevDayOfMonth;
            let index = 0;

            weatherData.data.list.forEach((data) => {
                let date = new Date(data.dt * 1000);
                let dayOfMonth = date.getDate();

                if (!prevDayOfMonth) {
                    prevDayOfMonth = dayOfMonth;
                }

                if (dayOfMonth !== prevDayOfMonth) {
                    index++;
                    prevDayOfMonth = dayOfMonth;
                }

                if (weatherForecast.length <= index) {
                    weatherForecast.push({
                        date,
                        temperature: undefined,
                        dataRecordCount: 0
                    });
                }

                let forecastInformation = weatherForecast[index];
                forecastInformation.dataRecordCount++;

                if (!forecastInformation.temperature) {
                    forecastInformation.temperature = data.main.temp;
                } else {
                    forecastInformation.temperature = forecastInformation.temperature + data.main.temp;
                }
            });

            weatherForecast.forEach((weatherForecast) => {
                weatherForecast.temperature = Math.round((weatherForecast.temperature / weatherForecast.dataRecordCount) * 10) / 10;
            });

            resolve(weatherForecast);
        }).catch((err) => {
            reject(err);
        });
    });
};
export const fetchWeatherInformation = (lat, long) => {
    return new Promise((resolve, reject) => {
        if (lat === 1 && long === 2) {
            process.nextTick(resolve([{}, {}, {}, {}, {}]));
        } else {
            process.nextTick(reject("Error"));
        }
    });
};
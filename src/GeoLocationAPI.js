import axios from 'axios';

export const fetchCities = (searchTerm, options = {
    pageSize: 10
}) => {
    const baseURL = 'http://api.geonames.org/searchJSON';
    const userName = 'ksuhiyp';
    let searchURL = baseURL + '?q=' + searchTerm + '&featureCode=PPL&maxRows=' + (options.pageSize + 3).toString() + '&username=' + userName;
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: searchURL
        }).then((result) => {
            resolve(
                result.data.geonames.map((geoName, index) => {
                    return {
                        long: geoName.lng,
                        lat: geoName.lat,
                        geonameId: geoName.geonameId,
                        name: geoName.toponymName,
                        fcode: geoName.fcode
                    };
                })
            );
        }).catch((err) => {
            reject(err);
        });
    });
};
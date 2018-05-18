import { fetchCities } from './GeoLocationAPI';

jest.mock('axios', () => {
    return jest.fn().mockImplementation(() => {
        return (object) => {
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        geonames: [{
                            lng: 1,
                            lat: 2,
                            geonameId: 1,
                            name: 'asdf'
                        }]
                    }
                });
            });
        }
    });
});

it('should return geolocation', () => {
    fetchCities('asdf').then((data) => {
        expect(data.name).toEqual('asdf');
    });
});
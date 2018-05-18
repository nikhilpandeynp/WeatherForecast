import SelectedWeatherForecast from './SelectedWeatherForecast';
import renderer from 'react-test-renderer';
import React from 'react';

jest.mock('./WeatherForecast');
jest.mock('react-loading');
jest.mock('../WeatherForecastAPI');

it('should show react loading when data is not fetched', () => {
    let props = {
        lat: 1,
        long: 2
    };
    let component = renderer.create(<SelectedWeatherForecast {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
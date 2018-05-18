import renderer from 'react-test-renderer';
import React from 'react';
import WeatherForecast from './WeatherForecast';

it('should render without weather forecast', () => {
    let component = renderer.create(<WeatherForecast />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render with weather forecast', () => {
    let props = {
        weatherForecast: [{
            date: new Date(),
            temperature: 31
        }]
    }
    let component = renderer.create(<WeatherForecast {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
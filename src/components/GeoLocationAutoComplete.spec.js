import renderer from 'react-test-renderer';
import React from 'react';

jest.mock('react-autocomplete');
jest.mock('../actions');
jest.mock('../GeoLocationAPI');

import { GeoLocationAutoComplete } from './GeoLocationAutoComplete';

it('should render without error', () => {
    let component = renderer.create(<GeoLocationAutoComplete />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
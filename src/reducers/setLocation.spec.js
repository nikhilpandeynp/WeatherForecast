import { setLocation } from './setLocation';
import { ActionNames } from '../actions';

describe('setLocation reducer', () => {
    it('should return the initial state', () => {
        expect(setLocation(undefined, {})).toEqual({});
    });

    it('should handle SET_LOCATION', () => {
        expect(setLocation({}, {
            type: ActionNames.SET_LOCATION,
            lat: 1,
            long: 2
        })).toEqual({
            lat: 1,
            long: 2
        });
    });
});
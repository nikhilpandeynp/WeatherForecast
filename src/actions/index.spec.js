import * as actions from './index';

describe('actions', () => {
    it('should create an action to set location', () => {
        const expectedAction = {
            type: actions.ActionNames.SET_LOCATION,
            lat: 1,
            long: 2
        };

        expect(actions.setLocation(1, 2)).toEqual(expectedAction);
    });
});
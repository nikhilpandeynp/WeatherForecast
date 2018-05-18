import { setLocation } from './setLocation';
import reducer from './index';

describe('combine reducer', () => {
    it('should combine individual reducers', () => {
        expect(typeof(reducer)).toEqual(typeof(() => {}));
    });
});
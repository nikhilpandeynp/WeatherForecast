import { combineReducers } from 'redux';
import { setLocation } from './setLocation';

export default combineReducers({
    location: setLocation
});
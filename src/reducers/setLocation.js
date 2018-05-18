import { ActionNames } from '../actions';

export const setLocation = (state = {}, action) => {
    switch(action.type) {
        case ActionNames.SET_LOCATION:
            let clonedState = {...state};
            clonedState.lat = action.lat;
            clonedState.long = action.long;
            return clonedState;
        default:
            return state;
    }
}
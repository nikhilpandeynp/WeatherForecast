export const ActionNames = {
    SET_LOCATION: 'SET_LOCATIon'
};

export const setLocation = (lat, long) => {
    return {
        type: ActionNames.SET_LOCATION,
        lat,
        long
    };
};
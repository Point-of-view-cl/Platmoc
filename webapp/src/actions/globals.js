import {
    SET_GLOBAL_CONFIG
} from './types';

export const setFristMapCenterReady = () => dispatch => {
    dispatch({ type: SET_GLOBAL_CONFIG, payload: {fristMapCenter: true}});
};

export const setNewCerterMap = (data) => dispatch => {
    dispatch({ type: SET_GLOBAL_CONFIG, payload: {latCenterMap: data.lat, lngCenterMap: data.lng}});
};
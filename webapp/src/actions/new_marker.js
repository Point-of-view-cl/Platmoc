import {
    SET_GLOBAL_CONFIG
 } from './types';
 
export const setNewMarkerRefPointOn = () => dispatch => {
  dispatch({ type: SET_GLOBAL_CONFIG, payload: {newMarketShowRefPoint: true}});
};

export const setNewMarkerRefPointOff = () => dispatch => {
  dispatch({ type: SET_GLOBAL_CONFIG, payload: {newMarketShowRefPoint: false}});
};

export const setNewMarkerFromOpen = () => dispatch => {
  dispatch({ type: SET_GLOBAL_CONFIG, payload: {newMarketFromOpen: true}});
};

export const setNewMarkerFromClose = () => dispatch => {
  dispatch({ type: SET_GLOBAL_CONFIG, payload: {newMarketFromOpen: false}});
};


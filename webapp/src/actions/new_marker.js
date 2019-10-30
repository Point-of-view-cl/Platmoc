import {
    SET_GLOBAL_CONFIG
 } from './types';
 
export const setNewMarkerRefPointOn = () => dispatch => new Promise((resolve, reject) => {
  dispatch({ type: SET_GLOBAL_CONFIG, payload: {newMarketShowRefPoint: true}});
  resolve();
});

export const setNewMarkerRefPointOff = () => dispatch => new Promise((resolve, reject) => {
  dispatch({ type: SET_GLOBAL_CONFIG, payload: {newMarketShowRefPoint: false}});
  resolve();
});

export const setNewMarkerFromOpen = () => dispatch => new Promise((resolve, reject) => {
  dispatch({ type: SET_GLOBAL_CONFIG, payload: {newMarketFromOpen: true}});
  resolve();
});

export const setNewMarkerFromClose = () => dispatch => new Promise((resolve, reject) => {
  dispatch({ type: SET_GLOBAL_CONFIG, payload: {newMarketFromOpen: false}});
  resolve();
});


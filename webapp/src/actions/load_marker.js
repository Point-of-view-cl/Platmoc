import axios from 'axios';

import {
    LOAD_MARKERS
} from './types';

require('dotenv').config();

export const loadMarkers = (data, token) => async (dispatch) => {
    try {
        let body = JSON.stringify({ latMin: -100, latMax: 100, lngMin: -100, lngMax: 100 })
        let config = {
            headers: { 
                'Content-Type': 'application/json',
                'X-Api-Key': process.env.REACT_APP_FIREBASE_API_KEY
            }
        }
        const res = await axios.post('https://f5uu7v12oa.execute-api.us-east-1.amazonaws.com/staging/locations/list',body,config);
        dispatch({ type: LOAD_MARKERS, payload: {markerList: res.data}});
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};
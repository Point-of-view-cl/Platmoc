import axios from 'axios';

import {
    LOAD_MARKERS
} from './types';

export const productFilter = (data) => async (dispatch) => {
    console.log(data);
    try {
        let body = JSON.stringify({ latMin: -100, latMax: 100, lngMin: -100, lngMax: 100, product_type: data.productFilter })
        let config = {
            headers: { 
                'Content-Type': 'application/json',
            }
        }
        const res = await axios.post('/markers/filtered',body,config);
        //console.log(res);
        dispatch({ type: LOAD_MARKERS, payload: {markerList: res.data}});
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};

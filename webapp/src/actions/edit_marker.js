
import axios from 'axios';

import {
  SET_GLOBAL_CONFIG,
  SET_MARKER_EDIT_DATA,
} from './types';

export const setEditMarkerFromOpen = (data) => dispatch => {
  let markerDetail = {
    until: data.until,
    queue_level: data.queue_level,
    products: data.products,
    name: data.name,
    id:data.id,
  }
  dispatch({ type: SET_MARKER_EDIT_DATA, payload: markerDetail});
  dispatch({ type: SET_GLOBAL_CONFIG, payload: {editMarketFromOpen: true}});
};

export const setEditMarkerFromClose = () => dispatch => {
  dispatch({ type: SET_GLOBAL_CONFIG, payload: {editMarketFromOpen: false}});
};


export const editMarker = (data) => async (dispatch) => {
  try {
      let body = JSON.stringify({ 
        marker_id: data.marker_id,
        closing_hour: data.closing_hour,
        products: data.products,
        queue_level: data.queue_level
      });
      let config = {
          headers: { 
              'Content-Type': 'application/json'
          }
      };
      console.log(body);
      const res = await axios.post('/markers/update',body,config);
      return true;
  } catch (err) {
      console.log(err);
      return false;
  }
};

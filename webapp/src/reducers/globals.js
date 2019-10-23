import update from 'react-addons-update';

import { SET_GLOBAL_CONFIG } from '../actions/types';

var defaultValues = {
    newMarketShowRefPoint: false,
    newMarketFromOpen: false,
    fristMapCenter: false,
    latCenterMap: -33.317,
    lngCenterMap: -71.103
}

export default function(state = defaultValues , action) {
  switch (action.type){
    case SET_GLOBAL_CONFIG:
      console.log(action.payload);
      return update(state, {$merge: action.payload} );
    default:
      return state;
  }
}
import update from 'react-addons-update';

import { SET_GLOBAL_CONFIG } from '../actions/types';

var defaultValues = {
    newMarketShowRefPoint: false,
    newMarketFromOpen: false,
    editMarketFromOpen:false,
    adminEnabledFilter:'none'
}

export default function(state = defaultValues , action) {
  switch (action.type){
    case SET_GLOBAL_CONFIG:
      return update(state, {$merge: action.payload} );
    default:
      return state;
  }
}
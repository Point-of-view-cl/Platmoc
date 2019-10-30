import update from 'react-addons-update';

import { SET_MARKER_EDIT_DATA } from '../actions/types';

var defaultValues = {
  markerDetail: {
    until: '00:00',
    queue_level: '0',
    products:[''],
    name: '',
    id:'',
  }
}

export default function(state = defaultValues , action) {
  switch (action.type){
    case SET_MARKER_EDIT_DATA:
        //console.log(action.payload);
        //return state; 
        return update(state, {markerDetail: {$set: action.payload}});
    default:
        return state;
  }
}
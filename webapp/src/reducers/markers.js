import update from 'react-addons-update';

import { LOAD_MARKERS } from '../actions/types';

var defaultValues = {
  markers: {
      a0001:{
        lat: 51.505,
        lng: -0.09
      },
      a0002:{
        lat: 50.505,
        lng: -0.09
      },
  }
}

export default function(state = defaultValues , action) {
  switch (action.type){
    case LOAD_MARKERS:
      let test = {};
      action.payload.markerList.forEach(element => {
        console.log(element);
        test[element.location_id] = {
          lat: element.lat,
          lng: element.long
        }
      });
      console.log(test);
      return update(state, {markers: {$merge: test}} );;
    default:
      return state;
  }
}
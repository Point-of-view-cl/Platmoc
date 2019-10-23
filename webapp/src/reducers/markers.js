import update from 'react-addons-update';

import { LOAD_MARKERS } from '../actions/types';

var defaultValues = {
  markers: {
    /*
      a0001:{
        lat: -32.949715,
        lng: -71.544152,
        name: 'a'
      },
      a0002:{
        lat: 50.505,
        lng: -0.09,
        name: 'b'
      },
    */
  }
}

export default function(state = defaultValues , action) {
  switch (action.type){
    case LOAD_MARKERS:
      let test = {};
      action.payload.markerList.forEach(element => {
        let untilAux;
        if(element.until == 'null'){
          untilAux = 'Estamos averiguando para usted ♥';
        }else{
          untilAux = element.until;
        }
        test[element.location_id] = {
          lat: element.lat,
          lng: element.long,
          name: element.name,
          until: untilAux
        }
      });
      //console.log(test);
      return update(state, {markers: {$merge: test}} );
      //return state;
    default:
      return state;
  }
}
import update from 'react-addons-update';
import moment from 'moment';

import { LOAD_STATIC_MARKERS, LOAD_MARKERS, CLEAR_ALL_MARKERS, TEST_LOCAL_FILTER_ONLY_ENABLED, TEST_LOCAL_FILTER_ONLY_DISABLED } from '../actions/types';

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
    case LOAD_STATIC_MARKERS:
      let statics = {};
      //TODO: Sacar esto de aqui
      action.payload.markerList.forEach(element => {
        let untilAux;
        if(element.until == 'null'){
          untilAux = 'Estamos averiguando para usted ♥';
        }else{
          untilAux = element.until;
        }
        statics[element.location_id] = {
          lat: element.lat,
          lng: element.long,
          name: element.name,
          until: untilAux,
          marker_type: -1,
        }
      });
      return update(state, {markers: {$merge: statics}} );
    case LOAD_MARKERS:
      let dinamycMarkers = {};
      action.payload.markerList.forEach(element => {

        //TODO: Aplicar TimeZone correctamente
        let created_at = moment(element.created_at).subtract({'hours': 4});
        let updated_at = moment(element.updated_at).subtract({'hours': 4});

        if(action.payload.adminFilter == 'none'){    
          dinamycMarkers[element.marker_id] = {
            lat: element.lat,
            lng: element.long,
            name: element.name,
            marker_type: element.marker_type, 
            enable: element.enable,
            created_at: created_at,
            updated_at: updated_at
          }
        }else if(action.payload.adminFilter == 'enabled'){
          if(element.enable){
            dinamycMarkers[element.marker_id] = {
              lat: element.lat,
              lng: element.long,
              name: element.name,
              marker_type: element.marker_type, 
              enable: element.enable,
              created_at: created_at,
              updated_at: updated_at
            }
          }
        }else if(action.payload.adminFilter == 'disabled'){
          if(!element.enable){
            dinamycMarkers[element.marker_id] = {
              lat: element.lat,
              lng: element.long,
              name: element.name,
              marker_type: element.marker_type, 
              enable: element.enable,
              created_at: created_at,
              updated_at: updated_at
            }
          }
        }else{
          dinamycMarkers = {};
        }
      });
      //console.log(dinamycMarkers);
      return update(state, {markers: {$merge: dinamycMarkers}} );
    case CLEAR_ALL_MARKERS:
      return update(state, {markers: {$set: {}}} );
    /*
    case TEST_LOCAL_FILTER_ONLY_ENABLED:
      let newListEnabled = {}
      Object.entries(state.markers).forEach(function(data) {
        const markerId = data[0];
        const markerData = data[1];
        if(markerData.enable){
          newListEnabled[markerId] = markerData;
        }
      });
      return update(state, {markers: {$set: newListEnabled}} );
    case TEST_LOCAL_FILTER_ONLY_DISABLED:
      let newListDisabled = {}
      Object.entries(state.markers).forEach(function(data) {
        const markerId = data[0];
        const markerData = data[1];
        if(!markerData.enable){
          newListDisabled[markerId] = markerData;
        }
      });
      return update(state, {markers: {$set: newListDisabled}} );
    */
    default:
      return state;
  }
}
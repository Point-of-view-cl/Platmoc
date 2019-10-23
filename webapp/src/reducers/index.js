  
import { combineReducers } from 'redux';

import test from './test';
import markers from './markers';
import globals from './globals';
import markerDetail from './markerDetail';
import markerEdit from './markerEdit';

export default combineReducers({
  test: test,
  markers: markers,
  globals: globals,
  markerDetail: markerDetail,
  markerEdit: markerEdit
});
  
import { combineReducers } from 'redux';

import test from './test';
import markers from './markers';
import globals from './globals';
import markerDetail from './markerDetail';

export default combineReducers({
  test: test,
  markers: markers,
  globals: globals,
  markerDetail: markerDetail
});
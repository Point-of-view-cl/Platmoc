  
import { combineReducers } from 'redux';

import test from './test';
import markers from './markers';
import globals from './globals';

export default combineReducers({
  test: test,
  markers: markers,
  globals: globals
});
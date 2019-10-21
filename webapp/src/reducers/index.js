  
import { combineReducers } from 'redux';

import test from './test';
import markers from './markers';

export default combineReducers({
  test: test,
  markers: markers
});
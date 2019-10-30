import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css';
import 'react-leaflet-markercluster/dist/styles.min.css'; 
import './css/customCss.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import Main from './components/Main';

//TODO: quitar loger de redux dev tools para production
const store = createStore(reducers, {},
  compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

ReactDOM.render(
  <Provider store={store}>
      <Main />
  </Provider>,
  document.querySelector('#root')
);
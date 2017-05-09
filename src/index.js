import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import data_store from './store/reducer';


let store = createStore(data_store);

ReactDOM.render(
  
  <Provider store={store} >
    <App />
  </Provider>,

  document.getElementById('root')
);


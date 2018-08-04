import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import store from './store/configureStore.js'
import * as styles from './assets/styles'

import App from './app'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);

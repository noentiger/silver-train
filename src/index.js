import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import configureStore from './store'
import 'normalize.css/normalize.css'
import './index.css'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import constants from './constants';
import ReactGA from 'react-ga';

// Let the reducers handle initial state
const initialState = {}
const store = configureStore(initialState)

ReactGA.initialize(constants.analytics.google);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('root')
)
registerServiceWorker()

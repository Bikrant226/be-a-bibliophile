import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import{ store} from './Redux/Store';
import {persistor} from './Redux/Store';
import {PersistGate} from 'redux-persist/es/integration/react';




ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
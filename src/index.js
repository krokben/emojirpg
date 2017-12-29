import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { Provider } from 'react-redux';

const initialState = {
  app: {
    menu: false,
  },
  hero: {
    lvl: 1,
    hp: 10,
    atk: 3,
    def: 2,
  },
  enemy: {
    name: 'monkey',
    emoji: '🐒',
    lvl: 1,
    hp: 10,
    atk: 2,
  },
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

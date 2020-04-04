import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root-reducer';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
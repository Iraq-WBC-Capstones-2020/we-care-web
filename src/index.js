import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './i18n';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <Suspense fallback="loading">
          <App />
        </Suspense>
      </Provider>
    </React.StrictMode>
  </Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

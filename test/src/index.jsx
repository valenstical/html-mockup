/* eslint-disable react/wrap-multilines */
import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import './styles/index.scss';

function App() {
  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

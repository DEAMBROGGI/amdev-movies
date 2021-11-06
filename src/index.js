import React from 'react';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//react router >>> embebe el app en un route >>> permite usar funciones del router-react-dom
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

//se embebe al objeto en un Provider lo cual permite usar redux en toda la app
import { Provider } from 'react-redux';
import store from './core/index';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';

//habilitar history
const customHistory = createBrowserHistory();

render(
  <Router history={customHistory}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();

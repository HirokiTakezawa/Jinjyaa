import * as serviceWorker from './serviceWorker';
import 'babel-polyfill';
import 'url-search-params-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import * as colors from '@material-ui/core/colors';
import { PersistGate } from 'redux-persist/integration/react';

import rootSaga from '~/controllers/RootSaga';
import { configureStore } from '~/store/ConfigureStore';

import Layout from '~/containers/Layout';
import Routes from '~/containers/Routes';
import LangProvider from '~/containers/Lang/LangProvider';

const muiTheme = createMuiTheme({
  palette: {
    type: 'light',
    fontFamily: 'Noto Sans Japanese, sans-serif',
    text: {
      primary: '#1A1A1A',
      secondary: '#4D4D4D',
      disabled: '#4D4D4D',
    },
    primary: {
      main: '#3e99fd',
      contrastText: '#ffffff',
    },
    secondary: colors.red,
    error: { main: '#fd5757' },
    primary1Color: '#3e99fd',
    primary2Color: '#00cae4',
    accent1Color: colors.pink.A200,
  },
});

const { store, persistor, history } = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={muiTheme}>
        <ConnectedRouter history={history}>
          <LangProvider locale={'en'}>
            <Layout>
              <Routes />
            </Layout>
          </LangProvider>
        </ConnectedRouter>
      </MuiThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import localeState from './LangState';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    localeState,
  });

export default rootReducer;

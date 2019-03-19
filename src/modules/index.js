import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import localeState from './LangState';
import jinjyaState from './JinjyaState';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    localeState,
    jinjyaState,
  });

export default rootReducer;

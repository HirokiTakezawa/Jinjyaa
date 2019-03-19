import { all } from 'redux-saga/effects';

import LocaleController from './LangController';
import SearchJinjyaController from './SearchJinjyaController';

function* rootSaga() {
  yield all([...LocaleController, ...SearchJinjyaController]);
}

export default rootSaga;

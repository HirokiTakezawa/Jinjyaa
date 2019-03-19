import { all } from 'redux-saga/effects';

import LocaleController from './LangController';

function* rootSaga() {
  yield all([...LocaleController]);
}

export default rootSaga;

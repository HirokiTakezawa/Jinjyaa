import { call, takeEvery } from 'redux-saga/effects';

import LocaleChangeService from '~/services/lang/LangChangeService';
import * as Actions from '~/actions/LangAction';

function* changeLocale(action) {
  yield call(LocaleChangeService.run, action);
}

export const LocaleController = [
  takeEvery(Actions.CHANGE_LOCALE, changeLocale),
];

export default LocaleController;

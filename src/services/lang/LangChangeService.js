import { put } from 'redux-saga/effects';
import { Lang } from '~/models/LangModel';
import * as LangStateActions from '~/modules/LangState';

function* run(action) {
  if (action.payload.locale === 'ex') {
    // exception occur
    throw new Error('error occured ');
  }
  let locale = new Lang({
    code: action.payload.locale,
  });
  yield put({
    type: LangStateActions.CHANGE_LOCALE_SAVE_STATE,
    payload: { locale: locale },
  });
}

const LocaleChangeService = {
  run: run,
};

export default LocaleChangeService;

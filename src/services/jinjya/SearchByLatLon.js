import { put, call } from 'redux-saga/effects';
import { Jinjya } from '~/models/JinjyaModel';
import * as JinjyaStateActions from '~/modules/JinjyaState';
import { get } from '~/middleware/Api';

function* run(action) {
  const { lat, lon } = action.payload;
  const limit = 10000;
  const path = '/shrine/master';
  const params = {
    lat,
    lon,
    rad: limit,
  };
  const data = yield call(get, path, params);

  let jinjya = new Jinjya({
    geoJson: data,
  });
  yield put({
    type: JinjyaStateActions.CHANGE_JINJYA_SAVE_STATE,
    payload: { jinjya: jinjya.toJS() },
  });
}

const SearchByLatLon = {
  run: run,
};

export default SearchByLatLon;

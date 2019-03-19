import { call, takeEvery } from 'redux-saga/effects';

import SearchByLatLon from '~/services/jinjya/SearchByLatLon';
import * as Actions from '~/actions/SearchJinjyaAction';

function* searchJinjyaByLatLon(action) {
  yield call(SearchByLatLon.run, action);
}

export const SearchJinjyaController = [
  takeEvery(Actions.SEARCH_JINJYA_BY_LAT_LON, searchJinjyaByLatLon),
];

export default SearchJinjyaController;

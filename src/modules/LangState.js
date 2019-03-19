import { handleActions } from 'redux-actions';
import { Lang } from '~/models/LangModel';

export const CHANGE_LOCALE_SAVE_STATE = 'CHANGE_LOCALE_SAVE_STATE';

const initialState = {
  locale: new Lang({
    code: 'en',
  }),
};

const langState = handleActions(
  {
    [CHANGE_LOCALE_SAVE_STATE]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState
);

export default langState;

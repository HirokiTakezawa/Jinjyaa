import { handleActions } from 'redux-actions';
import { Jinjya } from '~/models/JinjyaModel';

export const CHANGE_JINJYA_SAVE_STATE = 'CHANGE_JINJYA_SAVE_STATE';

const initialState = {
  jinjya: new Jinjya().toJS(),
};

const jinjyaState = handleActions(
  {
    [CHANGE_JINJYA_SAVE_STATE]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState
);

export default jinjyaState;

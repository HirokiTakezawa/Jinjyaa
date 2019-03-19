import { Record } from 'immutable';

const LangRecord = Record(
  {
    code: '',
  },
  'Lang'
);

export class Lang extends LangRecord {}

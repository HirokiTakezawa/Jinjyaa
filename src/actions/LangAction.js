export const CHANGE_LOCALE = 'CHANGE_LOCALE';

// export const sampleAction = params => ({
//   type: FOO_TYPE,      // must
//   payload: {object},   // optional
//   meta: {object},      // optional
//   error: false, true, undefined, null, ... // optional
// });

export const changeLocale = code => ({
  type: CHANGE_LOCALE,
  payload: { locale: code },
});

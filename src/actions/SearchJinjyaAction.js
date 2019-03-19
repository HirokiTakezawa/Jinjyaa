export const SEARCH_JINJYA_BY_LAT_LON = 'SEARCH_JINJYA_BY_LAT_LON';

// export const sampleAction = params => ({
//   type: FOO_TYPE,      // must
//   payload: {object},   // optional
//   meta: {object},      // optional
//   error: false, true, undefined, null, ... // optional
// });

export const searchJinjyaByLatLon = (lat, lon) => ({
  type: SEARCH_JINJYA_BY_LAT_LON,
  payload: { lat, lon },
});

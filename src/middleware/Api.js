import axiosBase from 'axios';
const API_BASE = 'http://oh-yeah-sea-kit2.tk';

export function get(path, params) {
  let axios = axiosBase.create({
    baseURL: API_BASE,
  });
  return axios
    .get(path, { params: params })
    .then(results => {
      return results.data;
    })
    .catch(error => {
      console.log(error);
      return undefined;
    });
}

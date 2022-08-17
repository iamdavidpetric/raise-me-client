import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PATH_PREFIX}`;

const api = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

const Api = {
  catchError: error => {
    return error.response.data;
  },

  setHeaders: headers => {
    api.defaults.headers.common = headers;
  },

  delete: path => {
    const request = api.delete(path);
    request.catch(Api.catchError);
    return request;
  },
  get: path => {
    const request = api.get(path);
    request.catch(Api.catchError);
    return request;
  },
  patch: (path, body) => {
    const request = api.patch(path, body);
    request.catch(Api.catchError);
    return request;
  },
  post: (path, body) => {
    const request = api.post(path, body);
    request.catch(Api.catchError);
    return request;
  },
  put: (path, body) => {
    const request = api.put(path, body);
    request.catch(Api.catchError);
    return request;
  }
};

export default Api;

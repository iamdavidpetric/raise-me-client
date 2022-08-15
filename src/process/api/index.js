import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PATH_PREFIX}`;

const Api = axios.create({
  baseURL: `${baseUrl}`
});

export default Api;

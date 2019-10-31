import axios from 'axios';

axios.defaults.withCredentials = true;

const myAxios = axios.create({
  baseURL: '/api/',
  withCredentials: true,
});

export default myAxios;

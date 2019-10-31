import axios from 'axios';

const myAxios = axios.create({
  baseURL: '/api/',
  withCredentials: true,
});

export default myAxios;

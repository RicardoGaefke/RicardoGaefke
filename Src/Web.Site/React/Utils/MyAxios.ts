import axios from 'axios';

const myAxios = axios.create({
  baseURL: '/api/',
});

export default myAxios;

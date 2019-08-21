import axios from 'axios';

const myAxios = axios.create({
  baseURL: 'https://login.ricardogaefke.com/api/',
});

export default myAxios;

import axios, { AxiosRequestHeaders } from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_BASE_URL
    : 'http://localhost:5000';

export default function characterService(headers: AxiosRequestHeaders = {}) {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
    responseType: 'json',
    headers: {
      Accept: '*/*',
      ...headers,
    },
  });

  return instance;
}

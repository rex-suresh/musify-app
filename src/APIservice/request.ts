import axios, { AxiosRequestConfig } from 'axios';

export const get = (url: string, config?: Partial<AxiosRequestConfig>) =>
  axios
    .get(url, { method: 'GET', ...config })
    .catch((error: Error) => console.error(error.message));

export const post = (url: string, config?: Partial<AxiosRequestConfig>) =>
  axios
    .get(url, { method: 'POST', ...config })
    .catch((error: Error) => console.error(error.message));

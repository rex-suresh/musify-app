import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Platform } from 'react-native';
import { routes } from './routes';

const BASE_URL =
  Platform.OS === 'ios' ? 'http://127.0.0.1:4000' : 'http://10.0.2.2:4000';

const api = axios.create({ baseURL: BASE_URL });
const logError = (error: Error) => console.error(error.message);

export const get = (url: string, config?: Partial<AxiosRequestConfig>) =>
  api.get(url, { method: 'GET', ...config }).catch(logError);

export const post = (url: string, config?: Partial<AxiosRequestConfig>) =>
  api.post(url, { method: 'POST', ...config }).catch(logError);

const extractResult = (res: AxiosResponse) => {
  if (res.data) {
    return res.data.result;
  }
  throw new Error(`Failed to request with status : ${res.status}`);
};

export const topArtists = () => api.get(routes.topArt).then(extractResult);
export const topPlaylists = () => api.get(routes.topPlay).then(extractResult);
export const topTracks = () => api.get(routes.topTra).then(extractResult);
export const topAlbums = () => api.get(routes.topAlb).then(extractResult);

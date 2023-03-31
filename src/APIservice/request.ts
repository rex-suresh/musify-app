import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Platform } from 'react-native';
import { routes } from './routes';
import { androidHost, iosHost, env, apiUrl } from '../appConfig';

const getBaseUrl = () => {
  if (env === 'prod') {
    return apiUrl;
  }

  return Platform.OS === 'ios' ? iosHost : androidHost;
};

const BASE_URL = getBaseUrl();

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

  throw new Error(`Failed to request, (${res.status})`);
};

const albumRoute = (albumId: string) => `${routes.album}/${albumId}`;
const artistRoute = (artistId: string) => `${routes.artist}/${artistId}`;
const artistTrackRoute = (artistId: string) =>
  `${routes.artistTracks}/${artistId}`;
const artistAlbumRoute = (artistId: string) =>
  `${routes.artistAlbums}/${artistId}`;
const playlistRoute = (playlistId: string) =>
  `${routes.playlist}/${playlistId}`;
const searchRoute = (keyword: string) => `${routes.search}/${keyword}`;

export const queryNames = {
  topArtists: 'top-artists',
  topPlaylists: 'top-playlist',
  topTracks: 'top-tracks',
  topAlbums: 'top-albums',
};

export const topArtists = () => api.get(routes.topArt).then(extractResult);
export const topPlaylists = () => api.get(routes.topPlay).then(extractResult);
export const topTracks = () => api.get(routes.topTra).then(extractResult);
export const topAlbums = () => api.get(routes.topAlb).then(extractResult);

export const initQueries = [
  { queryName: queryNames.topArtists, queryFn: topArtists },
  { queryName: queryNames.topAlbums, queryFn: topAlbums },
  { queryName: queryNames.topPlaylists, queryFn: topPlaylists },
  { queryName: queryNames.topTracks, queryFn: topTracks },
];

export const playlistDetail = (playlistId: string) => () =>
  api.get(playlistRoute(playlistId)).then(extractResult);
export const albumDetail = (albumId: string) => () =>
  api.get(albumRoute(albumId)).then(extractResult);
export const artistDetail = (artistId: string) => () =>
  api.get(artistRoute(artistId)).then(extractResult);
export const artistTrackDetail = (artistId: string) => () =>
  api.get(artistTrackRoute(artistId)).then(extractResult);
export const artistAlbumDetail = (artistId: string) => () =>
  api.get(artistAlbumRoute(artistId)).then(extractResult);

export const searchResult = (searchKey: string) => () =>
  api.get(searchRoute(searchKey)).then(extractResult);

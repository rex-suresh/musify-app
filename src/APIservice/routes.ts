// type ValueOf<T> = T[keyof T];

// import { config } from '../appConfig';

const BASE_URL = 'http://127.0.0.1:9913';

type Route =
  | 'topArt'
  | 'topAlb'
  | 'topTra'
  | 'topPlay'
  | 'artist'
  | 'album'
  | 'track'
  | 'playlist'
  | 'search';

export const routes: Record<Route, string> = {
  topAlb: `${BASE_URL}/home/albums`,
  topArt: `${BASE_URL}/home/artists`,
  topTra: `${BASE_URL}/home/tracks`,
  topPlay: `${BASE_URL}/home/playlists`,
  artist: '',
  album: '',
  track: '',
  playlist: '',
  search: '',
};

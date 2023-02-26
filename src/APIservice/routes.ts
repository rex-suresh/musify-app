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
  topAlb: '/home/albums',
  topArt: '/home/artists',
  topTra: '/home/tracks',
  topPlay: '/home/playlists',
  artist: '',
  album: '',
  track: '',
  playlist: '/detail/playlist',
  search: '',
};

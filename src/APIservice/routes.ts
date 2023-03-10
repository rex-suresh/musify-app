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
  artist: '/detail/artist',
  album: '/detail/album',
  playlist: '/detail/playlist',
  track: '',
  search: '',
};

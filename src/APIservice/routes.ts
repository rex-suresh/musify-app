type Route =
  | 'topArt'
  | 'topAlb'
  | 'topTra'
  | 'topPlay'
  | 'artist'
  | 'album'
  | 'playlist'
  | 'search'
  | 'artistTracks'
  | 'artistAlbums';

export const routes: Record<Route, string> = {
  topAlb: '/home/albums',
  topArt: '/home/artists',
  topTra: '/home/tracks',
  topPlay: '/home/playlists',
  artist: '/detail/artist',
  artistTracks: '/detail/artist/tracks',
  artistAlbums: '/detail/artist/albums',
  album: '/detail/album',
  playlist: '/detail/playlist',
  search: '/search',
};

import { HomeScreen } from './screens/HomeScreen';
import { AlbumDetailPage } from './screens/AlbumDetailPage';
import { ArtistDetailPage } from './screens/ArtistDetailPage';
import { PlaylistDetailPage } from './screens/PlaylistDetailPage';
import { TrackDetailPage } from './screens/TrackDetailPage';
import { PlayerScreen } from './screens/PlayerScreen';
import { SearchScreen } from './screens/SearchScreen';

/* eslint-disable no-unused-vars */
// Don't know why this error is coming.
export enum SCREENS {
  HOME = 'Home',
  SEARCH = 'Search',
  PLAYER = 'Player',
  ARTIST_SCREEN = 'Artist Screen',
  TRACK_SCREEN = 'Track Screen',
  ALBUM_SCREEN = 'Album Screen',
  PLAYLIST_SCREEN = 'Playlist Screen',
}

export const endScreens: Record<SCREENS, () => JSX.Element> = {
  [SCREENS.HOME]: HomeScreen,
  [SCREENS.PLAYER]: PlayerScreen,
  [SCREENS.SEARCH]: SearchScreen,
  [SCREENS.ARTIST_SCREEN]: ArtistDetailPage,
  [SCREENS.TRACK_SCREEN]: TrackDetailPage,
  [SCREENS.ALBUM_SCREEN]: AlbumDetailPage,
  [SCREENS.PLAYLIST_SCREEN]: PlaylistDetailPage,
};

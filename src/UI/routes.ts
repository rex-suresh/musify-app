/* eslint-disable no-unused-vars */
import { HomeScreen } from './screens/HomeScreen';
import { AlbumDetailPage } from './screens/AlbumDetailPage';
import { ArtistDetailPage } from './screens/ArtistDetailPage';
import { PlaylistDetailPage } from './screens/PlaylistDetailPage';
import { TrackDetailPage } from './screens/TrackDetailPage';

export enum SCREENS {
  HOME = 'home',
  ARTIST_SCREEN = 'artistScreen',
  TRACK_SCREEN = 'trackScreen',
  ALBUM_SCREEN = 'albumScreen',
  PLAYLIST_SCREEN = 'playlistScreen',
}

export const endScreens: Record<SCREENS, () => JSX.Element> = {
  [SCREENS.HOME]: HomeScreen,
  [SCREENS.ARTIST_SCREEN]: ArtistDetailPage,
  [SCREENS.TRACK_SCREEN]: TrackDetailPage,
  [SCREENS.ALBUM_SCREEN]: AlbumDetailPage,
  [SCREENS.PLAYLIST_SCREEN]: PlaylistDetailPage,
};

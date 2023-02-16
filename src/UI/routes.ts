import { ParamListBase, RouteProp } from '@react-navigation/native';
import { BottomBarScreenNavigator } from './NavBar';
import { AlbumDetailPage } from './screens/AlbumDetailPage';
import { ArtistDetailPage } from './screens/ArtistDetailPage';
import { HomeScreen } from './screens/HomeScreen';
import { PlayerScreen } from './screens/PlayerScreen';
import { PlaylistDetailPage } from './screens/PlaylistDetailPage';
import { SearchScreen } from './screens/SearchScreen';

/* eslint-disable no-unused-vars */
// Don't know why this error is coming.
export enum SCREENS {
  HOME = 'Home',
  SEARCH = 'Search',
  PLAYER = 'Player',
  ARTIST_SCREEN = 'Artist Screen',
  ALBUM_SCREEN = 'Album Screen',
  PLAYLIST_SCREEN = 'Playlist Screen',
  ROOT = 'root',
}

export type ScreenPropsType = {
  route: RouteProp<ParamListBase, SCREENS>;
  navigation: any;
};

export const endScreens: Record<
  SCREENS,
  (props: ScreenPropsType) => JSX.Element
> = {
  [SCREENS.HOME]: HomeScreen,
  [SCREENS.PLAYER]: PlayerScreen,
  [SCREENS.SEARCH]: SearchScreen,
  [SCREENS.ARTIST_SCREEN]: ArtistDetailPage,
  [SCREENS.ALBUM_SCREEN]: AlbumDetailPage,
  [SCREENS.PLAYLIST_SCREEN]: PlaylistDetailPage,
  [SCREENS.ROOT]: BottomBarScreenNavigator,
};

import { ParamListBase, RouteProp } from '@react-navigation/native';
import { BottomBarScreenNavigator } from './navigation/NavBar';
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
  SEARCH_SCREEN = 'Search Screen',
  ARTIST_SCREEN = 'Artist Screen',
  ALBUM_SCREEN = 'Album Screen',
  PLAYLIST_SCREEN = 'Playlist Screen',
  ROOT = 'root',
}

export type ScreenPropsType = {
  route: RouteProp<ParamListBase, SCREENS>;
  navigation: any;
};

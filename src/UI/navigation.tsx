import { SCREENS } from './routes';

type NavigationProps = {
  navigate: (screen: any, props?: any) => void;
};

export const navigateToArtistDetailPage =
  (navigation: NavigationProps) => () => {
    navigation.navigate(SCREENS.ARTIST_SCREEN);
  };

export const navigateToAlbumDetailPage =
  (navigation: NavigationProps) => () => {
    navigation.navigate(SCREENS.ALBUM_SCREEN);
  };

export const navigateToTrackDetailPage =
  (navigation: NavigationProps) => () => {
    navigation.navigate(SCREENS.PLAYER);
  };

export const navigateToPlaylistDetailPage =
  (navigation: NavigationProps) => () => {
    navigation.navigate(SCREENS.PLAYLIST_SCREEN);
  };

export const navigateToHomePage = (navigation: NavigationProps) => () => {
  navigation.navigate(SCREENS.HOME);
};

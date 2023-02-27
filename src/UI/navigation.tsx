import { TrackCardProps } from './components/trackCard/TrackCard.types';
import { SCREENS } from './routes';

type NavigationProps = {
  navigate: (screen: any, props?: any) => void;
};

export type PlaylistDetailPageProps = {
  id: string;
  name: string;
  image: string;
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
  (navigation: NavigationProps) => (track: TrackCardProps) => {
    navigation.navigate(SCREENS.PLAYER, track);
  };

export const navigateToPlaylistDetailPage =
  (navigation: NavigationProps, props: PlaylistDetailPageProps) => () => {
    navigation.navigate(SCREENS.PLAYLIST_SCREEN, props);
  };

export const navigateToHomePage = (navigation: NavigationProps) => () => {
  navigation.navigate(SCREENS.HOME);
};

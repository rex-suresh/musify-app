import { TrackCardProps } from './components/trackCard/TrackCard.types';
import { SCREENS } from './routes';

type NavigationProps = {
  navigate: (screen: any, props?: any) => void;
};

export type DetailPageProps = {
  id: string;
  name: string;
  image: string;
  citation?: string;
};

export const navigateToArtistDetailPage =
  (navigation: NavigationProps, props: DetailPageProps) => () => {
    navigation.navigate(SCREENS.ARTIST_SCREEN, props);
  };

export const navigateToAlbumDetailPage =
  (navigation: NavigationProps, props: DetailPageProps) => () => {
    navigation.navigate(SCREENS.ALBUM_SCREEN, props);
  };

export const navigateToTrackDetailPage =
  (navigation: NavigationProps) => (track: TrackCardProps) => {
    navigation.navigate(SCREENS.PLAYER, track);
  };

export const navigateToPlaylistDetailPage =
  (navigation: NavigationProps, props: DetailPageProps) => () => {
    navigation.navigate(SCREENS.PLAYLIST_SCREEN, props);
  };

export const navigateToHomePage = (navigation: NavigationProps) => () => {
  navigation.navigate(SCREENS.HOME);
};

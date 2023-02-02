import React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from './routes';
import { AlbumDetailPage } from './screens/AlbumDetailPage';
import { ArtistDetailPage } from './screens/ArtistDetailPage';
import { TrackDetailPage } from './screens/TrackDetailPage';
import { PlaylistDetailPage } from './screens/PlaylistDetailPage';
import { HomeScreen } from './screens/HomeScreen';
import { colors } from './colors';

type NavigationProps = { navigate: (route: SCREENS) => void };

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
    navigation.navigate(SCREENS.TRACK_SCREEN);
  };

export const navigateToPlaylistDetailPage =
  (navigation: NavigationProps) => () => {
    navigation.navigate(SCREENS.PLAYLIST_SCREEN);
  };

export const navigateToHomePage = (navigation: NavigationProps) => () => {
  navigation.navigate(SCREENS.HOME);
};

const NavStack = createNativeStackNavigator();

const theme: Theme = {
  colors: {
    background: colors.screenBg,
    text: colors.light,
    border: 'none',
    notification: 'purple',
    primary: colors.light,
    card: 'black',
  },
  dark: true,
};

export const ScreenNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <NavStack.Navigator initialRouteName={SCREENS.HOME}>
        <NavStack.Screen
          name={SCREENS.HOME}
          component={HomeScreen}
        />
        <NavStack.Screen
          name={SCREENS.ARTIST_SCREEN}
          component={ArtistDetailPage}
        />
        <NavStack.Screen
          name={SCREENS.ALBUM_SCREEN}
          component={AlbumDetailPage}
        />
        <NavStack.Screen
          name={SCREENS.TRACK_SCREEN}
          component={TrackDetailPage}
        />
        <NavStack.Screen
          name={SCREENS.PLAYLIST_SCREEN}
          component={PlaylistDetailPage}
        />
      </NavStack.Navigator>
    </NavigationContainer>
  );
};

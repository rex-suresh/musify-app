import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { colors } from './colors';
import { SCREENS } from './routes';
import { AlbumDetailPage } from './screens/AlbumDetailPage';
import { ArtistDetailPage } from './screens/ArtistDetailPage';
import { HomeScreen } from './screens/HomeScreen';
import { PlayerScreen } from './screens/PlayerScreen';
import { PlaylistDetailPage } from './screens/PlaylistDetailPage';
import { SearchScreen } from './screens/SearchScreen';
import { TrackDetailPage } from './screens/TrackDetailPage';

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
    navigation.navigate(SCREENS.TRACK_SCREEN);
  };

export const navigateToPlaylistDetailPage =
  (navigation: NavigationProps) => () => {
    navigation.navigate(SCREENS.PLAYLIST_SCREEN);
  };

export const navigateToHomePage = (navigation: NavigationProps) => () => {
  navigation.navigate(SCREENS.HOME);
};

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

const NavStack = createNativeStackNavigator();
export const SubScreenNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <NavStack.Navigator>
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

const NavBar = createBottomTabNavigator();
export const BottomBarScreenNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <NavBar.Navigator
        initialRouteName={SCREENS.HOME}
        screenOptions={{ headerShown: false }}>
        <NavBar.Screen
          name={SCREENS.HOME}
          component={HomeScreen}
        />
        <NavBar.Screen
          name={SCREENS.SEARCH}
          component={SearchScreen}
        />
        <NavBar.Screen
          name={SCREENS.PLAYER}
          component={PlayerScreen}
        />
      </NavBar.Navigator>
    </NavigationContainer>
  );
};

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../routes';
import { AlbumDetailPage } from '../screens/AlbumDetailPage';
import { ArtistDetailPage } from '../screens/ArtistDetailPage';
import { PlaylistDetailPage } from '../screens/PlaylistDetailPage';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '../theme';
import { BottomBarScreenNavigator } from './NavBar';

const NavStack = createNativeStackNavigator();
export const SubScreenNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <NavStack.Navigator
        initialRouteName={SCREENS.ROOT}
        screenOptions={{ headerShown: true }}>
        <NavStack.Screen
          name={SCREENS.ROOT}
          component={BottomBarScreenNavigator}
          options={{ headerShown: false }}
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
          name={SCREENS.PLAYLIST_SCREEN}
          component={PlaylistDetailPage}
        />
      </NavStack.Navigator>
    </NavigationContainer>
  );
};

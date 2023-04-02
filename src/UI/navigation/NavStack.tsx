import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from '../routes';
import { AlbumDetailPage } from '../screens/AlbumDetailPage';
import { ArtistDetailPage } from '../screens/ArtistDetailPage';
import { HomeScreen } from '../screens/HomeScreen';
import { PlaylistDetailPage } from '../screens/PlaylistDetailPage';
import { useNotificationDeepLink } from '../../deeplinking/notificationDeeplink';

const NavStack = createNativeStackNavigator();
export const SubScreenNavigator = () => {
  useNotificationDeepLink();
  return (
    <NavStack.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={{ headerShown: true, animation: 'fade_from_bottom' }}>
      <NavStack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
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
  );
};

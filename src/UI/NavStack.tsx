import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SCREENS } from './routes';
import { AlbumDetailPage } from './screens/AlbumDetailPage';
import { ArtistDetailPage } from './screens/ArtistDetailPage';
import { PlaylistDetailPage } from './screens/PlaylistDetailPage';
import { TrackDetailPage } from './screens/TrackDetailPage';
import { theme } from './theme';

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

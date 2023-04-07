import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { SCREENS } from '../routes';
import { AlbumDetailPage } from '../screens/AlbumDetailPage';
import { ArtistDetailPage } from '../screens/ArtistDetailPage';
import { HomeScreen } from '../screens/HomeScreen';
import { PlaylistDetailPage } from '../screens/PlaylistDetailPage';
import { useNotificationDeepLink } from '../../deeplinking/notificationDeeplink';
import { SearchScreen } from '../screens/SearchScreen';
import { QueueContext } from '../../context/CurrentContext';

const NavStack = createNativeStackNavigator();

export const HomeScreenNavigator = () => {
  const { clearContextQueue } = useContext(QueueContext);

  useNotificationDeepLink();
  return (
    <NavStack.Navigator
      initialRouteName={SCREENS.HOME}
      screenListeners={{ beforeRemove: clearContextQueue }}
      screenOptions={{ headerShown: true, animation: 'fade_from_bottom' }}>
      <NavStack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <NavStack.Group>
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
      </NavStack.Group>
    </NavStack.Navigator>
  );
};

export const SearchScreenNavigator = () => {
  const { clearContextQueue } = useContext(QueueContext);
  useNotificationDeepLink();

  return (
    <NavStack.Navigator
      initialRouteName={SCREENS.SEARCH_SCREEN}
      screenListeners={{ beforeRemove: clearContextQueue }}
      screenOptions={{ headerShown: true, animation: 'fade_from_bottom' }}>
      <NavStack.Screen
        name={SCREENS.SEARCH_SCREEN}
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <NavStack.Group>
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
      </NavStack.Group>
    </NavStack.Navigator>
  );
};

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { SCREENS } from '../routes';
import { HomeScreen } from '../screens/HomeScreen';
import { PlayerScreen } from '../screens/PlayerScreen';
import { SearchScreen } from '../screens/SearchScreen';

const home_icon = require('../images/home-icon.png');
const search_icon = require('../images/search-icon.png');
const player_icon = require('../images/music-icon.png');

type Props = { focused: boolean; color: string; size: number };

const icon = (imageData: ImageSourcePropType) => (props: Props) => {
  const style = { ...styles.icon, opacity: props.focused ? 1 : 0.5 };

  return (
    <Image
      source={imageData}
      style={style}
    />
  );
};

const NavBar = createBottomTabNavigator();
export const BottomBarScreenNavigator = () => {
  return (
    <NavBar.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <NavBar.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{ tabBarIcon: icon(home_icon) }}
      />
      <NavBar.Screen
        name={SCREENS.SEARCH}
        component={SearchScreen}
        options={{ tabBarIcon: icon(search_icon) }}
      />
      <NavBar.Screen
        name={SCREENS.PLAYER}
        component={PlayerScreen}
        options={{ tabBarIcon: icon(player_icon) }}
      />
    </NavBar.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 25,
    aspectRatio: 1,
  },
});

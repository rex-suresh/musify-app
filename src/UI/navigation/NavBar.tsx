import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { SCREENS } from '../routes';
import { PlayerScreen } from '../screens/PlayerScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { theme } from '../theme';
import { CustomTabBar } from './CustomBottomTabBar';
import { HomeScreenNavigator, SearchScreenNavigator } from './NavStack';

const home_icon = require('../images/home-icon.png');
const search_icon = require('../images/search-icon.png');
const player_icon = require('../images/music-icon.png');

type Props = { focused: boolean; color: string; size: number };

const icon = (imageData: ImageSourcePropType) => (props: Props) => {
  const visibility = { opacity: props.focused ? 1.2 : 0.4 };

  return (
    <Image
      source={imageData}
      style={[styles.icon, visibility]}
    />
  );
};

const NavBar = createBottomTabNavigator();
export const BottomBarScreenNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <NavBar.Navigator
        initialRouteName={SCREENS.ROOT}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}
        tabBar={(props) => <CustomTabBar {...props} />}>
        <NavBar.Screen
          name={SCREENS.ROOT}
          component={HomeScreenNavigator}
          options={{ tabBarIcon: icon(home_icon) }}
        />
        <NavBar.Screen
          name={SCREENS.SEARCH}
          component={SearchScreenNavigator}
          options={{ tabBarIcon: icon(search_icon) }}
        />
        <NavBar.Screen
          name={SCREENS.PLAYER}
          component={PlayerScreen}
          options={{ tabBarIcon: icon(player_icon) }}
        />
      </NavBar.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 25,
    aspectRatio: 1,
  },
});

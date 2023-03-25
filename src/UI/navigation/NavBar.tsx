import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { SCREENS } from '../routes';
import { PlayerScreen } from '../screens/PlayerScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { theme } from '../theme';
import { CustomTabBar } from './CustomBottomTabBar';
import { SubScreenNavigator } from './NavStack';

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
          component={SubScreenNavigator}
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
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 25,
    aspectRatio: 1,
  },
});

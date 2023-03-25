import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { State, usePlaybackState } from 'react-native-track-player';
import { colors } from '../colors';
import { MiniPlayer } from '../components/player/MiniPlayer';
import { SCREENS } from '../routes';

export const CustomTabBar = (props: BottomTabBarProps): JSX.Element => {
  const [showMusicBar, setShowMusicBar] = useState(false);
  const playbackState = usePlaybackState();
  const currentTabScreen = props.state.routeNames[props.state.index];

  useEffect(() => {
    if (
      playbackState.state &&
      [State.Playing, State.Loading, State.Paused, State.Buffering].includes(
        playbackState.state,
      )
    ) {
      setShowMusicBar(true);
      return;
    }
    setShowMusicBar(false);
  }, [playbackState]);

  if (
    showMusicBar &&
    [SCREENS.SEARCH, SCREENS.ROOT].includes(currentTabScreen as SCREENS)
  ) {
    return (
      <>
        <MiniPlayer />
        <BottomTabBar {...props} />
      </>
    );
  }

  return <BottomTabBar {...props} />;
};

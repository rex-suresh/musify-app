/* eslint-disable global-require */
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { PageTitle } from '../components/common/Titles';
import TrackPlayer from 'react-native-track-player';

export const PlayerScreen = () => {
  useEffect(() => {
    const start = async () => {
      // Add a track to the queue
      await TrackPlayer.add({
        id: 'trackId',
        url: 'https://listen.hs.llnwd.net/g3/prvw/5/5/8/9/7/2303079855.mp3',
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: require('../images/track-default.png'),
      });

      // Start playing it
      // await TrackPlayer.play();
    };
    start();
  }, []);

  return (
    <View>
      <PageTitle title="Player" />
    </View>
  );
};

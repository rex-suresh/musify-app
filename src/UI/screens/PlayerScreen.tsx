import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { PageTitle } from '../components/common/Titles';
import TrackPlayer from 'react-native-track-player';
import { TrackListContext } from '../../TrackPlayerDataProvider';

export const PlayerScreen = () => {
  const { tracks } = useContext(TrackListContext);

  useEffect(() => {
    console.log(tracks);
    (async () => {
      await TrackPlayer.reset().then(() => {
        TrackPlayer.add(tracks).then(() => {
          console.log(tracks);

          TrackPlayer.play();
        });
      });
    })();
  }, [tracks]);

  return (
    <View>
      <PageTitle title="Player" />
    </View>
  );
};

import React from 'react';
import { Text, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { mapToTrack } from '../components/common/mappers';
import { PageTitle } from '../components/common/Titles';
import { TrackCardProps } from '../components/trackCard/TrackCard.types';
import { ScreenPropsType } from '../routes';

export const PlayerScreen = ({ route }: ScreenPropsType) => {
  const track = route.params as TrackCardProps;

  TrackPlayer.removeUpcomingTracks();
  TrackPlayer.reset();
  TrackPlayer.add(mapToTrack(track));
  TrackPlayer.play();

  return (
    <View>
      <PageTitle title="Player" />
      <Text style={{ color: 'red' }}>
        {JSON.stringify(TrackPlayer.getQueue())}
      </Text>
    </View>
  );
};

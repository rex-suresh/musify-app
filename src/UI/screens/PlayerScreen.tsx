import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TrackPlayer from 'react-native-track-player';
import { colors } from '../colors';
import { mapToTrack } from '../components/common/mappers';
import { PageTitle } from '../components/common/Titles';
import { PlayerContent } from '../components/player/PlayerContent';
import { TrackCardProps } from '../components/trackCard/TrackCard.types';
import { ScreenPropsType } from '../routes';

export const PlayerScreen = ({ route }: ScreenPropsType) => {
  const track = route.params as TrackCardProps;

  useEffect(() => {
    if (track) {
      TrackPlayer.reset();
      TrackPlayer.add(mapToTrack(track));
      TrackPlayer.play();
    }
  }, [track]);

  return (
    <>
      <>
        <ImageBackground
          source={{ uri: track?.image }}
          blurRadius={50}
          style={styles.page}
          resizeMode="cover"
        />
        <LinearGradient
          colors={[colors.dark, colors.transparent, colors.dark]}
          style={styles.page}
        />
      </>
      <PageTitle title="Player" />
      <PlayerContent {...track} />
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    position: 'absolute',
    height: '100%',
  },
});

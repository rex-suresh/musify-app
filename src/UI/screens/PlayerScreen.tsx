import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTrackDetails } from '../../hooks/useTrackDetails';
import { colors } from '../colors';
import { PageTitle } from '../components/common/Titles';
import { PlayerContent } from '../components/player/PlayerContent';

const default_track = require('../images/track-default.png');

export const PlayerScreen = () => {
  const { activeTrack } = useTrackDetails();

  return (
    <>
      <>
        <ImageBackground
          source={
            activeTrack?.artwork ? { uri: activeTrack.artwork } : default_track
          }
          defaultSource={default_track}
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
      <PlayerContent />
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

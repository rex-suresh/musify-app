import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTrackDetails } from '../../hooks/useTrackDetails';
import { colors } from '../colors';
import { PageTitle } from '../components/common/Titles';
import { PlayerContent } from '../components/player/PlayerContent';

const downScaleImage = (link: string) => {
  const lowRes = '200x200';
  if (link.includes(lowRes)) {
    return link;
  }

  return `${link.slice(0, link.lastIndexOf('/'))}/${lowRes}.jpg`;
};

export const PlayerScreen = () => {
  const { activeTrack } = useTrackDetails();

  return (
    <>
      <>
        {activeTrack?.artwork && (
          <ImageBackground
            source={{ uri: downScaleImage(activeTrack.artwork as string) }}
            blurRadius={50}
            style={styles.page}
            resizeMode="cover"
          />
        )}
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

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTrackDetails } from '../../../hooks/useTrackDetails';
import { colors } from '../../colors';
import { navigateToPlayer } from '../../navigation/navigation';
import { TrackBarImage, TrackBarInfo } from '../trackCard/TrackCardBar';
import { PlayPause } from './PlayerControls';

const TrackInfo = () => {
  const { activeTrack } = useTrackDetails();
  const nav = useNavigation();

  return (
    <TouchableNativeFeedback onPress={navigateToPlayer(nav)}>
      <View style={styles.info}>
        <View style={styles.image}>
          <TrackBarImage
            url={activeTrack?.artwork as string}
            id={activeTrack?.title}
          />
        </View>
        <TrackBarInfo
          artist={activeTrack?.artist}
          name={activeTrack?.title}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

export const MiniPlayer = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.darkContrast, colors.greyTransparent, colors.dark]}
        style={styles.gradient}
      />
      <View style={styles.bar}>
        <TrackInfo />
        <PlayPause />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  bar: {
    flexDirection: 'row',
    maxHeight: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  info: {
    flexDirection: 'row',
    flex: 2 / 3,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  image: {
    position: 'relative',
    marginRight: 10,
  },
});

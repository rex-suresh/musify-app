import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import TrackPlayer, {
  RepeatMode,
  State,
  usePlaybackState,
} from 'react-native-track-player';

const playButton = require('../../images/play-button.png');
const pauseButton = require('../../images/pause-button.png');
const repeatButton = require('../../images/repeat-button.png');
const repeatOne = require('../../images/repeat-one-button.png');
const shuffleButton = require('../../images/shuffle-button.png');
const queue = require('../../images/list-button.png');

const play = () => TrackPlayer.play();
const pause = () => TrackPlayer.pause();
const repeat = () => TrackPlayer.setRepeatMode(RepeatMode.Queue);

export const PlayerControls = () => {
  const playbackState = usePlaybackState();
  const [playing, setPlaying] = useState(false);
  const playPauseIcon = playing ? pauseButton : playButton;
  const playPauseAction = playing ? pause : play;

  useEffect(() => {
    setPlaying(playbackState === State.Playing);
  }, [playbackState]);

  return (
    <View style={styles.controls}>
      <TouchableNativeFeedback>
        <FastImage
          source={shuffleButton}
          style={styles.icon}
        />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={playPauseAction}>
        <FastImage
          source={playPauseIcon}
          style={styles.icon}
        />
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={repeat}>
        <FastImage
          source={repeatButton}
          style={styles.icon}
        />
      </TouchableNativeFeedback>
    </View>
  );
};

export const styles = StyleSheet.create({
  controls: {
    width: 360,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40,
  },
  icon: {
    width: 34,
    aspectRatio: 1,
    opacity: 0.8,
  },
});

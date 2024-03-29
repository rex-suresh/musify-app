import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ToastAndroid,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { ActivityIndicator } from 'react-native';
import TrackPlayer, {
  RepeatMode,
  State,
  Track,
  usePlaybackState,
} from 'react-native-track-player';
import { colors } from '../../colors';

const playButton = require('../../images/play-button.png');
const pauseButton = require('../../images/pause-button.png');
const repeatButton = require('../../images/repeat-button.png');
const repeatOne = require('../../images/repeat-one-button.png');
const nextButton = require('../../images/next-button.png');
const prevButton = require('../../images/previous-button.png');
const shuffleButton = require('../../images/shuffle-button.png');
const queue = require('../../images/list-button.png');

const play = () => {
  TrackPlayer.play();
};

const pause = () => {
  TrackPlayer.pause();
  ToastAndroid.show('Paused', 50);
};

const nextTrack = () => {
  TrackPlayer.skipToNext();
};

const prevTrack = () => {
  TrackPlayer.skipToPrevious();
};

const IconButton = ({
  onPress,
  style,
  icon,
}: {
  onPress: () => void;
  style: Record<string, unknown> | Record<string, unknown>[];
  icon: any;
}) => (
  <TouchableNativeFeedback onPress={onPress}>
    <FastImage
      source={icon}
      style={style}
    />
  </TouchableNativeFeedback>
);

export const PlayPause = () => {
  const playbackState = usePlaybackState();
  const [playing, setPlaying] = useState(false);

  const playPauseIcon = playing ? pauseButton : playButton;
  const playPauseAction = playing ? pause : play;

  useEffect(() => {
    setPlaying(playbackState.state === State.Playing);
  }, [playbackState.state]);

  return playbackState.state === State.Buffering ||
    playbackState.state === State.Loading ? (
    <ActivityIndicator
      size={'large'}
      style={styles.icon}
      color={colors.light}
    />
  ) : (
    <IconButton
      onPress={playPauseAction}
      style={styles.icon}
      icon={playPauseIcon}
    />
  );
};

const shuffleQueue = async (): Promise<Track[]> => {
  const [_, ...queue] = await TrackPlayer.getQueue();
  const shuffledTracks = [...queue].sort(() => (Math.random() > 0.5 ? -1 : 1));

  await TrackPlayer.removeUpcomingTracks();
  TrackPlayer.add(shuffledTracks);

  return queue;
};

const unShuffleQueue = async (queue: Track[]) => {
  await TrackPlayer.removeUpcomingTracks();
  TrackPlayer.add(queue);
};

const Shuffle = () => {
  const [randomize, setRandomize] = useState(false);
  const [trackList, setTrackList] = useState<Track[]>([]);

  useEffect(() => {
    if (randomize) {
      shuffleQueue().then((tracks) => {
        setTrackList(tracks);
      });
      return;
    }

    unShuffleQueue(trackList);
  }, [randomize]);

  const random = () => {
    setRandomize(true);
  };

  const queue = () => {
    setRandomize(false);
  };

  return (
    <IconButton
      onPress={randomize ? queue : random}
      style={[styles.iconSmall, randomize ? styles.active : styles.inActive]}
      icon={shuffleButton}
    />
  );
};

const repeatCycle = [RepeatMode.Queue, RepeatMode.Track, RepeatMode.Off];

const Repeat = () => {
  const [repeatIndex, setRepeatIndex] = useState(0);
  const [repeatSelected, setRepeatSelected] = useState(RepeatMode.Off);
  const icon = repeatSelected === RepeatMode.Track ? repeatOne : repeatButton;

  const repeat = () => {
    const repeatMode = repeatCycle[repeatIndex];
    TrackPlayer.setRepeatMode(repeatMode);
    setRepeatSelected(repeatMode);
    setRepeatIndex((repeatIndex + 1) % repeatCycle.length);

    if (repeatMode === RepeatMode.Off) {
      ToastAndroid.show('Repeat: off', 50);
    }
  };

  return (
    <IconButton
      onPress={repeat}
      style={[
        styles.iconSmall,
        repeatSelected === RepeatMode.Off ? styles.inActive : styles.active,
      ]}
      icon={icon}
    />
  );
};

const Previous = () => (
  <IconButton
    onPress={prevTrack}
    style={styles.iconSmall}
    icon={prevButton}
  />
);

const Next = () => (
  <IconButton
    onPress={nextTrack}
    style={styles.iconSmall}
    icon={nextButton}
  />
);

export const PlayerControls = () => {
  return (
    <View style={styles.controls}>
      <Shuffle />
      <Previous />
      <PlayPause />
      <Next />
      <Repeat />
    </View>
  );
};

export const styles = StyleSheet.create({
  controls: {
    width: 360,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 40,
  },
  icon: {
    width: 34,
    aspectRatio: 1,
    padding: 10,
  },
  iconSmall: {
    width: 25,
    aspectRatio: 1,
    padding: 10,
  },
  active: {
    opacity: 1,
  },
  inActive: {
    opacity: 0.5,
  },
});

import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { QueueContext } from '../../../context/CurrentContext';

const playButton = require('../../images/play-button.png');
const queueButton = require('../../images/list-button.png');

const PlayButton = () => {
  const { actions } = useContext(QueueContext);

  return (
    <TouchableNativeFeedback onPress={actions.play}>
      <View style={styles.playButton}>
        <View style={styles.iconBox}>
          <FastImage
            source={playButton}
            style={styles.playIcon}
          />
        </View>
        <Text style={styles.playButtonText}>Play</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const QueueButton = () => {
  const { actions } = useContext(QueueContext);

  return (
    <TouchableNativeFeedback onPress={actions.queue}>
      <View style={[styles.iconBox, styles.queueButton]}>
        <FastImage
          source={queueButton}
          style={styles.queueIcon}
        />
      </View>
    </TouchableNativeFeedback>
  );
};

export const QueueControls = () => {
  return (
    <View style={styles.controls}>
      <PlayButton />
      <QueueButton />
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    maxHeight: 42,
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  playIcon: {
    height: '100%',
    aspectRatio: 1,
  },
  iconBox: {
    height: 40,
    padding: 10,
    borderRadius: 20,
    aspectRatio: 1,
    backgroundColor: colors.dark,
    overflow: 'hidden',
  },
  playButtonText: {
    color: colors.light,
    fontSize: sizes.M,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  playButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.greyBd,
    backgroundColor: colors.darkerContrast,
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    minWidth: 100,
  },
  queueIcon: {
    height: '100%',
    aspectRatio: 1,
    borderWidth: 1,
  },
  queueButton: {
    backgroundColor: colors.darkerContrast,
    borderWidth: 1,
    borderColor: colors.greyBd,
  },
});

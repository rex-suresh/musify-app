import React from 'react';

import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { TitleText } from '../common/Titles';

const default_playlist_image = require('./../../images/playlist-default.png');

const PlaylistInfo = ({ name }: { name: string }) => (
  <TitleText
    content={name}
    style={styles.info}
  />
);

export const PlaylistFigure = ({ id, url }: { id: string; url: string }) => (
  <View style={styles.figure}>
    <FastImage
      key={id.concat('-image')}
      source={{ uri: url }}
      style={styles.image}
      defaultSource={default_playlist_image}
    />
    <PlaylistInfo name="New Music Weekly" />
  </View>
);

const styles = StyleSheet.create({
  figure: {
    maxHeight: 240,
    overflow: 'hidden',
    borderRadius: 15,
    position: 'relative',
  },
  image: {
    width: '100%',
    aspectRatio: 1.6,
  },
  info: {
    fontSize: sizes.XL,
    color: colors.light,
    fontWeight: '600',
    width: '100%',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(100,100,100,0.5)',
  },
});

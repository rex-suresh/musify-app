import React from 'react';

import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
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

export const PlaylistFigure = ({
  id,
  url,
  name,
}: {
  id: string;
  url: string;
  name: string;
}) => (
  <View style={styles.figure}>
    <FastImage
      key={id.concat('-image')}
      source={{ uri: url }}
      style={styles.image}
      defaultSource={default_playlist_image}
    />
    <LinearGradient
      colors={[colors.transparent, colors.dark]}
      style={styles.infoBox}>
      <PlaylistInfo name={name} />
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  figure: {
    maxHeight: 300,
    overflow: 'hidden',
    borderRadius: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    aspectRatio: 1.6,
  },
  infoBox: {
    width: '100%',
    padding: 10,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
  },
  info: {
    fontSize: sizes.XL,
    color: colors.light,
    fontWeight: '600',
    width: '100%',
  },
});

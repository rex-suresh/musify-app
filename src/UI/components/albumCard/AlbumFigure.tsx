import React from 'react';

import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { TitleText } from '../common/Titles';

const default_album_image = require('./../../images/album-default.png');

const AlbumInfo = ({ name, artist }: { name: string; artist: string }) => (
  <View>
    <TitleText
      content={name}
      style={styles.info}
    />
    <TitleText
      content={artist}
      style={styles.artistInfo}
    />
  </View>
);

export const AlbumFigure = ({
  id,
  url,
  name,
  artist = 'artist unknown',
}: {
  id: string;
  url: string;
  name: string;
  artist?: string;
}) => (
  <View style={styles.figure}>
    <FastImage
      key={id.concat('-image')}
      source={{ uri: url }}
      style={styles.image}
      defaultSource={default_album_image}
    />
    <LinearGradient
      colors={[colors.transparent, colors.dark]}
      style={styles.infoBox}>
      <AlbumInfo
        name={name}
        artist={artist}
      />
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  figure: {
    maxHeight: 370,
    overflow: 'hidden',
    width: '100%',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    width: 250,
    aspectRatio: 1,
  },
  infoBox: {
    width: '100%',
    position: 'absolute',
    paddingTop: 70,
    bottom: 0,
  },
  info: {
    fontSize: sizes.XL,
    color: colors.light,
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
  },
  artistInfo: {
    fontSize: sizes.XS,
    color: colors.fontDim,
    textAlign: 'center',
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { TitleText } from '../common/Titles';

const default_artist_image = require('./../../images/artist-default.png');

const ArtistTitle = ({ name }: { name: string }) => (
  <TitleText
    content={name}
    style={styles.info}
  />
);

export const ArtistFigure = ({
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
      defaultSource={default_artist_image}
    />
    <LinearGradient
      colors={[colors.transparent, colors.dark]}
      style={styles.infoBox}>
      <ArtistTitle name={name} />
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
    width: '100%',
    height: 250,
  },
  infoBox: {
    width: '100%',
    position: 'absolute',
    padding: 10,
    paddingTop: 70,
    bottom: 0,
  },
  info: {
    fontSize: sizes.XL,
    color: colors.light,
    fontWeight: '600',
    width: '100%',
  },
});

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { TitleText } from '../common/Titles';
import { ArtistCardProps } from './ArtistCard.types';

const default_image = require('./images/artist-default.jpg');

const ArtistImage = ({ url, id }: { url: string; id: string }): JSX.Element => {
  return (
    <View style={styles.artistImageBox}>
      <Image
        key={id.concat('-image')}
        source={{ uri: url }}
        progressiveRenderingEnabled={true}
        style={styles.artistImage}
        defaultSource={default_image}
      />
    </View>
  );
};

const ArtistInfo = ({ name }: { name: string }) => (
  <View>
    <TitleText
      content={name}
      style={styles.artistTitle}
    />
  </View>
);

export const ArtistCard = (props: ArtistCardProps) => {
  const { id, name, image } = props;

  return (
    <View style={styles.artistCard}>
      <ArtistImage
        url={image}
        id={id}
      />
      <ArtistInfo {...{ name }} />
    </View>
  );
};

const styles = StyleSheet.create({
  artistCard: {
    margin: 10,
    maxWidth: 160,
    maxHeight: 210,
  },
  artistImage: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    borderColor: colors.greyBd,
  },
  artistImageBox: {
    height: 160,
    aspectRatio: 1,
  },
  artistTitle: {
    color: colors.fontS,
    fontSize: sizes.S,
    padding: 2,
    paddingTop: 8,
    fontWeight: '500',
  },
});

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { navigateToArtistDetailPage } from '../../navigation';
import { TitleText } from '../common/Titles';
import { ArtistCardProps } from './ArtistCard.types';

const default_image = require('./../../images/artist-default.png');

const ArtistImage = ({ url, id }: { url: string; id: string }): JSX.Element => {
  return (
    <View style={styles.artistImageBox}>
      <FastImage
        key={id.concat('-image')}
        source={{ uri: url }}
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
  const navigation = useNavigation();

  return (
    <TouchableHighlight onPress={navigateToArtistDetailPage(navigation, props)}>
      <View style={styles.artistCard}>
        <ArtistImage
          url={image}
          id={id}
        />
        <ArtistInfo {...{ name }} />
      </View>
    </TouchableHighlight>
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
    color: colors.light,
    fontSize: sizes.S,
    padding: 2,
    paddingTop: 8,
    fontWeight: '500',
  },
});

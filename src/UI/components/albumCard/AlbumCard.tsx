import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { navigateToAlbumDetailPage } from '../../navigation';
import { TitleText } from '../common/Titles';
import { AlbumCardProps, AlbumInfoParams } from './AlbumCard.types';

const default_image = require('./images/album-default.png');

const AlbumImage = ({ url, id }: { url: string; id: string }): JSX.Element => {
  return (
    <View>
      <FastImage
        key={id.concat('-image')}
        source={{ uri: url }}
        style={styles.albumImage}
        defaultSource={default_image}
      />
    </View>
  );
};

const AlbumInfo = ({ name, artist }: AlbumInfoParams) => (
  <View>
    <TitleText
      content={name}
      style={styles.albumTitle}
    />
    <TitleText
      content={artist.name}
      style={styles.albumArtistTitle}
    />
  </View>
);

export const AlbumCard = (props: AlbumCardProps) => {
  const { id, name, artist, image, label, explicit } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={navigateToAlbumDetailPage(navigation)}>
      <View style={styles.albumCard}>
        <AlbumImage
          url={image}
          id={id}
        />
        <AlbumInfo {...{ name, artist, label, explicit }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  albumCard: {
    margin: 10,
    maxWidth: 150,
    maxHeight: 210,
  },
  albumImage: {
    width: 150,
    aspectRatio: 1,
    // borderColor: colors.greyBd,
    // borderWidth: 0.5,
  },
  albumTitle: {
    color: colors.fontS,
    fontSize: sizes.S,
    padding: 2,
    paddingTop: 8,
    fontWeight: '500',
  },
  albumArtistTitle: {
    color: colors.fontDim,
    fontSize: sizes.XXS,
    fontWeight: '300',
    paddingLeft: 2,
  },
});

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { navigateToPlaylistDetailPage } from '../../navigation';
import { TitleText } from '../common/Titles';
import type { PlaylistCardProps } from './PlaylistCard.types';

const default_image = require('./images/playlist-default.png');

const PlaylistImage = ({
  url,
  id,
}: {
  url: string;
  id: string;
}): JSX.Element => {
  return (
    <View style={styles.imageBox}>
      <FastImage
        key={id.concat('-image')}
        source={{ uri: url }}
        style={styles.playlistImage}
        defaultSource={default_image}
      />
    </View>
  );
};

export const PlaylistCard = (props: PlaylistCardProps) => {
  const { id, name, image, description } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={navigateToPlaylistDetailPage(navigation)}>
      <View style={styles.playlistCard}>
        <PlaylistImage
          url={image}
          id={id}
        />
        <View style={styles.playlistDescBox}>
          <TitleText
            content={description}
            style={styles.playlistDesc}
            lines={4}
          />
        </View>
        <TitleText
          content={name}
          style={styles.playlistTitle}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  playlistCard: {
    margin: 10,
    width: 250,
    height: 190,
    borderRadius: 15,
    backgroundColor: colors.greyBg,
    overflow: 'hidden',
    position: 'relative',
  },
  imageBox: {
    backgroundColor: colors.dark,
    opacity: 0.5,
  },
  playlistImage: {
    width: '100%',
    height: 150,
    opacity: 0.5,
    zIndex: 1,
  },
  playlistTitle: {
    color: colors.fontS,
    fontSize: sizes.S,
    fontWeight: '600',
    padding: 8,
  },
  playlistDescBox: {
    position: 'absolute',
    width: '100%',
    padding: 10,
  },
  playlistDesc: {
    color: colors.light,
    fontSize: sizes.XL,
    fontWeight: '500',
    zIndex: 10,
  },
});

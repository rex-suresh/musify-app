import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { TitleText } from '../common/Titles';
import { TrackCardProps } from '../trackCard/TrackCard.types';

const defaultImage = require('./../../images/track-default.png');

const prepareHDImageLink = (link: string) => {
  const hiRes = '500x500';
  if (link.includes(hiRes)) {
    return link;
  }

  return `${link.slice(0, link.lastIndexOf('/'))}/${hiRes}.jpg`;
};

const TrackInfo = ({
  title,
  artist,
}: {
  title: string;
  artist: { name: string };
}) => {
  if (!title || !artist) {
    return <View style={styles.info} />;
  }

  return (
    <View style={styles.info}>
      <TitleText
        style={styles.title}
        content={title}
      />
      <TitleText
        style={styles.artistName}
        content={artist.name}
      />
    </View>
  );
};

const PlayerArt = ({ image, id, name, artist }: TrackCardProps) => {
  return (
    <>
      <FastImage
        source={{ uri: prepareHDImageLink(image) }}
        key={`player-image-${id}`}
        defaultSource={defaultImage}
        style={styles.image}
      />
      <TrackInfo
        title={name}
        artist={artist}
      />
    </>
  );
};

export const PlayerContent = (props: TrackCardProps) => (
  <>
    <PlayerArt {...props} />
    {/* <ProgressBar /> */}
    {/* <PlayerControls /> */}
  </>
);

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    width: 360,
    aspectRatio: 1,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  info: {
    width: 360,
    alignSelf: 'center',
  },
  title: {
    fontSize: sizes.M,
    color: colors.light,
    fontWeight: '600',
    paddingBottom: 6,
  },
  artistName: {
    fontSize: sizes.XS,
    color: colors.midContrast,
    fontWeight: '400',
  },
});

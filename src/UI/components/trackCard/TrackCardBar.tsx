import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { TitleText } from '../common/Titles';
import { TrackCardProps } from './TrackCard.types';

const default_track_image = require('./../../images/track-default.png');

const TrackBarImage = ({
  url,
  id,
}: {
  url: string;
  id: string;
}): JSX.Element => {
  return (
    <FastImage
      key={id.concat('-image')}
      source={{ uri: url }}
      style={styles.image}
      defaultSource={default_track_image}
    />
  );
};

const TrackBarInfo = ({
  name,
  artist,
}: {
  name: string;
  artist: { name: string; id: string };
}) => (
  <View style={styles.infoBox}>
    <TitleText
      content={name}
      style={styles.title}
    />
    <TitleText
      content={artist.name}
      style={styles.artistTitle}
    />
  </View>
);

export const TrackCardBar = (props: TrackCardProps) => {
  const { id, name, artist, image } = props;

  return (
    <TouchableHighlight onPress={() => {}}>
      <View style={styles.trackBar}>
        <TrackBarImage
          url={image}
          id={id}
        />
        <TrackBarInfo {...{ artist, name }} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  image: {
    borderColor: 'white',
    borderWidth: 0.5,
    height: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.screenBg,
  },
  trackBar: {
    height: 70,
    backgroundColor: colors.greyBg,
    marginBottom: 4,
    padding: 6,
    borderRadius: 8,
    flexDirection: 'row',
  },
  infoBox: {
    marginLeft: 15,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: sizes.M,
    color: colors.light,
    fontWeight: '500',
    paddingBottom: 5,
  },
  artistTitle: {
    fontSize: sizes.XS,
    color: colors.fontDim,
    fontWeight: '400',
  },
});
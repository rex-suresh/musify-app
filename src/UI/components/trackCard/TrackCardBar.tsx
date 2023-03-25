import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { navigateToTrackDetailPage } from '../../navigation/navigation';
import { TitleText } from '../common/Titles';
import { TrackCardProps } from './TrackCard.types';

const default_track_image = require('./../../images/track-default.png');

export const TrackBarImage = ({
  url,
  id = '',
}: {
  url?: string;
  id?: string;
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

export const TrackBarInfo = ({
  name,
  artist,
}: {
  name?: string;
  artist?: string;
}) => (
  <View style={styles.infoBox}>
    <TitleText
      content={name}
      style={styles.title}
    />
    <TitleText
      content={artist}
      style={styles.artistTitle}
    />
  </View>
);

export const TrackCardBar = (props: TrackCardProps) => {
  const { id, name, artist, image } = props;
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => {
        navigateToTrackDetailPage(navigation)(props);
      }}>
      <View style={styles.trackBar}>
        <TrackBarImage
          url={image}
          id={id}
        />
        <TrackBarInfo
          artist={artist.name}
          name={name}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.dark,
  },
  trackBar: {
    height: 60,
    backgroundColor: colors.greyBg,
    margin: 4,
    padding: 6,
    borderRadius: 8,
    flexDirection: 'row',
  },
  infoBox: {
    marginLeft: 16,
    marginRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: sizes.XS,
    color: colors.light,
    fontWeight: '500',
    paddingBottom: 5,
  },
  artistTitle: {
    fontSize: sizes.XXS,
    color: colors.veryLowContrast,
    fontWeight: '400',
  },
});

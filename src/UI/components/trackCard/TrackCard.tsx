import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TrackListContext } from '../../../TrackPlayerDataProvider';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { navigateToTrackDetailPage } from '../../navigation';
import { mapToTrack } from '../common/mappers';
import { TitleText } from '../common/Titles';
import { TrackCardProps, TrackInfoParams } from './TrackCard.types';

const default_track_image = require('./../../images/track-default.png');

const minute = (seconds: number = 0) =>
  `${Math.floor(seconds / 60)}:${seconds % 60}`;

const TrackImage = ({ url, id }: { url: string; id: string }): JSX.Element => {
  return (
    <View>
      <FastImage
        key={id.concat('-image')}
        source={{ uri: url }}
        style={styles.trackImage}
        defaultSource={default_track_image}
      />
    </View>
  );
};

const TrackInfo = ({
  name,
  artist,
  album,
  playbackSeconds,
}: TrackInfoParams) => (
  <View style={styles.trackInfo}>
    <TitleText
      content={name}
      style={styles.trackTitle}
    />
    <TitleText
      content={artist.name}
      style={styles.trackInfoData}
    />
    <TitleText
      content={album.name}
      style={styles.trackInfoData}
    />
    <View style={styles.trackTimeBox}>
      <TitleText
        content={minute(playbackSeconds)}
        style={styles.trackTime}
      />
    </View>
  </View>
);

export const TrackCard = (props: TrackCardProps) => {
  const { id, name, artist, image, album, playbackSeconds } = props;
  const navigation = useNavigation();
  const { add } = useContext(TrackListContext);

  return (
    <TouchableHighlight
      onPress={() => {
        add(mapToTrack(props));
        navigateToTrackDetailPage(navigation)();
      }}>
      <View style={styles.trackCard}>
        <TrackImage
          url={image}
          id={id}
        />
        <TrackInfo {...{ artist, name, album, playbackSeconds }} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  trackCard: {
    margin: 10,
    maxWidth: 170,
    maxHeight: 250,
    borderRadius: 15,
    backgroundColor: colors.greyBg,
    overflow: 'hidden',
  },
  trackImage: {
    width: '100%',
    aspectRatio: 1,
  },
  trackInfo: {
    padding: 8,
    position: 'relative',
  },
  trackTitle: {
    color: colors.fontS,
    fontSize: sizes.S,
    fontWeight: '500',
    paddingBottom: 2,
  },
  trackInfoData: {
    color: colors.fontDimLight,
    fontSize: sizes.XXS,
    fontWeight: '300',
    paddingBottom: 1,
  },
  trackTimeBox: {
    backgroundColor: colors.screenBg,
    borderRadius: 3,
    justifyContent: 'center',
    position: 'absolute',
    right: 4,
    top: -15,
  },
  trackTime: {
    color: colors.light,
    padding: 4,
  },
});

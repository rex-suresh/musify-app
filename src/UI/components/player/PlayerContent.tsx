import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useTrackDetails } from '../../../hooks/useTrackDetails';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { TitleText } from '../common/Titles';
import { minute } from '../common/utils';
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

const Progress = ({ progress }: { progress: number }) => (
  <View style={styles.progressBarBase}>
    <View
      style={[
        styles.progressIndicator,
        {
          width: `${progress * 100}%`,
        },
      ]}
    />
  </View>
);

const ProgressTimings = ({
  elapsedTime,
  totalTime,
}: {
  elapsedTime: number;
  totalTime: number;
}) => (
  <View style={styles.progressTimes}>
    <Text style={styles.progressTime}>{minute(elapsedTime)}</Text>
    <Text style={styles.progressTime}>{minute(totalTime)}</Text>
  </View>
);

const ProgressBar = () => {
  const { elapsedTime, totalTime } = useTrackDetails();
  const progress = elapsedTime / totalTime;

  return (
    <View style={[styles.info, styles.progressBar]}>
      <Progress progress={progress} />
      <ProgressTimings
        elapsedTime={elapsedTime}
        totalTime={totalTime}
      />
    </View>
  );
};

export const PlayerContent = (props: TrackCardProps) => (
  <>
    <PlayerArt {...props} />
    <ProgressBar />
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
  progressBar: {
    marginTop: 30,
  },
  progressBarBase: {
    width: '100%',
    backgroundColor: colors.greyBg,
    height: 3,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressIndicator: {
    height: '100%',
    borderRadius: 2,
    backgroundColor: colors.light,
  },
  progressTimes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  progressTime: {
    color: colors.midContrast,
    fontSize: sizes.micro,
  },
});

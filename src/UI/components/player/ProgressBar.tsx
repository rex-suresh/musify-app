import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTrackDetails } from '../../../hooks/useTrackDetails';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';
import { minute } from '../common/utils';

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

export const ProgressBar = () => {
  const { elapsedTime, totalTime, elapsedTimePrecise, activeTrack } =
    useTrackDetails();
  const progress = elapsedTimePrecise / totalTime;

  if (!activeTrack) {
    return <></>;
  }

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

export const styles = StyleSheet.create({
  info: {
    width: 360,
    alignSelf: 'center',
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

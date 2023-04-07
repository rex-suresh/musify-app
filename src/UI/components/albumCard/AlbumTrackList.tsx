import React from 'react';
import { StyleSheet, View } from 'react-native';
import { albumDetail } from '../../../APIservice/request';
import { colors } from '../../colors';
import {
  ListSectionVerticalWrapper,
  ListSectionWrapperProps,
} from '../common/ListSectionWrapper';
import { trackBar } from '../trackCard/TrackCard';
import { QueueControls } from '../common/QueueControls';

export const AlbumTrackList = ({ id }: { id: string }) => {
  const props: ListSectionWrapperProps = {
    queryName: `album-tracks-${id}`,
    query: albumDetail(id),
    title: 'Tracks',
    itemCard: trackBar,
    listStyle: styles.list,
    sectionStyle: styles.section,
    scrollable: false,
  };

  return (
    <View style={styles.listContainer}>
      <QueueControls />
      <ListSectionVerticalWrapper {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    position: 'relative',
    flex: 1,
  },
  list: {},
  section: { width: '100%', flex: 1 },
  playIcon: {
    width: 25,
    aspectRatio: 1,
    marginLeft: 4,
  },
  playIconBox: {
    width: 45,
    margin: 10,
    aspectRatio: 1,
    borderWidth: 0.5,
    borderColor: colors.light,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
});

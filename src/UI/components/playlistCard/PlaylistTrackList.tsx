import React from 'react';
import { StyleSheet } from 'react-native';
import { playlistDetail } from '../../../APIservice/request';
import {
  ListSectionVerticalWrapper,
  ListSectionWrapperProps,
} from '../common/ListSectionWrapper';
import { trackBar } from '../trackCard/TrackCard';
import { QueueControls } from '../common/QueueControls';

export const PlaylistTrackList = ({ id }: { id: string }) => {
  const props: ListSectionWrapperProps = {
    queryName: `playlist-tracks-${id}`,
    query: playlistDetail(id),
    title: 'Tracks',
    itemCard: trackBar,
    listStyle: styles.list,
    sectionStyle: styles.section,
  };

  return (
    <>
      <QueueControls />
      <ListSectionVerticalWrapper {...props} />
    </>
  );
};

const styles = StyleSheet.create({
  section: { width: '100%', flex: 1 },
  list: {},
});

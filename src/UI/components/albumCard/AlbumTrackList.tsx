import React from 'react';
import { StyleSheet } from 'react-native';
import { albumDetail } from '../../../APIservice/request';
import {
  ListSectionVerticalWrapper,
  ListSectionWrapperProps,
} from '../common/ListSectionWrapper';
import { trackBar } from '../trackCard/TrackCard';

export const AlbumTrackList = ({ id }: { id: string }) => {
  const props: ListSectionWrapperProps = {
    queryName: `album-tracks-${id}`,
    query: albumDetail(id),
    title: 'Tracks',
    itemCard: trackBar,
    listStyle: styles.list,
    sectionStyle: styles.section,
  };

  return <ListSectionVerticalWrapper {...props} />;
};

const styles = StyleSheet.create({
  section: { width: '100%', flex: 1 },
  list: {},
});

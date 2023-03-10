import React from 'react';
import { StyleSheet } from 'react-native';
import { artistTrackDetail } from '../../../APIservice/request';
import {
  ListSectionVerticalWrapper,
  ListSectionWrapperProps,
} from '../common/ListSectionWrapper';
import { trackBar } from '../trackCard/TrackCard';

export const ArtistTrackList = ({
  id,
  showLoad,
}: {
  id: string;
  showLoad: boolean;
}) => {
  const props: ListSectionWrapperProps = {
    queryName: `artist-tracks-${id}`,
    query: artistTrackDetail(id),
    title: 'Popular Tracks',
    itemCard: trackBar,
    listStyle: styles.list,
    sectionStyle: styles.section,
    showLoad,
  };

  return <ListSectionVerticalWrapper {...props} />;
};

const styles = StyleSheet.create({
  section: { width: '100%', flex: 1 },
  list: {},
});

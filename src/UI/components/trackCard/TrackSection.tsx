import React from 'react';
import { StyleSheet } from 'react-native';
import { topTracks } from '../../../APIservice/request';
import {
  ListSectionWrapper,
  ListSectionWrapperProps,
} from '../common/ListSectionWrapper';
import { TrackCard } from './TrackCard';
import { TrackCardProps } from './TrackCard.types';

const TrackItemCard = ({ item }: { item: unknown }) => {
  const props = item as TrackCardProps;
  return <TrackCard {...props} />;
};

export const TrackSection = () => {
  const trackWrapperProps: ListSectionWrapperProps = {
    title: 'Top Tracks',
    queryName: 'top-playlist',
    itemCard: TrackItemCard,
    query: topTracks,
    listStyle: styles.trackList,
    sectionStyle: styles.trackSection,
  };

  return <ListSectionWrapper {...trackWrapperProps} />;
};

const styles = StyleSheet.create({
  trackList: {
    height: 280,
  },
  trackSection: {
    marginTop: 30,
  },
});

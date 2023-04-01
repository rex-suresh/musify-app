import React from 'react';
import { StyleSheet } from 'react-native';
import { queryNames, topTracks } from '../../../APIservice/request';
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

export const TrackSection = ({ onLoad }: { onLoad: () => void }) => {
  const trackWrapperProps: ListSectionWrapperProps = {
    title: 'Top Tracks',
    queryName: queryNames.topTracks,
    itemCard: TrackItemCard,
    query: topTracks,
    listStyle: styles.trackList,
    sectionStyle: styles.trackSection,
    showLoad: false,
    onLoadComplete: onLoad,
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

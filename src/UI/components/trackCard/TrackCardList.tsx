import React from 'react';
import { StyleSheet } from 'react-native';
import { ListSection } from '../common/ListSection';
import { TrackCard } from './TrackCard';
import { TrackCardProps } from './TrackCard.types';

export const TrackCardFlatList = ({
  title,
  tracks,
}: {
  title: string;
  tracks: TrackCardProps[];
}) => {
  return (
    <ListSection
      title={title}
      data={tracks}
      renderItem={({ item }) => {
        const data = item as TrackCardProps;
        return <TrackCard {...data} />;
      }}
      listStyle={styles.artistList}
      sectionStyle={styles.artistSection}
    />
  );
};

const styles = StyleSheet.create({
  artistList: {
    height: 280,
  },
  artistSection: {
    marginTop: 30,
  },
});

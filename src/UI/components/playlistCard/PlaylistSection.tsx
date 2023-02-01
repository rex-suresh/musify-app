import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useQuery } from 'react-query';
import { topPlaylists } from '../../../APIservice/request';
import { ListSection } from '../common/ListSection';
import { PlaylistCard } from './PlaylistCard';
import type { PlaylistCardProps } from './PlaylistCard.types';

export const PlaylistSection = () => {
  const { isLoading, error, data } = useQuery('top-playlist', topPlaylists);

  if (error) {
    return <></>;
  }

  return isLoading ? (
    <Text>Loading</Text>
  ) : (
    <ListSection
      title="Featured Playlists"
      data={data}
      renderItem={({ item }) => {
        const props = item as PlaylistCardProps;
        return <PlaylistCard {...props} />;
      }}
      listStyle={styles.artistList}
      sectionStyle={styles.artistSection}
    />
  );
};

const styles = StyleSheet.create({
  artistList: {
    height: 220,
  },
  artistSection: {
    marginTop: 30,
  },
});

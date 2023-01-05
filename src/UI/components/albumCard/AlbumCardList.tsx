import React from 'react';
import { StyleSheet } from 'react-native';
import { ListSection } from '../common/ListSection';
import { AlbumCard } from './AlbumCard';
import { AlbumCardProps } from './AlbumCard.types';

export const AlbumCardFlatList = ({
  title,
  albums,
}: {
  title: string;
  albums: AlbumCardProps[];
}) => {
  return (
    <ListSection
      title={title}
      data={albums}
      renderItem={({ item }) => {
        const data = item as AlbumCardProps;
        return <AlbumCard {...data} />;
      }}
      listStyle={styles.albumList}
      sectionStyle={styles.albumSection}
    />
  );
};

const styles = StyleSheet.create({
  albumList: {
    height: 220,
  },
  albumSection: {
    marginTop: 30,
  },
});

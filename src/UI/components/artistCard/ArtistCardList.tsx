import React from 'react';
import { StyleSheet } from 'react-native';
import { ListSection } from '../common/ListSection';
import { ArtistCard } from './ArtistCard';
import { ArtistCardProps } from './ArtistCard.types';

export const ArtistCardFlatList = ({
  title,
  artists,
}: {
  title: string;
  artists: ArtistCardProps[];
}) => {
  return (
    <ListSection
      title={title}
      data={artists}
      renderItem={({ item }) => {
        const data = item as ArtistCardProps;
        return <ArtistCard {...data} />;
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

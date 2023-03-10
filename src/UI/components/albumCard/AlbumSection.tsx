import React from 'react';
import { StyleSheet } from 'react-native';
import { topAlbums } from '../../../APIservice/request';
import {
  ListSectionWrapper,
  ListSectionWrapperProps,
} from '../common/ListSectionWrapper';
import { AlbumCard } from './AlbumCard';
import { AlbumCardProps } from './AlbumCard.types';

export const AlbumCardItem = ({ item }: { item: unknown }): JSX.Element => {
  const props = item as AlbumCardProps; // casting for safety 🥲
  return <AlbumCard {...props} />;
};

export const AlbumSection = () => {
  const albumWrapperProps: ListSectionWrapperProps = {
    title: 'Top Albums',
    queryName: 'top-albums',
    itemCard: AlbumCardItem,
    query: topAlbums,
    listStyle: styles.albumList,
    sectionStyle: styles.albumSection,
  };

  return <ListSectionWrapper {...albumWrapperProps} />;
};

const styles = StyleSheet.create({
  albumList: {
    height: 220,
  },
  albumSection: {
    marginTop: 30,
  },
});

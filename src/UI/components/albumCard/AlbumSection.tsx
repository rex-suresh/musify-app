import React from 'react';
import { StyleSheet } from 'react-native';
import { queryNames, topAlbums } from '../../../APIservice/request';
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

export const AlbumSection = ({ onLoad }: { onLoad: () => void }) => {
  const albumWrapperProps: ListSectionWrapperProps = {
    title: 'Top Albums',
    queryName: queryNames.topAlbums,
    itemCard: AlbumCardItem,
    query: topAlbums,
    listStyle: styles.albumList,
    sectionStyle: styles.albumSection,
    showLoad: false,
    onLoadComplete: onLoad,
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

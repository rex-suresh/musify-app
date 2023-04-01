import React from 'react';
import { StyleSheet } from 'react-native';
import { queryNames, topArtists } from '../../../APIservice/request';
import {
  ListSectionWrapper,
  ListSectionWrapperProps,
} from '../common/ListSectionWrapper';
import { ArtistCard } from './ArtistCard';
import { ArtistCardProps } from './ArtistCard.types';

export const ArtistCardItem = ({ item }: { item: unknown }) => {
  const data = item as ArtistCardProps; // 🥲
  return <ArtistCard {...data} />;
};

export const ArtistSection = ({ onLoad }: { onLoad: () => void }) => {
  const artistWrapperProps: ListSectionWrapperProps = {
    title: 'Top Artists',
    queryName: queryNames.topArtists,
    itemCard: ArtistCardItem,
    query: topArtists,
    listStyle: styles.artistList,
    sectionStyle: styles.artistSection,
    showLoad: false,
    onLoadComplete: onLoad,
  };

  return <ListSectionWrapper {...artistWrapperProps} />;
};

const styles = StyleSheet.create({
  artistList: {
    height: 220,
  },
  artistSection: {
    marginTop: 30,
    marginBottom: 20,
  },
});

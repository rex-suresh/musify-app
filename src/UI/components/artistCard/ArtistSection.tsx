import React from 'react';
import { StyleSheet } from 'react-native';
import { queryNames, topArtists } from '../../../APIservice/request';
import {
  ListSectionWrapper,
  ListSectionWrapperProps,
} from '../common/ListSectionWrapper';
import { ArtistCard } from './ArtistCard';
import { ArtistCardProps } from './ArtistCard.types';

const ArtistCardItem = ({ item }: { item: unknown }) => {
  const data = item as ArtistCardProps; // 🥲
  return <ArtistCard {...data} />;
};

export const ArtistSection = () => {
  const artistWrapperProps: ListSectionWrapperProps = {
    title: 'Top Artists',
    queryName: queryNames.topArtists,
    itemCard: ArtistCardItem,
    query: topArtists,
    listStyle: styles.artistList,
    sectionStyle: styles.artistSection,
  };

  return <ListSectionWrapper {...artistWrapperProps} />;
};

const styles = StyleSheet.create({
  artistList: {
    height: 220,
  },
  artistSection: {
    marginTop: 30,
  },
});

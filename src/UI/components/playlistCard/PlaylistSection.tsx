import React from 'react';
import { StyleSheet } from 'react-native';
import { topPlaylists } from '../../../APIservice/request';
import {
  ListSectionWrapper,
  ListSectionWrapperProps,
} from '../common/ListSectionWrapper';
import { PlaylistCard } from './PlaylistCard';
import type { PlaylistCardProps } from './PlaylistCard.types';

const PlaylistCardItem = ({ item }: { item: unknown }) => {
  const props = item as PlaylistCardProps; // 🥲
  return <PlaylistCard {...props} />;
};

export const PlaylistSection = () => {
  const playlistWrapperProps: ListSectionWrapperProps = {
    title: 'Featured Playlists',
    queryName: 'top-playlist',
    itemCard: PlaylistCardItem,
    query: topPlaylists,
    listStyle: styles.playlistList,
    sectionStyle: styles.playlistSection,
  };

  return <ListSectionWrapper {...playlistWrapperProps} />;
};

const styles = StyleSheet.create({
  playlistList: {
    height: 220,
  },
  playlistSection: {
    marginTop: 30,
  },
});

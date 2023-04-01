import React from 'react';
import { StyleSheet } from 'react-native';
import { queryNames, topPlaylists } from '../../../APIservice/request';
import {
  ListSectionWrapper,
  ListSectionWrapperProps,
} from '../common/ListSectionWrapper';
import { PlaylistCard } from './PlaylistCard';
import type { PlaylistCardProps } from './PlaylistCard.types';

export const PlaylistCardItem = ({ item }: { item: unknown }) => {
  const props = item as PlaylistCardProps; // 🥲
  return <PlaylistCard {...props} />;
};

export const PlaylistSection = ({ onLoad }: { onLoad: () => void }) => {
  const playlistWrapperProps: ListSectionWrapperProps = {
    title: 'Featured Playlists',
    queryName: queryNames.topPlaylists,
    itemCard: PlaylistCardItem,
    query: topPlaylists,
    listStyle: styles.playlistList,
    sectionStyle: styles.playlistSection,
    showLoad: false,
    onLoadComplete: onLoad,
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

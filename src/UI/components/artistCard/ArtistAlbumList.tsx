import React from 'react';
import { StyleSheet } from 'react-native';
import { artistAlbumDetail } from '../../../APIservice/request';
import { AlbumCardItem } from '../albumCard/AlbumSection';
import {
  ListSectionWrapper,
  ListSectionWrapperProps,
} from '../common/ListSectionWrapper';

export const ArtistAlbumList = ({ id }: { id: string }) => {
  const props: ListSectionWrapperProps = {
    queryName: `artist-albums-${id}`,
    query: artistAlbumDetail(id),
    title: 'Discography',
    itemCard: AlbumCardItem,
    listStyle: styles.list,
    sectionStyle: styles.section,
  };

  return <ListSectionWrapper {...props} />;
};

const styles = StyleSheet.create({
  section: { width: '100%', flex: 1 },
  list: {},
});

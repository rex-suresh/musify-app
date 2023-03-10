import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import { artistDetail } from '../../../APIservice/request';
import { AlbumCardItem } from '../albumCard/AlbumSection';
import { ListSection, ListSectionVertical } from '../common/ListSection';
import { trackBar } from '../trackCard/TrackCard';

export const ArtistDetailWrapper = ({ id }: { id: string }) => {
  const { isLoading, error, data } = useQuery(
    `artist-detail-${id}`,
    artistDetail(id),
  );

  if (error) {
    return <></>;
  }

  return isLoading ? (
    <ActivityIndicator
      size={'small'}
      style={[styles.activityIndicator]}
    />
  ) : (
    <>
      <ListSectionVertical
        title="Popular Tracks"
        renderItem={trackBar}
        data={data.tracks}
      />
      <ListSection
        title="Discography"
        renderItem={AlbumCardItem}
        data={data.albums}
      />
    </>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    flexDirection: 'column',
  },
});

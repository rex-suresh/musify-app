import React, { useEffect } from 'react';
import { LogBox, ScrollView, StyleSheet } from 'react-native';
import { ArtistAlbumList } from '../components/artistCard/ArtistAlbumList';
import { ArtistFigure } from '../components/artistCard/ArtistFigure';
import { ArtistTrackList } from '../components/artistCard/ArtistTrackList';
import { DetailPageProps } from '../navigation/navigation';
import { ScreenPropsType } from '../routes';

export const ArtistDetailPage = ({ route }: ScreenPropsType): JSX.Element => {
  const { id, image, name } = route.params as DetailPageProps;
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <ScrollView
      style={styles.page}
      nestedScrollEnabled>
      <ArtistFigure
        id={id}
        url={image}
        name={name}
      />
      <ArtistTrackList
        id={id}
        showLoad={false}
      />
      <ArtistAlbumList id={id} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 8,
    height: '100%',
  },
});

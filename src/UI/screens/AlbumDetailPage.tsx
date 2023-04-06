import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { AlbumFigure } from '../components/albumCard/AlbumFigure';
import { AlbumTrackList } from '../components/albumCard/AlbumTrackList';
import { DetailPageProps } from '../navigation/navigation';
import { ScreenPropsType } from '../routes';

export const AlbumDetailPage = ({ route }: ScreenPropsType): JSX.Element => {
  const { id, image, name, citation } = route.params as DetailPageProps;

  return (
    <ScrollView
      style={styles.page}
      showsVerticalScrollIndicator={false}>
      <AlbumFigure
        id={id}
        url={image}
        name={name}
        artist={citation}
      />
      <AlbumTrackList id={id} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 8,
    height: '100%',
  },
});

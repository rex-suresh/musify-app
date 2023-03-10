import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ArtistDetailWrapper } from '../components/artistCard/ArtistDetailWrapper';
import { ArtistFigure } from '../components/artistCard/ArtistFigure';
import { DetailPageProps } from '../navigation';
import { ScreenPropsType } from '../routes';

export const ArtistDetailPage = ({ route }: ScreenPropsType): JSX.Element => {
  const { id, image, name } = route.params as DetailPageProps;

  return (
    <ScrollView style={styles.page}>
      <ArtistFigure
        id={id}
        url={image}
        name={name}
      />
      <ArtistDetailWrapper id={id} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 8,
    height: '100%',
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PlaylistFigure } from '../components/playlistCard/PlayListFigure';
import { PlaylistTrackList } from '../components/playlistCard/PlaylistTrackList';
import { PlaylistDetailPageProps } from '../navigation';
import { ScreenPropsType } from '../routes';

export const PlaylistDetailPage = ({ route }: ScreenPropsType): JSX.Element => {
  const { id, image, name } = route.params as PlaylistDetailPageProps;

  return (
    <View style={styles.page}>
      <PlaylistFigure
        id={id}
        url={image}
        name={name}
      />
      <PlaylistTrackList id={id} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 8,
    height: '100%',
  },
});

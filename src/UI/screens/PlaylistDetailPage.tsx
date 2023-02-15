import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PlaylistFigure } from '../components/playlistCard/PlayListFigure';
import { PlaylistTrackList } from '../components/playlistCard/PlaylistTrackList';

export const PlaylistDetailPage = () => {
  return (
    <View style={styles.page}>
      <PlaylistFigure
        id="12234q2"
        url="https://api.napster.com/imageserver/v2/playlists/pp.225974698/artists/images/500x500.jpg?montage=2x2"
      />
      <PlaylistTrackList />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 8,
    height: '100%',
  },
});

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PageTitle } from '../components/common/Titles';
import { PlaylistSection } from '../components/playlistCard/PlaylistSection';

export const HomeScreen = () => {
  // const { data: topArtistsReq, error: topArtistsReqError } = useQuery(
  //   'topArtists',
  //   topArtists,
  // );
  // const { data: topTracksReq, error: topTracksReqError } = useQuery(
  //   'topTracks',
  //   topTracks,
  // );
  // const { data: topAlbumsReq, error: topAlbumsReqError } = useQuery(
  //   'topAlbums',
  //   topAlbums,
  // );

  return (
    <View style={styles.homeScreen}>
      <ScrollView>
        <PageTitle title="Home" />
        <PlaylistSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    height: '100%',
  },
});

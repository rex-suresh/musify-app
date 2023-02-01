import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { AlbumSection } from '../components/albumCard/AlbumSection';
import { ArtistSection } from '../components/artistCard/ArtistSection';
import { PageTitle } from '../components/common/Titles';
import { PlaylistSection } from '../components/playlistCard/PlaylistSection';
import { TrackSection } from '../components/trackCard/TrackSection';

export const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <ScrollView>
        <PageTitle title="Home" />
        <PlaylistSection />
        <TrackSection />
        <AlbumSection />
        <ArtistSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    height: '100%',
  },
});

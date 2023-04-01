import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { AlbumSection } from '../components/albumCard/AlbumSection';
import { ArtistSection } from '../components/artistCard/ArtistSection';
import { PageTitle } from '../components/common/Titles';
import { PlaylistSection } from '../components/playlistCard/PlaylistSection';
import { TrackSection } from '../components/trackCard/TrackSection';
import { Loading } from '../components/common/Loading';

export const HomeScreen = () => {
  const [loading, setLoading] = useState(true);

  const loadingComplete = () => {
    setLoading(false);
  };

  return (
    <View style={styles.homeScreen}>
      <ScrollView>
        <PageTitle title="Home" />
        {loading && <Loading size="large" />}
        <PlaylistSection onLoad={loadingComplete} />
        <TrackSection onLoad={loadingComplete} />
        <AlbumSection onLoad={loadingComplete} />
        <ArtistSection onLoad={loadingComplete} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    height: '100%',
  },
});

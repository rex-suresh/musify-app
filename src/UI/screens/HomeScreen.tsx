/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useFetchAlbumData } from '../../APIservice/album/fetchAlbumData';
import { useFetchArtistData } from '../../APIservice/artist/fetchArtistData';
import { AlbumCardProps } from '../components/albumCard/AlbumCard.types';
import { AlbumCardFlatList } from '../components/albumCard/AlbumCardList';
import { ArtistCardProps } from '../components/artistCard/ArtistCard.types';
import { ArtistCardFlatList } from '../components/artistCard/ArtistCardList';
import { PageTitle } from '../components/common/Titles';

export const HomeScreen = () => {
  const [albums, setAlbums] = useState([] as AlbumCardProps[]);
  const [artists, setArtists] = useState([] as ArtistCardProps[]);

  useEffect(() => {
    const fetchData = async () => {
      setAlbums((await useFetchAlbumData()) || []);
      setArtists((await useFetchArtistData()) || []);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.homeScreen}>
      <ScrollView>
        <PageTitle title="Home" />
        <AlbumCardFlatList
          title="Top Albums"
          albums={albums}
        />
        <ArtistCardFlatList
          title="Top Artists"
          artists={artists}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    height: '100%',
  },
});

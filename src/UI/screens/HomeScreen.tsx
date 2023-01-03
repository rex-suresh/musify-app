import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFetchAlbumData } from '../../APIservice/album/fetchAlbumData';
import { AlbumCardProps } from '../components/albumCard/AlbumCard.types';
import { AlbumCardFlatList } from '../components/albumCard/AlbumCardList';

export const HomeScreen = () => {
  const [albums, setAlbums] = useState([] as AlbumCardProps[]);

  useEffect(() => {
    const fetchAlbums = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      setAlbums((await useFetchAlbumData()) || []);
    };

    fetchAlbums();
  }, []);

  useEffect(() => {
    console.log(albums);
  }, [albums]);

  return (
    <View style={styles.albumSection}>
      <AlbumCardFlatList
        title="Albums"
        albums={albums}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  albumSection: {
    height: 300,
    width: '100%',
  },
});

import React from 'react';
import { FlatList, View } from 'react-native';
import { SectionContentTitle } from '../common/Titles';
import { AlbumCard } from './AlbumCard';
import { AlbumCardProps } from './AlbumCard.types';

export const AlbumCardFlatList = ({
  title,
  albums,
}: {
  title: string;
  albums: AlbumCardProps[];
}) => {
  console.log(typeof albums);

  return (
    <View>
      <SectionContentTitle {...{ title }} />

      <FlatList
        data={albums}
        renderItem={({ item }) => {
          const data = item as AlbumCardProps;
          return <AlbumCard {...data} />;
        }}
        horizontal={true}
      />
    </View>
  );
};

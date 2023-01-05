import React from 'react';
import { FlatList, View } from 'react-native';
import { SectionContentTitle } from './Titles';

export const ListSection = ({
  title,
  data,
  renderItem,
  listStyle,
  sectionStyle,
}: {
  title: string;
  data: unknown[];
  renderItem: ({ item }: { item: unknown }) => JSX.Element;
  listStyle: Record<string, unknown>;
  sectionStyle: Record<string, unknown>;
}) => {
  return (
    <View style={sectionStyle}>
      <SectionContentTitle {...{ title }} />

      <FlatList
        data={data}
        renderItem={renderItem}
        style={listStyle}
        horizontal
      />
    </View>
  );
};

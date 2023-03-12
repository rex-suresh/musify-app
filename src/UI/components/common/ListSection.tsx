import React from 'react';
import { FlatList, View } from 'react-native';
import { SectionContentTitle, SubSectionContentTitle } from './Titles';

const idAsKey = (props: unknown): string => {
  const { id } = props as { id: string };
  return id;
};

export const ListSection = ({
  title,
  data,
  renderItem,
  listStyle = {},
  sectionStyle = {},
}: {
  title: string;
  data: unknown[];
  renderItem: ({ item }: { item: unknown }) => JSX.Element;
  listStyle?: Record<string, unknown>;
  sectionStyle?: Record<string, unknown>;
}) => {
  return (
    <View style={sectionStyle}>
      <SectionContentTitle {...{ title }} />

      <FlatList
        data={data}
        renderItem={renderItem}
        style={listStyle}
        keyExtractor={(props) => {
          const { id } = props as { id: string };
          return id;
        }}
        horizontal
      />
    </View>
  );
};

export const ListSectionVertical = ({
  title,
  data,
  renderItem,
  listStyle = {},
  sectionStyle = {},
  scrollable = true,
}: {
  title: string;
  data: unknown[];
  renderItem: ({ item }: { item: unknown }) => JSX.Element;
  listStyle?: Record<string, unknown>;
  sectionStyle?: Record<string, unknown>;
  scrollable?: boolean;
}) => {
  return (
    <View style={sectionStyle}>
      <SubSectionContentTitle {...{ title }} />
      <FlatList
        data={data}
        renderItem={renderItem}
        style={listStyle}
        keyExtractor={idAsKey}
        overScrollMode="auto"
        scrollEnabled={scrollable}
      />
    </View>
  );
};

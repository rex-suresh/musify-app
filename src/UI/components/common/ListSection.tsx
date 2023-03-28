import React from 'react';
import { FlatList, View } from 'react-native';
import { SectionContentTitle, SubSectionContentTitleRight } from './Titles';

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
  subTitle = false,
}: {
  title: string;
  data: unknown[];
  renderItem: ({ item }: { item: unknown }) => JSX.Element;
  listStyle?: Record<string, unknown>;
  sectionStyle?: Record<string, unknown>;
  subTitle?: boolean;
}) => {
  return (
    <View style={sectionStyle}>
      {title &&
        (subTitle ? (
          <SubSectionContentTitleRight title={title} />
        ) : (
          <SectionContentTitle title={title} />
        ))}

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
  subTitle = false,
}: {
  title: string;
  data: unknown[];
  renderItem: ({ item }: { item: unknown }) => JSX.Element;
  listStyle?: Record<string, unknown>;
  sectionStyle?: Record<string, unknown>;
  scrollable?: boolean;
  subTitle?: boolean;
}) => {
  return (
    <View style={sectionStyle}>
      {title &&
        (subTitle ? (
          <SubSectionContentTitleRight title={title} />
        ) : (
          <SectionContentTitle title={title} />
        ))}
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

import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { ListSection, ListSectionVertical } from './ListSection';

export type ListSectionWrapperProps = {
  queryName: string;
  query: () => any;
  title: string;
  itemCard: ({ item }: { item: unknown }) => JSX.Element;
  listStyle: Record<string, unknown>;
  sectionStyle: Record<string, unknown>;
};

export const ListSectionWrapper = ({
  queryName,
  query,
  title,
  itemCard,
  listStyle,
  sectionStyle,
}: ListSectionWrapperProps) => {
  const { isLoading, error, data } = useQuery(queryName, query);

  if (error) {
    return <></>;
  }

  return isLoading ? (
    <ActivityIndicator
      size={'small'}
      style={[sectionStyle, styles.activityIndicator]}
    />
  ) : (
    <ListSection
      title={title}
      data={data}
      renderItem={itemCard}
      listStyle={listStyle}
      sectionStyle={sectionStyle}
    />
  );
};

export const ListSectionVerticalWrapper = ({
  queryName,
  query,
  title,
  itemCard,
  listStyle,
  sectionStyle,
}: ListSectionWrapperProps) => {
  const { isLoading, error, data } = useQuery(queryName, query);

  if (error) {
    return <></>;
  }

  return isLoading ? (
    <ActivityIndicator
      size={'small'}
      style={styles.activityIndicator}
    />
  ) : (
    <ListSectionVertical
      title={title}
      data={data}
      renderItem={itemCard}
      listStyle={listStyle}
      sectionStyle={sectionStyle}
    />
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    flexDirection: 'column',
  },
});

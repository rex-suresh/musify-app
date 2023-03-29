import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import { colors } from '../../colors';
import { ListSection, ListSectionVertical } from './ListSection';
import { NoResults } from './NoResults';

export type ListSectionWrapperProps = {
  queryName: string;
  query: () => any;
  title: string;
  itemCard: ({ item }: { item: unknown }) => JSX.Element;
  listStyle: Record<string, unknown>;
  sectionStyle: Record<string, unknown>;
  scrollable?: boolean;
  showLoad?: boolean;
  setActionData?: React.Dispatch<React.SetStateAction<any>>;
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

  if (isLoading) {
    return (
      <ActivityIndicator
        size={'small'}
        color={colors.light}
        style={[styles.activityIndicator, styles.activityIndicator]}
      />
    );
  }

  if (error || !data) {
    return <></>;
  }

  if (data?.length < 1) {
    return <></>;
  }

  return (
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
  scrollable,
  setActionData = () => {},
}: ListSectionWrapperProps) => {
  const { isLoading, error, data } = useQuery(queryName, query);

  if (isLoading) {
    return (
      <ActivityIndicator
        size={'small'}
        color={colors.light}
        style={styles.activityIndicator}
      />
    );
  }

  if (error || !data) {
    return <NoResults />;
  }

  if (data?.length < 1) {
    return <NoResults />;
  }

  setActionData(data);
  return (
    <ListSectionVertical
      title={title}
      data={data}
      renderItem={itemCard}
      listStyle={listStyle}
      sectionStyle={sectionStyle}
      scrollable={scrollable}
    />
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
});

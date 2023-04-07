import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import { colors } from '../../colors';
import { ListSection, ListSectionVertical } from './ListSection';
import { NoResults } from './NoResults';
import { QueueContext } from '../../../context/CurrentContext';
import { mapToTrack } from './mappers';
import { Track } from 'react-native-track-player';

export type ListSectionWrapperProps = {
  queryName: string;
  query: () => any;
  title: string;
  itemCard: ({ item }: { item: unknown }) => JSX.Element;
  listStyle: Record<string, unknown>;
  sectionStyle: Record<string, unknown>;
  scrollable?: boolean;
  showLoad?: boolean;
  onLoadComplete?: () => void;
};

export const ListSectionWrapper = ({
  queryName,
  query,
  title,
  itemCard,
  listStyle,
  sectionStyle,
  onLoadComplete = () => {},
  showLoad = true,
}: ListSectionWrapperProps) => {
  const { isLoading, error, data } = useQuery(queryName, query, {
    onSettled: () => {
      onLoadComplete();
    },
  });

  if (isLoading && showLoad) {
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
}: ListSectionWrapperProps) => {
  const { setContextQueue } = useContext(QueueContext);
  const { isLoading, error, data } = useQuery(queryName, query, {
    onSettled: (data) => {
      if (data) {
        const tracks: Track[] = data?.map(mapToTrack) || [];
        setContextQueue(tracks);
      }
    },
  });

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

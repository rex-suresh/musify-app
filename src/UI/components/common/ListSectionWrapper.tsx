import React from 'react';
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
    <></>
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
    <></>
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

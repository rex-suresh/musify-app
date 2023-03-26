import React from 'react';
import { ScrollView } from 'react-native';
import { PageTitle } from '../components/common/Titles';
import { SearchBar } from './SearchBar';

export const SearchScreen = () => {
  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      alwaysBounceVertical={false}>
      <PageTitle title="Search" />
      <SearchBar />
    </ScrollView>
  );
};

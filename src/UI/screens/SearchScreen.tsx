import React, { createRef, useState } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { PageTitle } from '../components/common/Titles';
import { SearchBar } from './SearchBar';
import { SearchResult } from './SearchResult';

export const SearchScreen = () => {
  const searchBarRef = createRef<TextInput>();
  const [searchKeyword, setSearchKey] = useState('');

  const onChange = (text: string) => setSearchKey(text);

  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      alwaysBounceVertical={false}>
      <PageTitle title="Search" />
      <SearchBar
        barRef={searchBarRef}
        searchKeyword={searchKeyword}
        onChange={onChange}
      />
      <SearchResult />
    </ScrollView>
  );
};

import React, { createRef, useCallback, useState } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { searchResult } from '../../APIservice/request';
import { PageTitle } from '../components/common/Titles';
import { SearchBar } from './SearchBar';
import { SearchResultScreen } from './SearchResult';

export const SearchScreen = () => {
  const searchBarRef = createRef<TextInput>();
  const [searchKeyword, setSearchKey] = useState('');
  const [startSearch, setStartSearch] = useState(false);

  const onChange = (text: string) => setSearchKey(text);
  const onSubmit = () => setStartSearch(true);
  const onComplete = () => setStartSearch(false);

  const searchRequest = useCallback(searchResult(searchKeyword), [
    searchKeyword,
  ]);

  return (
    <ScrollView
      keyboardDismissMode="on-drag"
      alwaysBounceVertical={false}>
      <PageTitle title="Search" />
      <SearchBar
        barRef={searchBarRef}
        searchKeyword={searchKeyword}
        onChange={onChange}
        startQuery={onSubmit}
      />
      <SearchResultScreen
        searchKey={searchKeyword}
        initiateSearch={startSearch}
        request={searchRequest}
        onReqComplete={onComplete}
      />
    </ScrollView>
  );
};

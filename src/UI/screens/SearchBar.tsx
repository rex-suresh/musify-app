import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../colors';
import { sizes } from '../fontSizes';

export const SearchBar = () => {
  const [searchKeyword, setSearchKey] = useState('');

  return (
    <View style={styles.searchBox}>
      <TextInput
        placeholder="Artists, Tracks, Albums ..."
        onChangeText={(text) => setSearchKey(text)}
        value={searchKeyword}
        style={styles.searchBar}
        placeholderTextColor={colors.lowContrast}
        multiline={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    width: '100%',
    color: colors.light,
    fontSize: sizes.S,
  },
  searchBox: {
    marginTop: 30,
    padding: 10,
    width: 320,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 30,
    alignSelf: 'center',
  },
});

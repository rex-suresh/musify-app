import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../colors';
import { sizes } from '../fontSizes';

export const SearchBar = ({
  barRef,
  searchKeyword,
  onChange,
  startQuery,
}: {
  barRef: React.RefObject<TextInput>;
  searchKeyword: string;
  onChange: (text: string) => void;
  startQuery: () => void;
}): JSX.Element => {
  return (
    <View style={styles.searchBox}>
      <TextInput
        ref={barRef}
        placeholder="Artists, Tracks, Albums ..."
        onChangeText={onChange}
        onSubmitEditing={() => {
          if (searchKeyword.length > 1) {
            startQuery();
          }
        }}
        value={searchKeyword}
        style={styles.searchBar}
        placeholderTextColor={colors.lowContrast}
        multiline={false}
        focusable
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
    maxHeight: 50,
    paddingLeft: 10,
    width: 320,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

import React, { useState } from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { colors } from '../colors';
import { PageTitle } from '../components/common/Titles';
import { sizes } from '../fontSizes';

export const SearchScreen = () => {
  const [searchKeyword, setSearchKey] = useState('');
  const [domainKeyword, setdomainKey] = useState('');

  return (
    <View>
      <PageTitle title="Search" />
      <TextInput
        placeholder="Search"
        onChangeText={(text) => setSearchKey(text)}
        value={searchKeyword}
        style={styles.searchBox}
        placeholderTextColor={colors.fontDimLight}
      />
      <TextInput
        placeholder="domain"
        onChangeText={(text) => setdomainKey(text)}
        value={domainKeyword}
        style={styles.searchBox}
        placeholderTextColor={colors.fontDimLight}
      />
      <Button
        title="Set"
        onPress={() => {
          AsyncStorage.setItem('URL', domainKeyword);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    width: '100%',
    marginTop: 20,
    padding: 10,
    borderColor: colors.greyBd,
    borderWidth: 2,
    color: 'white',
    backgroundColor: 'black',
    fontSize: sizes.M,
    borderRadius: 15,
  },
});

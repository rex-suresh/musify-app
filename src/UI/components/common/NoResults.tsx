import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../colors';
import { sizes } from '../../fontSizes';

export const NoResults = () => (
  <View style={styles.errorBox}>
    <Text style={styles.responseError}>No results 🤷🏻</Text>
  </View>
);

const styles = StyleSheet.create({
  errorBox: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  responseError: {
    color: colors.light,
    fontSize: sizes.S,
    textAlign: 'center',
  },
});

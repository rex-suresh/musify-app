import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../../colors';

export const Loading = ({ size = 'small' }: { size?: 'large' | 'small' }) => (
  <View style={styles.indicatorContainer}>
    <ActivityIndicator
      size={size}
      color={colors.light}
    />
  </View>
);

const styles = StyleSheet.create({
  indicatorContainer: {
    height: 450,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

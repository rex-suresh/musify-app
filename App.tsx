import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './src/UI/screens/HomeScreen';

const App = () => (
  <View style={styles.screen}>
    <View style={styles.box}>
      <HomeScreen />
      <Text>Atleast</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  box: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default App;

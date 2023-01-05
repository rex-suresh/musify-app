import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { HomeScreen } from './src/UI/screens/HomeScreen';

const App = () => (
  <View>
    <SafeAreaView style={styles.screen}>
      <StatusBar
        showHideTransition={'slide'}
        barStyle={'light-content'}
      />
      <HomeScreen />
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
});

export default App;

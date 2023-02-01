import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HomeScreen } from './src/UI/screens/HomeScreen';

const reactQueryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={reactQueryClient}>
    <View>
      <SafeAreaView style={styles.screen}>
        <StatusBar
          showHideTransition={'slide'}
          barStyle={'light-content'}
        />
        <HomeScreen />
      </SafeAreaView>
    </View>
  </QueryClientProvider>
);

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
});

export default App;

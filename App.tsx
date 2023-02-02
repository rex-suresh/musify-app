import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ScreenNavigator } from './src/UI/navigation';

const reactQueryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={reactQueryClient}>
    <View>
      <SafeAreaView style={styles.screen}>
        <StatusBar
          showHideTransition={'fade'}
          barStyle={'light-content'}
        />
        <ScreenNavigator />
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

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SubScreenNavigator } from './src/UI/NavStack';

const reactQueryClient = new QueryClient();

const App = () => {
  TrackPlayer.setupPlayer();

  return (
    <QueryClientProvider client={reactQueryClient}>
      <View>
        <SafeAreaView style={styles.screen}>
          <StatusBar
            showHideTransition={'fade'}
            barStyle={'light-content'}
          />
          <SubScreenNavigator />
        </SafeAreaView>
      </View>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
});

export default App;

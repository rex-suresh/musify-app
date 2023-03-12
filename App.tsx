import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { QueryClient, QueryClientProvider } from 'react-query';
import { initQueries } from './src/APIservice/request';
import { SubScreenNavigator } from './src/UI/NavStack';

const waitBeforeRefetch = 6 * 60 * 60 * 1000;

const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: waitBeforeRefetch,
      cacheTime: waitBeforeRefetch,
      refetchOnReconnect: true,
      refetchOnMount: 'always',
    },
  },
});

const App = () => {
  useEffect(() => {
    TrackPlayer.setupPlayer();
    reactQueryClient.prefetchQuery(initQueries);
  }, []);

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

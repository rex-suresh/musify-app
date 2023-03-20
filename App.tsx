import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BottomBarScreenNavigator } from './src/UI/navigation/NavBar';

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
    TrackPlayer.updateOptions({
      alwaysPauseOnInterruption: true,
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.PausePlayback,
      },
      stoppingAppPausesPlayback: true,
      capabilities: [Capability.Play, Capability.Pause],
      compactCapabilities: [Capability.Play, Capability.Pause],
      notificationCapabilities: [Capability.Play, Capability.Pause],
    });
  }, []);

  return (
    <QueryClientProvider client={reactQueryClient}>
      <View>
        <SafeAreaView style={styles.screen}>
          <StatusBar
            showHideTransition={'fade'}
            barStyle={'light-content'}
          />
          <BottomBarScreenNavigator />
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

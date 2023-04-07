import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BottomBarScreenNavigator } from './src/UI/navigation/NavBar';
import { QueueContextProvider } from './src/context/CurrentContext';

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

const playerCapabilities = [
  Capability.Play,
  Capability.Pause,
  Capability.SkipToNext,
  Capability.SkipToPrevious,
];

const App = () => {
  const [playerInit, setPlayerInit] = useState(false);

  useEffect(() => {
    if (!playerInit) {
      setPlayerInit(true);

      TrackPlayer.setupPlayer({
        backBuffer: 1.5,
        autoHandleInterruptions: true,
      });
      TrackPlayer.updateOptions({
        alwaysPauseOnInterruption: true,
        android: {
          appKilledPlaybackBehavior: AppKilledPlaybackBehavior.PausePlayback,
          // To show notification we need it as a separate process.
          alwaysPauseOnInterruption: true,
        },
        capabilities: playerCapabilities,
        compactCapabilities: playerCapabilities,
        notificationCapabilities: playerCapabilities,
        backwardJumpInterval: 1000,
        forwardJumpInterval: 1000,
      });
    }
  }, []);

  return (
    <QueryClientProvider client={reactQueryClient}>
      <View>
        <SafeAreaView style={styles.screen}>
          <StatusBar
            showHideTransition={'fade'}
            barStyle={'light-content'}
          />
          <QueueContextProvider>
            <BottomBarScreenNavigator />
          </QueueContextProvider>
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

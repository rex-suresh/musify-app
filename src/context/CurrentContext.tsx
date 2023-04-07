import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { Track } from 'react-native-track-player';
import { addTracksToQueue, playTracks } from '../services/PlayerActions';

export const QueueContext = createContext({
  contextQueue: [] as Track[],
  setContextQueue: (_queue: Track[]) => {},
  clearContextQueue: () => {},
  actions: { play: () => {}, queue: () => {} },
});

export const QueueContextProvider = ({ children }: { children: ReactNode }) => {
  const [contextQueue, setQueue] = useState<Track[]>([]);

  const clearContextQueue = () => {
    setContextQueue([]);
  };

  const setContextQueue = (queue: Track[]) => {
    setQueue(queue);
  };

  return (
    <QueueContext.Provider
      value={{
        contextQueue,
        setContextQueue,
        clearContextQueue,
        actions: {
          play: () => playTracks(contextQueue),
          queue: () => addTracksToQueue(contextQueue),
        },
      }}>
      {children}
    </QueueContext.Provider>
  );
};

import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { Track } from 'react-native-track-player';
import { addTracksToQueue, playTracks } from '../services/PlayerActions';

export const QueueContext = createContext({
  contextQueue: [] as Track[],
  setContextQueue: (_queue: Track[]) => {},
  clearContextQueue: () => {},
  actions: { play: () => {}, queue: () => {} },
  hasContent: false,
});

export const QueueContextProvider = ({ children }: { children: ReactNode }) => {
  const [contextQueue, setQueue] = useState<Track[]>([]);
  const [hasContent, setHasContent] = useState(false);

  const clearContextQueue = () => {
    setContextQueue([]);
  };

  const setContextQueue = (queue: Track[]) => {
    setQueue(queue);
  };

  useEffect(() => {
    if (contextQueue.length > 0) {
      setHasContent(true);
      return;
    }
    setHasContent(false);
  }, [contextQueue]);

  return (
    <QueueContext.Provider
      value={{
        hasContent,
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

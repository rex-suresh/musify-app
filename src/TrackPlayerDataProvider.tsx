import React, { createContext } from 'react';
import { Track } from 'react-native-track-player';

const trackList: Track[] = [];

const addTrack = (track: Track) => {
  trackList.push(track);
};

const context = { tracks: trackList, add: addTrack };
export const TrackListContext = createContext(context);

export const TrackPlayerDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <TrackListContext.Provider value={context}>
      {children}
    </TrackListContext.Provider>
  );
};

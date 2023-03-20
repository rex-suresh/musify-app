import { useEffect } from 'react';
import { useProgress, useActiveTrack } from 'react-native-track-player';

export const useTrackDetails = () => {
  const progress = useProgress();
  const activeTrack = useActiveTrack();

  useEffect(() => {
    // TrackPlayer.addEventListener(
    //   Event.PlaybackTrackChanged,
    //   (trackChangeEvent) => {},
    // );
  }, []);

  return {
    activeTrack,
    elapsedTimePrecise: progress.position,
    elapsedTime: Math.ceil(progress.position),
    totalTime: 30,
  };
};

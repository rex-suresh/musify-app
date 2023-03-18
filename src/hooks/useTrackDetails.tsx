import { useEffect } from 'react';
import { useProgress } from 'react-native-track-player';

export const useTrackDetails = () => {
  const progress = useProgress();

  useEffect(() => {
    // TrackPlayer.addEventListener(
    //   Event.PlaybackTrackChanged,
    //   (trackChangeEvent) => {},
    // );
  }, []);

  return {
    elapsedTime: Math.ceil(progress.position),
    totalTime: 30,
  };
};

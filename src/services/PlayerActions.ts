import { ToastAndroid } from 'react-native';
import TrackPlayer, { Track } from 'react-native-track-player';
import { mapToTrack } from '../UI/components/common/mappers';
import { TrackCardProps } from '../UI/components/trackCard/TrackCard.types';

export const playQueue = (list: TrackCardProps[]) => {
  TrackPlayer.reset();
  TrackPlayer.removeUpcomingTracks();
  list.forEach((track) => {
    TrackPlayer.add(mapToTrack(track));
  });
  TrackPlayer.play();
  ToastAndroid.show('Playing queue', 50);
};

export const addToQueue = (item_s: TrackCardProps[] | TrackCardProps) => {
  if (Array.isArray(item_s)) {
    item_s.forEach((track) => {
      TrackPlayer.add(mapToTrack(track));
    });
    return;
  }

  TrackPlayer.add(mapToTrack(item_s));
};

export const justPlay = (item: TrackCardProps) => {
  TrackPlayer.reset();
  TrackPlayer.add(mapToTrack(item));
  TrackPlayer.play();
};

export const addTracksToQueue = (tracks: Track[]) => {
  tracks.forEach((track) => {
    TrackPlayer.add(track);
  });
};

export const playTracks = (tracks: Track[]) => {
  TrackPlayer.reset();
  TrackPlayer.removeUpcomingTracks();
  tracks.forEach((track) => {
    TrackPlayer.add(track);
  });
  TrackPlayer.play();

  ToastAndroid.show('Playing queue', 50);
};

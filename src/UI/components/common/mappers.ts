import { Track, TrackType } from 'react-native-track-player';
import { TrackCardProps } from '../trackCard/TrackCard.types';

export const mapToTrack = ({
  song,
  name,
  album,
  artist,
  image,
  id,
}: TrackCardProps): Track => {
  return {
    id,
    url: song,
    title: name,
    album: album.name,
    artist: artist.name,
    artwork: image,
    type: TrackType.SmoothStreaming,
  };
};

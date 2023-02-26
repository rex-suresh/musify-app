import { Track } from 'react-native-track-player';
import { TrackCardProps } from '../trackCard/TrackCard.types';

export const mapToTrack = ({
  song,
  name,
  album,
  artist,
  image,
}: TrackCardProps): Track => {
  return {
    url: song,
    title: name,
    album: album.name,
    artist: artist.name,
    artwork: image,
  };
};

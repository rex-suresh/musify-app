type ArtistInfo = {
  id: string;
  name: string;
};

type AlbumInfo = {
  id: string;
  name: string;
};

export interface TrackCardProps {
  id: string;
  name: string;
  artist: ArtistInfo;
  album: AlbumInfo;
  image: string;
  song: string;
  playbackSeconds: number;
}

export type TrackInfoParams = Pick<
  TrackCardProps,
  'name' | 'artist' | 'album' | 'playbackSeconds'
>;

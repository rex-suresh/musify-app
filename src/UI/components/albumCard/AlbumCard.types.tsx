type ArtistInfo = {
  id: string;
  name: string;
};

export interface AlbumCardProps {
  id: string;
  name: string;
  artist: ArtistInfo;
  label: string;
  explicit: boolean;
  image: string;
}

export type AlbumInfoParams = Pick<
  AlbumCardProps,
  'name' | 'artist' | 'label' | 'explicit'
>;

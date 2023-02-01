import { PlaylistCardProps } from '../UI/components/playlistCard/PlaylistCard.types';
import { get } from './request';
import { routes } from './routes';

export const useFetchTopPlaylistData = async (): Promise<
  PlaylistCardProps[]
> => {
  const data = await get(routes.topPlay).then((res) => {
    if (res?.data) {
      return res.data;
    }
    console.error('Error Occurred fetching TopPlaylist data !!!');
  });

  return data?.playlists || [];
};

import { ArtistCardProps } from '../UI/components/artistCard/ArtistCard.types';
import { get } from './request';
import { routes } from './routes';

export const useFetchTopArtistData = async (): Promise<ArtistCardProps[]> => {
  const data = await get(routes.topArt).then((res) => {
    if (res?.data) {
      return res.data;
    }
    console.error('Error Occurred fetching Artist data !!!');
  });

  return data?.artists || [];
};

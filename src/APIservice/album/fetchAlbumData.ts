import { AlbumCardProps } from '../../UI/components/albumCard/AlbumCard.types';
import { get } from '../request';
import { routes } from '../routes';

export const useFetchAlbumData = async (): Promise<
  AlbumCardProps[] | undefined
> => {
  const data = await get(routes.topAlb).then((res) => {
    if (res?.data) {
      return res.data;
    }
    console.error('Error Occurred fetching Album data !!!');
  });

  return data?.albums || [];
};

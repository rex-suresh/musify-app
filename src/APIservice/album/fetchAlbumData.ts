import { AlbumCardProps } from '../../UI/components/albumCard/AlbumCard.types';
import { get } from '../request';
import { routes } from '../routes';

// const mapToAlbumCardProps = () => {};

export const useFetchAlbumData = async (): Promise<
  AlbumCardProps[] | undefined
> => {
  const data = await get(routes.topAlb).then((res) => {
    if (res?.data) {
      return res.data;
    }
    console.log(res?.data);
  });

  return data?.albums || [];
};

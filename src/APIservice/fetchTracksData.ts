import { TrackCardProps } from '../UI/components/trackCard/TrackCard.types';
import { get } from './request';
import { routes } from './routes';

export const useFetchTopTrackData = async (): Promise<TrackCardProps[]> => {
  const data = await get(routes.topTra).then((res) => {
    if (res?.data) {
      return res.data;
    }
    console.error('Error Occurred fetching TopTrack data !!!');
  });

  return data?.tracks || [];
};

import { Linking } from 'react-native';
import { navigateToPlayer } from '../UI/navigation/navigation';
import { useNavigation } from '@react-navigation/native';

export const useNotificationDeepLink = () => {
  const navigation = useNavigation();

  Linking.addEventListener('url', (event) => {
    if (event.url === 'trackplayer://notification.click') {
      navigateToPlayer(navigation)();
    }
  });
};

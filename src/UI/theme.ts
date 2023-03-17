import { Theme } from '@react-navigation/native';
import { colors } from './colors';

export const theme: Theme = {
  colors: {
    background: colors.dark,
    text: colors.light,
    border: 'none',
    notification: 'purple',
    primary: colors.light,
    card: 'black',
  },
  dark: true,
};

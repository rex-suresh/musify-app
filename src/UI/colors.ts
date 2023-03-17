type part =
  | 'transparent'
  | 'dark'
  | 'light'
  | 'highContrast'
  | 'midContrast'
  | 'lowContrast'
  | 'veryLowContrast'
  | 'greyBd'
  | 'greyBg'
  | 'secondary';

export const colors: Record<part, string> = {
  transparent: 'rgba(0,0,0,0)',
  dark: 'black',
  light: 'white',
  highContrast: 'white',
  midContrast: 'rgb(210,210,210)',
  lowContrast: 'rgb(200,200,200)',
  veryLowContrast: 'rgb(150,150,150)',
  greyBd: 'rgb(120,120,120)',
  greyBg: '#111111',
  secondary: 'rgb(200,50,50)',
};

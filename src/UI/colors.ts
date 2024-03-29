type part =
  | 'transparent'
  | 'greyTransparent'
  | 'dark'
  | 'light'
  | 'highContrast'
  | 'midContrast'
  | 'lowContrast'
  | 'veryLowContrast'
  | 'darkContrast'
  | 'greyBd'
  | 'greyBg'
  | 'darkerContrast'
  | 'secondary';

export const colors: Record<part, string> = {
  transparent: 'rgba(0,0,0,0)',
  greyTransparent: 'rgba(17,17,17,0.9)',
  dark: 'black',
  light: 'white',
  highContrast: 'white',
  midContrast: 'rgb(210,210,210)',
  lowContrast: 'rgb(200,200,200)',
  veryLowContrast: 'rgb(150,150,150)',
  darkContrast: 'rgb(50,50,50)',
  darkerContrast: 'rgb(32,32,32)',
  greyBd: 'rgb(120,120,120)',
  greyBg: '#111111',
  secondary: 'rgb(200,50,50)',
};

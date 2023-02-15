type part =
  | 'screenBg'
  | 'fontL'
  | 'fontM'
  | 'fontS'
  | 'greyBd'
  | 'fontDim'
  | 'greyBg'
  | 'light'
  | 'fontDimLight'
  | 'dark'
  | 'transparent'
  | 'secondary';

export const colors: Record<part, string> = {
  secondary: 'rgb(200,50,50)',
  dark: 'black',
  screenBg: 'black',
  fontL: 'rgb(210,210,210)',
  fontM: 'white',
  fontS: 'white',
  fontDim: 'rgb(150,150,150)',
  fontDimLight: 'rgb(200,200,200)',
  greyBd: 'rgb(120,120,120)',
  greyBg: '#111111',
  light: 'white',
  transparent: 'rgba(0,0,0,0)',
};

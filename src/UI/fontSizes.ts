type part = 'micro' | 'XXS' | 'XS' | 'mini' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

export const sizes: Record<part, number> = {
  micro: 10,
  mini: 12,
  XXS: 14,
  XS: 16,
  S: 18,
  M: 20,
  L: 22,
  XL: 24,
  XXL: 36,
};

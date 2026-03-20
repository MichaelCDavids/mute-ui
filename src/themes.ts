import { type Theme } from './context/theme';

const gradients = {
    primary: 'radial-gradient(circle, #D4D4D4, #BDBDBD)',
    secondary: 'radial-gradient(circle, #EAEAEA, #CFCFCF)',
    tertiary: 'radial-gradient(circle, #F5F5F5, #DEDEDE)',
    aurora: 'radial-gradient(circle, #b1e1c4, #83c1a3)',
    dusk: 'radial-gradient(circle, #d1b1e1, #a383c1)',
    sand: 'radial-gradient(circle, #e1d4b1, #c1a883)',
    sky: 'radial-gradient(circle, #b1d4e1, #83a8c1)',
    mist: 'radial-gradient(circle, #d7e0e4, #b0c0c8)',
    stone: 'radial-gradient(circle, #c8c8c8, #a8a8a8)',
    meadow: 'radial-gradient(circle, #c4e1b1, #a3c183)',
    rose: 'radial-gradient(circle, #e1b1b1, #c18383)',
    peach: 'radial-gradient(circle, #e1c4b1, #c1a383)',
    ice: 'radial-gradient(circle, #b1e1e1, #83c1c1)',
    lavender: 'radial-gradient(circle, #e1d1e1, #c1a3c1)',
    mint: 'radial-gradient(circle, #d1e1d1, #a3c1a3)',
    butter: 'radial-gradient(circle, #e1e1d1, #c1c1a3)',
    coral: 'radial-gradient(circle, #e1b1a0, #c1836f)',
    ocean: 'radial-gradient(circle, #a0b1e1, #6f83c1)',
};

export const themes: Record<string, Partial<Theme>> = {
  default: {
    colors: {
        primary: '#3F51B5',
        surface: '#F5F5F5',
        inset: '#E8EAF6',
        text: '#212121',
        accent: '#C5CAE9',
        gradients,
    }
  },
  sunset: {
    colors: {
      primary: '#A24C2A',
      surface: '#F2E9E4',
      inset: '#E0D8D3',
      text: '#4A4A4A',
      accent: '#D3C1BA',
      gradients,
    },
  },
  ocean: {
    colors: {
      primary: '#0D47A1',
      surface: '#E3F2FD',
      inset: '#BBDEFB',
      text: '#000000',
      accent: '#90CAF9',
      gradients,
    },
  },
  forest: {
    colors: {
      primary: '#2E7D32',
      surface: '#E8F5E9',
      inset: '#C8E6C9',
      text: '#1B5E20',
      accent: '#A5D6A7',
      gradients,
    },
  },
  lavender: {
    colors: {
      primary: '#673AB7',
      surface: '#EDE7F6',
      inset: '#D1C4E9',
      text: '#311B92',
      accent: '#B39DDB',
      gradients,
    },
  },
  mint: {
    colors: {
      primary: '#009688',
      surface: '#E0F2F1',
      inset: '#B2DFDB',
      text: '#004D40',
      accent: '#80CBC4',
      gradients,
    },
  },
  'ruby-red': {
    colors: {
      primary: '#9A1111',
      surface: '#F9E7E7',
      inset: '#F2C3C3',
      text: '#3D0606',
      accent: '#E5A2A2',
      gradients,
    },
  },
  'goldenrod': {
    colors: {
      primary: '#B7860D',
      surface: '#FCF8E8',
      inset: '#F7E5B3',
      text: '#4D3804',
      accent: '#F0D993',
      gradients,
    },
  },
};

import { definePreset } from '@pandacss/dev';
import * as color from './token';

const preset: ReturnType<typeof definePreset> = definePreset({
  theme: {
    tokens: {
      colors: {
        red: {
          50: { value: color.red500 },
        },
        black: {
          90: { value: color.black900 },
        },
      },
    },
  },
});

export default preset;

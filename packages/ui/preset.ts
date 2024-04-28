import { definePreset } from '@pandacss/dev'
import * as color from './token'

export default definePreset({
  theme: {
    tokens: {
      colors: {
        red: {
          50: { value: color.red500 },
        },
        black: {
            90: {value: color.black900}
        }
      }
    }
  }
})
/** @type {import('tailwindcss').Config} */
import { transparent as _transparent } from 'tailwindcss/colors'

const constants = {
  crimson: '#f9004d',
  white: '#e1dee6',
  grey: '#cdd5df',
  'dark-grey': '#697586',
  violet: '#b692f6',
  'lightest-black': '#2c2c2c',
  'soft-black': '#18181b',
  black: '#05090f',
}

export const content = ['./src/**/*.{js,jsx,ts,tsx}']
export const theme = {
  colors: {
    transparent: _transparent,
    ...constants,
  },
  extend: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1.00rem',
      lg: '1.12rem',
      xl: '1.26rem',
      '1.5xl': '1.37rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2.00rem',
      '5xl': '2.5rem',
      '6xl': '3.0rem',
      '7xl': '4.0rem',
      '8xl': '4.5rem',
      '9xl': '5.5rem',
    },
  },
}
export const plugins = []

/** @type {import('tailwindcss').Config} */

import flowbite from 'flowbite/plugin'
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0f8f8',
          100: '#b3f0f0',
          200: '#80e5e5',
          300: '#4dcccc',
          400: '#26bdbd',
          500: '#1ac8c1',  // Color primario
          600: '#13a7a8',
          700: '#0e8787',
          800: '#0b6766',
          900: '#084d4d',
        },
        secondary: {
          50: '#f2f7f7',
          100: '#c2e0e0',
          200: '#92c9c9',
          300: '#62b2b2',
          400: '#329b9b',
          500: '#1c8d8d',  // Color secundario
          600: '#167d7d',
          700: '#126d6d',
          800: '#0e5d5d',
          900: '#0a4e4e',
        },
        error: {
          50: '#f9eeee',
          100: '#f3cccc',
          200: '#e57373',
          300: '#ef5350',
          400: '#e53935',
          500: '#d32f2f',  // Color para errores
          600: '#c62828',
          700: '#b71c1c',
          800: '#a21c1c',
          900: '#8b1a1a',
        },
        success: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',  // Color para éxitos
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
        },
        warning: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',  // Color para advertencias
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
        },
        info: {
          50: '#e8eaf6',
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#3f51b5',  // Color para información
          600: '#3949ab',
          700: '#303f9f',
          800: '#283593',
          900: '#1a237e',
        },
      }
    },
  },
  plugins: [
    flowbite
  ]
}
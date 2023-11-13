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
          50: '#f2f7ff',
          100: '#dbeafe',
          200: '#aed7ff',
          300: '#7fb4ff',
          400: '#4d96e2',
          500: '#266ea1',
          600: '#1c4b6d',
          700: '#143858',
          800: '#0f2f44',
          900: '#0b2732',
        },
        secondary: {
          50: '#fffbf2',
          100: '#fff1c2',
          200: '#ffe09e',
          300: '#ffd474',
          400: '#ffbc3d',
          500: '#ff9900',
          600: '#e67800',
          700: '#bf5f00',
          800: '#994900',
          900: '#7d3d00',
        },
        error: {
          50: '#fdf2f2',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f98080',
          500: '#f05252',
          600: '#e02424',
          700: '#c81e1e',
          800: '#9b1c1c',
          900: '#771d1d',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50: '#fffaf0',
          100: '#feebc8',
          200: '#fbd38d',
          300: '#f6ad55',
          400: '#ed8936',
          500: '#dd6b20',
          600: '#c05621',
          700: '#9c4221',
          800: '#7b341e',
          900: '#652b19',
        },
        info: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#a0aec0',
          300: '#718096',
          400: '#4a5568',
          500: '#2d3748',
          600: '#1f2933',
          700: '#111827',
          800: '#0c0e12',
          900: '#070809',
        },
      }
    },
  },
  plugins: [
    flowbite
  ]
}
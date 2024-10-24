/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anuphan' : ['Anuphan', 'sans-serif'],
       },
      colors: {
        'primary-50': 'rgb(236 253 245)',
        'primary-100': 'rgb(209 250 229)',
        'primary-200': 'rgb(167 243 208)',
        'primary-300': 'rgb(110 231 183)',
        'primary-400': 'rgb(52 211 153)',
        'primary-500': 'rgb(16 185 129)',
        'primary-600': 'rgb(5 150 105)',
        'primary-700': 'rgb(4 120 87)',
        'primary-800': 'rgb(6 95 70)',
        'primary-900': 'rgb(4 78 56)',
        'primary-950': 'rgb(2 44 34)',
        'surface-0': 'rgb(255 255 255)',
        'surface-50': 'rgb(248 250 252)',
        'surface-100': 'rgb(241 245 249)',
        'surface-200': 'rgb(226 232 240)',
        'surface-300': 'rgb(203 213 225)',
        'surface-400': 'rgb(148 163 184)',
        'surface-500': 'rgb(100 116 139)',
        'surface-600': 'rgb(71 85 105)',
        'surface-700': 'rgb(45 55 72)',
        'surface-800': 'rgb(30 41 59)',
        'surface-900': 'rgb(15 23 42)',
        'surface-950': 'rgb(3 6 23)'
      }
    },
  },
  plugins: [],
}
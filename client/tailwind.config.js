const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      keyframes :{
        dropDown : {
          '0%' : {	opacity: '0', transform: 'translateY(-100%)'},
          '100%' : { opacity: '1', transform: 'translateY(0)'},
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      screens: {
        'xxs': { 'raw': '(min-width: 480px)' },
        'xs': { 'raw': '(min-width: 535px)' },
        'lgplus': { 'raw': '(min-width: 1148px)' },
        'mdplus': { 'raw': '(min-width: 824px)' },
        'smplus': { 'raw': '(min-width: 712px)' },
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'drop-down' : 'dropDown 0.7s ease 0s 1 normal forwards',
        'fadeIn': "fadeIn 2s ease-in forwards"
      },      
      boxShadow: {
        'monShadow': '1px 0px 20px 20px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    require('tailwind-hamburgers'),
  ],
};
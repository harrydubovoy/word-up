/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      pantone: '#bb2649',
      'seashell-peach': '#fff7f1',
      tequila: '#ffe4c9',
      'we-peep': '#f3d0d7',
      tiara: '#bed1cf',
    },
    extend: {},
  },
  plugins: [],
})


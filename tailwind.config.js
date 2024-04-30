/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'jet-stream': '#afd0c9',
      'lunar-green': '#384135',
    },
    extend: {},
  },
  plugins: [],
})


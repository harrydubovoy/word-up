/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'sans-serif'],
    },

    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'jet-stream': '#afd0c9',
        'lunar-green': '#384135',

        'light-green': {
          200: '#c5e1a5',
          300: '#aed581',
        },

        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
      },
      // generate by js
      opacity: {
        3: '0.03',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwindcss-animate'),
  ],
};

/*
white

#F7F6F1 — пудровий +
#F6F6F6 — перлиновий +
#EAEAEA — off-white
#E5DFD3 — біла качка
#EAEFF3 — крило чайки
#EFF1F0— порцеляновий +-
#F3F2ED — кремовий +-

blue

#091F5B — хвіст птиці
#BAD6EB — венера
#050835 — нічний експрес
#6F96D1 — всесвіт
#3B63A8 — хвиля
#008ACB — подих весни
#2A4E98 — тату

black

#4A4647 — асфальт
#1B191A — темний лебідь +
#2B3439 — чорне дерево
#383838 — шифер
#202020 — мастило +-
#121111 — смолянистий +
#25242C — black water +-

#101720 — опівнічно синій
#0D1717 — вугільно-сірий
#0C0C0C — чорна олія
#020D19 — насичений чорний
#0B1215 — обсидіан
#011222 — глибокий синій
#0C0A00 — чорний карбор
 */

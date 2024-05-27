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
      'link-water': '#e6eff8',
      'catskill-white': '#f8fafc',
      'tea-green': '#e1f5d2',
    },
    extend: {},
  },
  plugins: [],
});

/*
white

#F7F6F1 — пудровий
#F6F6F6 — перлиновий
#EAEAEA — off-white
#E5DFD3 — біла качка
#EAEFF3 — крило чайки
#EFF1F0— порцеляновий
#F3F2ED — кремовий


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
#1B191A — темний лебідь
#2B3439 — чорне дерево
#383838 — шифер
#202020 — мастило
#121111 — смолянистий
#25242C — black water

#101720 — опівнічно синій
#0D1717 — вугільно-сірий
#0C0C0C — чорна олія
#020D19 — насичений чорний
#0B1215 — обсидіан
#011222 — глибокий синій
#0C0A00 — чорний карбор
 */

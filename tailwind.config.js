/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      textTransform: ['first-letter'],

      colors: {
        'jet-stream': '#afd0c9',
        'lunar-green': '#384135',
        'link-water': '#e6eff8',
        'catskill-white': '#f8fafc',
        'tea-green': '#e1f5d2',
        'lavender-blush': '#ffebee',
        panache: '#f3faf3',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwindcss-animate'),
    ({ addUtilities }) => {
      const newUtilities = {
        '.first-letter-uppercase::first-letter': {
          textTransform: 'uppercase',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

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

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-logical'), require('./src/components/@core/tailwind/plugin')],
  theme: {
    extend: {},
  },
};

export default config;

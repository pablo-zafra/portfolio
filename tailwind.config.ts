import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'dark-gray': '#222222',
        turquesa: '#1EC598'
      }
    }
  },
  plugins: []
};

export default config;

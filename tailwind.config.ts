import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    letterSpacing: {
      small: '0.00625em',
    },

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'huguenots-blue': '#033057',
        'huguenots-light-blue': '#335776',
        'huguenots-blue-text': '#003057',
        'huguenots-black': '#111111',
        'huguenots-blue-search': '#002F56',
      },
      fontFamily: {
        myriad: ['Myriad Pro', 'sans-serif'],
        ptSans: ['PT Sans', 'sans-serif'], // PT Sans is an alternative to Myriad Pro
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'transparent': 'transparent',
      'neutral': {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },

      'link': '#01A3BC',
      'dark-blue': '#008599',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
        lg: '4rem',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'url(/images/gradient-mesh.jpg)',
        'gradient-05': 'linear-gradient(98deg, #34B2C7 0%, #356A68 100%)',
        'gradient-09': 'linear-gradient(98deg, #02888D 0%, #00CDAC 100%)',
        'diamonds': 'url(/images/bg-diamonds.png)',
      },
      boxShadow: {
        // 'DEFAULT': '0 4px 21px rgba(18, 41, 37, 0.4)',
        'light-xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'light-sm': '0px 1px 2px -1px rgba(16, 24, 40, 0.10), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
        'light-md': '0px 2px 4px -2px rgba(16, 24, 40, 0.10), 0px 4px 6px -1px rgba(16, 24, 40, 0.10)',
        'light-lg': '0px 4px 6px -4px rgba(16, 24, 40, 0.40), 0px 10px 15px -3px rgba(16, 24, 40, 0.40)',
        'light-xl': '0px 8px 10px -6px rgba(16, 24, 40, 0.10), 0px 20px 25px -5px rgba(16, 24, 40, 0.10)',
        'light-2xl': '0px 25px 50px -12px rgba(16, 24, 40, 0.25)',
        'dark-xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.80)',
        'dark-sm': '0px 1px 2px -1px rgba(16, 24, 40, 0.40), 0px 1px 3px 0px rgba(16, 24, 40, 0.40)',
        'dark-md': '0px 2px 4px -2px rgba(16, 24, 40, 0.40), 0px 4px 6px -1px rgba(16, 24, 40, 0.40)',
        'dark-lg': '0px 4px 6px -4px rgba(16, 24, 40, 0.40), 0px 10px 15px -3px rgba(16, 24, 40, 0.40)',
        'dark-xl': '0px 8px 10px -6px rgba(16, 24, 40, 0.40), 0px 20px 25px -5px rgba(16, 24, 40, 0.40)',
        'dark-2xl': '0px 25px 50px -12px rgba(16, 24, 40, 0.80)',
      },
      // dropShadow: {
      //   // 'DEFAULT': '0 4px 21px rgba(18, 41, 37, 0.4)',
      //   'light-xs': '0px 1px 2px rgba(16, 24, 40, 0.05)',
      //   'light-sm': '0px 1px 2px rgba(16, 24, 40, 0.10), 0px 1px 3px rgba(16, 24, 40, 0.10)',
      //   'light-md': '0px 2px 4px rgba(16, 24, 40, 0.10), 0px 4px 6px rgba(16, 24, 40, 0.10)',
      //   'light-lg': '0px 4px 6px rgba(16, 24, 40, 0.40), 0px 10px 15px rgba(16, 24, 40, 0.40)',
      //   'light-xl': '0px 8px 10px rgba(16, 24, 40, 0.10), 0px 20px 25px rgba(16, 24, 40, 0.10)',
      //   'light-2xl': '0px 25px 50px rgba(16, 24, 40, 0.25)',
      //   'dark-xs': '0px 1px 2px rgba(16, 24, 40, 0.80)',
      //   'dark-sm': '0px 1px 2px rgba(16, 24, 40, 0.40), 0px 1px 3px rgba(16, 24, 40, 0.40)',
      //   'dark-md': '0px 2px 4px rgba(16, 24, 40, 0.40), 0px 4px 6px rgba(16, 24, 40, 0.40)',
      //   'dark-lg': '0px 4px 6px rgba(16, 24, 40, 0.40), 0px 10px 15px rgba(16, 24, 40, 0.40)',
      //   'dark-xl': '0px 8px 10px rgba(16, 24, 40, 0.40), 0px 20px 25px rgba(16, 24, 40, 0.40)',
      //   'dark-2xl': '0px 25px 50px rgba(16, 24, 40, 0.80)',
      // },
      fontFamily: {
        lato: ['var(--font-lato)'],
        poppins: ['var(--font-poppins)'],
      }
    },
  },
  plugins: [],
}

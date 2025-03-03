/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      letterSpacing: {
        "tightest": "-0.065em"
      },

      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832"
        }
      },

      boxShadow: {
        "normal": "0px 1px 10px rgba(0, 0, 0, 0.05)"
      },

      borderRadius: {
        "4xl": "2rem"
      },

      spacing: {
        "30": "7.5rem",
        "25": "6.25rem",
        "50": "12.5rem"
      },

      fontFamily: {
        'Dana': ['Dana', 'sans-serif'],
        'DanaMedium': 'Dana Medium',
        'DanaDemiBold': 'Dana DemiBold',
        'DanaNum': 'Dana DemiNum',
        'MorabbaLight': 'Morabba Light',
        'MorabbaMedium': 'Morabba Medium',
        'MorabbaBold': 'Morabba Bold'
      },
      container: {
        center: true,
        padding: {
          DEFUALT: '1rem',
          lg: '0.625rem'
        }
      }
    },
    screens: {
      '2xs': '420px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    backgroundImage: {
      'home-mobile': 'url(./assets/headerBgMobile.webp)',
      'home-desktop': 'url(./assets/headerBgDesktop.webp)',
      'gradient-radial': 'linear-gradient(90deg, rgba(34,197,94,1) 0%, rgba(22,163,74,1) 100%)',
      'gradient-btn': 'linear-gradient(90deg, rgba(254,215,170,1) 0%, rgba(253,186,116,1) 100%)'
    }
  },
  plugins: [],
}


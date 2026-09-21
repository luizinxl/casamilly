/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FFF8FA',
          100: '#FCECEF',
          150: '#FBE6EA',
          200: '#F8DCE2',
          300: '#F2CAD3',
          400: '#E4A0B1',
          500: '#D97E96',
        },
        cream: {
          50: '#FDFCF9',
          100: '#FDF8F5',
          200: '#F5E8DC',
        },
        berry: {
          DEFAULT: '#B04A65',
          dark: '#942538',
          deep: '#692A38',
          light: '#C76580',
          accent: '#A4191C'
        },
        coffee: {
          DEFAULT: '#3D272A',
          soft: '#5E3E43',
          light: '#7A555B',
          border: '#E8CCD2'
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'velvet': '0 10px 30px -5px rgba(105, 42, 56, 0.08), 0 4px 12px -2px rgba(105, 42, 56, 0.04)',
        'velvet-hover': '0 20px 40px -8px rgba(105, 42, 56, 0.16), 0 8px 18px -4px rgba(105, 42, 56, 0.08)',
        'button': '0 6px 20px -2px rgba(176, 74, 101, 0.35)',
        'button-hover': '0 10px 25px -2px rgba(148, 37, 56, 0.45)',
      }
    },
  },
  plugins: [],
}

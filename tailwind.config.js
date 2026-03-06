export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      gray: {
        50: '#f5f5f5',
        100: '#e5e5e5',
        200: '#d4d4d4',
        300: '#a3a3a3',
        400: '#737373',
        500: '#525252',
        600: '#404040',
        700: '#262626',
        800: '#1a1a1a',
        900: '#0a0a0a',
      },
      ringColor: {
        primary: '#2563eb',
        'primary-500': '#3b82f6',
        'primary-600': '#2563eb',
        'primary-700': '#1d4ed8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

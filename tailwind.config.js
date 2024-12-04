/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#ffffff',
          secondary: '#f3f4f6',
          text: '#111827',
        },
        dark: {
          primary: '#111827',
          secondary: '#1f2937',
          text: '#f9fafb',
        },
        brand: {
          primary: '#3B82F6',
          secondary: '#10B981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        light: '#ffffff',
        dark: '#111827',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}


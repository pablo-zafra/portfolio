/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",   // Páginas de la app router
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Páginas (si también usas la carpeta pages)
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#F7E043',
          dark: '#222222',
          accent: '#43E0D0',
          'light-100': '#F5F5F5',
          'light-200': '#D1D5DB',
        },
      },
    },
    plugins: [],
  }
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgMain: 'var(--bg-main)',
        bgPaper: 'var(--bg-paper)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        textMain: 'var(--text-main)',
      },
    },
  },
  plugins: [],
}
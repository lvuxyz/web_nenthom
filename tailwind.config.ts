import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b51717',
        secondary: '#191f23',
        'gray-light': 'rgba(25,31,35,0.8)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'natural': '6px 6px 9px rgba(0, 0, 0, 0.2)',
        'deep': '12px 12px 50px rgba(0, 0, 0, 0.4)',
        'sharp': '6px 6px 0px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config 
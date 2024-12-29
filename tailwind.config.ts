import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
        fontFamily : {
            vazir : ['Vazirmatn']
        } ,
        backgroundImage: {
            'hero-pattern': "url('/image/4212NEW.jpg')",
          }
    },
  },
  plugins: [],
} satisfies Config;

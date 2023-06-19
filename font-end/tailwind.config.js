module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {


      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1192px',
      // => @media (min-width: 1192px) { ... }
      'xxl': '1300px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }



    },
    extends: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // ...
  ],
};

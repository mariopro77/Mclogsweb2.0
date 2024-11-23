/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    
    
  ],
  theme: {
    extend: {
      colors: {
        videogray: "#F6F6F6",
        mutedCoral: '#FFCCBC',
        LightSeafoamGreen: '#E0F7FA',
        SoftGrey: '#F5F5F5',
        PaleYellow: '#FFF9C4',
        DarkBlue: '#003366',
        SoftBlue: '#4A90E2',

        Estadoverde: '#a7b65e',
        persiangreen: '#389483ff',
        aureolin: '#BCBB0C',
        bluemunsell: '#038EA3ff',
        light_bluemunsell: '#54B5BF',
        blue: '#0A4273',
        light_blue: '#26528C',
        oldgold: '#A6A403ff',
        midblue: '#086098ff'
      },
      fontFamily: {
        sans: ['Baloo Bhaijaan 2', 'sans-serif'],
          
      },
    },
  },
  plugins: [],
}

//Correr npm i para actualizar todas las dependencias
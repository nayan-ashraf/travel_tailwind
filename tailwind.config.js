/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {   
  
        fontSize: {
          sm: '0.8rem',
          base: '1rem',
          xl: '1.25rem',
          xxl:'4rem',
          '2xl': '1.563rem',
          '3xl': '1.953rem',
          '4xl': '2.441rem',
          '5xl': '3.052rem',
        },
    
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
   
    extend: {
      colors:{
        darkPaste: '#14505C',
       
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('image/heroimg.png')",
        bonna: "url('image/img-5.webp')",
        mamu: "url('image/dolby.webp')",
    },
      width: {
        faiz: "83%",
      },
      margin: {
        alfaiz: "10px 0px",
      }
    
      
  },

  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes:{
        move_rtl:{
          "0%":{
            transform: "translateX(100%)",
          },
          "100%":{
            transform: "translateX(-100%)",
          }
        }
      },
      animation:{
        "transX":"move_rtl 15000ms linear infinite"
      }
    },
  },
  plugins: [],
}


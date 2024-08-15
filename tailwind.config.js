/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "xxl":[
          "12rem",
          {"lineHeight": "10rem"}
        ]
      },
      fontFamily: {
        'poppins': ['poppins', 'ui-sans-serif', 'system-ui'],
        'raleway': ['raleway'],
        'bavista': ['bavista']
      },
      backgroundImage: {
        'custom-image': "url('/Images/me.jpg')"
      }
    },
  },
  plugins: [],
}
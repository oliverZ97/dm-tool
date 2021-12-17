module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#1d573f",
      secondary: "#469e76",
      tertiary: "#a7dbc0",
      highlight: "#88614a",
      neutral: "#f1faee",
      white: '#ffffff',
    },
    extend: {
      height: {
        "10p": '10%',
        "20p": '20%',
        "30p": '30%',
        "40p": '40%',
        "50p": '50%',
        "60p": '60%',
        "70p": '70%',
        "80p": '80%',
        "90p": '90%',
      },
      width: {
        "10p": '10%',
        "20p": '20%',
        "30p": '30%',
        "40p": '40%',
        "50p": '50%',
        "60p": '60%',
        "70p": '70%',
        "80p": '80%',
        "90p": '90%',
      },
      backgroundImage : {
        "forest": "url('/static/images/forest_crop.jpg')"
      }
    },
  },
  plugins: [],
}

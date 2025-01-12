module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
    screens:{
      'xs': '400px'
    },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        bold: 700,
        "extra-bold": 800,
      },
      boxShadow: {
        "custom1": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        "custom2": "rgba(0, 0, 0, 0.09) 0px 3px 12px",
      },
    },
  },
  plugins: [],
};

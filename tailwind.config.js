/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    minHeight: {
      "1/2": "600px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      width: {
        imgwidth: "280px",
        filterwidth: "350px",
        leftwidth: "645px",
        rightwidth: "300px",
        buttonwidth: "135px",
      },
      colors: {
        blue: "#3395ed",
      },
      fontSize: {
        fs10: "10px",
        fs11: "11px",
        fs13: "13px",
        fs15: "15px",
      },
      spacing: {
        "84px": "84px",
      },
      lineHeight: {
        44: "44px",
      },
      backgroundImage: {
        "gift-bg": "url('/public/images/gift-tooltip.png')",
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        'custom-light-blue': '#add8e6',
        'custom-beige': '#dfd8b3e6',
        'custom-gray': '#e8e8e8',
        'custom-light-beige': '#f5f5dc',
        'custom-dark-gray': '#323232',
        'custom-border': '#d9d7bf',
        'card-title': '#2e54a7',
        'card-description': '#1f1f1f',
      },
      boxShadow: {
        'custom-bottom-right': '4px 4px 0 0 black',
      },
    },
  },
  plugins: [],
};

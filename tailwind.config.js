// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0076B4',
        'custom-blue1':'#EFF9FF',
        'custom-gray1':'#F7F9FC',
      },
    },
  },
  plugins: [require('daisyui'),],
};

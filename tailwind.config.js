/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'record_tracker_gradient_blue': '#1D0D63',
        'record_tracker_gradient_red': '#6D111C',
        'record_tracker_gradient_orange': '#6A4C01',
        'record_tracker_container_color': '#1A181D',
        'record_tracker_button_color': '#3B21BF'
      }
    },
  },
  // plugins: [
  //   require("flowbite/plugin")
  // ],
}

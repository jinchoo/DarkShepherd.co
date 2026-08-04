/** @type {import('prettier').Config} */
const config = {
  printWidth: 100,
  // Sort Tailwind classes; point the plugin at the v4 CSS entrypoint.
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/app/globals.css",
};

export default config;

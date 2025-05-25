npm install -D tailwindcss@3
npx tailwindcss init


tailwind.config.js

  /** @type {import('tailwindcss').Config} */
 export default {
>   content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }



  src/input.css

@tailwind base;
@tailwind components;
@tailwind utilities;


Terminal
//this command should run every time
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch


update tailwindconfig.js
  /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./html/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'sm': '450px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                firstColor: '#bc1052',
                firstColorAlt: '#f377a7',
                textColorLightTheme: '#605254',
                textColorDarkTheme: '#c4babb',
                titleColorLightTheme: '#2c2122',
                titleColorDarkTheme: '#c4babb',
                bodyColorLightTheme: '#fffafa',
                bodyColorDarkTheme: '#1e0b0d',
                containerColorLightTheme: '#fff',
                containerColorDarkTheme: '#281517'
            },
            boxShadow: {
                lightTheme: '0 2px 4px #03030319',
                darkTheme: '0 4px 4px #0A0A0A4C'
            }
        },
    },
    variants: {
        extend: {
            boxShadow: ['responsive', 'hover', 'focus', 'active'],
        }
    },
    plugins: [],
};

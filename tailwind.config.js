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
                firstColor: '#fff',
                firstColorAlt: '#dedede',
                textColorLightTheme: '#000',
                textColorDarkTheme: '#fff',
                bodyColorLightTheme: '#fff',
                bodyColorDarkTheme: '#111',
                containerColorLightTheme: '#fff',
                containerColorDarkTheme: '#181818'
            },
            boxShadow: {
                lightTheme: '0 2px 4px rgba(0, 0, 0, 0.1)',
                darkTheme: '0 4px 8px rgba(0, 0, 0, 0.4)'
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

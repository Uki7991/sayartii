const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',

            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            blueGray: colors.blueGray,
            warmGray: colors.warmGray,
            red: colors.red,
            yellow: colors.amber,
            green: colors.emerald,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,
            rose: colors.rose,
            orange: colors.orange,
        },
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                roboto: ['Roboto',],
            },
            minHeight: {
                24: '6rem',
            },
            minWidth: {
                '1\/5': '20%',
            },
            maxWidth: {
                '1\/2': '50%',
                '3\/5': '60%',
            },
            boxShadow: {
                'vertical-up': '0px -2px 5px 0px rgba(51,51,51,.32)',
            },
            spacing: {
                '13': '3.125rem',
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
            borderWidth: ['hover', 'focus'],
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};

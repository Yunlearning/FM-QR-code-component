/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            screens: {
                mobile: '375px',
                desktop: '1440px',
            },
            fontFamily: {
                outFit: ['Outfit', 'sans-serif'],
            },
            colors: {
                'custom-slate-300': '#D5E1EF',
                'custom-slate-500': '#68778D',
                'custom-slate-900': '#1F314F',
            },
            fontSize: {
                'custom-2xl': [
                    '22px',
                    {
                        lineHeight: '120%',
                        letterSpacing: '0px',
                    },
                ],
                'custom-sm': [
                    '15px',
                    {
                        lineHeight: '140%',
                        letterSpacing: '0.2px',
                    },
                ],
            },
        },
    },
    plugins: [],
};

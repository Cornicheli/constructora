/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                navy: '#0E2138',
                'navy-2': '#142a47',
                'navy-line': '#1c3556',
                ink: '#0b1726',
                paper: '#fafaf7',
                'paper-2': '#f3f1ea',
                line: '#e6e2d8',
                mute: '#576070',
                'mute-dark': '#9fb0c8',
                gold: '#c9a876',
                'gold-soft': '#d9bd91',
            },
            fontFamily: {
                sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
                serif: ['Instrument Serif', 'Georgia', 'serif'],
            },
        },
    },
    plugins: [],
};

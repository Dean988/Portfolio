/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                surface: {
                    950: '#050816',
                    900: '#0a1024',
                    850: '#121933',
                    800: '#17213f'
                },
                accent: {
                    cyan: '#7dd3fc',
                    blue: '#4f8cff',
                    gold: '#f6c453',
                    rose: '#ff7a90',
                    mint: '#85f0cf'
                }
            },
            fontFamily: {
                sans: ['"Space Grotesk"', 'sans-serif'],
                display: ['"Cormorant Garamond"', 'serif'],
                mono: ['"IBM Plex Mono"', 'monospace'],
            },
            animation: {
                'float': 'float 7s ease-in-out infinite',
                'drift': 'drift 18s linear infinite',
                'pulse-soft': 'pulseSoft 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                drift: {
                    '0%': { transform: 'translate3d(-4%, -2%, 0) scale(1)' },
                    '50%': { transform: 'translate3d(4%, 3%, 0) scale(1.05)' },
                    '100%': { transform: 'translate3d(-4%, -2%, 0) scale(1)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '0.35' },
                    '50%': { opacity: '0.75' },
                },
            }
        },
    },
    plugins: [],
}

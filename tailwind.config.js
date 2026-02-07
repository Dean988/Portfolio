/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: {
                    blue: '#1a56db', // Professional Royal Blue
                    cyan: '#06b6d4', // Cyan for accents
                    gold: '#f59e0b', // Renaissance Gold
                    green: '#10b981', // Subtle Emerald
                },
                dark: {
                    bg: '#020617', // Slate 950
                    panel: 'rgba(15, 23, 42, 0.8)', // Slate 900 transparent
                }
            },
            fontFamily: {
                rajdhani: ['Rajdhani', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
            },
            animation: {
                'glitch': 'glitch 1s linear infinite',
                'scanline': 'scanline 8s linear infinite',
            },
            keyframes: {
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                },
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                }
            }
        },
    },
    plugins: [],
}

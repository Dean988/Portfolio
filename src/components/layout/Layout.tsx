import React from 'react';
import { Header } from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-dark-bg text-gray-100 font-sans selection:bg-neon-gold selection:text-white overflow-hidden relative">

            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,20,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none"></div>

                {/* CRT Flicker */}
                <div className="absolute inset-0 bg-white/5 opacity-[0.02] animate-pulse pointer-events-none"></div>

                {/* Moving Scanline Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-white/10 opacity-30 animate-scanline pointer-events-none"></div>

                {/* Radial Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80 pointer-events-none"></div>
            </div>

            <Header />

            <main className="relative z-10 pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto min-h-[calc(100vh-100px)]">
                {children}
            </main>

            <footer className="relative z-10 border-t border-gray-800 bg-dark-bg py-6 text-center text-xs text-gray-600 font-mono">
                <p>SYSTEM_STATUS: ONLINE | © {new Date().getFullYear()} DINO_DI_EMIDIO</p>
            </footer>
        </div>
    );
};

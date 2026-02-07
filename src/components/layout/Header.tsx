import React from 'react';
import { ProgressBar } from '../ui/ProgressBar';
import portfolioData from '../../data/portfolio.json';

export const Header: React.FC = () => {
    const { player } = portfolioData;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-neon-blue/30 h-auto py-2 px-4 shadow-[0_0_20px_rgba(0,242,255,0.1)]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Player ID */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="h-10 w-10 border-2 border-neon-blue rounded overflow-hidden relative group">
                        {/* Using legacy image path - ensure images are moved to public folder! */}
                        <img src={player.avatar} alt="Avatar" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-neon-blue/20 mix-blend-overlay"></div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-neon-blue font-bold tracking-widest">PLAYER:</span>
                            <span className="text-sm font-rajdhani font-bold text-white tracking-wider">{player.name}</span>
                        </div>
                        <div className="text-[10px] text-gray-400 font-mono">{player.class}</div>
                    </div>
                </div>

                {/* Status Bars */}
                <div className="flex items-center gap-4 w-full md:w-1/3">
                    <ProgressBar
                        label="HP"
                        value={player.stats.hp}
                        colorClass="bg-neon-green shadow-[0_0_10px_rgba(10,255,0,0.5)]"
                    />
                    <ProgressBar
                        label="MP"
                        value={player.stats.mp}
                        colorClass="bg-neon-blue shadow-[0_0_10px_rgba(0,242,255,0.5)]"
                    />
                    <div className="flex flex-col items-center min-w-[30px]">
                        <span className="text-[10px] font-bold text-neon-gold">LVL</span>
                        <span className="text-xl font-rajdhani font-black text-white drop-shadow-[0_0_5px_rgba(245,158,11,0.8)]">
                            {player.level}
                        </span>
                    </div>
                </div>

                {/* Education Ticker (Desktop only) */}
                <div className="hidden md:flex flex-col items-end text-xs text-gray-500 font-mono max-w-xs text-right">
                    {portfolioData.education.slice(0, 1).map((edu, idx) => (
                        <div key={idx} className="truncate w-full">
                            {`> ${edu.degree}`}
                        </div>
                    ))}
                    <div className="truncate w-full text-neon-gold/70">
                        {`> ${portfolioData.lore.objective}`}
                    </div>
                </div>

            </div>

            {/* Decorative bottom line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
        </header>
    );
};

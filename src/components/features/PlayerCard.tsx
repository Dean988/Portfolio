import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import portfolioData from '../../data/portfolio.json';

export const PlayerCard: React.FC = () => {
    const { player, lore } = portfolioData;
    const [glitch, setGlitch] = useState(false);

    // Random glitch effect trigger
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.95) {
                setGlitch(true);
                setTimeout(() => setGlitch(false), 200);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-full"
        >
            <div className="relative p-6 bg-dark-panel border border-neon-blue/30 rounded-lg backdrop-blur-md overflow-hidden group hover:border-neon-blue/60 transition-colors">

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-blue"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-blue"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-blue"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-blue"></div>

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-neon-blue font-rajdhani font-bold text-lg tracking-widest">// AVATAR</h3>
                    <div className="h-1 w-20 bg-neon-blue/20 overflow-hidden">
                        <div className="h-full w-10 bg-neon-blue animate-pulse"></div>
                    </div>
                </div>

                {/* Avatar Image */}
                <div className="relative aspect-square mb-6 overflow-hidden rounded-sm border-2 border-gray-800 group-hover:border-neon-pink/50 transition-colors">
                    <img
                        src={player.avatar}
                        alt={player.name}
                        className={`w-full h-full object-cover transition-all duration-100 ${glitch ? 'scale-110 hue-rotate-90 sepia' : 'scale-100 grayscale hover:grayscale-0'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                    {/* Scan effect over image */}
                    <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none"></div>
                </div>

                {/* Bio / Lore */}
                <div className="space-y-3 mb-8 font-mono text-xs text-gray-400">
                    {lore.bio.map((line, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 + (i * 0.2) }}
                            className="border-l-2 border-neon-gold/30 pl-3 leading-relaxed"
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>

                {/* Interactive Social Links */}
                <div className="grid grid-cols-2 gap-3">
                    <a href={player.socials.linkedin} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2 px-4 bg-neon-blue/10 border border-neon-blue/40 rounded hover:bg-neon-blue/20 hover:border-neon-blue text-neon-blue transition-all">
                        <Linkedin size={16} />
                        <span className="text-xs font-bold">LINKEDIN</span>
                    </a>
                    <a href={player.socials.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-800/50 border border-gray-600 rounded hover:bg-gray-700 hover:border-gray-400 text-gray-300 transition-all">
                        <Github size={16} />
                        <span className="text-xs font-bold">GITHUB</span>
                    </a>
                    <a href={`mailto:${player.socials.email}`}
                        className="col-span-2 flex items-center justify-center gap-2 py-2 px-4 bg-neon-gold/10 border border-neon-gold/40 rounded hover:bg-neon-gold/20 hover:border-neon-gold text-neon-gold transition-all">
                        <Mail size={16} />
                        <span className="text-xs font-bold">TRANSMISSION</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';

export const Philosophy: React.FC = () => {
    const { lore } = portfolioData;

    return (
        <section className="py-16 relative overflow-hidden">
            {/* Background Element - Circuit Board Overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                    <div className="w-full md:w-1/2">
                        <h3 className="text-4xl md:text-5xl font-rajdhani font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-500 mb-4 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                            {lore.philosophy?.title}
                        </h3>
                        <div className="h-1 w-24 bg-amber-400/50 rounded-full"></div>
                    </div>
                    <div className="w-full md:w-1/2 text-right hidden md:block">
                        <div className="text-xs text-amber-200/50 font-mono tracking-[0.3em]">EST. 2025 // HUMANIST_TECH</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {lore.philosophy?.content.map((paragraph, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="bg-black/40 border-l-2 border-amber-500/30 p-6 backdrop-blur-sm hover:border-amber-500 transition-colors group"
                        >
                            <p className="text-gray-300 font-serif text-lg md:text-xl leading-relaxed italic group-hover:text-amber-100/90 transition-colors">
                                "{paragraph}"
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative Footer */}
                <div className="mt-16 flex justify-center opacity-30">
                    <div className="text-4xl">⚖️</div>
                </div>
            </div>
        </section>
    );
};

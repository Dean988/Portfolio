import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';

const SkillNode = ({ name, level, delay }: { name: string, level: number, delay: number }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay, type: "spring", stiffness: 200 }}
        className="relative flex flex-col items-center group"
    >
        {/* Increased size and added wrapping for text */}
        <div className="w-24 h-24 md:w-28 md:h-28 bg-dark-bg border-2 border-neon-cyan rounded-full flex items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all cursor-crosshair z-10">
            <span className="text-[11px] md:text-xs font-bold font-rajdhani text-center px-1 z-10 leading-tight text-white mb-1">
                {name}
            </span>
            <div className={`absolute bottom-0 left-0 right-0 bg-neon-cyan/20 transition-all duration-1000`} style={{ height: `${level}%` }}></div>
        </div>
        <div className="h-4 w-[2px] bg-neon-cyan/30 my-2"></div>
        <div className="text-[10px] text-gray-400 font-mono">{level}%</div>
    </motion.div>
);

export const SkillTree: React.FC = () => {
    return (
        <section className="py-8">
            <h3 className="text-neon-gold font-rajdhani font-bold text-2xl mb-8 flex items-center gap-3">
                <span className="text-neon-blue text-sm">03.</span> COMPETENCY_MATRIX
                <div className="h-px bg-gray-800 flex-grow ml-4"></div>
            </h3>

            <div className="bg-dark-panel border border-neon-gold/20 rounded-xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>

                {/* Connecting Lines (Background) */}
                <div className="absolute top-1/2 left-10 right-10 h-[2px] bg-gray-800 -translate-y-1/2 hidden md:block"></div>

                <div className="flex flex-wrap justify-center md:justify-around gap-8 relative z-10">
                    {portfolioData.skills.primary.map((skill, i) => (
                        <SkillNode key={i} name={skill.name} level={skill.level} delay={i * 0.2} />
                    ))}
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {portfolioData.skills.inventory.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            className="bg-black/40 border border-gray-700 p-3 rounded text-center hover:border-neon-gold transition-colors"
                        >
                            <div className="text-xs text-neon-gold font-bold mb-1">{item.name}</div>
                            <div className="text-[10px] text-gray-400 font-mono">{item.desc}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

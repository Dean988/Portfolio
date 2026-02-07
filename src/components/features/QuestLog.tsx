import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, MapPin, Briefcase } from 'lucide-react';
import portfolioData from '../../data/portfolio.json';

export const QuestLog: React.FC = () => {
    const [expanded, setExpanded] = useState<number | null>(1); // Default expand current quest

    return (
        <section className="py-8">
            <h3 className="text-neon-green font-rajdhani font-bold text-2xl mb-6 flex items-center gap-3">
                <span className="text-neon-blue text-sm">02.</span> PROFESSIONAL_JOURNEY
                <div className="h-px bg-gray-800 flex-grow ml-4"></div>
            </h3>

            <div className="space-y-4">
                {portfolioData.experience.map((quest) => (
                    <motion.div
                        key={quest.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`border ${expanded === quest.id ? 'border-neon-green/50 bg-neon-green/5' : 'border-gray-800 bg-gray-900/40'} rounded-lg overflow-hidden transition-all duration-300`}
                    >
                        {/* Header / Clickable Area */}
                        <div
                            onClick={() => setExpanded(expanded === quest.id ? null : quest.id)}
                            className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/5"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded ${quest.status === 'CURRENT_QUEST' ? 'bg-neon-green/20 text-neon-green' :
                                    quest.status === 'MISSION_COMPLETED' ? 'bg-neon-blue/20 text-neon-blue' :
                                        'bg-gray-700/50 text-gray-400'
                                    }`}>
                                    <Briefcase size={18} />
                                </div>
                                <div>
                                    <h4 className="font-bold font-rajdhani text-white text-lg">{quest.title}</h4>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                                        <span className={quest.status === 'CURRENT_QUEST' ? 'text-neon-green animate-pulse' : ''}>
                                            [{quest.status}]
                                        </span>
                                        <span>@ {quest.company}</span>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                animate={{ rotate: expanded === quest.id ? 90 : 0 }}
                                className="text-gray-500"
                            >
                                <ChevronRight />
                            </motion.div>
                        </div>

                        {/* Expanded Content */}
                        <AnimatePresence>
                            {expanded === quest.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-4 pt-0 border-t border-dashed border-gray-700 mt-2">
                                        <div className="flex items-center gap-2 text-xs text-gray-400 font-mono mb-4 mt-4">
                                            <MapPin size={12} />
                                            <span>{quest.period}</span>
                                        </div>
                                        <ul className="space-y-2">
                                            {quest.objectives.map((obj, i) => (
                                                <li key={i} className="text-sm text-gray-300 font-mono pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-neon-pink">
                                                    {obj.replace(/^>\s*/, '')}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

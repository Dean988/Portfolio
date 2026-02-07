import React from 'react';
import { motion } from 'framer-motion';

export const EducationHero: React.FC = () => {
    const educationStack = [
        { degree: "MSc ARTIFICIAL INTELLIGENCE", field: "AI & Management", school: "Politecnico di Torino" },
        { degree: "MA SOCIAL DATA SCIENCE", field: "Data Science", school: "Univ. G. D'Annunzio" },
        { degree: "BA SOCIOLOGIA E CRIMINOLOGIA", field: "Social Sciences", school: "Univ. G. D'Annunzio" },
    ];

    return (
        <section className="py-8 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {educationStack.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (index * 0.2) }}
                        className="bg-dark-panel/80 border-l-4 border-neon-gold p-4 backdrop-blur-sm shadow-lg hover:bg-dark-panel transition-colors group"
                    >
                        <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1 group-hover:text-neon-blue transition-colors">Academic Foundation</div>
                        <h4 className="text-neon-gold font-rajdhani font-black text-lg leading-none mb-1">
                            {edu.degree}
                        </h4>
                        <div className="text-xs text-gray-300 font-serif italic">
                            {edu.school}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

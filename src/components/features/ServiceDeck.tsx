import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';

const TiltCard = ({ service, index }: { service: any, index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const xPct = (event.clientX - left) / width - 0.5;
        const yPct = (event.clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-64 w-full perspective-1000 cursor-pointer mb-6"
        >
            <div
                style={{ transform: "translateZ(0px)" }}
                className="absolute inset-0 bg-dark-panel border border-gray-700/50 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm hover:border-neon-gold/50 transition-colors group"
            >
                <div style={{ transform: "translateZ(50px)" }} className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                </div>

                <h4 style={{ transform: "translateZ(30px)" }} className="text-neon-blue font-rajdhani font-bold text-xl mb-3 group-hover:text-white transition-colors">
                    {service.title}
                </h4>

                <p style={{ transform: "translateZ(20px)" }} className="text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                </p>

                <div className="absolute inset-0 border border-white/5 rounded-xl pointer-events-none group-hover:border-white/10"></div>
            </div>
        </motion.div>
    );
};

export const ServiceDeck: React.FC = () => {
    return (
        <section className="py-8">
            <h3 className="text-neon-gold font-rajdhani font-bold text-2xl mb-6 flex items-center gap-3">
                <span className="text-neon-blue text-sm">01.</span> SPECIAL_ABILITIES
                <div className="h-px bg-gray-800 flex-grow ml-4"></div>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.services.map((service, index) => (
                    <TiltCard key={index} service={service} index={index} />
                ))}
            </div>
        </section>
    );
};

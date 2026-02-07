import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ProgressBarProps {
    label: string;
    value: number; // 0-100
    max?: number;
    colorClass: string; // Tailwind color class (e.g., 'bg-neon-pink')
    className?: string;
    showValue?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    label,
    value,
    max = 100,
    colorClass,
    className,
    showValue = false
}) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div className={twMerge("flex flex-col gap-1 w-full", className)}>
            <div className="flex justify-between items-end text-xs font-rajdhani font-bold tracking-wider text-gray-400">
                <span>{label}</span>
                {showValue && <span>{value}/{max}</span>}
            </div>
            <div className="h-2 w-full bg-gray-900/50 border border-gray-700/50 relative overflow-hidden clip-path-slant">
                {/* Background grid pattern for 'tech' feel */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

                <motion.div
                    className={clsx("h-full relative", colorClass)}
                    initial={{ width: "0%" }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    {/* Animated shine effect */}
                    <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-white/50 shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </motion.div>
            </div>
        </div>
    );
};

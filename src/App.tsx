import { Layout } from './components/layout/Layout';
import { PlayerCard } from './components/features/PlayerCard';
import { ServiceDeck } from './components/features/ServiceDeck';
import { QuestLog } from './components/features/QuestLog';
import { SkillTree } from './components/features/SkillTree';
import { Philosophy } from './components/features/Philosophy';
import { EducationHero } from './components/features/EducationHero';

function App() {
    return (
        <Layout>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">

                {/* Sidebar Area (Left 3 cols on desktop) */}
                <aside className="lg:col-span-3 lg:sticky lg:top-24 self-start space-y-6">
                    <PlayerCard />
                </aside>

                {/* Main Content Area (Right 9 cols) */}
                <div className="lg:col-span-9 space-y-12 pb-20">

                    {/* NEW: ACADEMIC FOUNDATION */}
                    <EducationHero />

                    {/* HERO SECTION: "Cyber-Renaissance" */}
                    <div className="relative min-h-[500px] rounded-lg overflow-hidden group border border-neon-gold/20 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            {/* Note: In a real app we'd import this properly. For now assuming public folder usage */}
                            <img
                                src="/cyber_renaissance_hero_1770466605902.png"
                                alt="Cyber Renaissance"
                                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-transparent"></div>
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 p-8 md:p-16 flex flex-col justify-end h-full min-h-[500px]">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-neon-gold/30 rounded-full bg-neon-gold/10 backdrop-blur-md">
                                    <span className="w-2 h-2 rounded-full bg-neon-gold animate-pulse"></span>
                                    <span className="text-neon-gold text-xs font-bold tracking-widest uppercase">System: Enlightened</span>
                                </div>

                                <h1 className="text-3xl md:text-6xl font-black font-rajdhani text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-gold mb-4 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] break-words">
                                    CYBER_SOCIOLOGIST
                                </h1>

                                <p className="text-gray-200 font-serif italic text-lg md:text-xl border-l-4 border-neon-gold pl-6 py-2 bg-black/30 backdrop-blur-sm max-w-2xl">
                                    "Bridging the organic nuance of sociology with the deterministic power of machine learning."
                                </p>
                            </div>
                        </div>
                    </div>

                    <Philosophy />

                    <ServiceDeck />

                    <QuestLog />

                    <SkillTree />

                    {/* Credentials */}
                    <div className="border border-gray-800 bg-black/40 rounded-xl p-8 flex flex-wrap justify-center gap-6 opacity-70 hover:opacity-100 transition-opacity">
                        {['Harvard Data Science', 'Hugging Face Architect', 'Azure Certified', 'Anthropic Engineering'].map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-wider">
                                <span className="text-neon-blue">✔</span> {badge}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Layout>
    );
}

export default App;

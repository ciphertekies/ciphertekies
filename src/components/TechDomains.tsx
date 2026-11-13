import React, { useState } from 'react';
import { 
  Atom, 
  Layers, 
  BrainCircuit, 
  Cloud, 
  ShieldCheck, 
  BarChart3, 
  Glasses, 
  GitBranch, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { TECH_DOMAINS } from '../data/communityData';

// Dynamic icon mapper for domain cards
const IconMap: Record<string, React.FC<{ className?: string }>> = {
  Atom,
  Layers,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  BarChart3,
  Glasses,
  GitBranch,
};

export const TechDomains: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Full Stack', 'AI & ML', 'DevOps', 'Security', 'Data', 'Immersive', 'Open Source'];

  const filteredDomains = selectedCategory === 'All'
    ? TECH_DOMAINS
    : TECH_DOMAINS.filter(d => d.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="domains" className="py-24 relative overflow-hidden bg-[#05070e]">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Specialized Tracks
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technology <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Domains</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From modern React engineering and full-stack development to autonomous AI agents, spatial computing, and cybersecurity.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Domain Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDomains.map((domain, index) => {
            const IconComponent = IconMap[domain.iconName] || Layers;
            return (
              <motion.div
                key={domain.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Icon & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${domain.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/10">
                      {domain.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {domain.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {domain.description}
                  </p>
                </div>

                {/* Skills Chips */}
                <div>
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {domain.keySkills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#080c18] text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechDomains;


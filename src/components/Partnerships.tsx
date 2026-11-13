import React from 'react';
import { ExternalLink, Handshake, Sparkles, CheckCircle2, Globe2, Glasses, GitBranch, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PARTNERS_DATA } from '../data/communityData';

export const Partnerships: React.FC = () => {
  return (
    <section id="partners" className="py-24 relative overflow-hidden bg-[#060812]">
      {/* Glow background effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-600/10 via-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Handshake className="w-3.5 h-3.5" />
            Official Alliances
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Community <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Partnerships</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Collaborating with premier organizations in open-source software and spatial computing to deliver real-world learning and hackathon opportunities to our members.
          </p>
        </div>

        {/* Partnership Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {PARTNERS_DATA.map((partner, index) => {
            const isOsw = partner.id === 'open-source-weekends';
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Background decorative corner accent */}
                <div className={`absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl ${partner.accentColor} opacity-10 group-hover:opacity-20 blur-2xl transition-opacity`} />

                <div>
                  {/* Top Badge and Partner Category */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-white/5 border border-white/10 text-cyan-300">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      {partner.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                      {isOsw ? 'GLOBAL_FOSS' : 'SPATIAL_COMPUTING'}
                    </span>
                  </div>

                  {/* Header & Logo Representation */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${partner.accentColor} p-0.5 shadow-lg shadow-black/50 shrink-0`}>
                      <div className="w-full h-full bg-[#0a0d18] rounded-[14px] flex items-center justify-center text-white">
                        {isOsw ? (
                          <GitBranch className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" />
                        ) : (
                          <Glasses className="w-7 h-7 text-purple-400 group-hover:scale-110 transition-transform" />
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-sm font-medium text-cyan-400/90 font-mono">
                        {partner.role}
                      </p>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-slate-200 font-medium text-base mb-4 italic">
                    "{partner.tagline}"
                  </p>

                  {/* Detailed Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {partner.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {partner.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-lg bg-[#0a0e1c] text-slate-300 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Partner Link */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Verified Community Collaboration</span>
                  </div>

                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-white px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 transition-all group/btn"
                  >
                    <span>Visit Partner</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Partnerships;


import React from 'react';
import { Instagram, Linkedin, ExternalLink, Sparkles, MessageSquare, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../data/communityData';

export const SocialMedia: React.FC = () => {
  return (
    <section id="social" className="py-24 relative overflow-hidden bg-[#070914]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Official Channels
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect With <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Ciphertekies</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Follow our verified official handles for hackathon announcements, community spotlights, workshop highlights, and technical discussions.
          </p>
        </div>

        {/* Social Cards: Instagram, LinkedIn & Linktree */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-14">
          
          {/* Instagram Official Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl group-hover:bg-pink-500/20 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-0.5 shadow-lg shadow-pink-500/20">
                  <div className="w-full h-full bg-[#0a0d18] rounded-[14px] flex items-center justify-center text-white">
                    <Instagram className="w-7 h-7 text-pink-400 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20">
                  Official Handle
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {SOCIAL_LINKS.instagram.name}
              </h3>

              <p className="text-sm font-mono text-cyan-400 mb-4">
                {SOCIAL_LINKS.instagram.handle}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {SOCIAL_LINKS.instagram.description}
              </p>

              {/* Instagram Feed / Visual Highlights */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="h-20 rounded-xl bg-gradient-to-tr from-pink-900/30 to-purple-900/30 border border-white/5 flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[10px] font-mono text-pink-300">Hackathons</span>
                  <span className="text-[9px] text-slate-400">Recaps</span>
                </div>
                <div className="h-20 rounded-xl bg-gradient-to-tr from-purple-900/30 to-cyan-900/30 border border-white/5 flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[10px] font-mono text-cyan-300">Workshops</span>
                  <span className="text-[9px] text-slate-400">Sneak Peeks</span>
                </div>
                <div className="h-20 rounded-xl bg-gradient-to-tr from-cyan-900/30 to-pink-900/30 border border-white/5 flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[10px] font-mono text-purple-300">Showcase</span>
                  <span className="text-[9px] text-slate-400">Student Tech</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={SOCIAL_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white shadow-lg shadow-pink-500/25 transition-all"
              >
                <span>Follow on Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* LinkedIn Official Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-0.5 shadow-lg shadow-blue-500/20">
                  <div className="w-full h-full bg-[#0a0d18] rounded-[14px] flex items-center justify-center text-white">
                    <Linkedin className="w-7 h-7 text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  Company Page
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {SOCIAL_LINKS.linkedin.name}
              </h3>

              <p className="text-sm font-mono text-cyan-400 mb-4">
                {SOCIAL_LINKS.linkedin.handle}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {SOCIAL_LINKS.linkedin.description}
              </p>

              {/* LinkedIn Update Highlights */}
              <div className="p-4 rounded-xl bg-[#080b14] border border-white/5 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span className="text-cyan-300">Partner Announcements</span>
                  <span className="text-slate-500">Official</span>
                </div>
                <p className="text-xs text-slate-400">
                  Stay updated with our Open Source Weekends & XR CreatorCon collaborative programs and hackathon opportunities.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/25 transition-all"
              >
                <span>Follow on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Official Linktree Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-lg shadow-emerald-500/20">
                  <div className="w-full h-full bg-[#0a0d18] rounded-[14px] flex items-center justify-center text-white">
                    <ExternalLink className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Unified Bio Hub
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {SOCIAL_LINKS.linktree.name}
              </h3>

              <p className="text-sm font-mono text-cyan-400 mb-4">
                {SOCIAL_LINKS.linktree.handle}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {SOCIAL_LINKS.linktree.description}
              </p>

              <div className="p-4 rounded-xl bg-[#080b14] border border-white/5 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span className="text-emerald-400">All Links in One Place</span>
                  <span className="text-slate-500">Fast Access</span>
                </div>
                <p className="text-xs text-slate-400">
                  Direct access to upcoming hackathons, speaker registrations, partner links, and community circles.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={SOCIAL_LINKS.linktree.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25 transition-all"
              >
                <span>Open Linktree Hub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Notice of verified channels */}
        <div className="text-center text-xs font-mono text-slate-500 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Ciphertekies exclusively communicates via official Instagram and LinkedIn channels.</span>
        </div>

      </div>
    </section>
  );
};

export default SocialMedia;


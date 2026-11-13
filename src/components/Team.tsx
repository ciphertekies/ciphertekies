import React from 'react';
import { Linkedin, Users, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMMUNITY_TEAM } from '../data/communityData';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-[#05070e]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            Core Leads & Mentors
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Team</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The student leaders, open-source contributors, and mentors driving Ciphertekies initiatives forward.
          </p>
        </div>

        {/* Team Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMMUNITY_TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-7 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Avatar Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
                    <div className="w-full h-full bg-[#0a0d18] rounded-[14px] flex items-center justify-center font-bold text-lg font-mono text-cyan-300">
                      {member.avatarText}
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                    Community Core
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {member.name}
                </h3>

                <p className="text-xs font-mono font-medium text-purple-400 mb-4">
                  {member.role}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Technical Interests */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.interests.map((interest) => (
                    <span
                      key={interest}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0a0f1f] text-slate-300 border border-white/5"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* LinkedIn Professional Profile Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <span className="text-[10px] font-mono text-slate-500">
                  Ciphertekies Team
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;

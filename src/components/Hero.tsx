import React from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, Users2, Rocket, Globe2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { ParticleNetwork } from './ParticleNetwork';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    } else {
      window.location.hash = `#${id}`;
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic Digital Particle Network */}
      <ParticleNetwork />

      {/* Futuristic Radial Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-purple-600/20 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Community Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono font-semibold tracking-wider text-cyan-300 uppercase">
                Student-Led Innovation Platform
              </span>
            </motion.div>

            {/* Headings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                  Ciphertekies
                </span>
              </h1>
              
              <div className="text-xl sm:text-2xl font-semibold text-cyan-300 font-mono tracking-tight flex items-center justify-center lg:justify-start gap-2">
                <span>Decode Ideas.</span>
                <span className="text-purple-400">Build Innovation.</span>
                <span className="text-slate-100">Shape the Future.</span>
              </div>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                A student-led technology community connecting developers, creators, learners and innovators through technology exploration, collaboration, practical learning and open-source development.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={() => handleScrollTo('domains')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Community</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('events')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm border border-cyan-400/30 bg-[#0f1424]/80 hover:bg-[#161d33] text-cyan-300 hover:text-white hover:border-cyan-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Rocket className="w-4 h-4 text-purple-400" />
                <span>Discover Events</span>
              </button>

              <button
                onClick={() => handleScrollTo('social')}
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Globe2 className="w-4 h-4 text-cyan-400" />
                <span>Connect With Us</span>
              </button>
            </motion.div>

            {/* Key Community Highlights Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg mx-auto lg:mx-0"
            >
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl font-bold font-mono text-cyan-400">100%</div>
                <div className="text-xs text-slate-400">Student-Led</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl font-bold font-mono text-purple-400">Open</div>
                <div className="text-xs text-slate-400">Collaborative</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl font-bold font-mono text-emerald-400">2+</div>
                <div className="text-xs text-slate-400">Global Partners</div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Futuristic Console / Graphic */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl glass-panel p-6 border border-white/10 shadow-2xl shadow-purple-950/40 overflow-hidden"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">ciphertekies: ~/core-hub</span>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  LIVE_NODE
                </span>
              </div>

              {/* Code/Status Preview */}
              <div className="space-y-4 font-mono text-xs">
                <div className="text-slate-400 flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">$</span>
                  <span>decode --community "Ciphertekies" --open</span>
                </div>

                <div className="p-4 rounded-xl bg-[#080b14] border border-white/5 space-y-2">
                  <div className="flex items-center gap-3 pb-2 border-b border-white/5">
                    <img
                      src="/ciphertekies-logo.jpg"
                      alt="Ciphertekies Official Logo"
                      className="w-8 h-8 rounded-lg object-contain bg-[#0e1428] p-0.5 border border-cyan-500/30"
                    />
                    <div>
                      <div className="text-white font-bold text-xs">Ciphertekies Identity</div>
                      <a
                        href="https://linktr.ee/ciphertekies"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-cyan-400 hover:underline flex items-center gap-1 font-mono"
                      >
                        linktr.ee/ciphertekies →
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-cyan-300 flex items-center gap-1.5">
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      Domain Focus
                    </span>
                    <span className="text-purple-400 text-[11px]">React 19 • AI • XR</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-cyan-300 flex items-center gap-1.5">
                      <Users2 className="w-4 h-4 text-cyan-400" />
                      Ecosystem
                    </span>
                    <span className="text-emerald-400 text-[11px]">Open Source Weekends • XR CreatorCon</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-cyan-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      Mission
                    </span>
                    <span className="text-slate-300 text-[11px]">Shape Tomorrow's Innovators</span>
                  </div>
                </div>

                {/* Animated Activity Pulse */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/20 space-y-2">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-purple-300 font-semibold">Active Innovation Pipeline</span>
                    <span className="text-cyan-400 animate-pulse">Running</span>
                  </div>
                  <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full w-4/5 animate-pulse" />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>Collaborative Hackathons</span>
                    <span>Knowledge Sprints</span>
                  </div>
                </div>

                <div className="text-slate-400 pt-2 flex items-center gap-2">
                  <span className="text-cyan-400">✔</span>
                  <span>Ready for collaborative engineering.</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { Sparkles, ArrowRight, GitBranch, MessageSquare, Send, CheckCircle2, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../data/communityData';

export const JoinCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Developer / Learner');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const confettiModule = await import('canvas-confetti');
      const confetti = confettiModule.default || confettiModule;
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00f5ff', '#9d4edd', '#3b82f6', '#ec4899']
      });
    } catch (err) {
      // Graceful fallback if dynamic canvas confetti is unavailable
    }

    setSubmitted(true);
  };

  return (
    <section id="join" className="py-24 relative overflow-hidden bg-[#05070e]">
      {/* Background Neon Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-600/15 via-cyan-500/15 to-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl glass-panel p-8 sm:p-14 border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 relative overflow-hidden text-center space-y-8"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Empowering Next-Gen Creators
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Your Next Big Idea{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Starts Here.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you want to build cutting-edge web applications, contribute to open source, explore XR and AI agents, or connect with passionate peers — Ciphertekies is your home.
            </p>
          </div>

          {/* 3 Main Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Join Our Community</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://github.com/ciphertekies/ciphertekies"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm border border-purple-400/40 bg-[#0f1424]/90 hover:bg-[#182038] text-purple-300 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <GitBranch className="w-4 h-4 text-cyan-400" />
              <span>Become a Contributor</span>
            </a>

            <a
              href={SOCIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-pink-400" />
              <span>Connect With Us</span>
            </a>
          </div>

          {/* Direct Community Interest Form */}
          <div className="pt-8 border-t border-white/10 max-w-xl mx-auto">
            {submitted ? (
              <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-cyan-400 mx-auto" />
                <h4 className="text-white font-bold text-lg">Welcome to the Network!</h4>
                <p className="text-xs text-slate-300">
                  Thanks for expressing interest. Connect with us on LinkedIn or Instagram to join our active cohorts.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Quick Community Sign-up / Interest
                </span>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your student or personal email..."
                    className="flex-1 px-4 py-3 bg-[#0a0e1c] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl font-semibold text-xs bg-cyan-500 hover:bg-cyan-400 text-black transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Get Involved</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 font-mono">
                  100% Free & Open Access • Zero Spam • Student Run
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA;


import React from 'react';
import { Target, Compass, HeartHandshake, Sparkles, Terminal, Code2, Users2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To empower student developers, creators, and inquisitive learners through experiential learning, real-world open-source contributions, and technical mentorship.',
      accent: 'from-cyan-500 to-blue-500',
      badge: 'Purpose-Driven'
    },
    {
      icon: Compass,
      title: 'Our Vision',
      description:
        'To be an inclusive launchpad for world-class engineers and innovators who decode complex technological ideas and build solutions that shape the future.',
      accent: 'from-purple-500 to-pink-500',
      badge: 'Forward-Looking'
    },
    {
      icon: HeartHandshake,
      title: 'Our Values',
      description:
        'Open collaboration, relentless curiosity, technical integrity, mutual respect, and giving back to the global developer and open-source ecosystem.',
      accent: 'from-emerald-500 to-teal-500',
      badge: 'Core Ethos'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#05070e]/80">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Who We Are
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Ciphertekies</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Ciphertekies is a student-led technology community connecting developers, creators, learners, and innovators. We foster a culture where technology exploration meets hands-on problem solving.
          </p>
        </div>

        {/* Story & Interactive Visuals */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 glass-panel p-8 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">The Ciphertekies Initiative</h3>
            </div>

            <p className="text-slate-300 leading-relaxed">
              We recognized a vital bridge needed between academic curricula and the accelerating frontier of modern technology. Ciphertekies was founded to create an open space where student technologists can dive directly into cutting-edge architectures like <strong>React 19, Agentic AI, Spatial Computing, and Cloud-Native Engineering</strong>.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Through collaborative hackathons, active open-source contribution tracks, and ecosystem partnerships with organizations like <strong>Open Source Weekends</strong> and <strong>XR CreatorCon</strong>, we enable students to move from passive consumers of technology to active creators.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-3 bg-[#080b14] rounded-xl border border-white/5">
                <span className="text-xs text-cyan-400 font-mono">01. LEARN</span>
                <p className="text-xs text-slate-300 mt-1">Deep dives into modern frameworks and tooling.</p>
              </div>
              <div className="p-3 bg-[#080b14] rounded-xl border border-white/5">
                <span className="text-xs text-purple-400 font-mono">02. BUILD</span>
                <p className="text-xs text-slate-300 mt-1">Hands-on projects and open-source repositories.</p>
              </div>
              <div className="p-3 bg-[#080b14] rounded-xl border border-white/5">
                <span className="text-xs text-emerald-400 font-mono">03. CONNECT</span>
                <p className="text-xs text-slate-300 mt-1">Collaborate with global communities and peers.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0e1428] to-[#161c38] border border-cyan-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl" />
              
              <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Community Pillars
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h5 className="text-white font-semibold text-sm">Practical Learning</h5>
                    <p className="text-slate-400 text-xs mt-0.5">Moving beyond theoretical code to real deployment cycles and architecture design.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h5 className="text-white font-semibold text-sm">Open-Source Culture</h5>
                    <p className="text-slate-400 text-xs mt-0.5">Fostering public repository contributions, documentation, and mentorship.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h5 className="text-white font-semibold text-sm">Ecosystem Partnerships</h5>
                    <p className="text-slate-400 text-xs mt-0.5">Direct connections with industry communities like Open Source Weekends and XR CreatorCon.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Values Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${pillar.accent} text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                      {pillar.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{pillar.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { Github, ExternalLink, Code2, Sparkles, Terminal, GitFork, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMMUNITY_PROJECTS } from '../data/communityData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#070914]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Github className="w-3.5 h-3.5" />
            Open Source & Innovation
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Projects & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Repositories</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Collaborative community projects built by student innovators. Explore our technical codebases on GitHub, contribute features, and hone production engineering skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMMUNITY_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-7 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Top Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-cyan-400 border border-white/10">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-purple-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5" />
                    Open Source
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-200 text-xs font-medium italic mb-3">
                  {project.tagline}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0b0f1e] text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: GitHub Dedicated */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all shadow-sm"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] font-mono text-slate-400">
                  Ready for PRs
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribute Callout */}
        <div className="mt-16 p-8 rounded-2xl glass-panel border border-cyan-500/20 text-center max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-white">Have a technical project you want to build?</h3>
          <p className="text-sm text-slate-300">
            Submit your idea or fork our starter repositories. Our community mentors will guide you through code reviews, architecture discussions, and open-source release.
          </p>
          <a
            href="https://github.com/ciphertekies/ciphertekies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
          >
            <Github className="w-4 h-4" />
            <span>Explore Ciphertekies GitHub Org</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;


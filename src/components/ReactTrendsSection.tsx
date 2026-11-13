import React, { useState } from 'react';
import { 
  Atom, 
  ExternalLink, 
  CheckCircle, 
  Sparkles, 
  Code2, 
  Cpu, 
  Zap, 
  Search,
  BookOpen
} from 'lucide-react';
import { motion } from 'framer-motion';
import { REACT_TRENDS, ReactTrend } from '../data/communityData';

export const ReactTrendsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = ['All', 'Core React', 'Architecture', 'Styling & UI', 'AI & Tools'];

  const filteredTrends = REACT_TRENDS.filter(item => {
    const matchesCategory = selectedFilter === 'All' || item.category === selectedFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Ticker items
  const tickerItems = [
    'React 19 Actions',
    'React Server Components (RSC)',
    'React Compiler Auto-Memoization',
    'Next.js 15 & Partial Prerendering',
    'Tailwind CSS v4 & Shadcn UI',
    'Vercel AI SDK Integration',
    'Framer Motion & Micro-interactions',
    'Suspense & Streaming SSR',
    'Strict TypeScript Generics',
    'WebXR with Three.js & React Three Fiber'
  ];

  return (
    <section id="react-trends" className="py-24 relative overflow-hidden bg-[#070a16]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Technology Ticker Bar */}
      <div className="w-full bg-[#03050a] border-y border-white/10 py-3 overflow-hidden mb-16 relative">
        <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-8">
          {[...tickerItems, ...tickerItems].map((text, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs font-mono text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Atom className="w-3.5 h-3.5 animate-spin-slow" />
            Cutting-Edge Web Architecture
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            React.js & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Modern Web Trends</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Master the modern JavaScript & React landscape: from React 19's Actions and the React Compiler to Server Components, AI SDKs, and high-performance UI engineering.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedFilter === tab
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g. Compiler, RSC)..."
              className="w-full pl-9 pr-4 py-2 bg-[#0a0e1c] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrends.map((topic, index) => (
            <motion.div
              key={topic.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Category and Difficulty */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {topic.badge}
                  </span>
                  <span className={`text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded ${
                    topic.difficulty === 'Beginner' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                    topic.difficulty === 'Intermediate' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                    'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                  }`}>
                    {topic.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {topic.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {topic.summary}
                </p>

                {/* Key Architectural Features */}
                <div className="space-y-1.5 mb-6">
                  {topic.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action: Official Doc Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                  Documentation
                </span>

                <a
                  href={topic.officialDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-white group-hover:underline"
                >
                  <span>Explore More</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReactTrendsSection;


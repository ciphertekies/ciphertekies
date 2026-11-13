import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, Sparkles, Filter, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMMUNITY_EVENTS, EventItem } from '../data/communityData';

export const Events: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const filteredEvents = filter === 'All'
    ? COMMUNITY_EVENTS
    : filter === 'Partner'
    ? COMMUNITY_EVENTS.filter(e => e.isPartner)
    : COMMUNITY_EVENTS.filter(e => e.type === filter);

  return (
    <section id="events" className="py-24 relative overflow-hidden bg-[#05070e]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono uppercase tracking-wider">
            <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            Learn & Build Together
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Events & <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Activities</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Participate in collaborative hack days, technical workshops, and partner summits organized with Open Source Weekends and XR CreatorCon.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['All', 'Partner', 'Hackathon', 'Workshop', 'Tech Talk'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                filter === tab
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {tab === 'Partner' ? 'Official Partner Events' : tab}
            </button>
          ))}
        </div>

        {/* Events Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-7 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
            >
              {event.isPartner && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-cyan-500 text-white text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-bl-xl shadow-md">
                  Partner Collab
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-cyan-400 border border-white/10">
                    {event.type}
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    ● {event.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {event.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Event Metadata Details */}
                <div className="space-y-2 mb-6 pt-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={event.registrationUrl}
                  target={event.registrationUrl.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-center flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500 hover:to-purple-600 text-cyan-300 hover:text-white border border-cyan-500/30 hover:border-transparent transition-all shadow-sm"
                >
                  <span>{event.isPartner ? 'Explore Partner Hub' : 'Register / Inquire'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;

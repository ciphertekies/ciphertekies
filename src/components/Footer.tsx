import React from 'react';
import { Instagram, Linkedin, Terminal, Sparkles, Heart, ArrowUpRight, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS, PARTNERS_DATA } from '../data/communityData';

export const Footer: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${id}`);
    } else {
      window.location.hash = `#${id}`;
    }
  };

  return (
    <footer className="bg-[#03050a] border-t border-white/10 text-white relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-[#0a0d18] rounded-[10px] overflow-hidden flex items-center justify-center p-1">
                  <img
                    src="/ciphertekies-logo.jpg"
                    alt="Ciphertekies Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
                Ciphertekies
              </span>
            </div>

            <p className="text-xs font-mono text-cyan-400 tracking-wide uppercase">
              Decode Ideas. Build Innovation. Shape the Future.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A student-led technology community connecting developers, creators, learners and innovators through technology exploration, collaboration, practical learning and open-source development.
            </p>

            {/* Official Social & Linktree channels */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={SOCIAL_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ciphertekies Instagram"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-pink-400 hover:border-pink-500/30 transition-all hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ciphertekies LinkedIn"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={SOCIAL_LINKS.linktree.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ciphertekies Official Linktree"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-all hover:scale-105 flex items-center gap-1.5"
                title="Official Linktree"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-mono font-semibold uppercase text-cyan-400 tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-white transition-colors">
                  About Ciphertekies
                </a>
              </li>
              <li>
                <a href="#partners" onClick={(e) => handleScrollTo(e, 'partners')} className="hover:text-white transition-colors">
                  Official Partnerships
                </a>
              </li>
              <li>
                <a href="#domains" onClick={(e) => handleScrollTo(e, 'domains')} className="hover:text-white transition-colors">
                  Technology Domains
                </a>
              </li>
              <li>
                <a href="#react-trends" onClick={(e) => handleScrollTo(e, 'react-trends')} className="hover:text-white transition-colors">
                  React 19 & Web Architecture
                </a>
              </li>
              <li>
                <a href="#events" onClick={(e) => handleScrollTo(e, 'events')} className="hover:text-white transition-colors">
                  Events & Hackathons
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => handleScrollTo(e, 'projects')} className="hover:text-white transition-colors">
                  Open Source Projects
                </a>
              </li>
              <li>
                <a href="#team" onClick={(e) => handleScrollTo(e, 'team')} className="hover:text-white transition-colors">
                  Our Team & Leads
                </a>
              </li>
            </ul>
          </div>

          {/* Official Partnerships References */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-mono font-semibold uppercase text-purple-400 tracking-wider">
              Official Alliances
            </h4>
            <div className="space-y-3">
              {PARTNERS_DATA.map((partner) => (
                <div key={partner.id} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{partner.name}</span>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-mono"
                    >
                      <span>Website</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    {partner.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar with mandatory copyright © 2026 */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Ciphertekies. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Built by student innovators for the global tech community</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={SOCIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-pink-400 transition-colors"
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href={SOCIAL_LINKS.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={SOCIAL_LINKS.linktree.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>Linktree</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

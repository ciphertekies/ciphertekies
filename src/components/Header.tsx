import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, Terminal } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#partners', label: 'Partners' },
    { href: '#domains', label: 'Domains' },
    { href: '#react-trends', label: 'React 19 & Web' },
    { href: '#events', label: 'Events' },
    { href: '#projects', label: 'Projects' },
    { href: '#team', label: 'Team' },
    { href: '#social', label: 'Community' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070e]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0a0d18] rounded-[10px] overflow-hidden flex items-center justify-center p-1">
                <img
                  src="/ciphertekies-logo.jpg"
                  alt="Ciphertekies Logo"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 rounded"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent group-hover:brightness-110 transition-all">
                Ciphertekies
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400/80 -mt-0.5">
                Tech Community
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-lg transition-colors hover:bg-white/5 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-4/5 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs & Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-white/10 bg-[#0f1424] text-slate-300 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>

            <a
              href="#join"
              onClick={(e) => handleSmoothScroll(e, '#join')}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-xl group font-semibold text-sm cursor-pointer shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 transition-all"
            >
              <span className="w-full h-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 group-hover:from-cyan-400 group-hover:to-purple-500 absolute"></span>
              <span className="relative px-5 py-2 transition-all ease-out bg-[#05070e] rounded-[10px] group-hover:bg-opacity-0 text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 group-hover:text-white" />
                <span>Join Community</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-white/10 bg-[#0f1424] text-slate-300"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-cyan-400" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 bg-[#0a0d18]/95 backdrop-blur-xl rounded-2xl px-4 mt-2 mb-4 space-y-2 border border-white/10 shadow-2xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block px-4 py-2.5 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="#join"
                onClick={(e) => handleSmoothScroll(e, '#join')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                Join Our Community
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Partnerships from '../components/Partnerships';
import TechDomains from '../components/TechDomains';
import ReactTrendsSection from '../components/ReactTrendsSection';
import Events from '../components/Events';
import Projects from '../components/Projects';
import Team from '../components/Team';
import SocialMedia from '../components/SocialMedia';
import JoinCTA from '../components/JoinCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const MainContent: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans relative ${
      isDark ? 'bg-[#05070e] text-slate-100' : 'bg-slate-50 text-slate-900 light-mode-active'
    }`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Partnerships />
        <TechDomains />
        <ReactTrendsSection />
        <Events />
        <Projects />
        <Team />
        <SocialMedia />
        <JoinCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

export default Index;

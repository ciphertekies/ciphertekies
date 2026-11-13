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

const Index: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#05070e] text-slate-100 font-sans relative">
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
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;

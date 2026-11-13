import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../data/communityData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#060812]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect & <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Collaborate</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Have questions about workshops, want to lead a technical session, or explore partnership initiatives? Reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Information & Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Community Channels</span>
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                We are an open, student-led collective. The fastest way to engage with our coordinators and active community members is through our official social portals.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-[#080b14] border border-white/5 space-y-1">
                  <div className="text-xs font-mono text-purple-400 uppercase">Professional Enquiries</div>
                  <div className="text-sm font-semibold text-white">LinkedIn Company Profile</div>
                  <a
                    href={SOCIAL_LINKS.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-400 hover:underline block pt-1"
                  >
                    linkedin.com/company/ciphertekies →
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-[#080b14] border border-white/5 space-y-1">
                  <div className="text-xs font-mono text-pink-400 uppercase">Community & Events</div>
                  <div className="text-sm font-semibold text-white">Instagram Direct Message</div>
                  <a
                    href={SOCIAL_LINKS.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-pink-400 hover:underline block pt-1"
                  >
                    @ciphertekies_ →
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-[#080b14] border border-white/5 space-y-1">
                  <div className="text-xs font-mono text-cyan-400 uppercase">Code & Technical Issues</div>
                  <div className="text-sm font-semibold text-white">GitHub Issues & Discussions</div>
                  <a
                    href="https://github.com/ciphertekies/ciphertekies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-400 hover:underline block pt-1"
                  >
                    github.com/ciphertekies/ciphertekies →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Transmitted</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out to Ciphertekies. A member of our student leadership team will review and reply shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-xl text-xs font-mono bg-white/10 text-cyan-300 hover:bg-white/20 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-mono text-slate-300 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Alex Turing"
                        className="w-full px-4 py-3 bg-[#0a0e1c] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-mono text-slate-300 uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-3 bg-[#0a0e1c] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-mono text-slate-300 uppercase">
                      Topic / Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0a0e1c] border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    >
                      <option value="">Select an interest area</option>
                      <option value="Joining Community">Joining Community / Peer Circles</option>
                      <option value="Hackathons & Events">Hackathons & Partner Events</option>
                      <option value="Open Source Contribution">Contributing to Open Source</option>
                      <option value="Speaking / Workshop">Leading a Technical Workshop</option>
                      <option value="General Query">General Question</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono text-slate-300 uppercase">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your interests, project ideas, or questions..."
                      className="w-full px-4 py-3 bg-[#0a0e1c] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

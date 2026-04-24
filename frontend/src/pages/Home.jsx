import React from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar";

// Custom SVG Icons to avoid lucide-react build errors
const SparklesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
    <path d="M12 3l2 5h5l-4 3 1.5 5-4.5-3.5L7.5 16 9 11l-4-3h5l2-5z"></path>
  </svg>
);

const ZapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 antialiased overflow-hidden flex flex-col font-sans">
      <HomeNavbar />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <main className="flex-1 w-full flex flex-col items-center">
        
        {/* HERO SECTION */}
        <section className="w-full max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-40 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <SparklesIcon />
              <span className="text-sm font-medium tracking-wide text-gray-300">The Next Gen Learning Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Unlock Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-emerald-300">
                True Potential
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              Experience learning reimagined. High-quality courses, interactive content, and a vibrant community—designed to elevate your skills to the next level.
            </p>
            
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <Link
                to="/courses"
                className="relative group px-8 py-4 bg-brand-600 rounded-xl font-bold text-lg text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(23,138,68,0.6)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Start Learning Now
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <div className="relative w-full h-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-brand-500/20 transform hover:-translate-y-2 transition-transform duration-700 group">
              <img 
                src="/hero-img.png" 
                alt="Abstract Learning Concept" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Floating Glass Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold text-xl">
                    10k+
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Active Students</h4>
                    <p className="text-brand-300 text-sm">Join the community today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID FEATURE SECTION */}
        <section className="w-full max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-gray-400 text-lg">Everything you need to master your craft.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Large Feature Card */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all">
                <ZapIcon />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Lightning Fast Progress</h3>
                <p className="text-gray-400 max-w-md">Our curriculum is highly optimized and relevant, ensuring you don't waste time on outdated concepts. Learn exactly what the industry demands.</p>
              </div>
            </div>

            {/* Small Feature Card 1 */}
            <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <ShieldIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Verified Content</h3>
                <p className="text-gray-400 text-sm">Reviewed by top industry experts.</p>
              </div>
            </div>

            {/* Small Feature Card 2 */}
            <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                <TargetIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Goal Oriented</h3>
                <p className="text-gray-400 text-sm">Structured paths to reach your dream job.</p>
              </div>
            </div>

            {/* Medium Feature Card */}
            <div className="md:col-span-2 bg-gradient-to-r from-brand-900/40 to-black border border-brand-500/20 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                <SparklesIcon />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-2 z-10">Built by students, for students.</h3>
              <p className="text-brand-300 max-w-lg z-10">We know exactly what you need because we've been in your shoes. Crystal clear explanations and neatly organized resources in one place.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black/80 backdrop-blur-xl border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-extrabold text-brand-500 tracking-wider">UDEMY CLONE</div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</Link>
            <Link to="/help" className="text-gray-400 hover:text-white transition-colors text-sm">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

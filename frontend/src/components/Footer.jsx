import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 px-6 py-10">
      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-t border-slate-700 flex flex-col items-center gap-4 text-center text-slate-500 text-sm">
        <div className="flex items-center gap-3 group cursor-pointer select-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/50 group-hover:shadow-[0_0_15px_rgba(63,181,106,0.8)] transition-all duration-300 group-hover:scale-110">
            <span className="text-xl font-black">C</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 drop-shadow-[0_0_8px_rgba(63,181,106,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(63,181,106,0.9)] transition-all duration-300">
            CRISPR
          </span>
        </div>
        <p>© {new Date().getFullYear()} CRISPR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

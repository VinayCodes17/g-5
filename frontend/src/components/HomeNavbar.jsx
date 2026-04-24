import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { supabase } from "../supabaseClient";
import { clearSession } from "../redux/authSlice";

export default function HomeNavbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch(clearSession());
    navigate("/");
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/developerpage", label: "Developers" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo & Navigation */}
        <div className="flex items-center gap-10">
          <Link 
            to="/" 
            className="text-2xl font-extrabold select-none tracking-tight flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/30 group-hover:shadow-brand-500/50 transition-all duration-300 group-hover:scale-105">
              <span className="text-xl font-black">U</span>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-colors duration-300">
              Udemy Clone
            </span>
          </Link>

          <nav className="hidden md:flex gap-1 items-center bg-white/5 rounded-full px-2 py-1.5 border border-white/5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? "bg-white/10 text-white shadow-sm" 
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Auth / Profile */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="relative">
              {/* Profile Icon */}
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold cursor-pointer transition-all duration-300 select-none border-2 ${
                  dropdownOpen ? "border-brand-400 shadow-[0_0_15px_-3px_rgba(63,181,106,0.5)] bg-brand-600" : "border-transparent bg-[#1a1a1a] hover:border-white/20 hover:bg-[#222]"
                }`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {user?.email?.[0]?.toUpperCase() ?? "U"}
              </div>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <>
                  {/* Invisible backdrop to catch outside clicks */}
                  <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)}></div>
                  
                  <div className="absolute right-0 mt-3 w-64 bg-[#0f0f0f]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2 z-50 transform origin-top-right transition-all animate-in fade-in scale-95 duration-200">
                    <div className="px-5 py-4 border-b border-white/5 bg-white/5">
                      <p className="text-sm font-bold text-white truncate mb-1">{user.email}</p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></div>
                        <p className="text-xs text-brand-400 font-medium tracking-wide uppercase">Online</p>
                      </div>
                    </div>
                    
                    <div className="p-2">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-200"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                          <polyline points="16 17 21 12 16 7"></polyline>
                          <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                        Sign Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Link 
              to="/login" 
              className="relative group px-6 py-2.5 bg-white text-black rounded-full font-bold text-sm overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
              <span className="relative z-10 flex items-center gap-2">
                Sign in
              </span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

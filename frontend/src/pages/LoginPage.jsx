import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { supabase } from "../supabaseClient";
import { setSession } from "../redux/authSlice";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.1 0 5.8 1.1 8 2.9l6-6C34.1 3.1 29.3 1 24 1 14.8 1 7 6.7 3.7 14.6l7 5.4C12.4 13.7 17.7 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.4 5.7c4.3-4 6.8-9.9 6.8-16.9z"/>
    <path fill="#FBBC05" d="M10.7 28.6A14.8 14.8 0 0 1 9.5 24c0-1.6.3-3.2.7-4.6l-7-5.4A23.7 23.7 0 0 0 .5 24c0 3.8.9 7.4 2.7 10.6l7.5-6z"/>
    <path fill="#34A853" d="M24 47c5.4 0 9.9-1.8 13.2-4.8l-7.4-5.7c-1.8 1.2-4.1 1.9-5.8 1.9-6.3 0-11.6-4.2-13.5-10l-7.5 6C7 40.3 14.8 47 24 47z"/>
  </svg>
);

export default function LoginPage() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogle = async () => {
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: { hd: "iiitn.ac.in" },
        redirectTo: `${window.location.origin}/`,
      },
    });
    setLoading(false);
    if (error) setError(error.message);
  };

  return (
    <div className="min-h-screen bg-pageBlack flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="mb-8 text-center">
          <Link to="/" className="text-3xl font-extrabold text-brand-400 tracking-tight select-none">
            Udemy Clone
          </Link>
          <p className="mt-2 text-gray-400 text-sm">Sign in with your IIITN Google account</p>
        </div>

        <div className="bg-black/70 border border-gray-800 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
          {/* Error */}
          {error && (
            <div className="mb-5 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Google button */}
          <button
            id="login-google"
            type="button"
            onClick={handleGoogle}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3.5 bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-gray-500 text-gray-100 font-semibold rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg"
          >
            <GoogleIcon />
            {loading ? "Redirecting…" : "Continue with Google"}
          </button>

          <p className="mt-5 text-center text-xs text-gray-600">
            Only <span className="text-gray-500">@iiitn.ac.in</span> accounts are permitted
          </p>
        </div>
      </div>
    </div>
  );
}

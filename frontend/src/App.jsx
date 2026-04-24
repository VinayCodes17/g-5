import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { supabase } from "./supabaseClient";
import { setSession, clearSession } from "./redux/authSlice";
import router from "./router";

const ALLOWED_DOMAIN = "@iiitn.ac.in";

export default function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // wait for session before rendering routes

  useEffect(() => {
    // Hydrate session on first load
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        // Domain check
        if (!session.user.email.endsWith(ALLOWED_DOMAIN)) {
          supabase.auth.signOut();
          dispatch(clearSession());
        } else {
          dispatch(setSession({ session }));
        }
      }
      setLoading(false);
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        dispatch(clearSession());
        return;
      }

      // Domain restriction
      if (!session.user.email.endsWith(ALLOWED_DOMAIN)) {
        supabase.auth.signOut();
        dispatch(clearSession());
      } else {
        dispatch(setSession({ session }));
      }
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen bg-pageBlack flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import WatchPage from "./pages/WatchPage/WatchPage";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";
import DevelopersPage from "./pages/DevelopersPage";

const router = createBrowserRouter([
  // ── Auth ──────────────────────────────────────────────────────────────────
  {
    path: "/login",
    element: <LoginPage />,
  },

  // ── Public landing page ───────────────────────────────────────────────────
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/courses",
    element: <CoursesPage />,
  },
  {
    path: "/developerpage",
    element: <DevelopersPage />,
  },

  // ── Main app with Layout shell ────────────────────────────────────────────
  {
    element: <Layout />,
    children: [
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },

  // ── Fallback ──────────────────────────────────────────────────────────────
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;

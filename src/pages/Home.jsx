import React from "react";
import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "React for Beginners", author: "A. Sharma", price: "₹499", rating: 4.7 },
  { id: 2, title: "Fullstack MERN Bootcamp", author: "R. Patel", price: "₹999", rating: 4.8 },
  { id: 3, title: "Advanced JavaScript", author: "S. Rao", price: "₹399", rating: 4.6 },
  { id: 4, title: "UI/UX Design Essentials", author: "M. Singh", price: "₹299", rating: 4.5 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-pageBlack text-gray-100 antialiased">
      {/* Header */}
      <header className="bg-black/95 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-extrabold text-brand-400 select-none">Udemy Clone</Link>
            <nav className="hidden md:flex gap-6 text-sm text-gray-300">
              <Link to="/" className="hover:text-brand-400">Home</Link>
              <Link to="/courses" className="hover:text-brand-400">Courses</Link>
              <Link to="/instructors" className="hover:text-brand-400">Instructors</Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm border border-gray-700 rounded text-gray-200 hover:bg-black/70">Log in</button>
            <button className="px-4 py-2 bg-brand-500 text-black rounded font-medium hover:brightness-95">Sign up</button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
              Learn new skills. Build your future.
            </h1>
            <p className="mt-4 text-gray-300 max-w-xl">
              Expert-led courses in development, design, business and more — learn at your pace with practical projects and real-world instructors.
            </p>

            <div className="mt-6 flex gap-3">
              <input
                aria-label="Search courses"
                className="flex-1 px-4 py-3 bg-black/60 border border-gray-700 rounded text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                placeholder="Search for courses, e.g., React, Python..."
              />
              <button className="px-5 py-3 bg-brand-500 text-black rounded font-medium hover:brightness-95">Search</button>
            </div>

            <div className="mt-6 flex gap-3 items-center text-sm text-gray-400">
              <span className="text-gray-300">Popular:</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-black/50 rounded border border-gray-700 text-gray-200">React</button>
                <button className="px-3 py-1 bg-black/50 rounded border border-gray-700 text-gray-200">MERN</button>
                <button className="px-3 py-1 bg-black/50 rounded border border-gray-700 text-gray-200">UI/UX</button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-900 to-black rounded-lg p-6">
            <div className="w-full h-56 bg-black/40 rounded flex items-center justify-center text-brand-400">
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                <rect width="220" height="120" rx="12" fill="url(#g)"/>
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#04260f"/>
                    <stop offset="1" stopColor="#116033"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white">Browse by category</h2>
          <div className="mt-4 flex gap-4 overflow-x-auto py-4">
            {["Development", "Business", "Design", "IT & Software", "Personal"].map((c) => (
              <div key={c} className="min-w-[160px] bg-black/60 p-4 rounded border border-gray-800">
                <div className="font-medium text-gray-100">{c}</div>
                <div className="text-sm text-gray-400 mt-2">20 courses</div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured courses */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Featured courses</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c) => (
              <article key={c.id} className="bg-black/60 rounded border border-gray-800 p-4 hover:shadow-lg transition-shadow">
                <div className="h-36 bg-gradient-to-br from-gray-900 to-black rounded mb-3 flex items-end p-3">
                  <span className="text-xs text-gray-400 bg-black/40 px-2 py-1 rounded">Beginner</span>
                </div>
                <h3 className="font-semibold text-gray-100">{c.title}</h3>
                <div className="text-sm text-gray-400">{c.author}</div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-brand-400 font-bold">{c.price}</div>
                  <div className="text-sm text-gray-300">{c.rating} ★</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Instructor CTA */}
        <section className="mt-12 bg-gradient-to-r from-brand-800 to-brand-700 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">Add to Udemy Clone</h3>
            <p className="mt-2 text-sm text-gray-100 max-w-lg">Create a course, share your knowledge, and earn while helping learners grow.</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-black/90 text-brand-400 px-4 py-2 rounded font-medium hover:brightness-95">Start teaching</button>
            <Link to="/become-instructor" className="px-4 py-2 border border-gray-300 rounded text-gray-100">Learn more</Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/95 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Udemy Clone</div>
          <div className="flex gap-4">
            <Link to="/terms" className="text-gray-400 hover:text-brand-400">Terms</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-brand-400">Privacy</Link>
            <Link to="/help" className="text-gray-400 hover:text-brand-400">Help</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

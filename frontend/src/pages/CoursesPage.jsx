import React, { useState } from "react";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

const dummyCourses = [
  { id: 1, title: "Modern Web Development", domain: "Web Dev", author: "A. Sharma" },
  { id: 2, title: "Advanced React & Redux", domain: "Web Dev", author: "R. Patel" },
  { id: 3, title: "Unreal Engine 5 for Beginners", domain: "Game Dev", author: "S. Rao" },
  { id: 4, title: "Unity 3D Game Programming", domain: "Game Dev", author: "M. Singh" },
  { id: 5, title: "Machine Learning A-Z", domain: "AI/ML", author: "K. Joshi" },
  { id: 6, title: "Deep Learning with PyTorch", domain: "AI/ML", author: "P. Kumar" },
  { id: 7, title: "Data Science Bootcamp", domain: "Data Science", author: "N. Gupta" },
  { id: 8, title: "Python for Data Analysis", domain: "Data Science", author: "L. Verma" },
];

const domains = ["All", "Web Dev", "Game Dev", "AI/ML", "Data Science"];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");

  const filteredCourses = dummyCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === "All" || course.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="min-h-screen bg-pageBlack text-gray-100 antialiased flex flex-col">
      <HomeNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-white mb-8">Explore Courses</h1>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search for courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-4 bg-black/60 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all shadow-sm"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 items-center">
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-4 py-2 rounded-full border whitespace-nowrap transition-all duration-300 font-medium ${
                  selectedDomain === domain
                    ? "bg-brand-500 border-brand-500 text-white shadow-md shadow-brand-500/20"
                    : "bg-black/50 border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white"
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div 
                key={course.id} 
                className="group bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden hover:border-brand-500/50 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 cursor-pointer flex flex-col h-full transform hover:-translate-y-1"
              >
                <div className="h-40 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                  {/* Decorative pattern/gradient for the thumbnail */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-400 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-600 font-bold tracking-widest uppercase opacity-50 text-xl">{course.domain}</span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-2.5 py-1 bg-black/70 backdrop-blur-md text-brand-400 rounded-md border border-brand-500/30">
                      {course.domain}
                    </span>
                  </div>
                </div>
                
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-brand-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-auto">{course.author}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500">
              <p className="text-xl">No courses found matching your criteria.</p>
              <button 
                onClick={() => { setSearchTerm(""); setSelectedDomain("All"); }}
                className="mt-4 text-brand-400 hover:text-brand-300 underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

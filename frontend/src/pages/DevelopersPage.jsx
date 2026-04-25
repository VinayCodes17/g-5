import React from "react";
import HomeNavbar from "../components/HomeNavbar";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const developers = [
  {
    id: 1,
    name: "Developer One",
    role: "Full Stack Developer",
    image: "https://ui-avatars.com/api/?name=Developer+One&background=178a44&color=fff&size=200",
    bio: "Passionate about building scalable web applications and intuitive user interfaces.",
    github: "#",
    linkedin: "#",
    email: "#",
  },
  {
    id: 2,
    name: "Developer Two",
    role: "Frontend Specialist",
    image: "https://ui-avatars.com/api/?name=Developer+Two&background=0b4b24&color=fff&size=200",
    bio: "Loves crafting pixel-perfect designs and creating smooth user experiences.",
    github: "#",
    linkedin: "#",
    email: "#",
  },
  {
    id: 3,
    name: "Developer Three",
    role: "Backend Engineer",
    image: "https://ui-avatars.com/api/?name=Developer+Three&background=a435f0&color=fff&size=200",
    bio: "Focused on database architecture, API design, and system performance.",
    github: "#",
    linkedin: "#",
    email: "#",
  }
];

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-pageBlack text-gray-100 antialiased flex flex-col">
      <HomeNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The creative minds and technical wizards behind this project. We are dedicated to building robust and scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {developers.map((dev) => (
            <div 
              key={dev.id}
              className="bg-[#111111] border border-gray-800 rounded-3xl p-8 flex flex-col items-center text-center hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-800 group-hover:border-brand-500 transition-colors duration-300 mb-6">
                <img src={dev.image} alt={dev.name} className="w-full h-full object-cover" />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-400 transition-colors">{dev.name}</h2>
              <p className="text-brand-500 font-medium mb-4">{dev.role}</p>
              
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {dev.bio}
              </p>
              
              <div className="mt-auto flex gap-4">
                <a href={dev.github} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all">
                  <GithubIcon />
                </a>
                <a href={dev.linkedin} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white transition-all">
                  <LinkedinIcon />
                </a>
                <a href={dev.email} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-500 hover:text-white transition-all">
                  <MailIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

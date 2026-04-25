import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import FOOTER_SECTIONS from "../data/footerData";

const LinkList = ({ links }) => (
  <ul className="flex flex-col gap-2 mt-3">
    {links.map((link) => (
      <li key={link}>
        <a
          href="#"
          className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
        >
          {link}
        </a>
      </li>
    ))}
  </ul>
);

// For desktop
const DesktopSection = ({ title, links }) => (
  <div>
    <h3 className="text-white font-bold text-base">{title}</h3>
    <LinkList links={links} />
  </div>
);

// For mobile - toggle to show sections
const MobileSection = ({ title, links, isOpen, onToggle }) => (
  <div className="border-b border-slate-700">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-4 text-left"
    >
      <span className="text-white font-semibold text-sm">{title}</span>
      <ChevronDown
        size={18}
        className={`text-slate-400 transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </button>

    {/* Expand or collapse */}
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
      }`}
    >
      <LinkList links={links} />
    </div>
  </div>
);

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <footer className="bg-slate-800 px-6 py-10">

      {/* Top statement */}
      <h2 className="text-white text-2xl font-bold mb-8">
        Explore top skills
      </h2>

      {/* For desktop - above 700px */}
      <div className="hidden [@media(min-width:700px)]:grid grid-cols-4 gap-8">
        {FOOTER_SECTIONS.map((section) => (
          <DesktopSection
            key={section.title}
            title={section.title}
            links={section.links}
          />
        ))}
      </div>

      {/* Mobile - below 700px */}
      <div className="[@media(min-width:700px)]:hidden flex flex-col">
        {FOOTER_SECTIONS.map((section, index) => (
          <MobileSection
            key={section.title}
            title={section.title}
            links={section.links}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-10 pt-6 border-t border-slate-700 flex flex-col items-center gap-4 text-center text-slate-500 text-sm">
        <div className="flex items-center gap-2 group cursor-pointer select-none">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/50">
            <span className="text-sm font-black">C</span>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 drop-shadow-[0_0_8px_rgba(63,181,106,0.6)]">
            CRISPR
          </span>
        </div>
        <p>© {new Date().getFullYear()} CRISPR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

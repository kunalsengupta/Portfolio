import { useState } from 'react';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ["HOME", "TECH_STACK", "EXPERIENCE", "PROJECTS", "EDUCATION"];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#111111]/80 backdrop-blur-md border-b border-[#222] transition-all">
      <div className="flex items-center justify-between py-5 px-6 md:px-12">
        {/* Brand */}
        <div className="font-mono text-[#888] text-sm font-bold tracking-[0.15em] uppercase z-50">
          <span className="text-white">KUNAL_SENGUPTA</span> <span className="hidden sm:inline">// BE_GENAI_ENG</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <a href="#home" className="text-white border-b-2 border-[#4285f4] text-[10px] font-mono tracking-widest uppercase transition-colors pb-2">HOME</a>
          <a href="#techstack" className="text-[#888] hover:text-[#ccc] text-[10px] font-mono tracking-widest uppercase transition-colors pb-2">TECH_STACK</a>
          <a href="#experience" className="text-[#888] hover:text-[#ccc] text-[10px] font-mono tracking-widest uppercase transition-colors pb-2">EXPERIENCE</a>
          <a href="#projects" className="text-[#888] hover:text-[#ccc] text-[10px] font-mono tracking-widest uppercase transition-colors pb-2">PROJECTS</a>
          <a href="#education" className="text-[#888] hover:text-[#ccc] text-[10px] font-mono tracking-widest uppercase transition-colors pb-2">EDUCATION</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a href="mailto:kunal.sengupta852@gmail.com" className="bg-[#4285f4] hover:bg-[#3b77db] text-[#111] text-[10px] font-bold py-2.5 px-6 rounded-[2px] tracking-[0.2em] uppercase transition-colors">
            GET_IN_TOUCH
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-white z-50 p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Simple hamburger / close icon via SVG */}
          {isMobileMenuOpen ? (
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          ) : (
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#111111]/95 backdrop-blur-xl border-b border-[#222] py-8 px-6 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace('_', '')}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#888] hover:text-white text-xs font-mono tracking-widest uppercase transition-colors border-b border-[#222] pb-4"
            >
              {link.replace('_', ' ')}
            </a>
          ))}
          <a href="mailto:kunal.sengupta852@gmail.com" className="bg-[#4285f4] text-[#111] text-[10px] font-bold py-4 px-6 rounded-[2px] tracking-[0.2em] uppercase text-center mt-2">
            GET_IN_TOUCH
          </a>
        </div>
      )}
    </nav>
  );
};
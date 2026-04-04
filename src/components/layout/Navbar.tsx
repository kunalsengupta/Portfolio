export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8 border-b border-transparent">
      <div className="font-mono text-white text-sm font-bold tracking-widest flex items-center gap-2">
        <span className="text-[#4285f4]">{`>_`}</span>
        <span>KUNAL SENGUPTA // <span className="text-[#6b7280]">ENGINEER</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#experience" className="text-[#9ca3af] hover:text-white text-[11px] font-mono tracking-widest uppercase transition-colors">Experience</a>
        <a href="#projects" className="text-[#9ca3af] hover:text-white text-[11px] font-mono tracking-widest uppercase transition-colors">Projects</a>
        <a href="#stack" className="text-[#9ca3af] hover:text-white text-[11px] font-mono tracking-widest uppercase transition-colors">Stack</a>

        <a href="mailto:contact@kunalsengupta.com" className="bg-[#4285f4] hover:bg-blue-600 text-white text-[10px] font-bold py-2.5 px-6 rounded-[4px] tracking-[0.2em] uppercase transition-colors">
          Get In Touch
        </a>
      </div>
    </nav>
  );
};
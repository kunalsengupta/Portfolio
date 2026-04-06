import { Navbar } from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';

export default function App() {
  return (
    // Added overflow-x-hidden here to strictly prevent mobile horizontal bleeding
    <div className="min-h-screen bg-[#111111] text-[#d4d4d4] font-sans selection:bg-[#4285f4] selection:text-white relative overflow-x-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#555 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      <div className="relative z-10 flex flex-col min-h-screen w-full max-w-[1440px] mx-auto">
        <Navbar />
        <main className="flex-grow w-full">
          <Hero />
          <TechStack />
          <Experience />
          <Projects />
          <Education />
        </main>
        <footer className="flex flex-col sm:flex-row justify-between items-center py-10 px-6 md:px-12 border-t border-[#222] font-mono text-[9px] tracking-[0.2em] text-[#666] uppercase mt-20 gap-6 sm:gap-0">
          <div className="text-center sm:text-left">© 2026 KUNAL SENGUPTA | 40.7128° N, 74.0060° W</div>
          <div className="flex gap-6">
            <a href="https://github.com/kunalsengupta" target="_blank" rel="noreferrer" className="hover:text-[#a3a3a3] transition-colors">GITHUB</a>
            <a href="https://linkedin.com/in/kunalsengupta" target="_blank" rel="noreferrer" className="hover:text-[#a3a3a3] transition-colors">LINKEDIN</a>
            <a href="#" className="text-white hover:text-[#4285f4] transition-colors">SOURCE_LOGS</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
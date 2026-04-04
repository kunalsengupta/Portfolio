import { Navbar } from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import StackAndContact from './components/sections/StackAndContact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-[#4285f4] selection:text-white">
      <div className="px-6 md:px-12 max-w-[1200px] mx-auto">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <StackAndContact />
        </main>
      </div>
    </div>
  );
}
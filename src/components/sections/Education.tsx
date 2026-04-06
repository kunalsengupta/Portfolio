export default function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-12">
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Left Sidebar */}
        <div className="w-full lg:w-[300px]">
          <div className="text-[#d97757] text-[9px] font-mono tracking-[0.2em] uppercase mb-4">ACADEMIC PROFILE</div>
          <h2 className="text-5xl font-bold text-white tracking-tight mb-12">Education.</h2>

          <div className="bg-[#161616] border border-[#222] p-6 mb-6">
            <div className="flex items-center gap-2 text-white text-xs font-bold uppercase mb-6"><span className="text-[#4285f4]">✔</span> CREDENTIALS</div>
            <div className="mb-6">
              <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-1">MAJOR</div>
              <div className="text-[#ccc] text-sm">Computer Science & Engineering</div>
            </div>
            <div className="mb-6">
              <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-1">CLASSIFICATION</div>
              <div className="text-[#ccc] text-sm">Bachelor of Technology (B.Tech)</div>
            </div>
            <div>
              <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-1">ACADEMIC PERFORMANCE</div>
              <div className="text-[#4285f4] text-3xl font-bold">7.62 <span className="text-[#666] text-xs font-normal">/ 10.0 CGPA</span></div>
            </div>
          </div>

          <div className="border border-[#222] p-6 bg-[#111]">
            <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-4">KEY COURSEWORK</div>
            <ul className="space-y-3 text-[#a3a3a3] text-xs font-mono">
              <li className="flex items-center gap-2"><span className="text-[#444]">■</span> Data Structures & Algorithms</li>
              <li className="flex items-center gap-2"><span className="text-[#444]">■</span> Operating Systems</li>
              <li className="flex items-center gap-2"><span className="text-[#444]">■</span> Database Management</li>
              <li className="flex items-center gap-2"><span className="text-[#444]">■</span> System Architecture</li>
            </ul>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-[#161616] border border-[#222] p-8 lg:p-12 relative flex-1">
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#444]"></div>
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#444]"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#444]"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#444]"></div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex-1">
                <div className="text-[#888] text-[9px] font-mono tracking-[0.2em] uppercase mb-2">INSTITUTION</div>
                <h3 className="text-3xl font-bold text-white uppercase tracking-tight mb-12">BANKURA UNNAYANI INSTITUTE OF ENGINEERING</h3>

                <div className="flex gap-12 mb-10 border-b border-[#222] pb-10">
                  <div>
                    <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-2">DEGREE CONFERRED</div>
                    <div className="text-xl text-[#ccc]">B.Tech in Computer Science</div>
                  </div>
                  <div>
                    <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-2">STATUS</div>
                    <div className="text-[#d97757] text-xl">Graduated 2020</div>
                  </div>
                </div>

                <p className="text-[#a3a3a3] text-base leading-relaxed max-w-2xl mb-12">
                  Focused on foundational engineering principles and advanced computing paradigms. Specialization in system architecture, algorithmic efficiency, and relational database management.
                </p>

                <div className="flex flex-wrap gap-4">
                  <span className="bg-[#111] border border-[#333] text-[#888] px-4 py-2 text-[9px] font-mono uppercase flex items-center gap-2"><span>✉</span> CS_MAJOR_01</span>
                  <span className="bg-[#111] border border-[#333] text-[#888] px-4 py-2 text-[9px] font-mono uppercase flex items-center gap-2"><span>☷</span> ENGINEERING_COUNCIL_REG</span>
                  <span className="bg-[#111] border border-[#333] text-[#888] px-4 py-2 text-[9px] font-mono uppercase flex items-center gap-2"><span>📊</span> PERFORMANCE_METRIC: 7.62</span>
                </div>
              </div>

              {/* ID Badge graphic */}
              <div className="hidden md:flex flex-col items-center">
                <div className="w-32 h-32 bg-[#111] border border-[#222] flex items-center justify-center mb-4 text-[#333]">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <div className="text-[#666] text-[8px] font-mono tracking-widest uppercase mb-1">UNIVERSITY ID</div>
                <div className="text-white text-xs font-mono uppercase">WBUT-BUIE-CSE</div>
              </div>
            </div>
          </div>

          {/* Bottom Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#161616] border border-[#222] p-8 border-l-2 border-l-[#d97757]">
              <h4 className="text-white text-sm font-bold uppercase mb-4 flex items-center gap-2"><span className="text-[#d97757]">🎓</span> CORE ENGINEERING PILLARS</h4>
              <p className="text-[#888] text-xs leading-relaxed mb-8">
                A rigorous 4-year curriculum emphasizing the intersection of hardware logic, software scalability, and robust system architecture.
              </p>
              <div>
                <div className="w-full bg-[#222] h-1 mb-2"><div className="bg-[#d97757] h-full w-[85%]"></div></div>
                <div className="flex justify-between text-[#666] text-[8px] font-mono uppercase"><span>SYSTEM_DESIGN</span><span>85% PROFICIENCY</span></div>
              </div>
            </div>
            <div className="bg-[#161616] border border-[#222] p-8 border-l-2 border-l-[#4285f4]">
              <h4 className="text-white text-sm font-bold uppercase mb-4 flex items-center gap-2"><span className="text-[#4285f4]">◎</span> RESEARCH & DEVELOPMENT</h4>
              <p className="text-[#888] text-xs leading-relaxed mb-8">
                Independent study modules focusing on contemporary computational challenges, database optimization, and applied logic frameworks.
              </p>
              <div>
                <div className="w-full bg-[#222] h-1 mb-2"><div className="bg-[#4285f4] h-full w-[76%]"></div></div>
                <div className="flex justify-between text-[#666] text-[8px] font-mono uppercase"><span>ALGORITHMIC_RESEARCH</span><span>76% PROFICIENCY</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-12 w-full flex justify-center border-b border-[#222]">
      <div className="bg-[#161616] border border-[#222] p-8 sm:p-12 w-full max-w-4xl relative">
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#444]"></div>
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#444]"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#444]"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#444]"></div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex-1 min-w-0">
            <div className="text-[#d97757] text-[9px] font-mono tracking-[0.2em] uppercase mb-4">ACADEMIC PROFILE</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">Education.</h2>

            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-2 break-words">Bankura Unnayani Institute of Engineering</h3>
              <div className="text-[#a3a3a3] text-sm sm:text-base">B.Tech in Computer Science & Engineering</div>
              <div className="text-[#888] text-xs font-mono tracking-widest uppercase mt-4">CGPA: 7.62 • Graduated 2020</div>
            </div>

            <div className="border-t border-[#333] pt-6">
              <div className="text-[#666] text-[9px] font-mono tracking-widest uppercase mb-4">KEY COURSEWORK</div>
              <div className="flex flex-wrap gap-4 text-[#a3a3a3] text-xs font-mono">
                <span className="flex items-center gap-2"><span className="text-[#4285f4]">■</span> Data Structures</span>
                <span className="flex items-center gap-2"><span className="text-[#4285f4]">■</span> OS</span>
                <span className="flex items-center gap-2"><span className="text-[#4285f4]">■</span> DBMS</span>
                <span className="flex items-center gap-2"><span className="text-[#4285f4]">■</span> System Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
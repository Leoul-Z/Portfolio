export default function ChapterStack({ goToChapter, mobilePage = 1 }) {
  return (
    <>
      {/* Left Page (Languages, FE, BE) */}
      <article className={`${mobilePage === 1 ? 'flex' : 'hidden'} lg:flex w-full phone:w-full phone:basis-auto phone:grow-0 phone:shrink-0 phone:h-auto phone:overflow-visible phone:rounded-[3px] phone:px-4 phone:py-4 tablet:h-full tablet:min-h-[640px] tablet:max-h-[820px] tablet:w-full tablet:rounded-[3px] tablet:px-8 tablet:py-6 tablet:justify-between tablet:overflow-y-auto lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-l-[3px] lg:rounded-r-none lg:px-7 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[inset_1px_0px_0px_0px_#e2dac6,-2px_0px_0px_0px_#ede6d3,-4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-full items-start bg-[linear-gradient(to_left,#0000002e,#00000010_30%,transparent)] absolute top-0 right-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            Chapter S
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            Leoul Zerihun
          </span>
        </div>

        <div className="flex w-full items-end gap-3 pb-1.5 relative">
          <span className="font-['Instrument_Serif'] text-[56px] font-[400] leading-[48px] text-[#c0392b] phone:text-[46px] phone:leading-[40px] tablet:text-[60px] tablet:leading-[52px]">
            S
          </span>
          <div className="flex flex-col items-start pb-0.5">
            <h1 className="font-['Instrument_Sans'] text-[28px] font-[600] leading-[32px] tracking-[-0.03em] text-[#1c1c1a] phone:text-[24px] phone:leading-[28px] tablet:text-[34px] tablet:leading-[38px]">
              Stack
            </h1>
            <span className="font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10.5px] font-[400] leading-[13px] tracking-[0.08em] text-[#6b6b66]">
              24 subjects · 5 groups
            </span>
          </div>
        </div>

        {/* Vintage Ledger Card */}
        <div className="flex w-full flex-col items-start rounded-[2px] border-t-2 border-solid border-[#c0392b] bg-[#ffffff] px-4 pt-2.5 pb-2 tablet:p-5 shadow-[0px_1px_0px_0px_#e2dac6,0px_4px_10px_-3px_#5a1f1a18] bg-[linear-gradient(#c7d7ef59_1px,transparent_1px)] bg-[length:100%_20px] rotate-[-0.3deg]">
          
          <div className="flex w-full items-center justify-between border-b border-solid border-[#1c1c1a] pb-1 gap-2">
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[500] leading-[14px] text-[#1c1c1a]">
              Leoul Zerihun — see also the following subjects:
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[400] leading-[12px] tracking-[0.15em] text-[#8a8a84] uppercase mobile:hidden">
              x-ref 1/2
            </span>
          </div>

          {/* Languages */}
          <div className="flex w-full items-start gap-3 border-b border-solid border-[#c7d7ef] py-1.5 tablet:py-3 phone:flex-col phone:gap-1 tablet:flex-row tablet:gap-4">
            <div className="flex w-20 tablet:w-24 flex-none flex-col items-start">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[10.5px] font-[600] leading-[13px] tracking-[0.12em] text-[#c0392b] uppercase">
                LANG
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] tablet:text-[14px] font-[600] leading-[16px] text-[#1c1c1a]">
                Languages
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-1 tablet:gap-1.5">
              {['C++', 'Python', 'Java', 'JavaScript', 'PHP', 'SQL', 'HTML5', 'CSS3'].map((item) => (
                <div key={item} className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#fbf8f0] px-1.5 py-0.5 tablet:px-2.5 tablet:py-1 transition-all duration-200 hover:border-[#c0392b] hover:bg-[#ffffff]">
                  <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] text-[#3a3a36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="flex w-full items-start gap-3 border-b border-solid border-[#c7d7ef] py-1.5 tablet:py-3 phone:flex-col phone:gap-1 tablet:flex-row tablet:gap-4">
            <div className="flex w-20 tablet:w-24 flex-none flex-col items-start">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[10.5px] font-[600] leading-[13px] tracking-[0.12em] text-[#c0392b] uppercase">
                FE
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] tablet:text-[14px] font-[600] leading-[16px] text-[#1c1c1a]">
                Frontend
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-1 tablet:gap-1.5">
              {['React', 'Tailwind CSS', 'Flutter', 'HTML5', 'CSS3', 'Bootstrap', 'Vite'].map((item) => (
                <div key={item} className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#fbf8f0] px-1.5 py-0.5 tablet:px-2.5 tablet:py-1 transition-all duration-200 hover:border-[#c0392b] hover:bg-[#ffffff]">
                  <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] text-[#3a3a36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="flex w-full items-start gap-3 border-b border-solid border-[#c7d7ef] py-1.5 tablet:py-2.5 phone:flex-col phone:gap-1 tablet:flex-row tablet:gap-4">
            <div className="flex w-20 tablet:w-24 flex-none flex-col items-start">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[10.5px] font-[600] leading-[13px] tracking-[0.12em] text-[#c0392b] uppercase">
                BE
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] tablet:text-[14px] font-[600] leading-[16px] text-[#1c1c1a]">
                Backend
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-1 tablet:gap-1.5">
              {['Node.js', 'Express', 'FastAPI', 'Django', 'Resend'].map((item) => (
                <div key={item} className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#fbf8f0] px-1.5 py-0.5 tablet:px-2.5 tablet:py-1 transition-all duration-200 hover:border-[#c0392b] hover:bg-[#ffffff]">
                  <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] text-[#3a3a36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Systems */}
          <div className="flex w-full items-start gap-3 py-1.5 tablet:py-2.5 phone:flex-col phone:gap-1 tablet:flex-row tablet:gap-4">
            <div className="flex w-20 tablet:w-24 flex-none flex-col items-start">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[10.5px] font-[600] leading-[13px] tracking-[0.12em] text-[#c0392b] uppercase">
                SYS
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] tablet:text-[14px] font-[600] leading-[16px] text-[#1c1c1a]">
                Architecture
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-1 tablet:gap-1.5">
              {['RESTful APIs', 'Clean Architecture', 'OOP', 'Design Patterns', 'JWT Auth'].map((item) => (
                <div key={item} className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#fbf8f0] px-1.5 py-0.5 tablet:px-2.5 tablet:py-1 transition-all duration-200 hover:border-[#c0392b] hover:bg-[#ffffff]">
                  <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] text-[#3a3a36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Problem Solving & Algorithms Ledger (fills the page evenly matching Chapter A) */}
        <div className="flex w-full flex-col items-start border-t border-solid border-[#c7d7ef] mt-auto pt-1.5 tablet:pt-2">
          <div className="flex w-full items-baseline justify-between pb-0.5">
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[600] tracking-[0.12em] text-[#c0392b] uppercase">
              Algorithmic Practice &amp; Discipline
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8px] tablet:text-[9px] text-[#8a8a84] uppercase">
              Daily Drill
            </span>
          </div>
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] leading-[13px] tablet:leading-[15px] text-[#3a3a36]">
            Daily algorithmic problem solving on LeetCode (@Nasi4Z), practicing data structures, graph traversal, and time/space complexity optimization.
          </span>
        </div>

        <div className="flex w-full items-end justify-between pl-8 pr-10 pt-2 grow gap-4">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            15
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[13px] tracking-wider text-[#b8b3a6] mobile:hidden">
            cont. overleaf →
          </span>
        </div>

        {/* Bottom Left Page Curl */}
        <button
          onClick={() => goToChapter('H', 2)}
          title="Turn back to Chapter H (Page 13)"
          className="flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />

        {/* Mobile Page Curl (Bottom Right - Turn to Page 2) */}
        <button
          onClick={() => goToChapter('S', 2)}
          title="Turn to Page 2 (Infra & Deploy)"
          className="mobile:flex lg:hidden flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />
      </article>

      {/* Right Page (Data, Deploy, Circulation) */}
      <article className={`${mobilePage === 2 ? 'flex' : 'hidden'} lg:flex w-full phone:w-full phone:basis-auto phone:grow-0 phone:shrink-0 phone:h-auto phone:overflow-visible phone:rounded-[3px] phone:px-4 phone:py-4 tablet:h-full tablet:min-h-[640px] tablet:max-h-[820px] tablet:w-full tablet:rounded-[3px] tablet:px-8 tablet:py-6 tablet:justify-between tablet:overflow-y-auto lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-r-[3px] lg:rounded-l-none lg:pl-7 lg:pr-10 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[2px_0px_0px_0px_#ede6d3,4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-12 items-start bg-[linear-gradient(to_right,#00000033,#00000012_30%,transparent)] absolute top-0 left-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            A portfolio
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            Stack
          </span>
        </div>

        {/* Continued Ledger Card */}
        <div className="flex w-full flex-col items-start rounded-[2px] border-t-2 border-solid border-[#c0392b] bg-[#ffffff] px-4 pt-2.5 pb-2 tablet:p-5 shadow-[0px_1px_0px_0px_#e2dac6,0px_4px_10px_-3px_#5a1f1a18] bg-[linear-gradient(#c7d7ef59_1px,transparent_1px)] bg-[length:100%_20px] rotate-[-0.3deg]">
          
          <div className="flex w-full items-center justify-between border-b border-solid border-[#1c1c1a] pb-1 gap-2">
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[500] leading-[14px] text-[#1c1c1a]">
              Leoul Zerihun — subjects, continued
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[400] leading-[12px] tracking-[0.15em] text-[#8a8a84] uppercase mobile:hidden">
              x-ref 2/2
            </span>
          </div>

          {/* Data & Tooling */}
          <div className="flex w-full items-start gap-3 border-b border-solid border-[#c7d7ef] py-1.5 tablet:py-3 phone:flex-col phone:gap-1 tablet:flex-row tablet:gap-4">
            <div className="flex w-20 tablet:w-24 flex-none flex-col items-start">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[10.5px] font-[600] leading-[13px] tracking-[0.12em] text-[#c0392b] uppercase">
                DATA
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] tablet:text-[14px] font-[600] leading-[16px] text-[#1c1c1a]">
                Databases
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-1 tablet:gap-1.5">
              {['PostgreSQL', 'openGauss', 'Prisma ORM', 'Relational Modeling'].map((item) => (
                <div key={item} className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#fbf8f0] px-1.5 py-0.5 tablet:px-2.5 tablet:py-1 transition-all duration-200 hover:border-[#c0392b] hover:bg-[#ffffff]">
                  <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] text-[#3a3a36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment */}
          <div className="flex w-full items-start gap-3 border-b border-solid border-[#c7d7ef] py-1.5 tablet:py-2.5 phone:flex-col phone:gap-1 tablet:flex-row tablet:gap-4">
            <div className="flex w-20 tablet:w-24 flex-none flex-col items-start">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[10.5px] font-[600] leading-[13px] tracking-[0.12em] text-[#c0392b] uppercase">
                DEPLOY
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] tablet:text-[14px] font-[600] leading-[16px] text-[#1c1c1a]">
                Deploy
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-1 tablet:gap-1.5">
              {['Vercel', 'Render', 'CI/CD', 'GitHub Actions'].map((item) => (
                <div key={item} className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#fbf8f0] px-1.5 py-0.5 tablet:px-2.5 tablet:py-1 transition-all duration-200 hover:border-[#c0392b] hover:bg-[#ffffff]">
                  <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] text-[#3a3a36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Environment & Tooling */}
          <div className="flex w-full items-start gap-3 py-1.5 tablet:py-2.5 phone:flex-col phone:gap-1 tablet:flex-row tablet:gap-4">
            <div className="flex w-20 tablet:w-24 flex-none flex-col items-start">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[10.5px] font-[600] leading-[13px] tracking-[0.12em] text-[#c0392b] uppercase">
                ENV
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] tablet:text-[14px] font-[600] leading-[16px] text-[#1c1c1a]">
                Tools &amp; DevOps
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-1 tablet:gap-1.5">
              {['Linux / Ubuntu', 'Git & GitHub', 'Docker', 'Postman', 'Figma', 'Bash'].map((item) => (
                <div key={item} className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#fbf8f0] px-1.5 py-0.5 tablet:px-2.5 tablet:py-1 transition-all duration-200 hover:border-[#c0392b] hover:bg-[#ffffff]">
                  <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] text-[#3a3a36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Most Used / Circulation section */}
        <div className="flex w-full flex-col items-start gap-1 tablet:gap-1.5 mt-auto pt-1.5 tablet:pt-2">
          <div className="flex w-full items-center justify-between border-b border-solid border-[#1c1c1a] pb-1">
            <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[600] leading-[13px] tracking-[0.2em] text-[#c0392b] uppercase">
              Most used
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[400] leading-[12px] tracking-[0.1em] text-[#8a8a84] uppercase">
              Circulation
            </span>
          </div>

          <div className="flex w-full flex-col items-start gap-0.5 tablet:gap-1">
            <div className="flex w-full items-center justify-between">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] text-[#1c1c1a]">
                React
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[400] leading-[12px] text-[#8a8a84]">
                ●●●●●
              </span>
            </div>
            <div className="flex h-1 tablet:h-1.5 w-full flex-none items-start rounded-[1px] bg-[#ece5d3]">
              <div className="flex h-1 tablet:h-1.5 items-start rounded-[1px] bg-[#c0392b] w-[94%]" />
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-0.5 tablet:gap-1">
            <div className="flex w-full items-center justify-between">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] text-[#1c1c1a]">
                Node.js / Express
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[400] leading-[12px] text-[#8a8a84]">
                ●●●●○
              </span>
            </div>
            <div className="flex h-1 tablet:h-1.5 w-full flex-none items-start rounded-[1px] bg-[#ece5d3]">
              <div className="flex h-1 tablet:h-1.5 items-start rounded-[1px] bg-[#c0392b] w-[86%]" />
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-0.5 tablet:gap-1">
            <div className="flex w-full items-center justify-between">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] text-[#1c1c1a]">
                FastAPI / Python
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[400] leading-[12px] text-[#8a8a84]">
                ●●●●○
              </span>
            </div>
            <div className="flex h-1 tablet:h-1.5 w-full flex-none items-start rounded-[1px] bg-[#ece5d3]">
              <div className="flex h-1 tablet:h-1.5 items-start rounded-[1px] bg-[#c0392b] w-[78%]" />
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-0.5 tablet:gap-1">
            <div className="flex w-full items-center justify-between">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] text-[#1c1c1a]">
                PostgreSQL
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[400] leading-[12px] text-[#8a8a84]">
                ●●●○○
              </span>
            </div>
            <div className="flex h-1 tablet:h-1.5 w-full flex-none items-start rounded-[1px] bg-[#ece5d3]">
              <div className="flex h-1 tablet:h-1.5 items-start rounded-[1px] bg-[#c0392b] w-[65%]" />
            </div>
          </div>
        </div>

        <button
          onClick={() => goToChapter('O', 1)}
          className="flex w-full items-end justify-between pl-10 pr-10 pt-2 grow gap-4 text-left cursor-pointer hover:text-[#c0392b]"
        >
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[500] leading-[14px] text-[#c0392b] hover:text-[#a83226]">
            next: O · Off Duty, page 18 →
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            16
          </span>
        </button>

        {/* Mobile Page Curl (Bottom Left - Turn back to Page 1) */}
        <button
          onClick={() => goToChapter('S', 1)}
          title="Turn back to Page 1 (Languages & Stack)"
          className="mobile:flex lg:hidden flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />

        {/* Bottom Right Page Curl */}
        <button
          onClick={() => goToChapter('O', 1)}
          title="Turn to Chapter O (Page 18)"
          className="flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />
      </article>
    </>
  );
}


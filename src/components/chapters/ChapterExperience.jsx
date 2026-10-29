import { CERT_DATA } from '../../data/certData';

export default function ChapterExperience({ goToChapter, onOpenCert, mobilePage = 1 }) {
  return (
    <>
      {/* Left Page (Experience) */}
      <article className={`${mobilePage === 1 ? 'flex' : 'hidden'} lg:flex w-full phone:w-full phone:basis-auto phone:grow-0 phone:shrink-0 phone:h-auto phone:overflow-visible phone:rounded-[3px] phone:px-4 phone:py-4 tablet:h-full tablet:min-h-[640px] tablet:max-h-[820px] tablet:w-full tablet:rounded-[3px] tablet:px-8 tablet:py-6 tablet:justify-between tablet:overflow-y-auto lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-l-[3px] lg:rounded-r-none lg:px-7 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[inset_1px_0px_0px_0px_#e2dac6,-2px_0px_0px_0px_#ede6d3,-4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-full items-start bg-[linear-gradient(to_left,#0000002e,#00000010_30%,transparent)] absolute top-0 right-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            Chapter E
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            Leoul Zerihun
          </span>
        </div>

        <div className="flex w-full items-end gap-2.5 pb-1">
          <span className="font-['Inter'] text-[48px] font-[400] leading-[42px] text-[#c0392b] phone:text-[40px] phone:leading-[36px] tablet:text-[54px] tablet:leading-[46px]">
            E
          </span>
          <div className="flex flex-col items-start pb-0.5">
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[400] leading-[11px] tracking-[0.2em] text-[#8a8a84] uppercase">
              Chapter E · 2 entries
            </span>
            <h1 className="font-['Instrument_Sans'] text-[26px] font-[600] leading-[30px] tracking-[-0.03em] text-[#1c1c1a] phone:text-[22px] phone:leading-[26px] tablet:text-[32px] tablet:leading-[36px]">
              Experience
            </h1>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-0.5 pb-2">
          <div className="flex h-px w-full flex-none items-start bg-[#1c1c1a]" />
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] text-[#6b6b66] pt-0.5">
            Simulations, programs and hands-on training — filed in order.
          </span>
        </div>

        <div className="flex w-full flex-col items-start gap-2 tablet:gap-3 tablet:pt-1 pr-1 mobile:px-0">
          
          {/* EXP 001 */}
          <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-3.5 pt-2 pb-2 tablet:px-5 tablet:py-3 shadow-[0px_1px_0px_0px_#ede6d3,0px_4px_10px_-3px_#5a1f1a20] -rotate-[0.4deg] relative transition-all duration-300 hover:rotate-0">
            <div className="flex w-full items-center justify-between border-b border-solid border-[#e3a39b] pb-1">
              <span className="font-['IBM_Plex_Mono'] text-[10px] tablet:text-[11px] font-[600] leading-[14px] tracking-[0.15em] text-[#c0392b] uppercase">
                EXP 001
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[400] leading-[13px] tracking-[0.12em] text-[#b8b3a6] uppercase">
                Filed · E.1
              </span>
            </div>
            <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-1 tablet:py-1.5 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 tablet:w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Role
              </span>
              <span className="font-['Instrument_Sans'] text-[13px] tablet:text-[15px] font-[600] leading-[17px] tablet:leading-[20px] text-[#1c1c1a] pr-20 mobile:pr-0">
                Software Engineer — Startup Job Simulation
              </span>
            </div>
            <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-1 tablet:py-1.5 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 tablet:w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Org
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] leading-[15px] text-[#1c1c1a]">
                Y Combinator × Forage · Sep 2026
              </span>
            </div>
            <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-1 tablet:py-1.5 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 tablet:w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Stack
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[500] leading-[13px] text-[#1f4fa3]">
                React · TypeScript · Node.js · REST APIs · Telemetry
              </span>
            </div>
            <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-1 tablet:py-1.5 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 tablet:w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Scope
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[14px] tablet:leading-[16px] text-[#3a3a36]">
                Delivered modular React/TypeScript interfaces and Node.js API enhancements, and tracked onboarding telemetry.
              </span>
            </div>
            <div className="flex w-full items-center justify-between pt-1 tablet:pt-1.5">
              <button
                onClick={() => onOpenCert?.(CERT_DATA[0])}
                className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[600] leading-[13px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer flex items-center gap-1"
                title="View verified Forage / YC certificate"
              >
                <span>View Certificate</span>
                <span>↗</span>
              </button>
              <a
                href="https://www.theforage.com"
                target="_blank"
                rel="noreferrer"
                className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[400] text-[#8a8a84] hover:text-[#1c1c1a]"
              >
                forage.com ↗
              </a>
            </div>
            <div className="flex flex-col items-center rounded-[3px] border border-solid border-[#c0392b] px-1.5 py-0.5 rotate-[6deg] opacity-85 absolute right-4 top-7 select-none pointer-events-none">
              <span className="font-['IBM_Plex_Mono'] text-[9px] font-[700] leading-[12px] tracking-[0.1em] text-[#c0392b]">
                COMPLETED
              </span>
            </div>
          </div>

          {/* EXP 002 */}
          <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-3.5 pt-2 pb-2 tablet:px-5 tablet:py-3 shadow-[0px_1px_0px_0px_#ede6d3,0px_4px_10px_-3px_#5a1f1a20] rotate-[0.4deg] relative transition-all duration-300 hover:rotate-0">
            <div className="flex w-full items-center justify-between border-b border-solid border-[#e3a39b] pb-1">
              <span className="font-['IBM_Plex_Mono'] text-[10px] tablet:text-[11px] font-[600] leading-[14px] tracking-[0.15em] text-[#c0392b] uppercase">
                EXP 002
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[400] leading-[13px] tracking-[0.12em] text-[#b8b3a6] uppercase">
                Filed · E.2
              </span>
            </div>
            <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-1 tablet:py-1.5 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 tablet:w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Role
              </span>
              <span className="font-['Instrument_Sans'] text-[13px] tablet:text-[15px] font-[600] leading-[17px] tablet:leading-[20px] text-[#1c1c1a] pr-20 mobile:pr-0">
                Summer Camp Participant — Development Department
              </span>
            </div>
            <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-1 tablet:py-1.5 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 tablet:w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Org
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] leading-[15px] text-[#1c1c1a]">
                INSA Summer Camp · Summer 2026
              </span>
            </div>
            <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-1 tablet:py-1.5 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 tablet:w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Stack
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[500] leading-[13px] text-[#1f4fa3]">
                Systems Architecture · C++ · Python · Linux · Git
              </span>
            </div>
            <div className="flex w-full gap-3 py-1 tablet:py-1.5 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 tablet:w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Scope
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[14px] tablet:leading-[16px] text-[#3a3a36]">
                Built an integrated team project in C++, Python, Linux and Git with clean architecture and code reviews.
              </span>
            </div>
            <div className="flex flex-col items-center rounded-[3px] border border-solid border-[#c0392b] px-1.5 py-0.5 -rotate-[5deg] opacity-85 absolute right-4 top-7 select-none pointer-events-none">
              <span className="font-['IBM_Plex_Mono'] text-[9px] font-[700] leading-[12px] tracking-[0.1em] text-[#c0392b]">
                PARTICIPANT
              </span>
            </div>
          </div>

        </div>

        {/* Engineering Foundations Ledger (Balanced to fill page like Chapter A) */}
        <div className="flex w-full flex-col items-start border-t border-solid border-[#c7d7ef] mt-auto pt-1 tablet:pt-2">
          <div className="flex w-full items-baseline justify-between pb-0.5">
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[600] tracking-[0.12em] text-[#c0392b] uppercase">
              Engineering Foundations · Key Focus
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8px] tablet:text-[9px] text-[#8a8a84] uppercase">
              Overview
            </span>
          </div>
          <div className="flex w-full gap-2 border-b border-solid border-[#c7d7ef] py-1 items-baseline">
            <span className="w-20 tablet:w-24 flex-none font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[600] text-[#1c1c1a] uppercase">
              Architecture
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] leading-[13px] tablet:leading-[15px] text-[#3a3a36]">
              Modular system design, RESTful microservices, relational data schemas, and clean architectural separation.
            </span>
          </div>
          <div className="flex w-full gap-2 py-1 items-baseline">
            <span className="w-20 tablet:w-24 flex-none font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[600] text-[#1c1c1a] uppercase">
              Execution
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] leading-[13px] tablet:leading-[15px] text-[#3a3a36]">
              Continuous integration, git branching workflows, daily algorithmic problem solving, and reliable shipping.
            </span>
          </div>
        </div>

        <div className="flex w-full items-end justify-between pl-8 pr-10 pt-2 grow gap-4">
          <button
            onClick={() => goToChapter('A', 1)}
            className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[14px] tracking-wider text-[#8a8a84] hover:text-[#c0392b] cursor-pointer"
          >
            ← back to contents
          </button>
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            1
          </span>
        </div>

        {/* Bottom Left Page Curl */}
        <button
          onClick={() => goToChapter('A', 1)}
          title="Turn back to Contents (Page i)"
          className="flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />

        {/* Mobile Page Curl (Bottom Right - Turn to Page 2) */}
        <button
          onClick={() => goToChapter('E', 2)}
          title="Turn to Page 2 (Certifications)"
          className="mobile:flex lg:hidden flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />
      </article>

      {/* Right Page (Certifications) */}
      <article className={`${mobilePage === 2 ? 'flex' : 'hidden'} lg:flex w-full phone:w-full phone:basis-auto phone:grow-0 phone:shrink-0 phone:h-auto phone:overflow-visible phone:rounded-[3px] phone:px-4 phone:py-4 tablet:h-full tablet:min-h-[640px] tablet:max-h-[820px] tablet:w-full tablet:rounded-[3px] tablet:px-8 tablet:py-6 tablet:justify-between tablet:overflow-y-auto lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-r-[3px] lg:rounded-l-none lg:pl-7 lg:pr-10 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[2px_0px_0px_0px_#ede6d3,4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-12 items-start bg-[linear-gradient(to_right,#00000033,#00000012_30%,transparent)] absolute top-0 left-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            A portfolio
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            Experience &amp; Certifications
          </span>
        </div>

        <div className="flex w-full items-end justify-between pb-1.5 gap-4">
          <h2 className="font-['Instrument_Sans'] text-[24px] tablet:text-[28px] font-[600] leading-[28px] tablet:leading-[32px] tracking-[-0.02em] text-[#1c1c1a]">
            Certifications
          </h2>
          <span className="font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10.5px] font-[400] leading-[14px] tracking-[0.15em] text-[#8a8a84] uppercase">
            6 credentials
          </span>
        </div>

        <div className="flex w-full flex-col items-start border-t border-solid border-[#1c1c1a]">
          {CERT_DATA.map((cert, idx) => (
            <div 
              key={cert.id}
              className="flex w-full items-center gap-2 border-b border-solid border-[#c7d7ef] py-1 tablet:py-2.5 tablet:px-2 transition-all duration-300 hover:bg-[#f3ecdc] px-1 rounded-[2px]"
            >
              <div 
                className={`flex h-5 w-5 flex-none items-center justify-center rounded-[9999px] border border-solid border-[#c0392b] text-[11px] text-[#c0392b] opacity-85 ${
                  idx % 2 === 0 ? '-rotate-[6deg]' : 'rotate-[6deg]'
                }`}
              >
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <div className="flex grow shrink-0 basis-0 flex-col items-start">
                <span className="font-['Instrument_Sans'] text-[12.5px] tablet:text-[14px] font-[600] leading-[16px] tablet:leading-[18px] text-[#1c1c1a]">
                  {cert.title}
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] tablet:leading-[15px] text-[#6b6b66]">
                  {cert.issuer} · {cert.date}
                </span>
              </div>

              <button
                onClick={() => onOpenCert(cert)}
                className="flex items-center transition-all duration-300 hover:translate-x-1 cursor-pointer"
              >
                <span className="font-['IBM_Plex_Mono'] text-[10px] tablet:text-[11.5px] font-[600] leading-[13px] text-[#1f4fa3] underline hover:text-[#c0392b]">
                  verify →
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Credential Verification Ledger (fills the page evenly matching Chapter A) */}
        <div className="flex w-full flex-col items-start gap-1 mt-auto pt-1.5 tablet:pt-2 border-t border-dashed border-[#c7d7ef]">
          <div className="flex w-full items-baseline justify-between">
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[600] tracking-[0.12em] text-[#c0392b] uppercase">
              Continuous Credential Verification
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8px] tablet:text-[9px] text-[#8a8a84] uppercase">
              Verified 2026
            </span>
          </div>
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] leading-[13px] tablet:leading-[15px] text-[#3a3a36]">
            All 6 credentials verified through official examination boards, covering relational database engineering, backend systems, and modern networking. Click "verify →" on any credential to inspect.
          </span>
          <button
            onClick={() => goToChapter('P', 1)}
            className="flex w-full items-center gap-1.5 pt-0.5 text-left cursor-pointer group"
          >
            <span className="font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[600] text-[#c0392b] uppercase">
              Next →
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10px] tablet:text-[11.5px] font-[500] text-[#1c1c1a] group-hover:text-[#c0392b] underline">
              Chapter P — Projects, page 7
            </span>
          </button>
        </div>

        <div className="flex w-full items-end justify-end gap-4 pt-1 pl-10 pr-10">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            2
          </span>
        </div>

        {/* Mobile Page Curl (Bottom Left - Turn back to Page 1) */}
        <button
          onClick={() => goToChapter('E', 1)}
          title="Turn back to Page 1 (Experience)"
          className="mobile:flex lg:hidden flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />

        {/* Bottom Right Page Curl */}
        <button
          onClick={() => goToChapter('P', 1)}
          title="Turn to Chapter P (Page 7)"
          className="flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />
      </article>
    </>
  );
}


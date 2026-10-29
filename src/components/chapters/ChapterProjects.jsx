export default function ChapterProjects({ goToChapter, mobilePage = 1 }) {
  return (
    <>
      {/* Left Page (Projects 001 & 002: Hulu Rent & DeskFlow) */}
      <article className={`${mobilePage === 1 ? 'flex' : 'hidden'} lg:flex w-full phone:w-full phone:basis-auto phone:grow-0 phone:shrink-0 phone:h-auto phone:overflow-visible phone:rounded-[3px] phone:px-4 phone:py-4 tablet:h-full tablet:min-h-[640px] tablet:max-h-[820px] tablet:w-full tablet:rounded-[3px] tablet:px-8 tablet:py-6 tablet:justify-between tablet:overflow-y-auto lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-l-[3px] lg:rounded-r-none lg:px-7 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[inset_1px_0px_0px_0px_#e2dac6,-2px_0px_0px_0px_#ede6d3,-4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-full items-start bg-[linear-gradient(to_left,#0000002e,#00000010_30%,transparent)] absolute top-0 right-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            Chapter P
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            Leoul Zerihun
          </span>
        </div>

        <div className="flex w-full items-end gap-3 border-b border-solid border-[#1c1c1a] pb-1.5">
          <span className="font-['Inter'] text-[52px] font-[400] leading-[46px] text-[#c0392b] phone:text-[44px] phone:leading-[38px] tablet:text-[56px] tablet:leading-[48px]">
            P
          </span>
          <div className="flex flex-col items-start pb-0.5">
            <h1 className="font-['Instrument_Sans'] text-[28px] font-[600] leading-[32px] tracking-[-0.03em] text-[#1c1c1a] phone:text-[24px] phone:leading-[28px] tablet:text-[34px] tablet:leading-[38px]">
              Projects
            </h1>
            <span className="font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10.5px] font-[400] leading-[13px] tracking-[0.2em] text-[#8a8a84] uppercase">
              Entries 001 — 002 · 2026
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-2 tablet:gap-3 pt-1.5 tablet:pt-2">
          
          {/* PRJ 001: Hulu Rent */}
          <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-3.5 pt-2 pb-2 tablet:px-5 tablet:py-3 shadow-[0px_1px_0px_0px_#ede6d3,0px_4px_10px_-3px_#5a1f1a14] relative transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex w-full items-center justify-between border-b border-solid border-[#e3a39b] pb-1">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[600] leading-[13px] tracking-[0.15em] text-[#c0392b] uppercase">
                PRJ 001.HR
              </span>
              <span className="rounded-full bg-[#fcedea] px-1.5 py-0.5 font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[600] tracking-[0.08em] text-[#c0392b] uppercase">
                Featured Work ★
              </span>
            </div>
            <div className="flex items-baseline justify-between w-full pt-1">
              <h2 className="font-['Instrument_Sans'] text-[16px] tablet:text-[18px] font-[600] leading-[20px] tablet:leading-[23px] text-[#1c1c1a]">
                Hulu Rent
              </h2>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[400] text-[#8a8a84] truncate max-w-[150px] mobile:hidden">
                hulu-rent-frontend.vercel.app
              </span>
            </div>
            <div className="flex w-full flex-col items-start border-t border-solid border-[#c7d7ef] pt-1 mt-1">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[600] leading-[13px] text-[#1f4fa3]">
                React · Node.js · Express · PostgreSQL · Tailwind · JWT
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] tablet:leading-[15px] text-[#3a3a36] pt-0.5">
                Full-featured property rental platform connecting tenants and property owners: multi-criteria search, JWT authentication, and owner dashboard.
              </span>
              <div className="flex flex-col gap-0.5 pt-1 text-[#555550] font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10.5px]">
                <span>• Rental marketplace with real-time multi-criteria search, map view, role-based auth, booking flow and owner dashboard.</span>
                <span>• Secure JWT authentication, user profile management &amp; listing administration.</span>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1.5 tablet:pt-2">
              <a
                href="https://hulu-rent-frontend.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#c0392b] bg-[#c0392b] px-2 py-0.5 tablet:px-3 tablet:py-1 text-[9.5px] tablet:text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white hover:bg-[#a83226] transition-colors"
              >
                Live ↗
              </a>
              <a
                href="https://github.com/Leoul-Z/HuluRent"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#1c1c1a] bg-white px-2 py-0.5 tablet:px-3 tablet:py-1 text-[9.5px] tablet:text-[11px] font-['IBM_Plex_Mono'] font-[600] text-[#1c1c1a] hover:bg-[#f6efe0] transition-colors"
              >
                Source ↗
              </a>
            </div>
          </div>

          {/* PRJ 002: DeskFlow */}
          <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-3.5 pt-2 pb-2 tablet:px-5 tablet:py-3 shadow-[0px_1px_0px_0px_#ede6d3,0px_4px_10px_-3px_#5a1f1a14] relative transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex w-full items-center justify-between border-b border-solid border-[#e3a39b] pb-1">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[600] leading-[13px] tracking-[0.15em] text-[#c0392b] uppercase">
                PRJ 002.DF
              </span>
              <span className="font-['Inter'] text-[10px] tablet:text-[11px] font-[600] text-[#c0392b]">
                favourite build ★
              </span>
            </div>
            <div className="flex items-baseline justify-between w-full pt-1">
              <h2 className="font-['Instrument_Sans'] text-[16px] tablet:text-[18px] font-[600] leading-[20px] tablet:leading-[23px] text-[#1c1c1a]">
                DeskFlow
              </h2>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[400] text-[#8a8a84] truncate max-w-[150px] mobile:hidden">
                helpdesk-one-rho.vercel.app
              </span>
            </div>
            <div className="flex w-full flex-col items-start border-t border-solid border-[#c7d7ef] pt-1 mt-1">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[600] leading-[13px] text-[#1f4fa3]">
                React · Express · Prisma · PostgreSQL · JWT · Tailwind CSS
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] tablet:leading-[15px] text-[#6b6b66] pt-0.5">
                Full-stack helpdesk ticketing system with role-based workflows for employees, technical staff and managers with audit logs and status queues.
              </span>
              <div className="flex flex-col gap-0.5 pt-1 text-[#555550] font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10.5px]">
                <span>• Role-based ticket workflows with SLA timers, priority queues, immutable audit logs and automated notifications.</span>
                <span>• Real-time queue filtering and responsive interface for enterprise operations.</span>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1.5 tablet:pt-2">
              <a
                href="https://helpdesk-one-rho.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#c0392b] bg-[#c0392b] px-2 py-0.5 tablet:px-3 tablet:py-1 text-[9.5px] tablet:text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white hover:bg-[#a83226] transition-colors"
              >
                Live ↗
              </a>
              <a
                href="https://github.com/Leoul-Z/Helpdesk"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#1c1c1a] bg-white px-2 py-0.5 tablet:px-3 tablet:py-1 text-[9.5px] tablet:text-[11px] font-['IBM_Plex_Mono'] font-[600] text-[#1c1c1a] hover:bg-[#f6efe0] transition-colors"
              >
                Source ↗
              </a>
            </div>
          </div>

        </div>

        {/* Architecture Standards Ledger (fills the page evenly matching Chapter A) */}
        <div className="flex w-full flex-col items-start border-t border-solid border-[#c7d7ef] mt-auto pt-1 tablet:pt-2">
          <div className="flex w-full items-baseline justify-between pb-0.5">
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[600] tracking-[0.12em] text-[#c0392b] uppercase">
              Architecture &amp; Code Quality
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8px] tablet:text-[9px] text-[#8a8a84] uppercase">
              Standards
            </span>
          </div>
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] leading-[13px] tablet:leading-[15px] text-[#3a3a36]">
            Normalized relational database design, JWT-secured endpoints, type checking, and modular clean architecture across both projects.
          </span>
        </div>

        <div className="flex w-full items-end justify-between pl-8 pr-10 pt-2 grow gap-4">
          <button
            onClick={() => goToChapter('A', 1)}
            className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[14px] tracking-wider text-[#8a8a84] hover:text-[#c0392b] cursor-pointer"
          >
            ← back to contents
          </button>
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            7
          </span>
        </div>

        {/* Bottom Left Page Curl */}
        <button
          onClick={() => goToChapter('E', 2)}
          title="Turn back to Chapter E (Page 2)"
          className="flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />

        {/* Mobile Page Curl (Bottom Right - Turn to Page 2) */}
        <button
          onClick={() => goToChapter('P', 2)}
          title="Turn to Page 2 (Projects 003–004)"
          className="mobile:flex lg:hidden flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />
      </article>

      {/* Right Page (Projects 003 & 004: Petify & Didactic AI) */}
      <article className={`${mobilePage === 2 ? 'flex' : 'hidden'} lg:flex w-full phone:w-full phone:basis-auto phone:grow-0 phone:shrink-0 phone:h-auto phone:overflow-visible phone:rounded-[3px] phone:px-4 phone:py-4 tablet:h-full tablet:min-h-[640px] tablet:max-h-[820px] tablet:w-full tablet:rounded-[3px] tablet:px-8 tablet:py-6 tablet:justify-between tablet:overflow-y-auto lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-r-[3px] lg:rounded-l-none lg:pl-7 lg:pr-10 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[2px_0px_0px_0px_#ede6d3,4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-12 items-start bg-[linear-gradient(to_right,#00000033,#00000012_30%,transparent)] absolute top-0 left-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            A portfolio
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            Projects
          </span>
        </div>

        <div className="flex w-full items-center justify-between border-b border-solid border-[#1c1c1a] pb-1">
          <span className="font-['Instrument_Sans'] text-[14px] tablet:text-[18px] font-[600] leading-[18px] tablet:leading-[22px] text-[#1c1c1a]">
            Also catalogued
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10.5px] font-[400] leading-[13px] tracking-[0.15em] text-[#8a8a84] uppercase">
            003 — 004
          </span>
        </div>

        <div className="flex w-full flex-col items-start gap-2 tablet:gap-3 pt-1.5 tablet:pt-2">
          
          {/* PRJ 003: Petify */}
          <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-3.5 pt-2 pb-2 tablet:px-5 tablet:py-3 shadow-[0px_1px_0px_0px_#ede6d3,0px_4px_10px_-3px_#5a1f1a14] relative transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex w-full items-center justify-between border-b border-solid border-[#e3a39b] pb-1">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[600] leading-[13px] tracking-[0.15em] text-[#c0392b] uppercase">
                PRJ 003.PT
              </span>
              <span className="rounded-full bg-[#edf4ea] px-1.5 py-0.5 font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[600] tracking-[0.08em] text-[#2f5a2b] uppercase">
                E-Commerce &amp; Care
              </span>
            </div>
            <div className="flex items-baseline justify-between w-full pt-1">
              <h2 className="font-['Instrument_Sans'] text-[16px] tablet:text-[18px] font-[600] leading-[20px] tablet:leading-[23px] text-[#1c1c1a]">
                Petify
              </h2>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[400] text-[#8a8a84] truncate max-w-[150px] mobile:hidden">
                petify-plum.vercel.app
              </span>
            </div>
            <div className="flex w-full flex-col items-start border-t border-solid border-[#c7d7ef] pt-1 mt-1">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[600] leading-[13px] text-[#1f4fa3]">
                React · PHP · PostgreSQL · Tailwind CSS · REST API
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] tablet:leading-[15px] text-[#6b6b66] pt-0.5">
                Pet shop app with category filtering, cart checkout and service appointment booking for veterinary and grooming care.
              </span>
              <div className="flex flex-col gap-0.5 pt-1 text-[#555550] font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10.5px]">
                <span>• Product catalog with live filtering and cart checkout, plus vet and grooming appointment booking.</span>
                <span>• Veterinary service appointment booking with real-time schedule slots.</span>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1.5 tablet:pt-2">
              <a
                href="https://petify-plum.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#c0392b] bg-[#c0392b] px-2 py-0.5 tablet:px-3 tablet:py-1 text-[9.5px] tablet:text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white hover:bg-[#a83226] transition-colors"
              >
                Live ↗
              </a>
              <a
                href="https://github.com/Leoul-Z/Petify"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#1c1c1a] bg-white px-2 py-0.5 tablet:px-3 tablet:py-1 text-[9.5px] tablet:text-[11px] font-['IBM_Plex_Mono'] font-[600] text-[#1c1c1a] hover:bg-[#f6efe0] transition-colors"
              >
                Source ↗
              </a>
            </div>
          </div>

          {/* PRJ 004: Didactic AI */}
          <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-3.5 pt-2 pb-2 tablet:px-5 tablet:py-3 shadow-[0px_1px_0px_0px_#ede6d3,0px_4px_10px_-3px_#5a1f1a14] relative transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex w-full items-center justify-between border-b border-solid border-[#e3a39b] pb-1">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[600] leading-[13px] tracking-[0.15em] text-[#c0392b] uppercase">
                PRJ 004.DA
              </span>
              <span className="rounded-full bg-[#fcedea] px-1.5 py-0.5 font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[600] tracking-[0.08em] text-[#c0392b] uppercase">
                AWS Finalist ★
              </span>
            </div>
            <div className="flex items-baseline justify-between w-full pt-1">
              <h2 className="font-['Instrument_Sans'] text-[16px] tablet:text-[18px] font-[600] leading-[20px] tablet:leading-[23px] text-[#1c1c1a]">
                Didactic AI
              </h2>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[400] text-[#8a8a84] truncate max-w-[150px] mobile:hidden">
                didactic-ai-tau.vercel.app
              </span>
            </div>
            <div className="flex w-full flex-col items-start border-t border-solid border-[#c7d7ef] pt-1 mt-1">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[600] leading-[13px] text-[#1f4fa3]">
                React · FastAPI · Python · PostgreSQL · LLM evaluation pipelines
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[400] leading-[13px] tablet:leading-[15px] text-[#6b6b66] pt-0.5">
                Intelligent academic evaluation system featuring automated assessment, prompt engineering, and performance analytics.
              </span>
              <div className="flex flex-col gap-0.5 pt-1 text-[#555550] font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10.5px]">
                <span>• Automated rubric grading and student analytics on a low-latency async FastAPI backend.</span>
                <span>• AWS Hackathon Finalist architecture handling high-concurrency grading loads.</span>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-1.5 tablet:pt-2">
              <a
                href="https://didactic-ai-tau.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#c0392b] bg-[#c0392b] px-2 py-0.5 tablet:px-3 tablet:py-1 text-[9.5px] tablet:text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white hover:bg-[#a83226] transition-colors"
              >
                Live ↗
              </a>
              <a
                href="https://github.com/Leoul-Z"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#1c1c1a] bg-white px-2 py-0.5 tablet:px-3 tablet:py-1 text-[9.5px] tablet:text-[11px] font-['IBM_Plex_Mono'] font-[600] text-[#1c1c1a] hover:bg-[#f6efe0] transition-colors"
              >
                Source ↗
              </a>
            </div>
          </div>

        </div>

        {/* Deployment & CI/CD Ledger (fills the page evenly matching Chapter A) */}
        <div className="flex w-full flex-col items-start gap-1 mt-auto pt-1.5 tablet:pt-2 border-t border-dashed border-[#c7d7ef]">
          <div className="flex w-full items-baseline justify-between">
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[600] tracking-[0.12em] text-[#c0392b] uppercase">
              Production CI/CD &amp; Infrastructure
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8px] tablet:text-[9px] text-[#8a8a84] uppercase">
              Live Systems
            </span>
          </div>
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] leading-[13px] tablet:leading-[15px] text-[#3a3a36]">
            All projects deployed with responsive user interfaces, automated git push build checks, managed database instances, and sub-second cold starts.
          </span>
          <button
            onClick={() => goToChapter('H', 1)}
            className="flex w-full items-center gap-1.5 pt-0.5 text-left cursor-pointer group"
          >
            <span className="font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[600] text-[#c0392b] uppercase">
              Next →
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10px] tablet:text-[11.5px] font-[500] text-[#1c1c1a] group-hover:text-[#c0392b] underline">
              Chapter H — Hackathons, page 12
            </span>
          </button>
        </div>

        <div className="flex w-full items-end justify-end gap-4 pt-1 pl-10 pr-10">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            8
          </span>
        </div>

        {/* Mobile Page Curl (Bottom Left - Turn back to Page 1) */}
        <button
          onClick={() => goToChapter('P', 1)}
          title="Turn back to Page 1 (Projects 001–002)"
          className="mobile:flex lg:hidden flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />

        {/* Bottom Right Page Curl */}
        <button
          onClick={() => goToChapter('H', 1)}
          title="Turn to Chapter H (Page 12)"
          className="flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />
      </article>
    </>
  );
}


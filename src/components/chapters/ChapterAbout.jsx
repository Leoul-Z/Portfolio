import leoulCvPdf from '../../assets/LZ_CV.2026.pdf';

export default function ChapterAbout({ goToChapter, mobilePage = 1 }) {
  return (
    <>
      {/* Left Page (Author Card) */}
      <article className={`${mobilePage === 1 ? 'flex' : 'hidden'} lg:flex w-full phone:w-full phone:basis-auto phone:grow-0 phone:shrink-0 phone:h-auto phone:overflow-visible phone:rounded-[3px] phone:px-4 phone:py-4 tablet:h-full tablet:min-h-[640px] tablet:max-h-[820px] tablet:w-full tablet:rounded-[3px] tablet:px-8 tablet:py-6 tablet:justify-between tablet:overflow-y-auto lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-l-[3px] lg:rounded-r-none lg:px-7 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[inset_1px_0px_0px_0px_#e2dac6,-2px_0px_0px_0px_#ede6d3,-4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-full items-start bg-[linear-gradient(to_left,#0000002e,#00000010_30%,transparent)] absolute top-0 right-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            About
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            Leoul Zerihun
          </span>
        </div>

        <div className="flex w-full items-start justify-between gap-3 relative">
          <div className="flex flex-col items-start">
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[500] leading-[11px] tracking-[0.2em] text-[#8a8a84] uppercase">
              Author card · No. 0001
            </span>
            <h1 className="font-['Instrument_Sans'] text-[28px] font-[600] leading-[31px] tracking-[-0.03em] text-[#1c1c1a] phone:text-[24px] phone:leading-[28px] tablet:text-[34px] tablet:leading-[38px]">
              Leoul Zerihun
            </h1>
            <span className="font-['IBM_Plex_Mono'] text-[11px] font-[600] leading-[15px] text-[#c0392b] tablet:text-[13px] tablet:leading-[18px]">
              Software Engineer | B.Sc. &amp; M.Sc. Student
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[13px] text-[#6b6b66] tablet:text-[11.5px] tablet:leading-[16px]">
              Addis Ababa, Ethiopia · Systems &amp; Full-Stack Builder
            </span>
          </div>
          <div className="flex flex-col items-end border-l-2 border-solid border-[#1f2a44] pl-2 flex-none">
            <span className="font-['IBM_Plex_Mono'] text-[8px] font-[500] leading-[10px] tracking-[0.15em] text-[#8a8a84] uppercase">
              Call no.
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[13px] font-[700] leading-[16px] text-[#1f2a44] tablet:text-[16px] tablet:leading-[20px]">
              ENG
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[13px] font-[700] leading-[16px] text-[#1f2a44] tablet:text-[16px] tablet:leading-[20px]">
              026.LZ
            </span>
          </div>
        </div>

        <div className="flex w-full items-center justify-between py-1 tablet:py-2.5 mobile:flex-col mobile:items-start mobile:gap-1">
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11.5px] font-[400] text-[#555550] italic">
            "Turning complex systems into reliable, high-performance software."
          </span>
          <div className="flex flex-col items-center rounded-[3px] border-[1.5px] border-solid border-[#c0392b] px-1.5 py-0.5 -rotate-[3deg] opacity-90 select-none pointer-events-none flex-none shadow-sm">
            <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[700] leading-[12px] tracking-[0.08em] text-[#c0392b]">
              OPEN TO WORK
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[7px] font-[500] leading-[8px] tracking-[0.2em] text-[#c0392b] uppercase">
              Roles &amp; Internships
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col items-start border-t border-solid border-[#c7d7ef]">
          
          {/* Who I Am / Summary */}
          <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 phone:flex-col phone:gap-0.5 tablet:flex-row tablet:gap-4 tablet:py-2.5 items-baseline">
            <span className="w-20 tablet:w-24 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[600] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
              Summary
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] leading-[15px] tablet:leading-[17px] text-[#1c1c1a]">
              Software Engineering student and full-stack developer with a strong foundation in modern front-end interfaces and secure back-end systems. Analytical problem solver seeking to build reliable, scalable software within a high-performing engineering team.
            </span>
          </div>

          {/* Academic & Training */}
          <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 phone:flex-col phone:gap-0.5 tablet:flex-row tablet:gap-4 tablet:py-2.5 items-baseline">
            <span className="w-20 tablet:w-24 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[600] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
              Education
            </span>
            <div className="flex flex-col gap-0.5 font-['IBM_Plex_Mono'] text-[10px] tablet:text-[11.5px] leading-[14px] tablet:leading-[17px] text-[#2c2c28]">
              <span><strong className="font-[600] text-[#1c1c1a]">B.Sc. in Software Engineering</strong> — Addis Ababa, Ethiopia (Expected 2028).</span>
              <span><strong className="font-[600] text-[#1c1c1a]">M.Sc. in Software Development</strong> — Addis Ababa, Ethiopia (Expected 2029).</span>
              <span><strong className="font-[600] text-[#1c1c1a]">Back-End Web Development with Django</strong> — ALX Ethiopia.</span>
            </div>
          </div>

          {/* What I Build */}
          <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 phone:flex-col phone:gap-0.5 tablet:flex-row tablet:gap-4 tablet:py-2.5 items-baseline">
            <span className="w-20 tablet:w-24 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[600] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
              What I Build
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10px] tablet:text-[11.5px] font-[400] leading-[14px] tablet:leading-[17px] text-[#2c2c28]">
              Full-stack web applications, scalable backends, distributed APIs, and cross-platform mobile apps.
            </span>
          </div>

          {/* Work Ethic & Problem Solving */}
          <div className="flex w-full gap-2.5 py-1 phone:flex-col phone:gap-0.5 tablet:flex-row tablet:gap-4 tablet:py-2.5 items-baseline">
            <span className="w-20 tablet:w-24 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[600] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
              Work Ethic
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10px] tablet:text-[11.5px] font-[400] leading-[14px] tablet:leading-[17px] text-[#3a3a36]">
              Methodical, curious, and disciplined. I practice algorithmic problem solving daily on LeetCode (@Nasi4Z) and value clean architecture, testable code, and reliable delivery.
            </span>
          </div>

        </div>

        <div className="flex w-full items-end pt-1 grow">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] text-[#8a8a84]">
            i
          </span>
        </div>

        {/* Mobile Page Curl (Bottom Right - Turn to Page 2) */}
        <button
          onClick={() => goToChapter('A', 2)}
          title="Turn to Page 2 (Contents & Reach)"
          className="mobile:flex lg:hidden flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />
      </article>

      {/* Right Page (Contents & Contact) */}
      <article className={`${mobilePage === 2 ? 'flex' : 'hidden'} lg:flex w-full phone:w-full phone:basis-auto phone:grow-0 phone:shrink-0 phone:h-auto phone:overflow-visible phone:rounded-[3px] phone:px-4 phone:py-4 tablet:h-full tablet:min-h-[640px] tablet:max-h-[820px] tablet:w-full tablet:rounded-[3px] tablet:px-8 tablet:py-6 tablet:justify-between tablet:overflow-y-auto lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-r-[3px] lg:rounded-l-none lg:pl-7 lg:pr-10 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[2px_0px_0px_0px_#ede6d3,4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-12 items-start bg-[linear-gradient(to_right,#00000033,#00000012_30%,transparent)] absolute top-0 left-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            A portfolio
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            Contents
          </span>
        </div>

        <div className="flex items-baseline justify-between w-full pb-0.5">
          <h2 className="font-['Instrument_Sans'] text-[22px] tablet:text-[26px] font-[600] leading-[26px] tablet:leading-[30px] tracking-[-0.02em] text-[#1c1c1a]">
            Contents
          </h2>
          <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[500] tracking-[0.15em] text-[#8a8a84] uppercase">
            Six Chapters
          </span>
        </div>

        {/* Table of contents chapters with clean vertical spacing */}
        <div className="flex w-full flex-col gap-1 tablet:gap-2 pt-0.5 pb-1">
          
          <button
            onClick={() => goToChapter('A', 1)}
            className="flex w-full items-center gap-2 rounded-[3px] border border-solid border-[#d8cfb8] bg-[#f3ecdc] px-2.5 py-1 tablet:py-2 tablet:px-3.5 transition-all duration-300 hover:bg-[#efe4cc] hover:pl-3 text-left cursor-pointer"
          >
            <div className="flex h-1.5 w-1.5 flex-none items-center justify-center rounded-[9999px] bg-[#c0392b]" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[600] text-[#c0392b] w-3">
              A
            </span>
            <span className="font-['Instrument_Sans'] text-[12.5px] tablet:text-[14px] font-[600] text-[#1c1c1a]">
              About
            </span>
            <div className="flex h-0 items-start grow border-b-2 border-dotted border-[#b8b3a6] mx-1" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[600] text-[#c0392b]">
              i
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[7.5px] tablet:text-[9px] font-[500] tracking-[0.15em] text-[#c0392b] uppercase">
              here
            </span>
          </button>

          <button
            onClick={() => goToChapter('E', 1)}
            className="flex w-full items-center gap-2 rounded-[3px] border border-solid border-[#e8e2d2] bg-[#fffdfa] px-2.5 py-1 tablet:py-2 tablet:px-3.5 transition-all duration-300 hover:border-[#b7c0c9] hover:bg-[#f0f3f6] hover:pl-3 text-left cursor-pointer group"
          >
            <div className="flex h-1.5 w-1.5 flex-none rounded-full bg-[#7d8a99] opacity-70" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[600] text-[#4a5562] w-3">
              E
            </span>
            <span className="font-['Instrument_Sans'] text-[12.5px] tablet:text-[14px] font-[600] text-[#1c1c1a] group-hover:text-[#c0392b]">
              Experience &amp; Certifications
            </span>
            <div className="flex h-0 items-start grow border-b-2 border-dotted border-[#b8b3a6] mx-1" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] text-[#1c1c1a]">
              1
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] text-[#c0392b]">
              →
            </span>
          </button>

          <button
            onClick={() => goToChapter('P', 1)}
            className="flex w-full items-center gap-2 rounded-[3px] border border-solid border-[#e8e2d2] bg-[#fffdfa] px-2.5 py-1 tablet:py-2 tablet:px-3.5 transition-all duration-300 hover:border-[#d8cfae] hover:bg-[#f8f5eb] hover:pl-3 text-left cursor-pointer group"
          >
            <div className="flex h-1.5 w-1.5 flex-none rounded-full bg-[#b8a878] opacity-70" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[600] text-[#5c5440] w-3">
              P
            </span>
            <span className="font-['Instrument_Sans'] text-[12.5px] tablet:text-[14px] font-[600] text-[#1c1c1a] group-hover:text-[#c0392b]">
              Projects
            </span>
            <div className="flex h-0 items-start grow border-b-2 border-dotted border-[#b8b3a6] mx-1" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] text-[#1c1c1a]">
              7
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] text-[#c0392b]">
              →
            </span>
          </button>

          <button
            onClick={() => goToChapter('H', 1)}
            className="flex w-full items-center gap-2 rounded-[3px] border border-solid border-[#e8e2d2] bg-[#fffdfa] px-2.5 py-1 tablet:py-2 tablet:px-3.5 transition-all duration-300 hover:border-[#e8c4ae] hover:bg-[#faf0ea] hover:pl-3 text-left cursor-pointer group"
          >
            <div className="flex h-1.5 w-1.5 flex-none rounded-full bg-[#d49a7a] opacity-70" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[600] text-[#6e3f26] w-3">
              H
            </span>
            <span className="font-['Instrument_Sans'] text-[12.5px] tablet:text-[14px] font-[600] text-[#1c1c1a] group-hover:text-[#c0392b]">
              Hackathons
            </span>
            <div className="flex h-0 items-start grow border-b-2 border-dotted border-[#b8b3a6] mx-1" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] text-[#1c1c1a]">
              12
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] text-[#c0392b]">
              →
            </span>
          </button>

          <button
            onClick={() => goToChapter('S', 1)}
            className="flex w-full items-center gap-2 rounded-[3px] border border-solid border-[#e8e2d2] bg-[#fffdfa] px-2.5 py-1 tablet:py-2 tablet:px-3.5 transition-all duration-300 hover:border-[#bfcbe0] hover:bg-[#edf2f9] hover:pl-3 text-left cursor-pointer group"
          >
            <div className="flex h-1.5 w-1.5 flex-none rounded-full bg-[#8fa3c4] opacity-70" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[600] text-[#36435c] w-3">
              S
            </span>
            <span className="font-['Instrument_Sans'] text-[12.5px] tablet:text-[14px] font-[600] text-[#1c1c1a] group-hover:text-[#c0392b]">
              Stack
            </span>
            <div className="flex h-0 items-start grow border-b-2 border-dotted border-[#b8b3a6] mx-1" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] text-[#1c1c1a]">
              15
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] text-[#c0392b]">
              →
            </span>
          </button>

          <button
            onClick={() => goToChapter('O', 1)}
            className="flex w-full items-center gap-2 rounded-[3px] border border-solid border-[#e8e2d2] bg-[#fffdfa] px-2.5 py-1 tablet:py-2 tablet:px-3.5 transition-all duration-300 hover:border-[#9fc49a] hover:bg-[#edf5ec] hover:pl-3 text-left cursor-pointer group"
          >
            <div className="flex h-1.5 w-1.5 flex-none rounded-full bg-[#6fa468] opacity-70" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[600] text-[#2f5a2b] w-3">
              O
            </span>
            <span className="font-['Instrument_Sans'] text-[12.5px] tablet:text-[14px] font-[600] text-[#1c1c1a] group-hover:text-[#c0392b]">
              Off Duty
            </span>
            <div className="flex h-0 items-start grow border-b-2 border-dotted border-[#b8b3a6] mx-1" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] text-[#1c1c1a]">
              18
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] text-[#c0392b]">
              →
            </span>
          </button>

        </div>

        {/* Contact Block pushed lower down with mt-auto */}
        <div className="flex w-full flex-col items-start gap-0.5 mt-auto pt-1.5 tablet:pt-3 tablet:gap-1.5 border-t border-dashed border-[#c7d7ef]">
          <div className="flex items-baseline justify-between w-full">
            <span className="font-['Instrument_Sans'] text-[12.5px] tablet:text-[14px] font-[600] leading-[15px] text-[#1c1c1a]">
              Contact &amp; Inquiries
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[7.5px] tablet:text-[9px] font-[500] tracking-[0.15em] text-[#c0392b] uppercase">
              Direct Reach
            </span>
          </div>
          <a
            href="mailto:leoulzerihun06@gmail.com"
            className="font-['IBM_Plex_Mono'] text-[11px] tablet:text-[13px] font-[600] leading-[15px] tablet:leading-[18px] text-[#c0392b] underline break-all hover:text-[#a83226]"
          >
            leoulzerihun06@gmail.com
          </a>
          <div className="flex flex-wrap items-center gap-x-2.5 tablet:gap-x-4 gap-y-0.5 pt-0.5">
            <div className="flex gap-1 items-baseline">
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[500] leading-[13px] tracking-[0.08em] text-[#8a8a84] uppercase">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/leoul-zerihun-7a4414347"
                target="_blank"
                rel="noreferrer"
                className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[500] leading-[13px] text-[#1f4fa3] underline hover:text-[#c0392b]"
              >
                leoul-zerihun
              </a>
            </div>
            <div className="flex gap-1 items-baseline">
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[500] leading-[13px] tracking-[0.08em] text-[#8a8a84] uppercase">
                Telegram
              </span>
              <a
                href="https://t.me/leoniazz"
                target="_blank"
                rel="noreferrer"
                className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[500] leading-[13px] text-[#1f4fa3] underline hover:text-[#c0392b]"
              >
                @leoniazz
              </a>
            </div>
            <div className="flex gap-1 items-baseline">
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[500] leading-[13px] tracking-[0.08em] text-[#8a8a84] uppercase">
                GitHub
              </span>
              <a
                href="https://github.com/Leoul-Z"
                target="_blank"
                rel="noreferrer"
                className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[500] leading-[13px] text-[#1f4fa3] underline hover:text-[#c0392b]"
              >
                @Leoul-Z
              </a>
            </div>
            <div className="flex gap-1 items-baseline">
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[500] leading-[13px] tracking-[0.08em] text-[#8a8a84] uppercase">
                LeetCode
              </span>
              <a
                href="https://leetcode.com/u/Nasi4Z"
                target="_blank"
                rel="noreferrer"
                className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[500] leading-[13px] text-[#1f4fa3] underline hover:text-[#c0392b]"
              >
                u/Nasi4Z
              </a>
            </div>
            <div className="flex gap-1 items-baseline">
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[500] leading-[13px] tracking-[0.08em] text-[#8a8a84] uppercase">
                Resume
              </span>
              <a
                href={leoulCvPdf}
                download="LZ_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[600] leading-[13px] text-[#c0392b] underline hover:text-[#a83226]"
              >
                Download CV ↓
              </a>
            </div>
          </div>
        </div>

        <div className="flex w-full items-end justify-between pl-10 pr-10 pt-0.5 gap-4">
          <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] leading-[12px] tracking-wider text-[#8a8a84]">
            pick a tab to turn the page →
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] text-[#8a8a84]">
            ii
          </span>
        </div>

        {/* Mobile Page Curl (Bottom Left - Turn back to Page 1) */}
        <button
          onClick={() => goToChapter('A', 1)}
          title="Turn back to Page 1 (Author Card)"
          className="mobile:flex lg:hidden flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />

        {/* Page Curl Corner (Bottom Right - Turn to Chapter E) */}
        <button
          onClick={() => goToChapter('E', 1)}
          title="Turn to Chapter E (Page 1)"
          className="flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />
      </article>
    </>
  );
}


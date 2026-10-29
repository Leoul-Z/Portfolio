import mpesaHackathonImg from '../../assets/mpesa_hackathon.png';

export default function ChapterHackathons({ goToChapter, onOpenCert, mobilePage = 1 }) {
  return (
    <>
      {/* Left Page (HCK 001) */}
      <article className={`${mobilePage === 1 ? 'flex' : 'hidden'} lg:flex w-full phone:w-full phone:basis-auto phone:grow-0 phone:shrink-0 phone:h-auto phone:overflow-visible phone:rounded-[3px] phone:px-4 phone:py-4 tablet:h-full tablet:min-h-[640px] tablet:max-h-[820px] tablet:w-full tablet:rounded-[3px] tablet:px-8 tablet:py-6 tablet:justify-between tablet:overflow-y-auto lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-l-[3px] lg:rounded-r-none lg:px-7 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[inset_1px_0px_0px_0px_#e2dac6,-2px_0px_0px_0px_#ede6d3,-4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-full items-start bg-[linear-gradient(to_left,#0000002e,#00000010_30%,transparent)] absolute top-0 right-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            Chapter H
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            Leoul Zerihun
          </span>
        </div>

        <div className="flex w-full items-end gap-3 pb-1.5">
          <span className="font-['Instrument_Serif'] text-[56px] font-[400] leading-[48px] text-[#c0392b] phone:text-[46px] phone:leading-[40px] tablet:text-[60px] tablet:leading-[52px]">
            H
          </span>
          <div className="flex flex-col items-start pb-0.5">
            <h1 className="font-['Instrument_Sans'] text-[28px] font-[600] leading-[32px] tracking-[-0.03em] text-[#1c1c1a] phone:text-[24px] phone:leading-[28px] tablet:text-[34px] tablet:leading-[38px]">
              Hackathons
            </h1>
            <span className="font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10.5px] font-[400] leading-[13px] tracking-[0.2em] text-[#8a8a84] uppercase">
              weekend builds
            </span>
          </div>
        </div>

        <div className="flex w-full items-start gap-3 relative phone:flex-col tablet:flex-row tablet:gap-5 pt-1">
          {/* HCK 001 Card */}
          <div className="flex grow shrink-0 basis-0 flex-col items-start rounded-[2px] border border-solid border-[#e2dac6] bg-[#ffffff] shadow-[0px_1px_3px_0px_#0000001a] relative">
            <div className="flex w-full items-center justify-between border-b-2 border-solid border-[#c0392b] px-3.5 py-1 tablet:px-4 tablet:py-1.5">
              <span className="font-['IBM_Plex_Mono'] text-[10px] tablet:text-[11px] font-[600] leading-[14px] tracking-[0.15em] text-[#c0392b] uppercase">
                HCK 001
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[400] leading-[12px] tracking-[0.1em] text-[#8a8a84] uppercase">
                Entry card
              </span>
            </div>

            <div className="flex w-full flex-col items-start px-3.5 pb-2 tablet:px-4 tablet:pb-3">
              <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 tablet:py-2 items-baseline">
                <span className="w-12 tablet:w-14 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                  Event
                </span>
                <span className="font-['Instrument_Sans'] text-[13.5px] tablet:text-[15px] font-[600] leading-[17px] tablet:leading-[20px] text-[#1c1c1a]">
                  Cashless Community M-PESA Hackathon
                </span>
              </div>
              <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 tablet:py-2 items-baseline">
                <span className="w-12 tablet:w-14 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                  Date
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] leading-[15px] text-[#3a3a36]">
                  2026 · Addis Ababa
                </span>
              </div>
              <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 tablet:py-2 items-baseline">
                <span className="w-12 tablet:w-14 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                  Team
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] leading-[15px] text-[#3a3a36]">
                  Backend &amp; Mobile Developer
                </span>
              </div>
              <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 tablet:py-2 items-baseline">
                <span className="w-12 tablet:w-14 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                  Built
                </span>
                <span className="font-['Instrument_Sans'] text-[12px] tablet:text-[13.5px] font-[400] leading-[16px] tablet:leading-[19px] text-[#1c1c1a]">
                  E-Tourism Platform with Flutter &amp; FastAPI.
                </span>
              </div>
              <div className="flex w-full items-center justify-between pt-1.5 tablet:pt-2.5">
                <button
                  onClick={() => goToChapter('S', 1)}
                  className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[600] leading-[15px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer"
                >
                  Stack →
                </button>
                <button
                  onClick={() => onOpenCert?.({
                    title: "Cashless Community M-PESA Hackathon",
                    issuer: "Safaricom Ethiopia & M-PESA",
                    date: "2026 · Addis Ababa",
                    image: mpesaHackathonImg,
                    verifyUrl: null,
                    description: "Finalist team at the Cashless Community M-PESA Ethiopia Hackathon in Addis Ababa. Developed an E-Tourism Platform with Flutter & FastAPI."
                  })}
                  className="font-['IBM_Plex_Mono'] text-[10px] tablet:text-[11.5px] font-[600] leading-[15px] text-[#c0392b] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>View Photo</span>
                  <span>↗</span>
                </button>
              </div>
            </div>

            {/* Stamp Badge */}
            <div className="flex items-center justify-center rounded-[3px] bg-[#fbf8f0cc] px-2 py-0.5 border-[1.5px] border-double border-[#c0392b] absolute right-[-10px] bottom-[-8px] -rotate-12 opacity-90 select-none pointer-events-none">
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-[700] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Finalist
              </span>
            </div>
          </div>

          {/* Photo Sticker with Real Event Photo */}
          <div 
            onClick={() => onOpenCert?.({
              title: "Cashless Community M-PESA Hackathon",
              issuer: "Safaricom Ethiopia & M-PESA",
              date: "2026 · Addis Ababa",
              image: mpesaHackathonImg,
              verifyUrl: null,
              description: "Finalist team at the Cashless Community M-PESA Ethiopia Hackathon in Addis Ababa. Developed an E-Tourism Platform with Flutter & FastAPI."
            })}
            title="Click to expand event photo"
            className="flex w-32 tablet:w-44 flex-none flex-col items-center gap-1 bg-[#ffffff] px-1.5 pt-1.5 pb-2 tablet:p-2 shadow-[0px_3px_8px_0px_#00000024] rotate-2 relative mt-1 phone:mt-2 phone:self-center tablet:mt-0 cursor-pointer transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-20 group"
          >
            <div className="flex h-3.5 w-10 flex-none items-start bg-[#f2e6b8cc] shadow-[0px_1px_1px_0px_#0000001a] absolute -top-1.5 left-1/2 -translate-x-1/2 -rotate-6 z-10" />
            <div className="flex h-24 tablet:h-32 w-full flex-none overflow-hidden rounded-[1px] bg-[#1c1c1a] relative border border-[#e2dac6]">
              <img 
                src={mpesaHackathonImg} 
                alt="Cashless Community M-PESA Ethiopia Hackathon Finalists" 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-1 right-1 rounded bg-black/60 px-1 py-0.5 text-[7px] font-['IBM_Plex_Mono'] text-white">
                🔍 view
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="font-['Instrument_Serif'] text-[12.5px] tablet:text-[14px] font-[400] leading-[14px] text-[#1c1c1a] italic text-center">
                M-PESA Demo Day
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[8px] tablet:text-[9.5px] font-[500] text-[#8a8a84] tracking-[0.08em] uppercase">
                Addis Ababa · 2026
              </span>
            </div>
          </div>
        </div>

        {/* Architecture & Hackathon Deliverables (fills the page evenly matching Chapter A) */}
        <div className="flex w-full flex-col items-start border-t border-solid border-[#c7d7ef] mt-auto pt-1.5 tablet:pt-2">
          <div className="flex w-full items-baseline justify-between pb-0.5">
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[10px] font-[600] tracking-[0.12em] text-[#c0392b] uppercase">
              System Architecture &amp; Key Deliverables
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8px] tablet:text-[9px] text-[#8a8a84] uppercase">
              Safaricom 2026
            </span>
          </div>
          <div className="flex w-full gap-2 border-b border-solid border-[#c7d7ef] py-1 items-baseline">
            <span className="w-18 tablet:w-22 flex-none font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[600] text-[#1c1c1a] uppercase">
              Payments
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] leading-[13px] tablet:leading-[15px] text-[#3a3a36]">
              Engineered Safaricom M-PESA STK Push &amp; C2B callback handlers with idempotent transaction logging.
            </span>
          </div>
          <div className="flex w-full gap-2 py-1 items-baseline">
            <span className="w-18 tablet:w-22 flex-none font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[600] text-[#1c1c1a] uppercase">
              Full Stack
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] leading-[13px] tablet:leading-[15px] text-[#3a3a36]">
              Built cross-platform Flutter client with offline tourism caching backed by FastAPI microservices.
            </span>
          </div>
        </div>

        <div className="flex w-full items-end justify-end pt-1 pr-10">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            12
          </span>
        </div>

        {/* Bottom Left Page Curl */}
        <button
          onClick={() => goToChapter('P', 2)}
          title="Turn back to Chapter P (Page 8)"
          className="flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />

        {/* Mobile Page Curl (Bottom Right - Turn to Page 2) */}
        <button
          onClick={() => goToChapter('H', 2)}
          title="Turn to Page 2 (AWS Hackathon)"
          className="mobile:flex lg:hidden flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />
      </article>

      {/* Right Page (HCK 002 & HCK 003) */}
      <article className={`${mobilePage === 2 ? 'flex' : 'hidden'} lg:flex w-full phone:w-full phone:basis-auto phone:grow-0 phone:shrink-0 phone:h-auto phone:overflow-visible phone:rounded-[3px] phone:px-4 phone:py-4 tablet:h-full tablet:min-h-[640px] tablet:max-h-[820px] tablet:w-full tablet:rounded-[3px] tablet:px-8 tablet:py-6 tablet:justify-between tablet:overflow-y-auto lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-r-[3px] lg:rounded-l-none lg:pl-7 lg:pr-10 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[2px_0px_0px_0px_#ede6d3,4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-12 items-start bg-[linear-gradient(to_right,#00000033,#00000012_30%,transparent)] absolute top-0 left-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            A portfolio
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            Hackathons
          </span>
        </div>

        {/* HCK 002: AWS Hackathon */}
        <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#e2dac6] bg-[#ffffff] shadow-[0px_1px_3px_0px_#0000001a] relative -rotate-[0.5deg]">
          <div className="flex w-full items-center justify-between border-b-2 border-solid border-[#c0392b] px-3.5 py-1 tablet:px-4 tablet:py-1.5">
            <span className="font-['IBM_Plex_Mono'] text-[10px] tablet:text-[11px] font-[600] leading-[14px] tracking-[0.2em] text-[#c0392b] uppercase">
              HCK 002
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[400] leading-[12px] tracking-[0.1em] text-[#8a8a84] uppercase">
              AWS Hackathon
            </span>
          </div>

          <div className="flex w-full flex-col items-start px-3.5 pb-2 tablet:px-4 tablet:pb-3">
            <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 tablet:py-2 items-baseline">
              <span className="w-12 tablet:w-14 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Event
              </span>
              <span className="font-['Instrument_Sans'] text-[13.5px] tablet:text-[15px] font-[600] leading-[17px] tablet:leading-[20px] text-[#1c1c1a]">
                AWS Hackathon 2026
              </span>
            </div>
            <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 tablet:py-2 items-baseline">
              <span className="w-12 tablet:w-14 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Date
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] leading-[15px] text-[#3a3a36]">
                2026 · Online
              </span>
            </div>
            <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 tablet:py-2 items-baseline">
              <span className="w-12 tablet:w-14 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Team
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[400] leading-[15px] text-[#3a3a36]">
                Full-stack Developer
              </span>
            </div>
            <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 tablet:py-2 items-baseline">
              <span className="w-12 tablet:w-14 flex-none font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Built
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] tablet:text-[13.5px] font-[400] leading-[16px] tablet:leading-[19px] text-[#1c1c1a]">
                Didactic AI, Intelligent Academic Evaluation with React, FastAPI &amp; PostgreSQL.
              </span>
            </div>
            <div className="flex w-full items-center pt-1.5 tablet:pt-2.5">
              <button
                onClick={() => goToChapter('P', 2)}
                className="font-['IBM_Plex_Mono'] text-[10.5px] tablet:text-[12px] font-[600] leading-[15px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer"
              >
                Project (Didactic AI) →
              </button>
            </div>
          </div>

          {/* Stamp Badge */}
          <div className="flex h-14 w-14 flex-none flex-col items-center justify-center rounded-[9999px] bg-[#fbf8f0cc] border-2 border-double border-[#c0392b] absolute right-3 bottom-[-16px] rotate-12 opacity-90 select-none pointer-events-none">
            <span className="font-['IBM_Plex_Mono'] text-[7px] font-[400] leading-[8px] tracking-[0.2em] text-[#c0392b] uppercase">
              ★ 2026 ★
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[700] leading-[12px] tracking-[0.1em] text-[#c0392b] uppercase">
              Finalist
            </span>
          </div>
        </div>

        {/* HCK 003 & Rapid Prototyping Playbook (fills the page evenly matching Chapter A) */}
        <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-3.5 py-1.5 tablet:px-4 tablet:py-2.5 shadow-[0px_1px_0px_0px_#ede6d3] mt-auto">
          <div className="flex w-full items-center justify-between border-b border-solid border-[#c0392b] pb-0.5">
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[600] tracking-[0.12em] text-[#c0392b] uppercase">
              Hackathon Playbook · 48-Hour Sprint Method
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8px] tablet:text-[9px] text-[#8a8a84] uppercase">
              Practices
            </span>
          </div>
          <div className="flex w-full gap-2 border-b border-solid border-[#c7d7ef] py-1 items-baseline">
            <span className="w-18 tablet:w-22 flex-none font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[600] text-[#1c1c1a] uppercase">
              Speed &amp; Scope
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] leading-[13px] tablet:leading-[15px] text-[#3a3a36]">
              Architect clean decoupled schemas in hour 1; lock core user flows before building secondary features.
            </span>
          </div>
          <div className="flex w-full gap-2 border-b border-solid border-[#c7d7ef] py-1 items-baseline">
            <span className="w-18 tablet:w-22 flex-none font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] font-[600] text-[#1c1c1a] uppercase">
              Resilience
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] leading-[13px] tablet:leading-[15px] text-[#3a3a36]">
              Mock fallbacks and defensive API validation ensure a rock-solid live stage presentation.
            </span>
          </div>
          <div className="flex w-full items-center justify-between pt-1">
            <span className="font-['IBM_Plex_Mono'] text-[8px] tablet:text-[9px] font-[600] text-[#8a8a84] uppercase">
              HCK 003 · Next Entry
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] text-[#c0392b] font-[600]">
              Reserved for upcoming 2026 hackathon sprints
            </span>
          </div>
        </div>

        <button
          onClick={() => goToChapter('S', 1)}
          className="flex w-full items-end justify-between pt-1 gap-4 text-left cursor-pointer hover:text-[#c0392b] pl-10 pr-10"
        >
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[14px] tracking-wider text-[#8a8a84]">
            next: S · Stack →
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            13
          </span>
        </button>

        {/* Mobile Page Curl (Bottom Left - Turn back to Page 1) */}
        <button
          onClick={() => goToChapter('H', 1)}
          title="Turn back to Page 1 (M-PESA Hackathon)"
          className="mobile:flex lg:hidden flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />

        {/* Bottom Right Page Curl */}
        <button
          onClick={() => goToChapter('S', 1)}
          title="Turn to Chapter S (Page 15)"
          className="flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />
      </article>
    </>
  );
}


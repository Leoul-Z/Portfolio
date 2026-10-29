import realMadridIcon from '../../assets/real_madrid.png';
import chelseaIcon from '../../assets/chelsea.png';

export default function ChapterOffDuty({ goToChapter, isVinylSpinning, setIsVinylSpinning, mobilePage = 1 }) {
  return (
    <>
      {/* Left Page (Side A · Music) */}
      <article className={`${mobilePage === 1 ? 'flex' : 'hidden'} lg:flex w-full phone:w-full phone:basis-auto phone:grow-0 phone:shrink-0 phone:h-auto phone:overflow-visible phone:rounded-[3px] phone:px-4 phone:py-4 tablet:h-full tablet:min-h-[640px] tablet:max-h-[820px] tablet:w-full tablet:rounded-[3px] tablet:px-8 tablet:py-6 tablet:justify-between tablet:overflow-y-auto lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-l-[3px] lg:rounded-r-none lg:px-7 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[inset_1px_0px_0px_0px_#e2dac6,-2px_0px_0px_0px_#ede6d3,-4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-full items-start bg-[linear-gradient(to_left,#0000002e,#00000010_30%,transparent)] absolute top-0 right-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            Chapter O
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            Leoul Zerihun
          </span>
        </div>

        <div className="flex w-full items-start gap-3 relative z-10 pb-1">
          <span className="font-['Instrument_Serif'] text-[56px] font-[400] leading-[48px] text-[#c0392b] phone:text-[46px] phone:leading-[40px] tablet:text-[60px] tablet:leading-[52px]">
            O
          </span>
          <div className="flex flex-col items-start gap-0.5 pt-0.5">
            <h1 className="font-['Instrument_Sans'] text-[28px] font-[600] leading-[32px] tracking-[-0.03em] text-[#1c1c1a] phone:text-[24px] phone:leading-[28px] tablet:text-[34px] tablet:leading-[38px]">
              Off Duty
            </h1>
            <span className="font-['IBM_Plex_Mono'] text-[11px] tablet:text-[13px] font-[400] leading-[15px] tablet:leading-[18px] text-[#3a3a36]">
              things I love when I'm not coding
            </span>
          </div>
        </div>

        <div className="flex w-full items-center gap-2 pt-1 pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[600] leading-[13px] tracking-[0.25em] text-[#c0392b] uppercase">
            Side A · Music
          </span>
          <div className="flex h-px items-start border-b border-dashed border-[#d8cfb8] grow" />
        </div>

        {/* Music Collage */}
        <div className="flex h-[255px] w-full flex-none items-start relative phone:h-auto phone:flex-wrap phone:items-center phone:justify-center phone:gap-4 phone:py-2 tablet:h-[280px]">
          
          {/* Vinyl Record */}
          <div 
            onClick={() => setIsVinylSpinning(!isVinylSpinning)}
            title="Click to spin vinyl record and play Leoul's Playlist!"
            className={`flex h-36 w-36 flex-none items-center justify-center rounded-[9999px] border-4 border-solid border-[#ffffff] bg-[#141414] shadow-[2px_5px_10px_0px_#00000047] bg-[conic-gradient(from_30deg,#141414,#2e2e2e_10%,#141414_25%,#141414_50%,#2e2e2e_60%,#141414_75%)] absolute left-0 top-0 -rotate-[6deg] transition-all duration-300 hover:scale-105 hover:z-20 cursor-pointer phone:relative phone:top-0 phone:left-0 ${
              isVinylSpinning ? 'animate-spin' : ''
            }`}
          >
            <div className="flex items-start rounded-[9999px] border border-solid border-[#ffffff14] absolute inset-1.5" />
            <div className="flex items-start rounded-[9999px] border border-solid border-[#ffffff1a] absolute inset-4" />
            <div className="flex items-start rounded-[9999px] border border-solid border-[#ffffff14] absolute inset-6" />
            
            <div className="flex h-14 w-14 flex-none flex-col items-center justify-center gap-0.5 rounded-[9999px] bg-[#c0392b] relative text-center px-0.5">
              <span className="font-['IBM_Plex_Mono'] text-[7px] font-[700] leading-[8px] tracking-[0.1em] text-[#fbf8f0] uppercase truncate w-full">
                Leoul's
              </span>
              <div className="flex h-1 w-1 flex-none items-start rounded-[9999px] bg-[#141414]" />
              <span className="font-['IBM_Plex_Mono'] text-[6px] font-[500] leading-[7px] tracking-[0.1em] text-[#fbf8f0] uppercase">
                Playlist
              </span>
            </div>
            <div className="flex h-5 w-5 flex-none items-start rounded-tl-2xl shadow-[-2px_-2px_3px_0px_#00000026] bg-[linear-gradient(135deg,#e8e2d2_0%,#ffffff_60%)] absolute right-2 bottom-2" />
          </div>

          {/* Listen Pill */}
          <div 
            onClick={() => setIsVinylSpinning(!isVinylSpinning)}
            className="flex items-center gap-1 rounded-[9999px] border border-solid border-[#1c1c1a] bg-[#f6efe0] px-2.5 py-1 shadow-[1px_2px_0px_0px_#1c1c1a] absolute left-[28px] top-[152px] rotate-[3deg] transition-all duration-300 hover:scale-105 hover:bg-[#ffffff] cursor-pointer phone:relative phone:left-0 phone:top-0"
            title="Toggle playback"
          >
            <span className="font-['IBM_Plex_Mono'] text-[10px] font-[600] leading-[13px] text-[#1c1c1a]">
              {isVinylSpinning ? 'Pause ⏸' : 'Play Playlist ♫'}
            </span>
          </div>

          {/* Retro Headphones Icon Badge */}
          <div className="flex items-center justify-center rounded-[16px] border-2 border-solid border-[#ffffff] bg-[#f6efe0] px-3 py-2 shadow-[2px_4px_8px_0px_#00000030] text-[#c0392b] absolute left-[175px] top-0 rotate-[8deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 phone:relative phone:left-0 phone:top-0 select-none">
            <svg
              className="text-[#c0392b] w-10 h-10"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 38C10 18 21 8 32 8s22 10 22 30h-5c0-16-8-25-17-25s-17 9-17 25Z"
                fill="rgb(192, 57, 43)"
              />
              <rect x="6" y="32" width="14" height="24" rx="6" fill="rgb(192, 57, 43)" />
              <rect x="44" y="32" width="14" height="24" rx="6" fill="rgb(192, 57, 43)" />
              <rect x="10" y="37" width="6" height="14" rx="3" fill="rgb(251, 241, 220)" />
              <rect x="48" y="37" width="6" height="14" rx="3" fill="rgb(251, 241, 220)" />
              <ellipse cx="32" cy="10.5" rx="2" ry="2" fill="rgb(251, 241, 220)" />
            </svg>
          </div>

          {/* Speech Bubble "now playing ♫" */}
          <div className="flex flex-col items-start absolute left-[165px] top-[75px] -rotate-[4deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 phone:relative phone:left-0 phone:top-0 select-none">
            <div className="flex items-center rounded-[12px] border-2 border-solid border-[#ffffff] bg-[#1f2a44] px-3 py-1 shadow-[2px_3px_8px_0px_#00000030] relative">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] text-[#fbf8f0]">
                {isVinylSpinning ? "playing: Leoul's Playlist ♪" : 'click disk to play playlist ♫'}
              </span>
            </div>
            <div className="flex h-2.5 w-2.5 flex-none items-start border-r-2 border-b-2 border-solid border-[#ffffff] bg-[#1f2a44] rotate-45 ml-4 -mt-1" />
          </div>

          {/* Cassette Tape */}
          <div 
            onClick={() => setIsVinylSpinning(!isVinylSpinning)}
            title="Click cassette to toggle music"
            className="flex w-36 flex-none flex-col items-center gap-1 rounded-[6px] border-2 border-solid border-[#ffffff] bg-[#e8c4ae] px-2 pt-1.5 pb-2 shadow-[2px_4px_8px_0px_#00000030] absolute left-[155px] top-[140px] rotate-[5deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 cursor-pointer phone:relative phone:left-0 phone:top-0 select-none"
          >
            <div className="flex w-full items-center justify-center rounded-[2px] border border-solid border-[#c9a68c] bg-[#fbf8f0] px-1 py-0.5">
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[700] leading-[11px] tracking-[0.08em] text-[#c0392b] truncate">
                LEOUL'S PLAYLIST · ETHIO MIX
              </span>
            </div>
            <div className="flex w-full items-center justify-between rounded-lg bg-[#3a1f10] px-2 py-1">
              <div className={`flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border-[4px] border-solid border-[#fbf8f0] bg-[#1c1c1a] ${isVinylSpinning ? 'animate-spin' : ''}`}>
                <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#fbf8f0]" />
              </div>
              <div className="flex h-2 items-start rounded-[1px] bg-[#6e3f26] grow mx-1.5" />
              <div className={`flex h-6 w-6 flex-none items-center justify-center rounded-[9999px] border-[4px] border-solid border-[#fbf8f0] bg-[#1c1c1a] ${isVinylSpinning ? 'animate-spin' : ''}`}>
                <div className="flex h-1.5 w-1.5 flex-none items-start rounded-[9999px] bg-[#fbf8f0]" />
              </div>
            </div>
          </div>

          {/* Equalizer Spectrum Bars */}
          <div className="flex items-end gap-1 rounded-[6px] border-2 border-solid border-[#ffffff] bg-[#1c1c1a] px-2 pt-2.5 pb-1.5 shadow-[2px_4px_8px_0px_#00000030] absolute left-[310px] top-[145px] -rotate-[8deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 phone:relative phone:left-0 phone:top-0 select-none">
            <div className={`w-2 flex-none items-start rounded-t-[1px] bg-[#9fc49a] transition-all duration-300 ${isVinylSpinning ? 'h-5 animate-pulse' : 'h-3'}`} />
            <div className={`w-2 flex-none items-start rounded-t-[1px] bg-[#e8b84a] transition-all duration-300 ${isVinylSpinning ? 'h-8 animate-bounce' : 'h-6'}`} />
            <div className={`w-2 flex-none items-start rounded-t-[1px] bg-[#c0392b] transition-all duration-300 ${isVinylSpinning ? 'h-6 animate-pulse' : 'h-4'}`} />
            <div className={`w-2 flex-none items-start rounded-t-[1px] bg-[#e8b84a] transition-all duration-300 ${isVinylSpinning ? 'h-9 animate-bounce' : 'h-7'}`} />
            <div className={`w-2 flex-none items-start rounded-t-[1px] bg-[#9fc49a] transition-all duration-300 ${isVinylSpinning ? 'h-4 animate-pulse' : 'h-2'}`} />
          </div>

        </div>

        {/* Interactive Track Info Bar */}
        <div className="flex w-full items-center justify-between rounded-[3px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-3 py-1.5 tablet:p-3 shadow-[0px_1px_3px_0px_#0000000a] mt-1 tablet:mt-2">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsVinylSpinning(!isVinylSpinning)}
              className="flex h-6 w-6 tablet:h-7 tablet:w-7 items-center justify-center rounded-full bg-[#c0392b] text-white hover:bg-[#a83226] text-[10px] tablet:text-[12px] font-bold cursor-pointer shadow-sm transition-transform active:scale-95"
              title={isVinylSpinning ? "Pause" : "Play Playlist"}
            >
              {isVinylSpinning ? '⏸' : '▶'}
            </button>
            <div className="flex flex-col">
              <span className="font-['IBM_Plex_Mono'] text-[11px] tablet:text-[13px] font-[600] leading-[14px] tablet:leading-[16px] text-[#1c1c1a]">
                Leoul's Curated Playlist (የተመረጡ ሙዚቃዎች)
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9px] tablet:text-[11px] leading-[12px] tablet:leading-[15px] text-[#6b6b66]">
                Teddy Afro · YEMa · Robel Mideksa · Ethiopian Classics &amp; Hits
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${isVinylSpinning ? 'bg-green-500 animate-ping' : 'bg-[#c9c6b8]'}`} />
            <span className="font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10.5px] font-[500] text-[#6b6b66]">
              {isVinylSpinning ? 'Playing' : 'Ready'}
            </span>
            <a
              href="https://youtube.com/playlist?list=PLI_1rBaXsoU4&si=Dm8NrMF7B5XXWmtE"
              target="_blank"
              rel="noreferrer"
              className="ml-1 rounded-[2px] border border-solid border-[#ddd5bf] bg-[#ffffff] px-1.5 py-0.5 tablet:px-2.5 tablet:py-1 text-[9px] tablet:text-[10.5px] font-['IBM_Plex_Mono'] font-[500] text-[#1c1c1a] hover:bg-[#f6efe0] hover:text-[#c0392b] transition-colors"
              title="Open playlist on YouTube"
            >
              Playlist ↗
            </a>
          </div>
        </div>

        {/* Liner Notes (fills the page evenly matching Chapter A) */}
        <div className="flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-1.5 tablet:pt-2 mt-auto">
          <span className="font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10.5px] italic text-[#555550]">
            "Good code is like good music — rhythm, structure, and zero unnecessary noise."
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[8.5px] tablet:text-[9.5px] text-[#c0392b] font-[600] uppercase">
            Side A · 33⅓ RPM
          </span>
        </div>

        <div className="flex w-full items-end justify-between pl-8 pr-10 pt-1 gap-4">
          <button
            onClick={() => goToChapter('A', 1)}
            className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[14px] tracking-wider text-[#8a8a84] hover:text-[#c0392b] cursor-pointer"
          >
            ← back to contents
          </button>
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            18
          </span>
        </div>

        {/* Bottom Left Page Curl */}
        <button
          onClick={() => goToChapter('S', 2)}
          title="Turn back to Chapter S (Page 16)"
          className="flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />

        {/* Mobile Page Curl (Bottom Right - Turn to Page 2) */}
        <button
          onClick={() => goToChapter('O', 2)}
          title="Turn to Page 2 (Side B · Football)"
          className="mobile:flex lg:hidden flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />
      </article>

      {/* Right Page (Side B · Football) */}
      <article className={`${mobilePage === 2 ? 'flex' : 'hidden'} lg:flex w-full phone:w-full phone:basis-auto phone:grow-0 phone:shrink-0 phone:h-auto phone:overflow-visible phone:rounded-[3px] phone:px-4 phone:py-4 tablet:h-full tablet:min-h-[640px] tablet:max-h-[820px] tablet:w-full tablet:rounded-[3px] tablet:px-8 tablet:py-6 tablet:justify-between tablet:overflow-y-auto lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-r-[3px] lg:rounded-l-none lg:pl-7 lg:pr-10 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[2px_0px_0px_0px_#ede6d3,4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-12 items-start bg-[linear-gradient(to_right,#00000033,#00000012_30%,transparent)] absolute top-0 left-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            A portfolio
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            Off Duty
          </span>
        </div>

        <div className="flex w-full items-center gap-2 pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] tablet:text-[11px] font-[600] leading-[13px] tracking-[0.25em] text-[#2f5a2b] uppercase">
            Side B · Football
          </span>
          <div className="flex h-px items-start border-b border-dashed border-[#d8cfb8] grow" />
        </div>

        {/* Football Collage */}
        <div className="flex h-[290px] w-full flex-none items-start relative phone:h-auto phone:flex-wrap phone:items-center phone:justify-center phone:gap-4 phone:py-2 tablet:h-[320px] select-none">
          
          {/* Real Madrid Sticker (by Magnific on Flaticon) */}
          <a
            href="https://www.flaticon.com/free-icons/real-madrid"
            target="_blank"
            rel="noreferrer"
            title="Real madrid icons created by Magnific - Flaticon"
            className="flex h-28 w-28 flex-none items-center justify-center rounded-[9999px] border-2 border-solid border-[#ffffff] bg-[#ffffff] p-2 shadow-[2px_5px_12px_0px_#00000035] absolute left-0 top-0 -rotate-[8deg] transition-all duration-300 hover:scale-110 hover:rotate-0 hover:z-20 cursor-pointer phone:relative phone:left-0 phone:top-0 group"
          >
            <div className="flex h-3 w-8 flex-none items-start bg-[#f2e6b8cc] shadow-[0px_1px_1px_0px_#0000001a] absolute -top-1 left-1/2 -translate-x-1/2 -rotate-6 z-10 pointer-events-none" />
            <img
              src={realMadridIcon}
              alt="Real Madrid sticker by Magnific on Flaticon"
              className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Chelsea Sticker (by Magnific on Flaticon) */}
          <a
            href="https://www.flaticon.com/free-icons/chelsea"
            target="_blank"
            rel="noreferrer"
            title="Chelsea icons created by Magnific - Flaticon"
            className="flex h-26 w-26 flex-none items-center justify-center rounded-[9999px] border-2 border-solid border-[#ffffff] bg-[#ffffff] p-2 shadow-[2px_5px_12px_0px_#00000035] absolute left-[145px] top-[6px] rotate-[8deg] transition-all duration-300 hover:scale-110 hover:rotate-0 hover:z-20 cursor-pointer phone:relative phone:left-0 phone:top-0 group"
          >
            <div className="flex h-3 w-8 flex-none items-start bg-[#f2e6b8cc] shadow-[0px_1px_1px_0px_#0000001a] absolute -top-1 left-1/2 -translate-x-1/2 rotate-12 z-10 pointer-events-none" />
            <img
              src={chelseaIcon}
              alt="Chelsea sticker by Magnific on Flaticon"
              className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Cristiano Ronaldo CR7 Card */}
          <div className="flex h-30 w-26 flex-none flex-col items-center justify-center gap-0.5 rounded-[10px] border-2 border-solid border-[#ffffff] bg-[#141414] shadow-[2px_4px_10px_0px_#00000040] absolute left-[125px] top-[125px] -rotate-[4deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 phone:relative phone:left-0 phone:top-0">
            <div className="flex items-start rounded-[8px] border border-solid border-[#d4a72c] absolute inset-1" />
            <div className="flex items-center text-[18px] text-[#d4a72c]">
              <svg className="w-5 h-5 text-[#d4a72c]" viewBox="0 0 32 28" fill="currentColor">
                <path d="M10 2 4 5l-3 6 4 2 2-3v16h18V10l2 3 4-2-3-6-6-3c-1 2.5-3 4-6 4s-5-1.5-6-4M9 8v16h14V8c-2-.5-4 0-7 0s-5-.5-7 0" />
                <path d="M13 11h6.5v2L16 21h-2.2l3.2-8h-4Z" />
              </svg>
            </div>
            <span className="font-['Instrument_Sans'] text-[30px] font-[700] leading-[30px] tracking-[-0.04em] text-[#d4a72c] italic">
              CR7
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[7px] font-[600] leading-[8px] tracking-[0.2em] text-[#fbf8f0] uppercase pb-2">
              ★ Cristiano ★
            </span>
          </div>

          {/* SIUUU Star Burst */}
          <div className="flex h-22 w-22 flex-none items-center justify-center absolute left-[245px] top-[120px] rotate-[10deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 phone:relative phone:left-0 phone:top-0">
            <div className="flex items-center justify-center text-[84px] text-[#ffffff] drop-shadow-[2px_4px_5px_#00000030] absolute inset-0">
              <svg className="w-20 h-20 text-[#ffffff]" viewBox="0 0 100 100" fill="currentColor">
                <path d="m50 0 8 22L79 9l-5 24 24-1-18 17 18 17H74l6 24-22-12-8 22-8-22-22 12 6-24H2l18-17L2 32l24 1-5-24 21 13Z" />
              </svg>
            </div>
            <div className="flex items-center justify-center text-[72px] text-[#f5c518] absolute inset-0">
              <svg className="w-18 h-18 text-[#f5c518]" viewBox="0 0 100 100" fill="currentColor">
                <path d="m50 0 8 22L79 9l-5 24 24-1-18 17 18 17H74l6 24-22-12-8 22-8-22-22 12 6-24H2l18-17L2 32l24 1-5-24 21 13Z" />
              </svg>
            </div>
            <span className="font-['Instrument_Sans'] text-[15px] font-[700] leading-[17px] tracking-[-0.02em] text-[#c0392b] italic relative">
              SIUUU!
            </span>
          </div>

          {/* "the GOAT ->" arrow */}
          <div className="flex flex-col items-start absolute left-[4px] top-[140px] -rotate-[6deg] phone:relative phone:left-0 phone:top-0">
            <span className="font-['Inter'] text-[20px] font-[700] leading-[22px] text-[#c0392b]">
              the GOAT →
            </span>
            <div className="flex h-0.5 w-20 flex-none items-start rounded-[9999px] bg-[#c0392b80] ml-1" />
          </div>

          {/* Football Icon */}
          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-[9999px] border-2 border-solid border-[#ffffff] bg-[#ffffff] shadow-[2px_4px_8px_0px_#00000030] text-[#1c1c1a] absolute left-[24px] top-[195px] rotate-[15deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 phone:relative phone:left-0 phone:top-0">
            <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
              <ellipse cx="32" cy="32" rx="31" ry="31" fill="#1c1c1a" />
              <ellipse cx="32" cy="32" rx="29" ry="29" fill="#ffffff" />
              <path d="m32 21 10 7.5-3.8 12H25.8l-3.8-12Z" fill="#1c1c1a" />
              <path d="M27 4h10l2 6-7 4-7-4Z" fill="#1c1c1a" />
              <path d="m4 26 6-4 5 6-3 8-7 1Z" fill="#1c1c1a" />
              <path d="m60 26-6-4-5 6 3 8 7 1Z" fill="#1c1c1a" />
              <path d="m14 50 8-2 4 7-4 5-7-3Z" fill="#1c1c1a" />
              <path d="m50 50-8-2-4 7 4 5 7-3Z" fill="#1c1c1a" />
            </svg>
          </div>

          {/* Ronaldo 7 Jersey Card */}
          <div className="flex w-24 flex-none items-center justify-center absolute left-[210px] top-[205px] -rotate-[8deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 phone:relative phone:left-0 phone:top-0">
            <div className="flex items-center justify-center text-[90px] text-[#ffffff] drop-shadow-[2px_4px_5px_#00000030]">
              <svg className="w-20 h-18 text-[#ffffff]" viewBox="0 0 64 56" fill="currentColor">
                <path d="M20 2 8 7 1 19l9 6 4-5v34h36V20l4 5 9-6-7-12-12-5c-2 4-6.5 6-12 6S22 6 20 2" />
              </svg>
            </div>
            <div className="flex items-center justify-center text-[80px] text-[#c0392b] absolute inset-0">
              <svg className="w-18 h-16 text-[#c0392b]" viewBox="0 0 64 56" fill="currentColor">
                <path d="M20 2 8 7 1 19l9 6 4-5v34h36V20l4 5 9-6-7-12-12-5c-2 4-6.5 6-12 6S22 6 20 2" />
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center pt-2 absolute inset-0">
              <span className="font-['IBM_Plex_Mono'] text-[6.5px] font-[600] leading-[8px] tracking-[0.15em] text-[#fbf8f0] uppercase">
                Ronaldo
              </span>
              <span className="font-['Instrument_Sans'] text-[28px] font-[700] leading-[28px] text-[#fbf8f0]">
                7
              </span>
            </div>
          </div>

        </div>

        {/* Matchday Mindset & Attributions (fills the page evenly matching Chapter A) */}
        <div className="flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-1.5 tablet:pt-2 mt-auto">
          <span className="font-['IBM_Plex_Mono'] text-[9px] tablet:text-[10.5px] italic text-[#555550]">
            "Discipline, intense work ethic, and relentless pursuit of excellence on and off the pitch."
          </span>
          <div className="flex items-center gap-1 text-[7.5px] tablet:text-[8.5px] font-['IBM_Plex_Mono'] text-[#8a8a84]">
            <a href="https://www.flaticon.com/free-icons/real-madrid" target="_blank" rel="noreferrer" className="underline hover:text-[#c0392b]" title="real madrid icons">Real Madrid</a>
            <span>&amp;</span>
            <a href="https://www.flaticon.com/free-icons/chelsea" target="_blank" rel="noreferrer" className="underline hover:text-[#c0392b]" title="chelsea icons">Chelsea</a>
            <span>stickers by Magnific</span>
          </div>
        </div>

        <button
          onClick={() => goToChapter('A', 1)}
          className="flex w-full items-end justify-between pl-10 pr-10 pt-1 gap-4 text-left cursor-pointer hover:text-[#c0392b]"
        >
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[14px] tracking-wider text-[#8a8a84]">
            ↺ back to contents
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            19
          </span>
        </button>

        {/* Mobile Page Curl (Bottom Left - Turn back to Page 1) */}
        <button
          onClick={() => goToChapter('O', 1)}
          title="Turn back to Page 1 (Side A · Music)"
          className="mobile:flex lg:hidden flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />

        {/* Bottom Right Page Curl (Back to Beginning) */}
        <button
          onClick={() => goToChapter('A', 1)}
          title="Turn back to Contents (Page i)"
          className="flex h-8 w-8 tablet:h-10 tablet:w-10 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer z-20"
        />
      </article>
    </>
  );
}


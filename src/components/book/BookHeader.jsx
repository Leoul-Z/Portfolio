import leoulCvPdf from '../../assets/LZ_CV.2026.pdf';

export default function BookHeader({ goToChapter, soundEnabled, setSoundEnabled }) {
  return (
    <header className="flex w-full max-w-[1240px] items-center justify-between gap-4 phone:flex-col phone:items-start phone:gap-2 tablet:flex-row tablet:items-center">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => goToChapter('A', 1)} 
          className="flex h-8 w-8 flex-none items-center justify-center rounded-[2px] border-2 border-solid border-[#1f2a44] bg-[#ffffff] cursor-pointer hover:border-[#c0392b] transition-colors"
          title="Return to Chapter A"
        >
          <span className="font-['IBM_Plex_Mono'] text-[11px] font-[600] leading-[16px] text-[#1f2a44]">
            LZ
          </span>
        </button>
        <span className="font-['Instrument_Sans'] text-[16px] font-[600] leading-[22px] text-[#1c1c1a]">
          Leoul Zerihun
        </span>
        <span className="font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] text-[#6b6b66] mobile:hidden">
          — a portfolio in six chapters
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 mobile:w-full mobile:justify-start tablet:w-auto">
        <a
          href="https://github.com/Leoul-Z"
          target="_blank"
          rel="noreferrer"
          className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] px-2.5 py-1 transition-all duration-300 hover:bg-[#ffffff] hover:border-[#1c1c1a] cursor-pointer"
        >
          <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[16px] text-[#3a3a36]">
            GitHub
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/leoul-zerihun-7a4414347"
          target="_blank"
          rel="noreferrer"
          className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] px-2.5 py-1 transition-all duration-300 hover:bg-[#ffffff] hover:border-[#1c1c1a] cursor-pointer"
        >
          <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[16px] text-[#3a3a36]">
            LinkedIn
          </span>
        </a>
        <a
          href="https://leetcode.com/u/Nasi4Z"
          target="_blank"
          rel="noreferrer"
          className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] px-2.5 py-1 transition-all duration-300 hover:bg-[#ffffff] hover:border-[#1c1c1a] cursor-pointer"
        >
          <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[16px] text-[#3a3a36]">
            LeetCode
          </span>
        </a>
        <a
          href="https://t.me/leoniazz"
          target="_blank"
          rel="noreferrer"
          className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] px-2.5 py-1 transition-all duration-300 hover:bg-[#ffffff] hover:border-[#1c1c1a] cursor-pointer"
        >
          <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[16px] text-[#3a3a36]">
            Telegram
          </span>
        </a>
        <a
          href={leoulCvPdf}
          download="LZ_CV.pdf"
          target="_blank"
          rel="noreferrer"
          title="Download Leoul Zerihun's CV (PDF)"
          className="flex items-center rounded-[3px] border border-solid border-[#c0392b] bg-[#c0392b] px-2.5 py-1 transition-all duration-300 hover:bg-[#a83226] cursor-pointer shadow-sm"
        >
          <span className="font-['IBM_Plex_Mono'] text-[11px] font-[600] leading-[16px] text-[#ffffff]">
            CV ↓
          </span>
        </a>

        {/* Sound Toggle */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          title={soundEnabled ? 'Mute page flip sound' : 'Enable page flip sound'}
          className="ml-2 flex items-center justify-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] px-2 py-1 text-[#6b6b66] hover:text-[#1c1c1a] hover:bg-white text-[11px] font-['IBM_Plex_Mono'] transition-colors cursor-pointer"
        >
          {soundEnabled ? '🔊 Sound' : '🔇 Muted'}
        </button>
      </div>
    </header>
  );
}


export default function ThumbTabs({ chapters, activeChapter, goToChapter }) {
  return (
    <aside 
      aria-label="Book Thumb Index" 
      className="flex flex-col items-start gap-1.5 absolute right-[-42px] top-6 mobile:hidden z-30"
    >
      {chapters.map((ch) => {
        const isActive = ch.id === activeChapter;
        return (
          <button
            key={ch.id}
            onClick={() => goToChapter(ch.id, 1)}
            title={`Turn to Chapter ${ch.id}: ${ch.title}`}
            className={`flex w-12 flex-col items-center rounded-r-[6px] pl-1.5 py-1.5 transition-all duration-300 cursor-pointer select-none text-left ${
              isActive
                ? `${ch.activeBg} translate-x-3 shadow-[4px_4px_10px_0px_#0000004d]`
                : `${ch.tabBg} hover:translate-x-1.5 shadow-[2px_2px_4px_0px_#00000026]`
            }`}
          >
            <span 
              className={`font-['Inter'] text-[16px] font-[700] leading-[18px] ${
                isActive ? ch.activeText : ch.textDark
              }`}
            >
              {ch.id}
            </span>
            <span 
              className={`font-['IBM_Plex_Mono'] text-[7.5px] font-[500] leading-[9px] tracking-[0.05em] uppercase ${
                isActive ? ch.activeText : ch.textDark
              }`}
            >
              {ch.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
}


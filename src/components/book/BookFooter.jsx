export default function BookFooter() {
  return (
    <footer className="flex w-full max-w-[1240px] items-center justify-between border-t border-dashed border-[#b8b6ac] pt-1.5 mobile:flex-col mobile:gap-1 text-center">
      <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] tracking-[0.08em] text-[#6b6b66] uppercase">
        © 2026 Leoul Zerihun · Catalogued in Addis Ababa
      </span>
      <div className="flex items-center gap-3 text-[10px] font-['IBM_Plex_Mono'] text-[#8a8a84]">
        <span className="mobile:hidden">Tip: Use ← / → keys or thumb tabs to flip pages</span>
        <span className="hidden mobile:inline">Tip: Tap tabs above to switch chapters</span>
      </div>
    </footer>
  );
}


export default function AudioPlayer({ isVinylSpinning, setIsVinylSpinning }) {
  if (!isVinylSpinning) return null;

  return (
    <>
      {/* Persistent Audio Player for Leoul's Curated Playlist */}
      <div className="fixed -bottom-96 -right-96 w-1 h-1 opacity-0 pointer-events-none">
        <iframe
          width="200"
          height="200"
          src="https://www.youtube.com/embed/videoseries?list=PLI_1rBaXsoU4&autoplay=1&enablejsapi=1"
          title="Leoul's Playlist"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      {/* Floating Now Playing Pill when active */}
      <aside 
        aria-label="Now Playing Audio"
        className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full border-2 border-solid border-[#1c1c1a] bg-[#fffdf7] px-4 py-2 shadow-[0px_8px_24px_-4px_#00000059] transition-all hover:scale-105 mobile:bottom-2 mobile:right-2 mobile:left-2 mobile:justify-between mobile:px-3 mobile:py-1.5"
      >
        <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#141414] border border-white animate-spin">
          <div className="h-2 w-2 rounded-full bg-[#c0392b]" />
        </div>
        <div className="flex flex-col">
          <span className="font-['IBM_Plex_Mono'] text-[11px] font-[600] leading-[14px] text-[#1c1c1a]">
            Leoul's Playlist ♪ · Ethiopian Classics
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] leading-[12px] text-[#8a8a84]">
            Playing · Chapter O (Off Duty)
          </span>
        </div>
        <button
          onClick={() => setIsVinylSpinning(false)}
          className="ml-1 rounded-full bg-[#c0392b] px-2.5 py-1 text-[10px] font-['IBM_Plex_Mono'] font-[600] text-white hover:bg-[#a83226] cursor-pointer shadow-sm transition-colors"
          title="Pause playlist"
        >
          Pause ⏸
        </button>
      </aside>
    </>
  );
}


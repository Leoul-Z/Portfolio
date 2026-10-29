export default function MobileNav({ chapters, activeChapter, goToChapter, mobilePage }) {
  const page1Titles = {
    A: 'Page 1: Author Card',
    E: 'Page 1: Experience',
    P: 'Page 1: Projects (001–002)',
    H: 'Page 1: Hackathons (M-PESA)',
    S: 'Page 1: Stack & Architecture',
    O: 'Page 1: Side A (Music)'
  };

  const page2Titles = {
    A: 'Page 2: Contents & Reach',
    E: 'Page 2: Certifications',
    P: 'Page 2: Projects (003–004)',
    H: 'Page 2: AWS Hackathon',
    S: 'Page 2: Infra & Deploy',
    O: 'Page 2: Side B (Football)'
  };

  return (
    <>
      {/* Mobile / Tablet Thumb Navigation Pill Bar */}
      <div className="hidden mobile:flex w-full items-center justify-start gap-1 overflow-x-auto rounded-[4px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] p-1.5 tablet:p-2 tablet:gap-1.5 shadow-sm scrollbar-none">
        {chapters.map((ch) => {
          const isActive = ch.id === activeChapter;
          return (
            <button
              key={ch.id}
              onClick={() => goToChapter(ch.id, 1)}
              className={`flex items-center gap-1.5 rounded-[3px] px-2.5 py-1 text-[11px] tablet:text-[12px] tablet:px-3.5 tablet:py-1.5 font-['IBM_Plex_Mono'] font-[600] transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? `${ch.activeBg} text-[#ffffff] shadow-sm`
                  : 'bg-[#ffffff] text-[#1c1c1a] border border-[#ddd5bf] hover:bg-[#ede6d3]'
              }`}
            >
              <span>{ch.id}</span>
              <span className="font-normal opacity-90">{ch.label}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile / Tablet Page Sub-Tabs (Page 1 vs Page 2) */}
      <div className="hidden mobile:flex w-full max-w-[1240px] items-center justify-between rounded-[3px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] p-1 shadow-sm">
        <button
          onClick={() => goToChapter(activeChapter, 1)}
          className={`flex-1 rounded-[2px] py-1 text-center font-['IBM_Plex_Mono'] text-[11px] font-[600] transition-all cursor-pointer ${
            mobilePage === 1
              ? 'bg-[#c0392b] text-white shadow-sm'
              : 'text-[#6b6b66] hover:text-[#1c1c1a] hover:bg-white/60'
          }`}
        >
          {page1Titles[activeChapter]}
        </button>
        <button
          onClick={() => goToChapter(activeChapter, 2)}
          className={`flex-1 rounded-[2px] py-1 text-center font-['IBM_Plex_Mono'] text-[11px] font-[600] transition-all cursor-pointer ${
            mobilePage === 2
              ? 'bg-[#c0392b] text-white shadow-sm'
              : 'text-[#6b6b66] hover:text-[#1c1c1a] hover:bg-white/60'
          }`}
        >
          {page2Titles[activeChapter]}
        </button>
      </div>
    </>
  );
}


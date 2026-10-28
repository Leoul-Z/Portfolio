import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Certificate image imports
import alxSoftwareEngineering from '../assets/certificates/alx_software_engineering.jpg';
import alxProfessionalFoundations from '../assets/certificates/alx_professional_foundations.jpg';
import udacityProgrammingFundamentals from '../assets/certificates/udacity_programming_fundamentals.jpg';
import huaweiHciaOpengauss from '../assets/certificates/huawei_hcia_opengauss.jpg';
import huaweiHciaDatacom from '../assets/certificates/huawei_hcia_datacom.jpg';
import mpesaHackathonImg from '../assets/mpesa_hackathon.png';

// Chapter configuration for Thumb Index
const CHAPTERS = [
  { id: 'A', label: 'About', title: 'About & Contents', page: 'i', color: '#c0392b', activeBg: 'bg-[#c0392b]', activeText: 'text-[#fbf8f0]', tabBg: 'bg-[#c0392b]', textDark: 'text-[#fbf8f0]' },
  { id: 'E', label: 'Exp.', title: 'Experience & Certs', page: '1', color: '#7d8a99', activeBg: 'bg-[#7d8a99]', activeText: 'text-[#fbf8f0]', tabBg: 'bg-[#b7c0c9]', textDark: 'text-[#1e2833]' },
  { id: 'P', label: 'Projects', title: 'Projects', page: '7', color: '#b8a878', activeBg: 'bg-[#b8a878]', activeText: 'text-[#1f1b0e]', tabBg: 'bg-[#d8cfae]', textDark: 'text-[#2c2818]' },
  { id: 'H', label: 'Hacks', title: 'Hackathons', page: '12', color: '#d49a7a', activeBg: 'bg-[#d49a7a]', activeText: 'text-[#2a1408]', tabBg: 'bg-[#e8c4ae]', textDark: 'text-[#3a1f10]' },
  { id: 'S', label: 'Stack', title: 'Tech Stack', page: '15', color: '#8fa3c4', activeBg: 'bg-[#8fa3c4]', activeText: 'text-[#141c28]', tabBg: 'bg-[#bfcbe0]', textDark: 'text-[#1e2833]' },
  { id: 'O', label: 'Off duty', title: 'Off Duty', page: '18', color: '#6fa468', activeBg: 'bg-[#6fa468]', activeText: 'text-[#14290f]', tabBg: 'bg-[#9fc49a]', textDark: 'text-[#1c3a19]' },
];

const CHAPTER_SUBPAGES = {
  A: { page1: 'Author Card', page2: 'Contents & Reach' },
  E: { page1: 'Experience', page2: 'Certifications' },
  P: { page1: 'Projects 001–002', page2: 'Projects 003–004' },
  H: { page1: 'HCK 001 M-PESA', page2: 'HCK 002 AWS' },
  S: { page1: 'Languages & Stack', page2: 'Infra & Deploy' },
  O: { page1: 'Side A · Music', page2: 'Side B · Football' },
};

const CERT_DATA = [
  {
    id: 'forage-yc',
    title: 'Software Engineer at a Start Up Job Simulation',
    issuer: 'Forage / Y Combinator',
    date: 'Sep 2026',
    image: null,
    verifyUrl: 'https://www.theforage.com',
    description: 'Practical simulation covering frontend user feedback implementation, backend REST API extensions, and telemetry analytics.'
  },
  {
    id: 'alx-backend',
    title: 'ALX Software Engineering — Back-End',
    issuer: 'ALX Africa',
    date: 'Mar 2026',
    image: alxSoftwareEngineering,
    verifyUrl: 'https://savanna.alxafrica.com/certificates/LFSyC93BY7',
    description: 'Comprehensive 8-month intensive back-end program focusing on C, Python, relational database schemas, REST APIs, and deployment pipelines.'
  },
  {
    id: 'udacity-fundamentals',
    title: 'Programming Fundamentals Nanodegree',
    issuer: 'Udacity',
    date: 'Oct 2025',
    image: udacityProgrammingFundamentals,
    verifyUrl: 'https://www.udacity.com/certificate/e/a12d95ec-793e-11f0-9d7a-abefb65b1531',
    description: 'Algorithmic problem-solving, computational logic, object-oriented software design, and foundational data structures.'
  },
  {
    id: 'alx-foundations',
    title: 'ALX Professional Foundations',
    issuer: 'ALX Africa',
    date: 'Sep 2025',
    image: alxProfessionalFoundations,
    verifyUrl: 'https://savanna.alxafrica.com/certificates/PHhJ5yGB8F',
    description: 'Digital skills, professional communication, teamwork, and modern engineering workflow foundations.'
  },
  {
    id: 'hcia-opengauss',
    title: 'HCIA-openGauss V1.0',
    issuer: 'Huawei',
    date: 'May 2025',
    image: huaweiHciaOpengauss,
    verifyUrl: null,
    description: 'Enterprise openGauss database architecture, SQL execution plans, query tuning, and transactional backup recovery.'
  },
  {
    id: 'hcia-datacom',
    title: 'HCIA-Datacom V1.0',
    issuer: 'Huawei',
    date: 'May 2025',
    image: huaweiHciaDatacom,
    verifyUrl: null,
    description: 'Network engineering fundamentals, IP routing, switching protocols, enterprise VLAN, and network infrastructure security.'
  }
];

// Synthesized paper rustle sound via Web Audio API
function playPageFlipSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const duration = 0.14;
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      const decay = Math.exp(-i / (ctx.sampleRate * 0.04));
      data[i] = (Math.random() * 2 - 1) * decay;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + duration);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start();
  } catch {
    // Ignore audio permission or context restrictions
  }
}

export default function BookPortfolio() {
  const [activeChapter, setActiveChapter] = useState('A');
  const [mobilePage, setMobilePage] = useState(1);
  const [direction, setDirection] = useState(1);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeCert, setActiveCert] = useState(null);
  const [isVinylSpinning, setIsVinylSpinning] = useState(false);

  const currentIndex = CHAPTERS.findIndex((c) => c.id === activeChapter);

  const goToChapter = useCallback((targetId, targetPage = 1) => {
    if (targetId === activeChapter && mobilePage === targetPage) return;
    const targetIdx = CHAPTERS.findIndex((c) => c.id === targetId);
    setDirection(targetIdx !== currentIndex ? (targetIdx > currentIndex ? 1 : -1) : (targetPage > mobilePage ? 1 : -1));
    if (soundEnabled) playPageFlipSound();
    setActiveChapter(targetId);
    setMobilePage(targetPage);
  }, [activeChapter, currentIndex, mobilePage, soundEnabled]);

  const goNext = useCallback(() => {
    if (window.innerWidth <= 1024 && mobilePage === 1) {
      if (soundEnabled) playPageFlipSound();
      setDirection(1);
      setMobilePage(2);
      return;
    }
    if (currentIndex < CHAPTERS.length - 1) {
      goToChapter(CHAPTERS[currentIndex + 1].id, 1);
    }
  }, [currentIndex, goToChapter, mobilePage, soundEnabled]);

  const goPrev = useCallback(() => {
    if (window.innerWidth <= 1024 && mobilePage === 2) {
      if (soundEnabled) playPageFlipSound();
      setDirection(-1);
      setMobilePage(1);
      return;
    }
    if (currentIndex > 0) {
      goToChapter(CHAPTERS[currentIndex - 1].id, window.innerWidth <= 1024 ? 2 : 1);
    }
  }, [currentIndex, goToChapter, mobilePage, soundEnabled]);

  // Keyboard navigation: Left / Right arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  // Page flip animation variants (crisp white paper page turn in 3D)
  const pageVariants = {
    enter: (dir) => ({
      rotateY: dir > 0 ? 22 : -22,
      x: dir > 0 ? 28 : -28,
      opacity: 0.96,
      scale: 0.99,
      filter: 'brightness(1.02)',
      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.16)',
    }),
    center: {
      rotateY: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'brightness(1)',
      boxShadow: '0 0px 0px 0px rgba(0, 0, 0, 0)',
      transition: {
        duration: 0.42,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (dir) => ({
      rotateY: dir > 0 ? -22 : 22,
      x: dir > 0 ? -28 : 28,
      opacity: 0.92,
      scale: 0.99,
      filter: 'brightness(1.01)',
      boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.16)',
      transition: {
        duration: 0.32,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start lg:justify-center bg-[#e6e2d8] px-4 py-3 sm:py-2.5 bg-[radial-gradient(#00000008_1px,transparent_1px)] bg-[length:6px_6px] mobile:px-2 mobile:py-2 mobile:min-h-0 select-text">
      
      {/* Global Book Container (90% width of the browser) */}
      <div className="flex w-[90vw] max-w-[1300px] flex-col items-center gap-2.5 mobile:w-full mobile:gap-2">
        
        {/* Header Bar */}
        <header className="flex w-full max-w-[1240px] items-center justify-between gap-4 mobile:flex-col mobile:items-start mobile:gap-2">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => goToChapter('A')} 
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

          <div className="flex flex-wrap items-center gap-1.5 mobile:w-full mobile:justify-start">
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
              href="mailto:leoulzerihun06@gmail.com?subject=Opportunity%20for%20Leoul%20Zerihun"
              className="flex items-center rounded-[3px] border border-solid border-[#c0392b] bg-[#c0392b] px-2.5 py-1 transition-all duration-300 hover:bg-[#a83226] cursor-pointer"
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

        {/* Mobile Thumb Navigation Pill Bar */}
        <div className="hidden mobile:flex w-full items-center justify-start gap-1 overflow-x-auto rounded-[4px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] p-1.5 shadow-sm scrollbar-none">
          {CHAPTERS.map((ch) => {
            const isActive = ch.id === activeChapter;
            return (
              <button
                key={ch.id}
                onClick={() => goToChapter(ch.id, 1)}
                className={`flex flex-1 min-w-[52px] items-center justify-center gap-1 rounded-[3px] px-2 py-1.5 transition-all text-[11px] font-['IBM_Plex_Mono'] font-[600] whitespace-nowrap cursor-pointer ${
                  isActive ? 'bg-[#c0392b] text-white shadow-sm' : 'text-[#3a3a36] hover:bg-white'
                }`}
              >
                <span>{ch.id}</span>
                <span className="text-[10px] opacity-80">{ch.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Subpage Switcher Bar (Only visible on screens <= 1024px) */}
        <div className="hidden mobile:flex w-full items-center justify-between gap-1.5 rounded-[4px] border border-solid border-[#d8cfb8] bg-[#f6f2e6] p-1 shadow-sm">
          <button
            onClick={() => {
              if (mobilePage !== 1) {
                if (soundEnabled) playPageFlipSound();
                setDirection(-1);
                setMobilePage(1);
              }
            }}
            className={`flex-1 py-1.5 px-2 rounded-[3px] text-center font-['IBM_Plex_Mono'] text-[11px] font-[600] transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              mobilePage === 1
                ? 'bg-[#c0392b] text-white shadow-sm'
                : 'bg-[#fffdf7] text-[#555550] hover:bg-white border border-[#e2dac6]'
            }`}
          >
            <span className="text-[9px] opacity-80">Page 1:</span>
            <span className="truncate">{CHAPTER_SUBPAGES[activeChapter].page1}</span>
          </button>
          <button
            onClick={() => {
              if (mobilePage !== 2) {
                if (soundEnabled) playPageFlipSound();
                setDirection(1);
                setMobilePage(2);
              }
            }}
            className={`flex-1 py-1.5 px-2 rounded-[3px] text-center font-['IBM_Plex_Mono'] text-[11px] font-[600] transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              mobilePage === 2
                ? 'bg-[#c0392b] text-white shadow-sm'
                : 'bg-[#fffdf7] text-[#555550] hover:bg-white border border-[#e2dac6]'
            }`}
          >
            <span className="text-[9px] opacity-80">Page 2:</span>
            <span className="truncate">{CHAPTER_SUBPAGES[activeChapter].page2}</span>
          </button>
        </div>

        {/* The Hardcover Book Shell */}
        <div className="flex w-full max-w-[1240px] flex-col items-start relative perspective-book">
          
          {/* Bookmark Ribbon Hanging from the spine */}
          <button
            onClick={() => goToChapter('A', 1)}
            title="Spine Bookmark Ribbon (Click to open Contents)"
            className="flex h-[56px] w-4 flex-none flex-col items-start absolute left-1/2 -translate-x-1/2 top-[-20px] z-30 mobile:hidden cursor-pointer group"
          >
            <div className="flex w-4 items-start bg-[#c0392b] shadow-[1px_2px_4px_0px_#00000040] grow group-hover:bg-[#a83226] transition-colors" />
            <div className="flex h-4 w-4 flex-none items-start bg-[linear-gradient(135deg,#c0392b_50%,transparent_50%),linear-gradient(225deg,#c0392b_50%,transparent_50%)] bg-[length:50%_100%,50%_100%] bg-[position:left,right] bg-no-repeat group-hover:opacity-90" />
          </button>

          {/* Hardcover Leather Border / Spine Envelope */}
          <div className="flex w-full flex-col items-start rounded-[6px] bg-[#5a1f1a] px-2.5 py-2 shadow-[0px_24px_40px_-8px_#2a140f59,0px_6px_12px_0px_#0000002e] relative mobile:px-1 mobile:py-1">
            
            {/* Layered paper edges under pages */}
            <div className="flex h-1.5 flex-none items-start rounded-b-[3px] border-b border-solid border-[#d8cfb8] bg-[#efe8d6] absolute left-[8px] right-[8px] bottom-[4px] mobile:hidden" />
            <div className="flex h-1.5 flex-none items-start border-b border-solid border-[#ddd5bf] bg-[#f3eddd] absolute left-[9px] right-[9px] bottom-[6px] mobile:hidden" />

            {/* Book Spine Center Crease Guide */}
            <div className="flex h-full w-6 flex-none items-start absolute left-1/2 -translate-x-1/2 top-2 bottom-2 z-20 pointer-events-none mobile:hidden">
              <div className="w-full h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.02)_40%,transparent_50%,rgba(0,0,0,0.02)_60%,rgba(0,0,0,0.18)_100%)]" />
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#d4cbb8] opacity-60" />
            </div>

            {/* Animated Two-Page Spread with permanent light-paper backing - Fits 90% of screen height */}
            <div className="w-full relative h-[calc(90vh-50px)] min-h-[500px] max-h-[640px] mobile:min-h-0 mobile:max-h-none mobile:h-auto overflow-hidden mobile:overflow-visible rounded-[3px] bg-[#fbf8f0] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px]">
              
              {/* Static Book Page Underlayer (guarantees a crisp cream paper background at all times during page flips) */}
              <div className="absolute inset-0 flex items-stretch pointer-events-none select-none bg-[#fbf8f0] z-0 mobile:hidden">
                <div className="w-1/2 h-full bg-[#fbf8f0] border-r border-[#ece5d3] relative">
                  <div className="absolute top-4 left-8 font-['IBM_Plex_Mono'] text-[10px] text-[#c9c3b4] tracking-[0.25em] uppercase">
                    The Zerihun Catalog
                  </div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-[linear-gradient(to_left,rgba(0,0,0,0.06),transparent)]" />
                </div>
                <div className="w-1/2 h-full bg-[#fbf8f0] relative">
                  <div className="absolute top-4 right-10 font-['IBM_Plex_Mono'] text-[10px] text-[#c9c3b4] tracking-[0.25em] uppercase">
                    Software Engineer
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-[linear-gradient(to_right,rgba(0,0,0,0.06),transparent)]" />
                </div>
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`${activeChapter}-${mobilePage}`}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex h-full min-h-[500px] max-h-[640px] w-full items-stretch relative z-10 mobile:min-h-0 mobile:max-h-none mobile:h-auto mobile:flex-none mobile:flex-col mobile:overflow-visible preserve-3d bg-[#fbf8f0] rounded-[3px] shadow-sm"
                >
                  {/* CHAPTER A: About & Contents */}
                  {activeChapter === 'A' && (
                    <ChapterAbout 
                      goToChapter={goToChapter} 
                      mobilePage={mobilePage}
                      setMobilePage={setMobilePage}
                    />
                  )}

                  {/* CHAPTER E: Experience & Certifications */}
                  {activeChapter === 'E' && (
                    <ChapterExperience 
                      goToChapter={goToChapter} 
                      onOpenCert={setActiveCert}
                      mobilePage={mobilePage}
                      setMobilePage={setMobilePage}
                    />
                  )}

                  {/* CHAPTER P: Projects */}
                  {activeChapter === 'P' && (
                    <ChapterProjects 
                      goToChapter={goToChapter} 
                      mobilePage={mobilePage}
                      setMobilePage={setMobilePage}
                    />
                  )}

                  {/* CHAPTER H: Hackathons */}
                  {activeChapter === 'H' && (
                    <ChapterHackathons 
                      goToChapter={goToChapter} 
                      onOpenCert={setActiveCert}
                      mobilePage={mobilePage}
                      setMobilePage={setMobilePage}
                    />
                  )}

                  {/* CHAPTER S: Stack */}
                  {activeChapter === 'S' && (
                    <ChapterStack 
                      goToChapter={goToChapter} 
                      mobilePage={mobilePage}
                      setMobilePage={setMobilePage}
                    />
                  )}

                  {/* CHAPTER O: Off Duty */}
                  {activeChapter === 'O' && (
                    <ChapterOffDuty 
                      goToChapter={goToChapter} 
                      isVinylSpinning={isVinylSpinning}
                      setIsVinylSpinning={setIsVinylSpinning}
                      mobilePage={mobilePage}
                      setMobilePage={setMobilePage}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumb Index Tabs (Right Edge on Desktop) */}
            <aside 
              aria-label="Book Thumb Index" 
              className="flex flex-col items-start gap-1.5 absolute right-[-42px] top-6 mobile:hidden z-30"
            >
              {CHAPTERS.map((ch) => {
                const isActive = ch.id === activeChapter;
                return (
                  <button
                    key={ch.id}
                    onClick={() => goToChapter(ch.id)}
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

          </div>
        </div>

        {/* Global Footer */}
        <footer className="flex w-full max-w-[1240px] items-center justify-between border-t border-dashed border-[#b8b6ac] pt-1.5 mobile:flex-col mobile:gap-1 text-center">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] tracking-[0.08em] text-[#6b6b66] uppercase">
            © 2026 Leoul Zerihun · Catalogued in Addis Ababa
          </span>
          <div className="flex items-center gap-3 text-[10px] font-['IBM_Plex_Mono'] text-[#8a8a84]">
            <span className="mobile:hidden">Tip: Use ← / → keys or thumb tabs to flip pages</span>
            <span className="hidden mobile:inline">Tip: Tap tabs above to switch chapters</span>
          </div>
        </footer>

      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {activeCert && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c1c1a99] backdrop-blur-sm p-4"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              className="relative max-w-xl w-full rounded-[4px] border-4 border-solid border-[#ffffff] bg-[#fbf8f0] p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-solid border-[#c7d7ef] pb-3 mb-4">
                <div>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[600] tracking-[0.15em] text-[#c0392b] uppercase">
                    Verified Credential
                  </span>
                  <h3 className="font-['Instrument_Sans'] text-[20px] font-[600] text-[#1c1c1a]">
                    {activeCert.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveCert(null)}
                  className="rounded-[2px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] px-2.5 py-1 text-[12px] font-['IBM_Plex_Mono'] text-[#1c1c1a] hover:bg-white cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              {activeCert.image ? (
                <div className="rounded-[2px] border border-solid border-[#c9c6b8] overflow-hidden mb-4 bg-white">
                  <img 
                    src={activeCert.image} 
                    alt={activeCert.title} 
                    className="w-full h-auto max-h-[360px] object-contain"
                  />
                </div>
              ) : (
                <div className="flex h-36 items-center justify-center rounded-[2px] bg-[#f3ecdc] mb-4 text-[#8a8a84] font-['IBM_Plex_Mono'] text-[12px]">
                  Digital simulation verification badge
                </div>
              )}

              <p className="font-['IBM_Plex_Mono'] text-[12px] text-[#3a3a36] leading-[19px] mb-4">
                {activeCert.description}
              </p>

              <div className="flex items-center justify-between border-t border-solid border-[#c7d7ef] pt-3 text-[12px] font-['IBM_Plex_Mono']">
                <span className="text-[#8a8a84]">{activeCert.issuer} · {activeCert.date}</span>
                {activeCert.verifyUrl && (
                  <a
                    href={activeCert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-[600] text-[#1f4fa3] underline hover:text-[#c0392b]"
                  >
                    External Verification Link ↗
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Persistent Audio Player for Teddy Afro - Jember */}
      {isVinylSpinning && (
        <div className="fixed -bottom-96 -right-96 w-1 h-1 opacity-0 pointer-events-none">
          <iframe
            width="200"
            height="200"
            src="https://www.youtube.com/embed/PA2aWF37Ljk?autoplay=1&enablejsapi=1"
            title="Teddy Afro - Jember"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      )}

      {/* Floating Now Playing Pill when active */}
      {isVinylSpinning && (
        <aside 
          aria-label="Now Playing Audio"
          className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full border-2 border-solid border-[#1c1c1a] bg-[#fffdf7] px-4 py-2 shadow-[0px_8px_24px_-4px_#00000059] transition-all hover:scale-105 mobile:bottom-2 mobile:right-2 mobile:left-2 mobile:justify-between mobile:px-3 mobile:py-1.5"
        >
          <div className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#141414] border border-white animate-spin">
            <div className="h-2 w-2 rounded-full bg-[#c0392b]" />
          </div>
          <div className="flex flex-col">
            <span className="font-['IBM_Plex_Mono'] text-[11px] font-[600] leading-[14px] text-[#1c1c1a]">
              Teddy Afro — Jember ♪
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[9px] leading-[12px] text-[#8a8a84]">
              Playing · Chapter O (Off Duty)
            </span>
          </div>
          <button
            onClick={() => setIsVinylSpinning(false)}
            className="ml-1 rounded-full bg-[#c0392b] px-2.5 py-1 text-[10px] font-['IBM_Plex_Mono'] font-[600] text-white hover:bg-[#a83226] cursor-pointer shadow-sm transition-colors"
            title="Pause song"
          >
            Pause ⏸
          </button>
        </aside>
      )}

    </div>
  );
}

// ==========================================
// CHAPTER A: About & Table of Contents
// ==========================================
function ChapterAbout({ goToChapter, mobilePage = 1, setMobilePage }) {
  return (
    <>
      {/* Left Page (Author Card) */}
      <article className={`${mobilePage === 1 ? 'flex' : 'hidden'} lg:flex w-full mobile:w-full mobile:basis-auto mobile:grow-0 mobile:shrink-0 mobile:h-auto mobile:overflow-visible mobile:rounded-[3px] mobile:px-4 mobile:py-4 lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-l-[3px] lg:rounded-r-none lg:px-7 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[inset_1px_0px_0px_0px_#e2dac6,-2px_0px_0px_0px_#ede6d3,-4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
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
            <h1 className="font-['Instrument_Sans'] text-[28px] font-[600] leading-[31px] tracking-[-0.03em] text-[#1c1c1a] mobile:text-[24px] mobile:leading-[28px]">
              Leoul Zerihun
            </h1>
            <span className="font-['IBM_Plex_Mono'] text-[11px] font-[600] leading-[15px] text-[#c0392b]">
              Software Engineer &amp; MSc Student in Software Development
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[13px] text-[#6b6b66]">
              Addis Ababa, Ethiopia · Systems &amp; Full-Stack Builder
            </span>
          </div>
          <div className="flex flex-col items-end border-l-2 border-solid border-[#1f2a44] pl-2 flex-none">
            <span className="font-['IBM_Plex_Mono'] text-[8px] font-[500] leading-[10px] tracking-[0.15em] text-[#8a8a84] uppercase">
              Call no.
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[13px] font-[700] leading-[16px] text-[#1f2a44]">
              ENG
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[13px] font-[700] leading-[16px] text-[#1f2a44]">
              026.LZ
            </span>
          </div>
        </div>

        <div className="flex w-full items-center justify-between py-1 mobile:flex-col mobile:items-start mobile:gap-1">
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] text-[#555550] italic">
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
          
          {/* Who I Am */}
          <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 items-baseline mobile:flex-col mobile:gap-0.5">
            <span className="w-20 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[600] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
              About Me
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] leading-[15px] text-[#1c1c1a]">
              I'm Leoul, a software engineer and M.Sc. student in Software Development based in Addis Ababa. I build end-to-end digital solutions that bridge dependable backend systems with intuitive user interfaces. Passionate about software architecture, database design, and crafting resilient software people trust.
            </span>
          </div>

          {/* Academic & Training */}
          <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 items-baseline mobile:flex-col mobile:gap-0.5">
            <span className="w-20 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[600] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
              Education
            </span>
            <div className="flex flex-col gap-0.5 font-['IBM_Plex_Mono'] text-[10px] leading-[14px] text-[#2c2c28]">
              <span><strong className="font-[600] text-[#1c1c1a]">M.Sc. in Software Development</strong> — Currently pursuing advanced software engineering and distributed systems.</span>
              <span><strong className="font-[600] text-[#1c1c1a]">ALX Africa Certified</strong> — 8-month Back-End Specialization in C, Python, APIs, Unix, and data modeling.</span>
              <span><strong className="font-[600] text-[#1c1c1a]">Huawei HCIA Certified</strong> — openGauss Relational Databases &amp; Datacom Networking.</span>
            </div>
          </div>

          {/* What I Build */}
          <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 items-baseline mobile:flex-col mobile:gap-0.5">
            <span className="w-20 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[600] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
              What I Build
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#2c2c28]">
              Full-stack web applications, scalable backends, distributed APIs, and cross-platform mobile apps.
            </span>
          </div>

          {/* Work Ethic & Problem Solving */}
          <div className="flex w-full gap-2.5 py-1 items-baseline mobile:flex-col mobile:gap-0.5">
            <span className="w-20 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[600] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
              Work Ethic
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#3a3a36]">
              Methodical, curious, and disciplined. I practice algorithmic problem solving daily on LeetCode (@Nasi4Z) and value clean architecture, testable code, and reliable delivery.
            </span>
          </div>

        </div>

        {/* Mobile Turn to Page 2 Banner */}
        <div className="hidden mobile:flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-2.5 mt-3">
          <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#8a8a84]">
            Page 1 of 2
          </span>
          <button
            onClick={() => setMobilePage?.(2)}
            className="flex items-center gap-1.5 rounded-[3px] bg-[#c0392b] px-3 py-1.5 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white shadow-sm hover:bg-[#a83226] cursor-pointer transition-colors"
          >
            <span>Turn to Contents &amp; Reach</span>
            <span>→</span>
          </button>
        </div>

        <div className="flex w-full items-end pt-1 grow">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] text-[#8a8a84]">
            i
          </span>
        </div>
      </article>

      {/* Right Page (Contents & Contact) */}
      <article className={`${mobilePage === 2 ? 'flex' : 'hidden'} lg:flex w-full mobile:w-full mobile:basis-auto mobile:grow-0 mobile:shrink-0 mobile:h-auto mobile:overflow-visible mobile:rounded-[3px] mobile:px-4 mobile:py-4 lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-r-[3px] lg:rounded-l-none lg:pl-7 lg:pr-10 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[2px_0px_0px_0px_#ede6d3,4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
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
          <h2 className="font-['Instrument_Sans'] text-[22px] font-[600] leading-[26px] tracking-[-0.02em] text-[#1c1c1a]">
            Contents
          </h2>
          <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[500] tracking-[0.15em] text-[#8a8a84] uppercase">
            Six Chapters
          </span>
        </div>

        {/* Table of contents chapters with clean vertical spacing */}
        <div className="flex w-full flex-col gap-1 pt-0.5 pb-1">
          
          <button
            onClick={() => goToChapter('A')}
            className="flex w-full items-center gap-2 rounded-[3px] border border-solid border-[#d8cfb8] bg-[#f3ecdc] px-2.5 py-1 transition-all duration-300 hover:bg-[#efe4cc] hover:pl-3 text-left cursor-pointer"
          >
            <div className="flex h-1.5 w-1.5 flex-none items-center justify-center rounded-[9999px] bg-[#c0392b]" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[600] text-[#c0392b] w-3">
              A
            </span>
            <span className="font-['Instrument_Sans'] text-[12.5px] font-[600] text-[#1c1c1a]">
              About
            </span>
            <div className="flex h-0 items-start grow border-b-2 border-dotted border-[#b8b3a6] mx-1" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[600] text-[#c0392b]">
              i
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[7.5px] font-[500] tracking-[0.15em] text-[#c0392b] uppercase">
              here
            </span>
          </button>

          <button
            onClick={() => goToChapter('E')}
            className="flex w-full items-center gap-2 rounded-[3px] border border-solid border-[#e8e2d2] bg-[#fffdfa] px-2.5 py-1 transition-all duration-300 hover:border-[#b7c0c9] hover:bg-[#f0f3f6] hover:pl-3 text-left cursor-pointer group"
          >
            <div className="flex h-1.5 w-1.5 flex-none rounded-full bg-[#7d8a99] opacity-70" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[600] text-[#4a5562] w-3">
              E
            </span>
            <span className="font-['Instrument_Sans'] text-[12.5px] font-[600] text-[#1c1c1a] group-hover:text-[#c0392b]">
              Experience &amp; Certifications
            </span>
            <div className="flex h-0 items-start grow border-b-2 border-dotted border-[#b8b3a6] mx-1" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] text-[#1c1c1a]">
              1
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] text-[#c0392b]">
              →
            </span>
          </button>

          <button
            onClick={() => goToChapter('P')}
            className="flex w-full items-center gap-2 rounded-[3px] border border-solid border-[#e8e2d2] bg-[#fffdfa] px-2.5 py-1 transition-all duration-300 hover:border-[#d8cfae] hover:bg-[#f8f5eb] hover:pl-3 text-left cursor-pointer group"
          >
            <div className="flex h-1.5 w-1.5 flex-none rounded-full bg-[#b8a878] opacity-70" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[600] text-[#5c5440] w-3">
              P
            </span>
            <span className="font-['Instrument_Sans'] text-[12.5px] font-[600] text-[#1c1c1a] group-hover:text-[#c0392b]">
              Projects
            </span>
            <div className="flex h-0 items-start grow border-b-2 border-dotted border-[#b8b3a6] mx-1" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] text-[#1c1c1a]">
              7
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] text-[#c0392b]">
              →
            </span>
          </button>

          <button
            onClick={() => goToChapter('H')}
            className="flex w-full items-center gap-2 rounded-[3px] border border-solid border-[#e8e2d2] bg-[#fffdfa] px-2.5 py-1 transition-all duration-300 hover:border-[#e8c4ae] hover:bg-[#faf0ea] hover:pl-3 text-left cursor-pointer group"
          >
            <div className="flex h-1.5 w-1.5 flex-none rounded-full bg-[#d49a7a] opacity-70" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[600] text-[#6e3f26] w-3">
              H
            </span>
            <span className="font-['Instrument_Sans'] text-[12.5px] font-[600] text-[#1c1c1a] group-hover:text-[#c0392b]">
              Hackathons
            </span>
            <div className="flex h-0 items-start grow border-b-2 border-dotted border-[#b8b3a6] mx-1" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] text-[#1c1c1a]">
              12
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] text-[#c0392b]">
              →
            </span>
          </button>

          <button
            onClick={() => goToChapter('S')}
            className="flex w-full items-center gap-2 rounded-[3px] border border-solid border-[#e8e2d2] bg-[#fffdfa] px-2.5 py-1 transition-all duration-300 hover:border-[#bfcbe0] hover:bg-[#edf2f9] hover:pl-3 text-left cursor-pointer group"
          >
            <div className="flex h-1.5 w-1.5 flex-none rounded-full bg-[#8fa3c4] opacity-70" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[600] text-[#36435c] w-3">
              S
            </span>
            <span className="font-['Instrument_Sans'] text-[12.5px] font-[600] text-[#1c1c1a] group-hover:text-[#c0392b]">
              Stack
            </span>
            <div className="flex h-0 items-start grow border-b-2 border-dotted border-[#b8b3a6] mx-1" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] text-[#1c1c1a]">
              15
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] text-[#c0392b]">
              →
            </span>
          </button>

          <button
            onClick={() => goToChapter('O')}
            className="flex w-full items-center gap-2 rounded-[3px] border border-solid border-[#e8e2d2] bg-[#fffdfa] px-2.5 py-1 transition-all duration-300 hover:border-[#9fc49a] hover:bg-[#edf5ec] hover:pl-3 text-left cursor-pointer group"
          >
            <div className="flex h-1.5 w-1.5 flex-none rounded-full bg-[#6fa468] opacity-70" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[600] text-[#2f5a2b] w-3">
              O
            </span>
            <span className="font-['Instrument_Sans'] text-[12.5px] font-[600] text-[#1c1c1a] group-hover:text-[#c0392b]">
              Off Duty
            </span>
            <div className="flex h-0 items-start grow border-b-2 border-dotted border-[#b8b3a6] mx-1" />
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] text-[#1c1c1a]">
              18
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] text-[#c0392b]">
              →
            </span>
          </button>

        </div>

        {/* Contact Block pushed lower down with mt-auto */}
        <div className="flex w-full flex-col items-start gap-0.5 mt-auto pt-1.5 border-t border-dashed border-[#c7d7ef]">
          <div className="flex items-baseline justify-between w-full">
            <span className="font-['Instrument_Sans'] text-[12.5px] font-[600] leading-[15px] text-[#1c1c1a]">
              Contact &amp; Inquiries
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[7.5px] font-[500] tracking-[0.15em] text-[#c0392b] uppercase">
              Direct Reach
            </span>
          </div>
          <a
            href="mailto:leoulzerihun06@gmail.com"
            className="font-['IBM_Plex_Mono'] text-[11px] font-[600] leading-[15px] text-[#c0392b] underline break-all hover:text-[#a83226]"
          >
            leoulzerihun06@gmail.com
          </a>
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 pt-0.5">
            <div className="flex gap-1 items-baseline">
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[500] leading-[13px] tracking-[0.08em] text-[#8a8a84] uppercase">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/leoul-zerihun-7a4414347"
                target="_blank"
                rel="noreferrer"
                className="font-['IBM_Plex_Mono'] text-[9.5px] font-[500] leading-[13px] text-[#1f4fa3] underline hover:text-[#c0392b]"
              >
                leoul-zerihun
              </a>
            </div>
            <div className="flex gap-1 items-baseline">
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[500] leading-[13px] tracking-[0.08em] text-[#8a8a84] uppercase">
                Telegram
              </span>
              <a
                href="https://t.me/leoniazz"
                target="_blank"
                rel="noreferrer"
                className="font-['IBM_Plex_Mono'] text-[9.5px] font-[500] leading-[13px] text-[#1f4fa3] underline hover:text-[#c0392b]"
              >
                @leoniazz
              </a>
            </div>
            <div className="flex gap-1 items-baseline">
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[500] leading-[13px] tracking-[0.08em] text-[#8a8a84] uppercase">
                GitHub
              </span>
              <a
                href="https://github.com/Leoul-Z"
                target="_blank"
                rel="noreferrer"
                className="font-['IBM_Plex_Mono'] text-[9.5px] font-[500] leading-[13px] text-[#1f4fa3] underline hover:text-[#c0392b]"
              >
                @Leoul-Z
              </a>
            </div>
            <div className="flex gap-1 items-baseline">
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[500] leading-[13px] tracking-[0.08em] text-[#8a8a84] uppercase">
                LeetCode
              </span>
              <a
                href="https://leetcode.com/u/Nasi4Z"
                target="_blank"
                rel="noreferrer"
                className="font-['IBM_Plex_Mono'] text-[9.5px] font-[500] leading-[13px] text-[#1f4fa3] underline hover:text-[#c0392b]"
              >
                u/Nasi4Z
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Page 2 Navigation Banner */}
        <div className="hidden mobile:flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-2.5 mt-3">
          <button
            onClick={() => setMobilePage?.(1)}
            className="flex items-center gap-1 rounded-[3px] border border-[#c9c6b8] bg-[#f6f3e7] px-2.5 py-1 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-[#3a3a36] shadow-sm hover:bg-white cursor-pointer transition-colors"
          >
            <span>← Back to Author Card</span>
          </button>
          <button
            onClick={() => goToChapter('E', 1)}
            className="flex items-center gap-1.5 rounded-[3px] bg-[#c0392b] px-3 py-1 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white shadow-sm hover:bg-[#a83226] cursor-pointer transition-colors"
          >
            <span>Chapter E (Exp.)</span>
            <span>→</span>
          </button>
        </div>

        <div className="flex w-full items-end justify-between pr-4 pt-0.5 gap-4">
          <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] leading-[12px] tracking-wider text-[#8a8a84]">
            pick a tab to turn the page →
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] text-[#8a8a84]">
            ii
          </span>
        </div>

        {/* Page Curl Corner (Bottom Right) */}
        <button
          onClick={() => goToChapter('E', 1)}
          title="Turn to Chapter E (Page 1)"
          className="flex h-8 w-8 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer"
        />
      </article>
    </>
  );
}

// ==========================================
// CHAPTER E: Experience & Certifications
// ==========================================
function ChapterExperience({ goToChapter, onOpenCert, mobilePage = 1, setMobilePage }) {
  return (
    <>
      {/* Left Page (Experience) */}
      <article className={`${mobilePage === 1 ? 'flex' : 'hidden'} lg:flex w-full mobile:w-full mobile:basis-auto mobile:grow-0 mobile:shrink-0 mobile:h-auto mobile:overflow-visible mobile:rounded-[3px] mobile:px-4 mobile:py-4 lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-l-[3px] lg:rounded-r-none lg:px-7 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[inset_1px_0px_0px_0px_#e2dac6,-2px_0px_0px_0px_#ede6d3,-4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
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
          <span className="font-['Inter'] text-[48px] font-[400] leading-[42px] text-[#c0392b] mobile:text-[40px] mobile:leading-[36px]">
            E
          </span>
          <div className="flex flex-col items-start pb-0.5">
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] leading-[11px] tracking-[0.2em] text-[#8a8a84] uppercase">
              Chapter E · 2 entries
            </span>
            <h1 className="font-['Instrument_Sans'] text-[26px] font-[600] leading-[30px] tracking-[-0.03em] text-[#1c1c1a] mobile:text-[22px] mobile:leading-[26px]">
              Experience
            </h1>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-0.5 pb-2">
          <div className="flex h-px w-full flex-none items-start bg-[#1c1c1a]" />
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[13px] text-[#6b6b66] pt-0.5">
            Simulations, programs and hands-on training — filed in order.
          </span>
        </div>

        <div className="flex w-full flex-col items-start gap-2 pr-1 mobile:px-0">
          
          {/* EXP 001 */}
          <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-4 pt-2 pb-2.5 shadow-[0px_1px_0px_0px_#ede6d3,0px_4px_10px_-3px_#5a1f1a20] -rotate-[0.5deg] relative transition-all duration-300 hover:rotate-0">
            <div className="flex w-full items-center justify-between border-b border-solid border-[#e3a39b] pb-1">
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[600] leading-[14px] tracking-[0.15em] text-[#c0392b] uppercase">
                EXP 001
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[13px] tracking-[0.12em] text-[#b8b3a6] uppercase">
                Filed · E.1
              </span>
            </div>
            <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-1 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Role
              </span>
              <span className="font-['Instrument_Sans'] text-[13px] font-[600] leading-[17px] text-[#1c1c1a] pr-20 mobile:pr-0">
                Software Engineer — Startup Job Simulation
              </span>
            </div>
            <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-1 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Org
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[15px] text-[#1c1c1a]">
                Y Combinator × Forage · Sep 2026
              </span>
            </div>
            <div className="flex w-full gap-3 py-1 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Notes
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#3a3a36]">
                Hands-on full-stack &amp; product analytics simulation: frontend UX iterations, backend feature delivery, and release metrics.
              </span>
            </div>
            <div className="flex flex-col items-center rounded-[3px] border border-solid border-[#c0392b] px-1.5 py-0.5 rotate-[6deg] opacity-85 absolute right-4 top-7 select-none pointer-events-none">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[700] leading-[12px] tracking-[0.1em] text-[#c0392b]">
                COMPLETED
              </span>
            </div>
          </div>

          {/* EXP 002 */}
          <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-4 pt-2 pb-2.5 shadow-[0px_1px_0px_0px_#ede6d3,0px_4px_10px_-3px_#5a1f1a20] rotate-[0.4deg] relative transition-all duration-300 hover:rotate-0">
            <div className="flex w-full items-center justify-between border-b border-solid border-[#e3a39b] pb-1">
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[600] leading-[14px] tracking-[0.15em] text-[#c0392b] uppercase">
                EXP 002
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[13px] tracking-[0.12em] text-[#b8b3a6] uppercase">
                Filed · E.2
              </span>
            </div>
            <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-1 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Role
              </span>
              <span className="font-['Instrument_Sans'] text-[13px] font-[600] leading-[17px] text-[#1c1c1a] pr-20 mobile:pr-0">
                Summer Camp Participant — Development Department
              </span>
            </div>
            <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-1 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Org
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[15px] text-[#1c1c1a]">
                INSA Summer Camp · Summer 2026
              </span>
            </div>
            <div className="flex w-full gap-3 py-1 items-baseline mobile:flex-col mobile:gap-0.5">
              <span className="w-10 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Notes
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#3a3a36]">
                Practical software development training; collaborated with engineering team to design and build an integrated project.
              </span>
            </div>
            <div className="flex flex-col items-center rounded-[3px] border border-solid border-[#c0392b] px-1.5 py-0.5 -rotate-[5deg] opacity-85 absolute right-4 top-7 select-none pointer-events-none">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[700] leading-[12px] tracking-[0.1em] text-[#c0392b]">
                PARTICIPANT
              </span>
            </div>
          </div>

        </div>

        {/* Mobile Turn to Page 2 Banner */}
        <div className="hidden mobile:flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-2.5 mt-3">
          <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#8a8a84]">
            Page 1 of 2
          </span>
          <button
            onClick={() => setMobilePage?.(2)}
            className="flex items-center gap-1.5 rounded-[3px] bg-[#c0392b] px-3 py-1.5 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white shadow-sm hover:bg-[#a83226] cursor-pointer transition-colors"
          >
            <span>Turn to Certifications</span>
            <span>→</span>
          </button>
        </div>

        <div className="flex w-full items-end justify-between pl-8 pt-2 grow gap-4">
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
          className="flex h-8 w-8 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer"
        />
      </article>

      {/* Right Page (Certifications) */}
      <article className={`${mobilePage === 2 ? 'flex' : 'hidden'} lg:flex w-full mobile:w-full mobile:basis-auto mobile:grow-0 mobile:shrink-0 mobile:h-auto mobile:overflow-visible mobile:rounded-[3px] mobile:px-4 mobile:py-4 lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-r-[3px] lg:rounded-l-none lg:pl-7 lg:pr-10 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[2px_0px_0px_0px_#ede6d3,4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
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
          <h2 className="font-['Instrument_Sans'] text-[24px] font-[600] leading-[28px] tracking-[-0.02em] text-[#1c1c1a]">
            Certifications
          </h2>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[14px] tracking-[0.15em] text-[#8a8a84] uppercase">
            6 credentials
          </span>
        </div>

        <div className="flex w-full flex-col items-start border-t border-solid border-[#1c1c1a]">
          {CERT_DATA.map((cert, idx) => (
            <div 
              key={cert.id}
              className="flex w-full items-center gap-2 border-b border-solid border-[#c7d7ef] py-1 transition-all duration-300 hover:bg-[#f3ecdc] px-1 rounded-[2px]"
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
                <span className="font-['Instrument_Sans'] text-[12.5px] font-[600] leading-[16px] text-[#1c1c1a]">
                  {cert.title}
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[13px] text-[#6b6b66]">
                  {cert.issuer} · {cert.date}
                </span>
              </div>

              <button
                onClick={() => onOpenCert(cert)}
                className="flex items-center transition-all duration-300 hover:translate-x-1 cursor-pointer"
              >
                <span className="font-['IBM_Plex_Mono'] text-[10px] font-[600] leading-[13px] text-[#1f4fa3] underline hover:text-[#c0392b]">
                  verify →
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Page 2 Navigation Banner */}
        <div className="hidden mobile:flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-2.5 mt-3">
          <button
            onClick={() => setMobilePage?.(1)}
            className="flex items-center gap-1 rounded-[3px] border border-[#c9c6b8] bg-[#f6f3e7] px-2.5 py-1 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-[#3a3a36] shadow-sm hover:bg-white cursor-pointer transition-colors"
          >
            <span>← Back to Experience</span>
          </button>
          <button
            onClick={() => goToChapter('P', 1)}
            className="flex items-center gap-1.5 rounded-[3px] bg-[#c0392b] px-3 py-1 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white shadow-sm hover:bg-[#a83226] cursor-pointer transition-colors"
          >
            <span>Chapter P (Projects)</span>
            <span>→</span>
          </button>
        </div>

        <button
          onClick={() => goToChapter('P', 1)}
          className="flex w-full flex-wrap border-b border-dashed border-[#c9c6b8] py-1 items-baseline gap-x-2 gap-y-0.5 mt-2 text-left cursor-pointer hover:bg-[#f3ecdc] transition-colors"
        >
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
            Next
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[15px] text-[#3a3a36]">
            Chapter P — Projects, from page 7 →
          </span>
        </button>

        <div className="flex w-full items-end justify-end gap-4 pt-1 grow">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            2
          </span>
        </div>

        {/* Bottom Right Page Curl */}
        <button
          onClick={() => goToChapter('P', 1)}
          title="Turn to Chapter P (Page 7)"
          className="flex h-8 w-8 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer"
        />
      </article>
    </>
  );
}

// ==========================================
// CHAPTER P: Projects
// ==========================================
function ChapterProjects({ goToChapter, mobilePage = 1, setMobilePage }) {
  return (
    <>
      {/* Left Page (Projects 001 & 002: Hulu Rent & DeskFlow) */}
      <article className={`${mobilePage === 1 ? 'flex' : 'hidden'} lg:flex w-full mobile:w-full mobile:basis-auto mobile:grow-0 mobile:shrink-0 mobile:h-auto mobile:overflow-visible mobile:rounded-[3px] mobile:px-4 mobile:py-4 lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-l-[3px] lg:rounded-r-none lg:px-7 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[inset_1px_0px_0px_0px_#e2dac6,-2px_0px_0px_0px_#ede6d3,-4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
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
          <span className="font-['Inter'] text-[52px] font-[400] leading-[46px] text-[#c0392b] mobile:text-[44px] mobile:leading-[38px]">
            P
          </span>
          <div className="flex flex-col items-start pb-0.5">
            <h1 className="font-['Instrument_Sans'] text-[28px] font-[600] leading-[32px] tracking-[-0.03em] text-[#1c1c1a] mobile:text-[24px] mobile:leading-[28px]">
              Projects
            </h1>
            <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[13px] tracking-[0.2em] text-[#8a8a84] uppercase">
              Entries 001 — 002 · 2026
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-2 pt-2">
          
          {/* PRJ 001: Hulu Rent */}
          <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-3.5 pt-2 pb-2.5 shadow-[0px_1px_0px_0px_#ede6d3,0px_4px_10px_-3px_#5a1f1a14] relative transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex w-full items-center justify-between border-b border-solid border-[#e3a39b] pb-1">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] tracking-[0.15em] text-[#c0392b] uppercase">
                PRJ 001.HR
              </span>
              <span className="rounded-full bg-[#fcedea] px-1.5 py-0.5 font-['IBM_Plex_Mono'] text-[8.5px] font-[600] tracking-[0.08em] text-[#c0392b] uppercase">
                Featured Work ★
              </span>
            </div>
            <div className="flex items-baseline justify-between w-full pt-1">
              <h2 className="font-['Instrument_Sans'] text-[16px] font-[600] leading-[20px] text-[#1c1c1a]">
                Hulu Rent
              </h2>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] text-[#8a8a84] truncate max-w-[150px] mobile:hidden">
                hulu-rent-frontend.vercel.app
              </span>
            </div>
            <div className="flex w-full flex-col items-start border-t border-solid border-[#c7d7ef] pt-1 mt-1">
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[500] leading-[14px] text-[#1c1c1a]">
                React · Node.js · Express · PostgreSQL · Tailwind
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[14px] text-[#6b6b66] pt-0.5">
                Full-featured property rental platform connecting tenants and property owners: multi-criteria search, JWT authentication, and owner dashboard.
              </span>
            </div>
            <div className="flex items-center gap-2 pt-1.5">
              <a
                href="https://hulu-rent-frontend.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#c0392b] bg-[#c0392b] px-2 py-0.5 text-[9.5px] font-['IBM_Plex_Mono'] font-[600] text-white hover:bg-[#a83226] transition-colors"
              >
                Live ↗
              </a>
              <a
                href="https://github.com/Leoul-Z/HuluRent"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#1c1c1a] bg-white px-2 py-0.5 text-[9.5px] font-['IBM_Plex_Mono'] font-[600] text-[#1c1c1a] hover:bg-[#f6efe0] transition-colors"
              >
                Source ↗
              </a>
            </div>
          </div>

          {/* PRJ 002: DeskFlow */}
          <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-3.5 pt-2 pb-2.5 shadow-[0px_1px_0px_0px_#ede6d3,0px_4px_10px_-3px_#5a1f1a14] relative transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex w-full items-center justify-between border-b border-solid border-[#e3a39b] pb-1">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] tracking-[0.15em] text-[#c0392b] uppercase">
                PRJ 002.DF
              </span>
              <span className="font-['Inter'] text-[10px] font-[600] text-[#c0392b]">
                favourite build ★
              </span>
            </div>
            <div className="flex items-baseline justify-between w-full pt-1">
              <h2 className="font-['Instrument_Sans'] text-[16px] font-[600] leading-[20px] text-[#1c1c1a]">
                DeskFlow
              </h2>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] text-[#8a8a84] truncate max-w-[150px] mobile:hidden">
                helpdesk-one-rho.vercel.app
              </span>
            </div>
            <div className="flex w-full flex-col items-start border-t border-solid border-[#c7d7ef] pt-1 mt-1">
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[500] leading-[14px] text-[#1c1c1a]">
                React · Express · Prisma · PostgreSQL · JWT
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[14px] text-[#6b6b66] pt-0.5">
                Full-stack helpdesk ticketing system with role-based workflows for employees, technical staff and managers with audit logs and status queues.
              </span>
            </div>
            <div className="flex items-center gap-2 pt-1.5">
              <a
                href="https://helpdesk-one-rho.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#c0392b] bg-[#c0392b] px-2 py-0.5 text-[9.5px] font-['IBM_Plex_Mono'] font-[600] text-white hover:bg-[#a83226] transition-colors"
              >
                Live ↗
              </a>
              <a
                href="https://github.com/Leoul-Z/Helpdesk"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#1c1c1a] bg-white px-2 py-0.5 text-[9.5px] font-['IBM_Plex_Mono'] font-[600] text-[#1c1c1a] hover:bg-[#f6efe0] transition-colors"
              >
                Source ↗
              </a>
            </div>
          </div>

        </div>

        {/* Mobile Turn to Page 2 Banner */}
        <div className="hidden mobile:flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-2.5 mt-3">
          <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#8a8a84]">
            Page 1 of 2
          </span>
          <button
            onClick={() => setMobilePage?.(2)}
            className="flex items-center gap-1.5 rounded-[3px] bg-[#c0392b] px-3 py-1.5 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white shadow-sm hover:bg-[#a83226] cursor-pointer transition-colors"
          >
            <span>Turn to Projects 003–004</span>
            <span>→</span>
          </button>
        </div>

        <div className="flex w-full items-end justify-between pl-8 pt-2 grow gap-4">
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
          className="flex h-8 w-8 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer"
        />
      </article>

      {/* Right Page (Projects 003 & 004: Petify & Didactic AI) */}
      <article className={`${mobilePage === 2 ? 'flex' : 'hidden'} lg:flex w-full mobile:w-full mobile:basis-auto mobile:grow-0 mobile:shrink-0 mobile:h-auto mobile:overflow-visible mobile:rounded-[3px] mobile:px-4 mobile:py-4 lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-r-[3px] lg:rounded-l-none lg:pl-7 lg:pr-10 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[2px_0px_0px_0px_#ede6d3,4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
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
          <span className="font-['Instrument_Sans'] text-[14px] font-[600] leading-[18px] text-[#1c1c1a]">
            Also catalogued
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[13px] tracking-[0.15em] text-[#8a8a84] uppercase">
            003 — 004
          </span>
        </div>

        <div className="flex w-full flex-col items-start gap-2 pt-2">
          
          {/* PRJ 003: Petify */}
          <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-3.5 pt-2 pb-2.5 shadow-[0px_1px_0px_0px_#ede6d3,0px_4px_10px_-3px_#5a1f1a14] relative transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex w-full items-center justify-between border-b border-solid border-[#e3a39b] pb-1">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] tracking-[0.15em] text-[#c0392b] uppercase">
                PRJ 003.PT
              </span>
              <span className="rounded-full bg-[#edf4ea] px-1.5 py-0.5 font-['IBM_Plex_Mono'] text-[8.5px] font-[600] tracking-[0.08em] text-[#2f5a2b] uppercase">
                E-Commerce &amp; Care
              </span>
            </div>
            <div className="flex items-baseline justify-between w-full pt-1">
              <h2 className="font-['Instrument_Sans'] text-[16px] font-[600] leading-[20px] text-[#1c1c1a]">
                Petify
              </h2>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] text-[#8a8a84] truncate max-w-[150px] mobile:hidden">
                petify-plum.vercel.app
              </span>
            </div>
            <div className="flex w-full flex-col items-start border-t border-solid border-[#c7d7ef] pt-1 mt-1">
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[500] leading-[14px] text-[#1c1c1a]">
                React · PHP · PostgreSQL · Tailwind
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[14px] text-[#6b6b66] pt-0.5">
                Pet shop app with category filtering, cart checkout and service appointment booking for veterinary and grooming care.
              </span>
            </div>
            <div className="flex items-center gap-2 pt-1.5">
              <a
                href="https://petify-plum.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#c0392b] bg-[#c0392b] px-2 py-0.5 text-[9.5px] font-['IBM_Plex_Mono'] font-[600] text-white hover:bg-[#a83226] transition-colors"
              >
                Live ↗
              </a>
              <a
                href="https://github.com/Leoul-Z/Petify"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#1c1c1a] bg-white px-2 py-0.5 text-[9.5px] font-['IBM_Plex_Mono'] font-[600] text-[#1c1c1a] hover:bg-[#f6efe0] transition-colors"
              >
                Source ↗
              </a>
            </div>
          </div>

          {/* PRJ 004: Didactic AI */}
          <div className="flex w-full flex-col items-start rounded-[2px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-3.5 pt-2 pb-2.5 shadow-[0px_1px_0px_0px_#ede6d3,0px_4px_10px_-3px_#5a1f1a14] relative transition-all duration-300 hover:-translate-y-0.5">
            <div className="flex w-full items-center justify-between border-b border-solid border-[#e3a39b] pb-1">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] tracking-[0.15em] text-[#c0392b] uppercase">
                PRJ 004.DA
              </span>
              <span className="rounded-full bg-[#fcedea] px-1.5 py-0.5 font-['IBM_Plex_Mono'] text-[8.5px] font-[600] tracking-[0.08em] text-[#c0392b] uppercase">
                AWS Finalist ★
              </span>
            </div>
            <div className="flex items-baseline justify-between w-full pt-1">
              <h2 className="font-['Instrument_Sans'] text-[16px] font-[600] leading-[20px] text-[#1c1c1a]">
                Didactic AI
              </h2>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] text-[#8a8a84] truncate max-w-[150px] mobile:hidden">
                didactic-ai-tau.vercel.app
              </span>
            </div>
            <div className="flex w-full flex-col items-start border-t border-solid border-[#c7d7ef] pt-1 mt-1">
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[500] leading-[14px] text-[#1c1c1a]">
                React · FastAPI · PostgreSQL · Python
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[14px] text-[#6b6b66] pt-0.5">
                Intelligent academic evaluation system featuring automated assessment, prompt engineering, and performance analytics.
              </span>
            </div>
            <div className="flex items-center gap-2 pt-1.5">
              <a
                href="https://didactic-ai-tau.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#c0392b] bg-[#c0392b] px-2 py-0.5 text-[9.5px] font-['IBM_Plex_Mono'] font-[600] text-white hover:bg-[#a83226] transition-colors"
              >
                Live ↗
              </a>
              <a
                href="https://github.com/Leoul-Z"
                target="_blank"
                rel="noreferrer"
                className="rounded-[3px] border border-solid border-[#1c1c1a] bg-white px-2 py-0.5 text-[9.5px] font-['IBM_Plex_Mono'] font-[600] text-[#1c1c1a] hover:bg-[#f6efe0] transition-colors"
              >
                Source ↗
              </a>
            </div>
          </div>

        </div>

        {/* Mobile Page 2 Navigation Banner */}
        <div className="hidden mobile:flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-2.5 mt-3">
          <button
            onClick={() => setMobilePage?.(1)}
            className="flex items-center gap-1 rounded-[3px] border border-[#c9c6b8] bg-[#f6f3e7] px-2.5 py-1 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-[#3a3a36] shadow-sm hover:bg-white cursor-pointer transition-colors"
          >
            <span>← Back to Projects 001–002</span>
          </button>
          <button
            onClick={() => goToChapter('H', 1)}
            className="flex items-center gap-1.5 rounded-[3px] bg-[#c0392b] px-3 py-1 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white shadow-sm hover:bg-[#a83226] cursor-pointer transition-colors"
          >
            <span>Chapter H (Hacks)</span>
            <span>→</span>
          </button>
        </div>

        <button
          onClick={() => goToChapter('H', 1)}
          className="flex w-full items-end justify-between pt-2 grow gap-4 text-left cursor-pointer hover:text-[#c0392b]"
        >
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[14px] tracking-wider text-[#8a8a84]">
            next: H · Hackathons →
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            8
          </span>
        </button>

        {/* Bottom Right Page Curl */}
        <button
          onClick={() => goToChapter('H', 1)}
          title="Turn to Chapter H (Page 12)"
          className="flex h-8 w-8 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer"
        />
      </article>
    </>
  );
}

// ==========================================
// CHAPTER H: Hackathons
// ==========================================
function ChapterHackathons({ goToChapter, onOpenCert, mobilePage = 1, setMobilePage }) {
  return (
    <>
      {/* Left Page (HCK 001) */}
      <article className={`${mobilePage === 1 ? 'flex' : 'hidden'} lg:flex w-full mobile:w-full mobile:basis-auto mobile:grow-0 mobile:shrink-0 mobile:h-auto mobile:overflow-visible mobile:rounded-[3px] mobile:px-4 mobile:py-4 lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-l-[3px] lg:rounded-r-none lg:px-7 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[inset_1px_0px_0px_0px_#e2dac6,-2px_0px_0px_0px_#ede6d3,-4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
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
          <span className="font-['Instrument_Serif'] text-[56px] font-[400] leading-[48px] text-[#c0392b] mobile:text-[46px] mobile:leading-[40px]">
            H
          </span>
          <div className="flex flex-col items-start pb-0.5">
            <h1 className="font-['Instrument_Sans'] text-[28px] font-[600] leading-[32px] tracking-[-0.03em] text-[#1c1c1a] mobile:text-[24px] mobile:leading-[28px]">
              Hackathons
            </h1>
            <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[13px] tracking-[0.2em] text-[#8a8a84] uppercase">
              weekend builds
            </span>
          </div>
        </div>

        <div className="flex w-full items-start gap-3 relative mobile:flex-col pt-1">
          {/* HCK 001 Card */}
          <div className="flex grow shrink-0 basis-0 flex-col items-start rounded-[2px] border border-solid border-[#e2dac6] bg-[#ffffff] shadow-[0px_1px_3px_0px_#0000001a] relative">
            <div className="flex w-full items-center justify-between border-b-2 border-solid border-[#c0392b] px-3.5 py-1">
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[600] leading-[14px] tracking-[0.15em] text-[#c0392b] uppercase">
                HCK 001
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] leading-[12px] tracking-[0.1em] text-[#8a8a84] uppercase">
                Entry card
              </span>
            </div>

            <div className="flex w-full flex-col items-start px-3.5 pb-2">
              <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 items-baseline">
                <span className="w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                  Event
                </span>
                <span className="font-['Instrument_Sans'] text-[13.5px] font-[600] leading-[17px] text-[#1c1c1a]">
                  Cashless Community M-PESA Hackathon
                </span>
              </div>
              <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 items-baseline">
                <span className="w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                  Date
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] leading-[15px] text-[#3a3a36]">
                  2026 · Addis Ababa
                </span>
              </div>
              <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 items-baseline">
                <span className="w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                  Team
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] leading-[15px] text-[#3a3a36]">
                  Backend &amp; Mobile Developer
                </span>
              </div>
              <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 items-baseline">
                <span className="w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                  Built
                </span>
                <span className="font-['Instrument_Sans'] text-[12px] font-[400] leading-[16px] text-[#1c1c1a]">
                  E-Tourism Platform with Flutter &amp; FastAPI.
                </span>
              </div>
              <div className="flex w-full items-center justify-between pt-1.5">
                <button
                  onClick={() => goToChapter('S')}
                  className="font-['IBM_Plex_Mono'] text-[10.5px] font-[600] leading-[15px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer"
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
                  className="font-['IBM_Plex_Mono'] text-[10px] font-[600] leading-[15px] text-[#c0392b] hover:underline cursor-pointer flex items-center gap-1"
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
            className="flex w-32 flex-none flex-col items-center gap-1 bg-[#ffffff] px-1.5 pt-1.5 pb-2 shadow-[0px_3px_8px_0px_#00000024] rotate-2 relative mt-1 mobile:mt-2 mobile:self-center cursor-pointer transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-20 group"
          >
            <div className="flex h-3.5 w-10 flex-none items-start bg-[#f2e6b8cc] shadow-[0px_1px_1px_0px_#0000001a] absolute -top-1.5 left-1/2 -translate-x-1/2 -rotate-6 z-10" />
            <div className="flex h-24 w-full flex-none overflow-hidden rounded-[1px] bg-[#1c1c1a] relative border border-[#e2dac6]">
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
              <span className="font-['Instrument_Serif'] text-[12.5px] font-[400] leading-[14px] text-[#1c1c1a] italic text-center">
                M-PESA Demo Day
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[8px] font-[500] text-[#8a8a84] tracking-[0.08em] uppercase">
                Addis Ababa · 2026
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Turn to Page 2 Banner */}
        <div className="hidden mobile:flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-2.5 mt-3">
          <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#8a8a84]">
            Page 1 of 2
          </span>
          <button
            onClick={() => setMobilePage?.(2)}
            className="flex items-center gap-1.5 rounded-[3px] bg-[#c0392b] px-3 py-1.5 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white shadow-sm hover:bg-[#a83226] cursor-pointer transition-colors"
          >
            <span>Turn to AWS Hackathon</span>
            <span>→</span>
          </button>
        </div>

        <div className="flex w-full items-end justify-end pt-2 grow">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            12
          </span>
        </div>

        {/* Bottom Left Page Curl */}
        <button
          onClick={() => goToChapter('P', 2)}
          title="Turn back to Chapter P (Page 8)"
          className="flex h-8 w-8 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer"
        />
      </article>

      {/* Right Page (HCK 002 & HCK 003) */}
      <article className={`${mobilePage === 2 ? 'flex' : 'hidden'} lg:flex w-full mobile:w-full mobile:basis-auto mobile:grow-0 mobile:shrink-0 mobile:h-auto mobile:overflow-visible mobile:rounded-[3px] mobile:px-4 mobile:py-4 lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-r-[3px] lg:rounded-l-none lg:pl-7 lg:pr-10 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[2px_0px_0px_0px_#ede6d3,4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
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
          <div className="flex w-full items-center justify-between border-b-2 border-solid border-[#c0392b] px-3.5 py-1">
            <span className="font-['IBM_Plex_Mono'] text-[10px] font-[600] leading-[14px] tracking-[0.2em] text-[#c0392b] uppercase">
              HCK 002
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] leading-[12px] tracking-[0.1em] text-[#8a8a84] uppercase">
              AWS Hackathon
            </span>
          </div>

          <div className="flex w-full flex-col items-start px-3.5 pb-2">
            <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 items-baseline">
              <span className="w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Event
              </span>
              <span className="font-['Instrument_Sans'] text-[13.5px] font-[600] leading-[17px] text-[#1c1c1a]">
                AWS Hackathon 2026
              </span>
            </div>
            <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 items-baseline">
              <span className="w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Date
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] leading-[15px] text-[#3a3a36]">
                2026 · Online
              </span>
            </div>
            <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 items-baseline">
              <span className="w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Team
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[400] leading-[15px] text-[#3a3a36]">
                Full-stack Developer
              </span>
            </div>
            <div className="flex w-full gap-2.5 border-b border-solid border-[#c7d7ef] py-1 items-baseline">
              <span className="w-12 flex-none font-['IBM_Plex_Mono'] text-[9px] font-[500] leading-[14px] tracking-[0.12em] text-[#c0392b] uppercase">
                Built
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] font-[400] leading-[16px] text-[#1c1c1a]">
                Didactic AI, Intelligent Academic Evaluation with React, FastAPI &amp; PostgreSQL.
              </span>
            </div>
            <div className="flex w-full items-center pt-1.5">
              <button
                onClick={() => goToChapter('P')}
                className="font-['IBM_Plex_Mono'] text-[10.5px] font-[600] leading-[15px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer"
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

        {/* HCK 003 Reserved Card */}
        <div className="flex w-full flex-col items-start gap-0.5 rounded-[2px] border-2 border-dashed border-[#c9c6b8] px-3.5 py-2 mt-3">
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] tracking-[0.15em] text-[#b8b3a6] uppercase">
            HCK 003 · Next entry
          </span>
          <span className="font-['Instrument_Sans'] text-[12px] font-[400] leading-[16px] text-[#8a8a84]">
            Reserved for the next weekend build.
          </span>
        </div>

        {/* Mobile Page 2 Navigation Banner */}
        <div className="hidden mobile:flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-2.5 mt-3">
          <button
            onClick={() => setMobilePage?.(1)}
            className="flex items-center gap-1 rounded-[3px] border border-[#c9c6b8] bg-[#f6f3e7] px-2.5 py-1 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-[#3a3a36] shadow-sm hover:bg-white cursor-pointer transition-colors"
          >
            <span>← Back to M-PESA Hackathon</span>
          </button>
          <button
            onClick={() => goToChapter('S', 1)}
            className="flex items-center gap-1.5 rounded-[3px] bg-[#c0392b] px-3 py-1 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white shadow-sm hover:bg-[#a83226] cursor-pointer transition-colors"
          >
            <span>Chapter S (Stack)</span>
            <span>→</span>
          </button>
        </div>

        <button
          onClick={() => goToChapter('S', 1)}
          className="flex w-full items-end justify-between pt-2 grow gap-4 text-left cursor-pointer hover:text-[#c0392b]"
        >
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[14px] tracking-wider text-[#8a8a84]">
            next: S · Stack →
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            13
          </span>
        </button>

        {/* Bottom Right Page Curl */}
        <button
          onClick={() => goToChapter('S', 1)}
          title="Turn to Chapter S (Page 15)"
          className="flex h-8 w-8 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer"
        />
      </article>
    </>
  );
}

// ==========================================
// CHAPTER S: Stack
// ==========================================
function ChapterStack({ goToChapter, mobilePage = 1, setMobilePage }) {
  return (
    <>
      {/* Left Page (Languages, FE, BE) */}
      <article className={`${mobilePage === 1 ? 'flex' : 'hidden'} lg:flex w-full mobile:w-full mobile:basis-auto mobile:grow-0 mobile:shrink-0 mobile:h-auto mobile:overflow-visible mobile:rounded-[3px] mobile:px-4 mobile:py-4 lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-l-[3px] lg:rounded-r-none lg:px-7 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[inset_1px_0px_0px_0px_#e2dac6,-2px_0px_0px_0px_#ede6d3,-4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-full items-start bg-[linear-gradient(to_left,#0000002e,#00000010_30%,transparent)] absolute top-0 right-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            Chapter S
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            Leoul Zerihun
          </span>
        </div>

        <div className="flex w-full items-end gap-3 pb-1.5 relative">
          <span className="font-['Instrument_Serif'] text-[56px] font-[400] leading-[48px] text-[#c0392b] mobile:text-[46px] mobile:leading-[40px]">
            S
          </span>
          <div className="flex flex-col items-start pb-0.5">
            <h1 className="font-['Instrument_Sans'] text-[28px] font-[600] leading-[32px] tracking-[-0.03em] text-[#1c1c1a] mobile:text-[24px] mobile:leading-[28px]">
              Stack
            </h1>
            <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[13px] tracking-[0.08em] text-[#6b6b66]">
              24 subjects · 5 groups
            </span>
          </div>
        </div>

        {/* Vintage Ledger Card */}
        <div className="flex w-full flex-col items-start rounded-[2px] border-t-2 border-solid border-[#c0392b] bg-[#ffffff] px-4 pt-2.5 pb-2 shadow-[0px_1px_0px_0px_#e2dac6,0px_4px_10px_-3px_#5a1f1a18] bg-[linear-gradient(#c7d7ef59_1px,transparent_1px)] bg-[length:100%_20px] rotate-[-0.3deg]">
          
          <div className="flex w-full items-center justify-between border-b border-solid border-[#1c1c1a] pb-1 gap-2">
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[500] leading-[14px] text-[#1c1c1a]">
              Leoul Zerihun — see also the following subjects:
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] leading-[12px] tracking-[0.15em] text-[#8a8a84] uppercase mobile:hidden">
              x-ref 1/2
            </span>
          </div>

          {/* Languages */}
          <div className="flex w-full items-start gap-3 border-b border-solid border-[#c7d7ef] py-1.5 mobile:flex-col mobile:gap-1">
            <div className="flex w-20 flex-none flex-col items-start">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] tracking-[0.12em] text-[#c0392b] uppercase">
                LANG
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] font-[600] leading-[16px] text-[#1c1c1a]">
                Languages
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-1">
              {['C++', 'Python', 'Java', 'JavaScript', 'PHP', 'SQL'].map((item) => (
                <div key={item} className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#fbf8f0] px-1.5 py-0.5 transition-all duration-200 hover:border-[#c0392b] hover:bg-[#ffffff]">
                  <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[13px] text-[#3a3a36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="flex w-full items-start gap-3 border-b border-solid border-[#c7d7ef] py-1.5 mobile:flex-col mobile:gap-1">
            <div className="flex w-20 flex-none flex-col items-start">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] tracking-[0.12em] text-[#c0392b] uppercase">
                FE
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] font-[600] leading-[16px] text-[#1c1c1a]">
                Frontend
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-1">
              {['HTML', 'CSS', 'React', 'Tailwind CSS', 'Flutter', 'Bootstrap', 'Vite'].map((item) => (
                <div key={item} className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#fbf8f0] px-1.5 py-0.5 transition-all duration-200 hover:border-[#c0392b] hover:bg-[#ffffff]">
                  <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[13px] text-[#3a3a36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="flex w-full items-start gap-3 py-1.5 mobile:flex-col mobile:gap-1">
            <div className="flex w-20 flex-none flex-col items-start">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] tracking-[0.12em] text-[#c0392b] uppercase">
                BE
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] font-[600] leading-[16px] text-[#1c1c1a]">
                Backend
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-1">
              {['Node.js', 'Express', 'FastAPI', 'Django', 'Resend'].map((item) => (
                <div key={item} className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#fbf8f0] px-1.5 py-0.5 transition-all duration-200 hover:border-[#c0392b] hover:bg-[#ffffff]">
                  <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[13px] text-[#3a3a36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile Turn to Page 2 Banner */}
        <div className="hidden mobile:flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-2.5 mt-3">
          <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#8a8a84]">
            Page 1 of 2
          </span>
          <button
            onClick={() => setMobilePage?.(2)}
            className="flex items-center gap-1.5 rounded-[3px] bg-[#c0392b] px-3 py-1.5 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white shadow-sm hover:bg-[#a83226] cursor-pointer transition-colors"
          >
            <span>Turn to Infra &amp; Deploy</span>
            <span>→</span>
          </button>
        </div>

        <div className="flex w-full items-end justify-between pl-8 pt-2 grow gap-4">
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            15
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[13px] tracking-wider text-[#b8b3a6] mobile:hidden">
            cont. overleaf →
          </span>
        </div>

        {/* Bottom Left Page Curl */}
        <button
          onClick={() => goToChapter('H', 2)}
          title="Turn back to Chapter H (Page 13)"
          className="flex h-8 w-8 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer"
        />
      </article>

      {/* Right Page (Data, Deploy, Circulation) */}
      <article className={`${mobilePage === 2 ? 'flex' : 'hidden'} lg:flex w-full mobile:w-full mobile:basis-auto mobile:grow-0 mobile:shrink-0 mobile:h-auto mobile:overflow-visible mobile:rounded-[3px] mobile:px-4 mobile:py-4 lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-r-[3px] lg:rounded-l-none lg:pl-7 lg:pr-10 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[2px_0px_0px_0px_#ede6d3,4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
        <div className="flex w-12 items-start bg-[linear-gradient(to_right,#00000033,#00000012_30%,transparent)] absolute top-0 left-0 bottom-0 pointer-events-none mobile:hidden" />
        
        <div className="flex w-full items-center justify-between pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#b8b3a6] uppercase">
            A portfolio
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[9px] font-[400] leading-[12px] tracking-[0.25em] text-[#8a8a84] uppercase">
            Stack
          </span>
        </div>

        {/* Continued Ledger Card */}
        <div className="flex w-full flex-col items-start rounded-[2px] border-t-2 border-solid border-[#c0392b] bg-[#ffffff] px-4 pt-2.5 pb-2 shadow-[0px_1px_0px_0px_#e2dac6,0px_4px_10px_-3px_#5a1f1a18] bg-[linear-gradient(#c7d7ef59_1px,transparent_1px)] bg-[length:100%_20px] rotate-[-0.3deg]">
          
          <div className="flex w-full items-center justify-between border-b border-solid border-[#1c1c1a] pb-1 gap-2">
            <span className="font-['IBM_Plex_Mono'] text-[10.5px] font-[500] leading-[14px] text-[#1c1c1a]">
              Leoul Zerihun — subjects, continued
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] leading-[12px] tracking-[0.15em] text-[#8a8a84] uppercase mobile:hidden">
              x-ref 2/2
            </span>
          </div>

          {/* Data & Tooling */}
          <div className="flex w-full items-start gap-3 border-b border-solid border-[#c7d7ef] py-1.5 mobile:flex-col mobile:gap-1">
            <div className="flex w-20 flex-none flex-col items-start">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] tracking-[0.12em] text-[#c0392b] uppercase">
                DATA
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] font-[600] leading-[16px] text-[#1c1c1a]">
                Data &amp; Infra
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-1">
              {['PostgreSQL', 'Prisma', 'Docker', 'Git'].map((item) => (
                <div key={item} className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#fbf8f0] px-1.5 py-0.5 transition-all duration-200 hover:border-[#c0392b] hover:bg-[#ffffff]">
                  <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[13px] text-[#3a3a36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deployment */}
          <div className="flex w-full items-start gap-3 py-1.5 mobile:flex-col mobile:gap-1">
            <div className="flex w-20 flex-none flex-col items-start">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] tracking-[0.12em] text-[#c0392b] uppercase">
                DEPLOY
              </span>
              <span className="font-['Instrument_Sans'] text-[12px] font-[600] leading-[16px] text-[#1c1c1a]">
                Deploy
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-1">
              {['Vercel', 'Render'].map((item) => (
                <div key={item} className="flex items-center rounded-[3px] border border-solid border-[#c9c6b8] bg-[#fbf8f0] px-1.5 py-0.5 transition-all duration-200 hover:border-[#c0392b] hover:bg-[#ffffff]">
                  <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[13px] text-[#3a3a36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Most Used / Circulation section */}
        <div className="flex w-full flex-col items-start gap-1 pt-2">
          <div className="flex w-full items-center justify-between border-b border-solid border-[#1c1c1a] pb-1">
            <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] tracking-[0.2em] text-[#c0392b] uppercase">
              Most used
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] leading-[12px] tracking-[0.1em] text-[#8a8a84] uppercase">
              Circulation
            </span>
          </div>

          <div className="flex w-full flex-col items-start gap-0.5">
            <div className="flex w-full items-center justify-between">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[13px] text-[#1c1c1a]">
                React
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] leading-[12px] text-[#8a8a84]">
                ●●●●●
              </span>
            </div>
            <div className="flex h-1 w-full flex-none items-start rounded-[1px] bg-[#ece5d3]">
              <div className="flex h-1 items-start rounded-[1px] bg-[#c0392b] w-[94%]" />
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-0.5">
            <div className="flex w-full items-center justify-between">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[13px] text-[#1c1c1a]">
                Node.js / Express
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] leading-[12px] text-[#8a8a84]">
                ●●●●○
              </span>
            </div>
            <div className="flex h-1 w-full flex-none items-start rounded-[1px] bg-[#ece5d3]">
              <div className="flex h-1 items-start rounded-[1px] bg-[#c0392b] w-[86%]" />
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-0.5">
            <div className="flex w-full items-center justify-between">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[13px] text-[#1c1c1a]">
                FastAPI / Python
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] leading-[12px] text-[#8a8a84]">
                ●●●●○
              </span>
            </div>
            <div className="flex h-1 w-full flex-none items-start rounded-[1px] bg-[#ece5d3]">
              <div className="flex h-1 items-start rounded-[1px] bg-[#c0392b] w-[78%]" />
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-0.5">
            <div className="flex w-full items-center justify-between">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[13px] text-[#1c1c1a]">
                PostgreSQL
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[400] leading-[12px] text-[#8a8a84]">
                ●●●○○
              </span>
            </div>
            <div className="flex h-1 w-full flex-none items-start rounded-[1px] bg-[#ece5d3]">
              <div className="flex h-1 items-start rounded-[1px] bg-[#c0392b] w-[65%]" />
            </div>
          </div>
        </div>

        {/* Mobile Page 2 Navigation Banner */}
        <div className="hidden mobile:flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-2.5 mt-3">
          <button
            onClick={() => setMobilePage?.(1)}
            className="flex items-center gap-1 rounded-[3px] border border-[#c9c6b8] bg-[#f6f3e7] px-2.5 py-1 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-[#3a3a36] shadow-sm hover:bg-white cursor-pointer transition-colors"
          >
            <span>← Back to Languages &amp; Stack</span>
          </button>
          <button
            onClick={() => goToChapter('O', 1)}
            className="flex items-center gap-1.5 rounded-[3px] bg-[#c0392b] px-3 py-1 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white shadow-sm hover:bg-[#a83226] cursor-pointer transition-colors"
          >
            <span>Chapter O (Off Duty)</span>
            <span>→</span>
          </button>
        </div>

        <button
          onClick={() => goToChapter('O', 1)}
          className="flex w-full items-end justify-between pr-4 pt-2 grow gap-4 text-left cursor-pointer hover:text-[#c0392b]"
        >
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[500] leading-[14px] text-[#c0392b] hover:text-[#a83226]">
            next: O · Off Duty, page 18 →
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            16
          </span>
        </button>

        {/* Bottom Right Page Curl */}
        <button
          onClick={() => goToChapter('O', 1)}
          title="Turn to Chapter O (Page 18)"
          className="flex h-8 w-8 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer"
        />
      </article>
    </>
  );
}

// ==========================================
// CHAPTER O: Off Duty (Music & Football)
// ==========================================
function ChapterOffDuty({ goToChapter, isVinylSpinning, setIsVinylSpinning, mobilePage = 1, setMobilePage }) {
  return (
    <>
      {/* Left Page (Side A · Music) */}
      <article className={`${mobilePage === 1 ? 'flex' : 'hidden'} lg:flex w-full mobile:w-full mobile:basis-auto mobile:grow-0 mobile:shrink-0 mobile:h-auto mobile:overflow-visible mobile:rounded-[3px] mobile:px-4 mobile:py-4 lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-l-[3px] lg:rounded-r-none lg:px-7 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[inset_1px_0px_0px_0px_#e2dac6,-2px_0px_0px_0px_#ede6d3,-4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
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
          <span className="font-['Instrument_Serif'] text-[56px] font-[400] leading-[48px] text-[#c0392b]">
            O
          </span>
          <div className="flex flex-col items-start gap-0.5 pt-0.5">
            <h1 className="font-['Instrument_Sans'] text-[28px] font-[600] leading-[32px] tracking-[-0.03em] text-[#1c1c1a] mobile:text-[24px] mobile:leading-[28px]">
              Off Duty
            </h1>
            <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[15px] text-[#3a3a36]">
              things I love when I'm not coding
            </span>
          </div>
        </div>

        <div className="flex w-full items-center gap-2 pt-1 pb-1.5">
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] tracking-[0.25em] text-[#c0392b] uppercase">
            Side A · Music
          </span>
          <div className="flex h-px items-start border-b border-dashed border-[#d8cfb8] grow" />
        </div>

        {/* Music Collage */}
        <div className="flex h-[255px] w-full flex-none items-start relative mobile:h-auto mobile:flex-wrap mobile:items-center mobile:justify-center mobile:gap-4 mobile:py-2">
          
          {/* Vinyl Record */}
          <div 
            onClick={() => setIsVinylSpinning(!isVinylSpinning)}
            title="Click to spin vinyl record and play Teddy Afro — Jember!"
            className={`flex h-36 w-36 flex-none items-center justify-center rounded-[9999px] border-4 border-solid border-[#ffffff] bg-[#141414] shadow-[2px_5px_10px_0px_#00000047] bg-[conic-gradient(from_30deg,#141414,#2e2e2e_10%,#141414_25%,#141414_50%,#2e2e2e_60%,#141414_75%)] absolute left-0 top-0 -rotate-[6deg] transition-all duration-300 hover:scale-105 hover:z-20 cursor-pointer mobile:relative mobile:top-0 mobile:left-0 ${
              isVinylSpinning ? 'animate-spin' : ''
            }`}
          >
            <div className="flex items-start rounded-[9999px] border border-solid border-[#ffffff14] absolute inset-1.5" />
            <div className="flex items-start rounded-[9999px] border border-solid border-[#ffffff1a] absolute inset-4" />
            <div className="flex items-start rounded-[9999px] border border-solid border-[#ffffff14] absolute inset-6" />
            
            <div className="flex h-14 w-14 flex-none flex-col items-center justify-center gap-0.5 rounded-[9999px] bg-[#c0392b] relative text-center px-0.5">
              <span className="font-['IBM_Plex_Mono'] text-[7px] font-[700] leading-[8px] tracking-[0.1em] text-[#fbf8f0] uppercase truncate w-full">
                Teddy Afro
              </span>
              <div className="flex h-1 w-1 flex-none items-start rounded-[9999px] bg-[#141414]" />
              <span className="font-['IBM_Plex_Mono'] text-[6px] font-[500] leading-[7px] tracking-[0.1em] text-[#fbf8f0] uppercase">
                Jember
              </span>
            </div>
            <div className="flex h-5 w-5 flex-none items-start rounded-tl-2xl shadow-[-2px_-2px_3px_0px_#00000026] bg-[linear-gradient(135deg,#e8e2d2_0%,#ffffff_60%)] absolute right-2 bottom-2" />
          </div>

          {/* Listen Pill */}
          <div 
            onClick={() => setIsVinylSpinning(!isVinylSpinning)}
            className="flex items-center gap-1 rounded-[9999px] border border-solid border-[#1c1c1a] bg-[#f6efe0] px-2.5 py-1 shadow-[1px_2px_0px_0px_#1c1c1a] absolute left-[28px] top-[152px] rotate-[3deg] transition-all duration-300 hover:scale-105 hover:bg-[#ffffff] cursor-pointer mobile:relative mobile:left-0 mobile:top-0"
            title="Toggle playback"
          >
            <span className="font-['IBM_Plex_Mono'] text-[10px] font-[600] leading-[13px] text-[#1c1c1a]">
              {isVinylSpinning ? 'Pause ⏸' : 'Play Jember ♫'}
            </span>
          </div>

          {/* Retro Headphones Icon Badge */}
          <div className="flex items-center justify-center rounded-[16px] border-2 border-solid border-[#ffffff] bg-[#f6efe0] px-3 py-2 shadow-[2px_4px_8px_0px_#00000030] text-[#c0392b] absolute left-[175px] top-0 rotate-[8deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 mobile:relative mobile:left-0 mobile:top-0 select-none">
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
          <div className="flex flex-col items-start absolute left-[165px] top-[75px] -rotate-[4deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 mobile:relative mobile:left-0 mobile:top-0 select-none">
            <div className="flex items-center rounded-[12px] border-2 border-solid border-[#ffffff] bg-[#1f2a44] px-3 py-1 shadow-[2px_3px_8px_0px_#00000030] relative">
              <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] text-[#fbf8f0]">
                {isVinylSpinning ? 'playing: Teddy Afro — Jember ♪' : 'click disk to play Jember ♫'}
              </span>
            </div>
            <div className="flex h-2.5 w-2.5 flex-none items-start border-r-2 border-b-2 border-solid border-[#ffffff] bg-[#1f2a44] rotate-45 ml-4 -mt-1" />
          </div>

          {/* Cassette Tape */}
          <div 
            onClick={() => setIsVinylSpinning(!isVinylSpinning)}
            title="Click cassette to toggle music"
            className="flex w-36 flex-none flex-col items-center gap-1 rounded-[6px] border-2 border-solid border-[#ffffff] bg-[#e8c4ae] px-2 pt-1.5 pb-2 shadow-[2px_4px_8px_0px_#00000030] absolute left-[155px] top-[140px] rotate-[5deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 cursor-pointer mobile:relative mobile:left-0 mobile:top-0 select-none"
          >
            <div className="flex w-full items-center justify-center rounded-[2px] border border-solid border-[#c9a68c] bg-[#fbf8f0] px-1 py-0.5">
              <span className="font-['IBM_Plex_Mono'] text-[8.5px] font-[700] leading-[11px] tracking-[0.08em] text-[#c0392b] truncate">
                TEDDY AFRO · JEMBER
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
          <div className="flex items-end gap-1 rounded-[6px] border-2 border-solid border-[#ffffff] bg-[#1c1c1a] px-2 pt-2.5 pb-1.5 shadow-[2px_4px_8px_0px_#00000030] absolute left-[310px] top-[145px] -rotate-[8deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 mobile:relative mobile:left-0 mobile:top-0 select-none">
            <div className={`w-2 flex-none items-start rounded-t-[1px] bg-[#9fc49a] transition-all duration-300 ${isVinylSpinning ? 'h-5 animate-pulse' : 'h-3'}`} />
            <div className={`w-2 flex-none items-start rounded-t-[1px] bg-[#e8b84a] transition-all duration-300 ${isVinylSpinning ? 'h-8 animate-bounce' : 'h-6'}`} />
            <div className={`w-2 flex-none items-start rounded-t-[1px] bg-[#c0392b] transition-all duration-300 ${isVinylSpinning ? 'h-6 animate-pulse' : 'h-4'}`} />
            <div className={`w-2 flex-none items-start rounded-t-[1px] bg-[#e8b84a] transition-all duration-300 ${isVinylSpinning ? 'h-9 animate-bounce' : 'h-7'}`} />
            <div className={`w-2 flex-none items-start rounded-t-[1px] bg-[#9fc49a] transition-all duration-300 ${isVinylSpinning ? 'h-4 animate-pulse' : 'h-2'}`} />
          </div>

        </div>

        {/* Interactive Track Info Bar */}
        <div className="flex w-full items-center justify-between rounded-[3px] border border-solid border-[#ddd5bf] bg-[#fffdf7] px-3 py-1.5 shadow-[0px_1px_3px_0px_#0000000a] mt-1">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsVinylSpinning(!isVinylSpinning)}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c0392b] text-white hover:bg-[#a83226] text-[10px] font-bold cursor-pointer shadow-sm transition-transform active:scale-95"
              title={isVinylSpinning ? "Pause" : "Play Jember"}
            >
              {isVinylSpinning ? '⏸' : '▶'}
            </button>
            <div className="flex flex-col">
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-[600] leading-[14px] text-[#1c1c1a]">
                Teddy Afro — Jember (ጀምበር)
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[9px] leading-[12px] text-[#6b6b66]">
                Album: Etorika · Track 18 · Ethiopian Contemporary
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${isVinylSpinning ? 'bg-green-500 animate-ping' : 'bg-[#c9c6b8]'}`} />
            <span className="font-['IBM_Plex_Mono'] text-[9px] font-[500] text-[#6b6b66]">
              {isVinylSpinning ? 'Playing' : 'Ready'}
            </span>
            <a
              href="https://www.youtube.com/watch?v=PA2aWF37Ljk"
              target="_blank"
              rel="noreferrer"
              className="ml-1 rounded-[2px] border border-solid border-[#ddd5bf] bg-[#ffffff] px-1.5 py-0.5 text-[9px] font-['IBM_Plex_Mono'] font-[500] text-[#1c1c1a] hover:bg-[#f6efe0] hover:text-[#c0392b] transition-colors"
              title="Open official video on YouTube"
            >
              YouTube ↗
            </a>
          </div>
        </div>

        {/* Mobile Turn to Page 2 Banner */}
        <div className="hidden mobile:flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-2.5 mt-3">
          <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#8a8a84]">
            Page 1 of 2
          </span>
          <button
            onClick={() => setMobilePage?.(2)}
            className="flex items-center gap-1.5 rounded-[3px] bg-[#c0392b] px-3 py-1.5 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white shadow-sm hover:bg-[#a83226] cursor-pointer transition-colors"
          >
            <span>Turn to Side B · Football</span>
            <span>→</span>
          </button>
        </div>

        <div className="flex w-full items-end justify-between pl-8 pt-2 grow gap-4">
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
          className="flex h-8 w-8 flex-none items-start rounded-tr-[4px] shadow-[3px_-3px_5px_0px_#0000001f] absolute left-0 bottom-0 bg-[linear-gradient(45deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer"
        />
      </article>

      {/* Right Page (Side B · Football) */}
      <article className={`${mobilePage === 2 ? 'flex' : 'hidden'} lg:flex w-full mobile:w-full mobile:basis-auto mobile:grow-0 mobile:shrink-0 mobile:h-auto mobile:overflow-visible mobile:rounded-[3px] mobile:px-4 mobile:py-4 lg:w-1/2 lg:grow lg:shrink-0 lg:basis-0 lg:overflow-hidden lg:h-full lg:rounded-r-[3px] lg:rounded-l-none lg:pl-7 lg:pr-10 lg:py-3 flex-col items-start bg-[#fbf8f0] shadow-[2px_0px_0px_0px_#ede6d3,4px_0px_0px_0px_#e2dac6] bg-[radial-gradient(#8a7a5a0d_1px,transparent_1px)] bg-[length:4px_4px] relative`}>
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
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[600] leading-[13px] tracking-[0.25em] text-[#2f5a2b] uppercase">
            Side B · Football
          </span>
          <div className="flex h-px items-start border-b border-dashed border-[#d8cfb8] grow" />
        </div>

        {/* Football Collage */}
        <div className="flex h-[290px] w-full flex-none items-start relative mobile:h-auto mobile:flex-wrap mobile:items-center mobile:justify-center mobile:gap-4 mobile:py-2 select-none">
          
          {/* Real Madrid Shield Badge */}
          <div className="flex h-28 w-28 flex-none flex-col items-center justify-center rounded-[9999px] border-2 border-solid border-[#ffffff] bg-[#ffffff] shadow-[2px_4px_10px_0px_#00000030] absolute left-0 top-0 -rotate-[8deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 mobile:relative mobile:left-0 mobile:top-0">
            <div className="flex items-start rounded-[9999px] border-2 border-solid border-[#d4a72c] absolute inset-1" />
            <span className="font-['IBM_Plex_Mono'] text-[7px] font-[600] leading-[9px] tracking-[0.15em] text-[#3b2a7a] uppercase">
              Real Madrid
            </span>
            <div className="flex items-center text-[12px] text-[#d4a72c]">
              <svg className="w-4 h-2.5 text-[#d4a72c]" viewBox="0 0 24 12" fill="currentColor">
                <path d="m2 11 2-8 4 4 4-6 4 6 4-4 2 8Z" />
              </svg>
            </div>
            <span className="font-['Instrument_Serif'] text-[32px] font-[400] leading-[30px] tracking-[-0.04em] text-[#3b2a7a]">
              RM
            </span>
            <span className="font-['IBM_Plex_Mono'] text-[6px] font-[600] leading-[8px] tracking-[0.15em] text-[#d4a72c] uppercase">
              · Hala Madrid ·
            </span>
          </div>

          {/* Chelsea Badge */}
          <div className="flex h-26 w-26 flex-none flex-col items-center justify-center rounded-[9999px] border-2 border-solid border-[#ffffff] bg-[#034694] shadow-[2px_4px_10px_0px_#00000030] absolute left-[150px] top-[6px] rotate-[8deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 mobile:relative mobile:left-0 mobile:top-0">
            <div className="flex items-start rounded-[9999px] border border-solid border-[#ffffff] absolute inset-1.5" />
            <span className="font-['IBM_Plex_Mono'] text-[7px] font-[600] leading-[9px] tracking-[0.2em] text-[#ffffff] uppercase">
              Chelsea
            </span>
            <span className="font-['Instrument_Sans'] text-[26px] font-[700] leading-[28px] tracking-[-0.02em] text-[#ffffff]">
              CFC
            </span>
            <div className="flex items-center gap-1">
              <div className="flex h-1 w-1 flex-none items-start rounded-[9999px] bg-[#dba111]" />
              <span className="font-['IBM_Plex_Mono'] text-[6.5px] font-[600] leading-[8px] tracking-[0.15em] text-[#dba111] uppercase">
                KTBFFH
              </span>
              <div className="flex h-1 w-1 flex-none items-start rounded-[9999px] bg-[#dba111]" />
            </div>
          </div>

          {/* Cristiano Ronaldo CR7 Card */}
          <div className="flex h-30 w-26 flex-none flex-col items-center justify-center gap-0.5 rounded-[10px] border-2 border-solid border-[#ffffff] bg-[#141414] shadow-[2px_4px_10px_0px_#00000040] absolute left-[125px] top-[125px] -rotate-[4deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 mobile:relative mobile:left-0 mobile:top-0">
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
          <div className="flex h-22 w-22 flex-none items-center justify-center absolute left-[245px] top-[120px] rotate-[10deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 mobile:relative mobile:left-0 mobile:top-0">
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
          <div className="flex flex-col items-start absolute left-[4px] top-[140px] -rotate-[6deg] mobile:relative mobile:left-0 mobile:top-0">
            <span className="font-['Inter'] text-[20px] font-[700] leading-[22px] text-[#c0392b]">
              the GOAT →
            </span>
            <div className="flex h-0.5 w-20 flex-none items-start rounded-[9999px] bg-[#c0392b80] ml-1" />
          </div>

          {/* Football Icon */}
          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-[9999px] border-2 border-solid border-[#ffffff] bg-[#ffffff] shadow-[2px_4px_8px_0px_#00000030] text-[#1c1c1a] absolute left-[24px] top-[195px] rotate-[15deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 mobile:relative mobile:left-0 mobile:top-0">
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
          <div className="flex w-24 flex-none items-center justify-center absolute left-[210px] top-[205px] -rotate-[8deg] transition-all duration-300 hover:scale-105 hover:rotate-0 hover:z-20 mobile:relative mobile:left-0 mobile:top-0">
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

        {/* Mobile Page 2 Navigation Banner */}
        <div className="hidden mobile:flex w-full items-center justify-between border-t border-dashed border-[#c7d7ef] pt-2.5 mt-3">
          <button
            onClick={() => setMobilePage?.(1)}
            className="flex items-center gap-1 rounded-[3px] border border-[#c9c6b8] bg-[#f6f3e7] px-2.5 py-1 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-[#3a3a36] shadow-sm hover:bg-white cursor-pointer transition-colors"
          >
            <span>← Back to Side A · Music</span>
          </button>
          <button
            onClick={() => goToChapter('A', 1)}
            className="flex items-center gap-1.5 rounded-[3px] bg-[#c0392b] px-3 py-1 text-[11px] font-['IBM_Plex_Mono'] font-[600] text-white shadow-sm hover:bg-[#a83226] cursor-pointer transition-colors"
          >
            <span>Return to Contents (A)</span>
            <span>→</span>
          </button>
        </div>

        <button
          onClick={() => goToChapter('A', 1)}
          className="flex w-full items-end justify-between pt-2 grow gap-4 text-left cursor-pointer hover:text-[#c0392b]"
        >
          <span className="font-['IBM_Plex_Mono'] text-[9.5px] font-[400] leading-[14px] tracking-wider text-[#8a8a84]">
            ↺ back to contents
          </span>
          <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] text-[#8a8a84]">
            19
          </span>
        </button>

        {/* Bottom Right Page Curl (Back to Beginning) */}
        <button
          onClick={() => goToChapter('A', 1)}
          title="Turn back to Contents (Page i)"
          className="flex h-8 w-8 flex-none items-start rounded-tl-[4px] shadow-[-3px_-3px_5px_0px_#0000001f] absolute right-0 bottom-0 bg-[linear-gradient(315deg,#d8cfb8_50%,#ece5d3_50%,#fbf8f0_100%)] transition-all duration-300 hover:h-11 hover:w-11 cursor-pointer"
        />
      </article>
    </>
  );
}

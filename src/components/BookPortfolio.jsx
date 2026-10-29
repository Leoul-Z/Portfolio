import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { CHAPTERS } from '../data/chapters';
import { playPageFlipSound } from '../utils/audio';

import BookHeader from './book/BookHeader';
import MobileNav from './book/MobileNav';
import ThumbTabs from './book/ThumbTabs';
import BookFooter from './book/BookFooter';
import CertificateModal from './book/CertificateModal';
import AudioPlayer from './book/AudioPlayer';

import ChapterAbout from './chapters/ChapterAbout';
import ChapterExperience from './chapters/ChapterExperience';
import ChapterProjects from './chapters/ChapterProjects';
import ChapterHackathons from './chapters/ChapterHackathons';
import ChapterStack from './chapters/ChapterStack';
import ChapterOffDuty from './chapters/ChapterOffDuty';

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
    <div className="flex min-h-screen w-full flex-col items-center justify-start tablet:justify-center lg:justify-center bg-[#e6e2d8] px-4 py-3 sm:py-2.5 tablet:py-6 bg-[radial-gradient(#00000008_1px,transparent_1px)] bg-[length:6px_6px] phone:px-2 phone:py-2 phone:min-h-0 select-text">
      
      {/* Global Book Container (90% width of the browser) */}
      <div className="flex w-[90vw] max-w-[1300px] flex-col items-center gap-2.5 phone:w-full phone:gap-2 tablet:w-[88vw] tablet:max-w-[820px] tablet:gap-2.5">
        
        {/* Header Bar */}
        <BookHeader 
          goToChapter={goToChapter}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />

        {/* Mobile / Tablet Thumb Navigation Bar & Sub-Tabs */}
        <MobileNav 
          chapters={CHAPTERS}
          activeChapter={activeChapter}
          goToChapter={goToChapter}
          mobilePage={mobilePage}
        />

        {/* Book Spine & Physical Spread Container */}
        <div className="flex w-full items-start justify-center relative perspective-[1800px]">
          <div className="flex w-full max-w-[1240px] items-stretch relative rounded-[3px] bg-[#ddd5bf] p-1.5 shadow-[0px_20px_45px_-8px_#14141459,0px_4px_12px_0px_#14141426] tablet:h-[720px] tablet:max-h-[840px] tablet:p-2 lg:h-[580px] lg:max-h-[640px]">
            
            {/* Center Spine Stitch Line (Desktop & Tablet) */}
            <div className="flex w-1 items-start bg-[linear-gradient(to_right,#00000026,#0000004d_50%,#00000026)] absolute top-2 bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none mobile:hidden shadow-[0px_0px_4px_1px_#00000033]" />

            {/* Pages Spread Canvas */}
            <div className="flex w-full items-stretch relative overflow-visible">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={`${activeChapter}-${mobilePage}`}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex w-full items-stretch relative z-10 phone:h-auto phone:min-h-0 phone:max-h-none phone:flex-col phone:overflow-visible tablet:h-full tablet:min-h-[640px] tablet:max-h-[820px] tablet:flex-col tablet:overflow-hidden lg:h-full lg:min-h-[500px] lg:max-h-[640px] lg:flex-row lg:overflow-hidden preserve-3d bg-[#fbf8f0] rounded-[3px] shadow-sm"
                >
                  {/* CHAPTER A: About & Contents */}
                  {activeChapter === 'A' && (
                    <ChapterAbout 
                      goToChapter={goToChapter} 
                      mobilePage={mobilePage}
                    />
                  )}

                  {/* CHAPTER E: Experience & Certifications */}
                  {activeChapter === 'E' && (
                    <ChapterExperience 
                      goToChapter={goToChapter} 
                      onOpenCert={setActiveCert}
                      mobilePage={mobilePage}
                    />
                  )}

                  {/* CHAPTER P: Projects */}
                  {activeChapter === 'P' && (
                    <ChapterProjects 
                      goToChapter={goToChapter} 
                      mobilePage={mobilePage}
                    />
                  )}

                  {/* CHAPTER H: Hackathons */}
                  {activeChapter === 'H' && (
                    <ChapterHackathons 
                      goToChapter={goToChapter} 
                      onOpenCert={setActiveCert}
                      mobilePage={mobilePage}
                    />
                  )}

                  {/* CHAPTER S: Stack */}
                  {activeChapter === 'S' && (
                    <ChapterStack 
                      goToChapter={goToChapter} 
                      mobilePage={mobilePage}
                    />
                  )}

                  {/* CHAPTER O: Off Duty */}
                  {activeChapter === 'O' && (
                    <ChapterOffDuty 
                      goToChapter={goToChapter} 
                      isVinylSpinning={isVinylSpinning}
                      setIsVinylSpinning={setIsVinylSpinning}
                      mobilePage={mobilePage}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumb Index Tabs (Right Edge on Desktop) */}
            <ThumbTabs 
              chapters={CHAPTERS}
              activeChapter={activeChapter}
              goToChapter={goToChapter}
            />

          </div>
        </div>

        {/* Global Footer */}
        <BookFooter />

      </div>

      {/* Verified Certificate Modal */}
      <CertificateModal 
        activeCert={activeCert}
        onClose={() => setActiveCert(null)}
      />

      {/* Persistent Audio Player & Floating Pill */}
      <AudioPlayer 
        isVinylSpinning={isVinylSpinning}
        setIsVinylSpinning={setIsVinylSpinning}
      />

    </div>
  );
}

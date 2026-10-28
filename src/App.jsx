import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layers, Terminal } from 'lucide-react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Body from './components/Body'
import Skill from './components/Skill'
import About from './components/About'
import Project from './components/Project'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import CardCatalog from './components/CardCatalog'

function ModernPortfolio() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-250 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Background Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0 opacity-60" />

      {/* Ambient Lighting Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.15, 0.9, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-12 left-[15%] w-[380px] h-[380px] rounded-full bg-cyan-500/[0.07] dark:bg-cyan-400/[0.06] blur-[130px]"
        />
        <motion.div 
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 70, -50, 0],
            scale: [1, 0.9, 1.15, 1]
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[40%] right-[10%] w-[420px] h-[420px] rounded-full bg-emerald-500/[0.06] dark:bg-emerald-400/[0.05] blur-[150px]"
        />
        <motion.div 
          animate={{
            x: [0, 40, -50, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.1, 0.95, 1]
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-24 left-[25%] w-[360px] h-[360px] rounded-full bg-indigo-500/[0.06] dark:bg-indigo-400/[0.05] blur-[140px]"
        />
      </div>

      {/* Main Page Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main id="main-content" className="flex-1">
          <Body />
          <Skill />
          <About />
          <Project />
          <Certifications />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

function App() {
  const [viewMode, setViewMode] = useState(() => {
    try {
      return localStorage.getItem('portfolio-view-mode') || 'catalog'
    } catch {
      return 'catalog'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('portfolio-view-mode', viewMode)
    } catch (e) {
      console.error(e)
    }
  }, [viewMode])

  return (
    <ThemeProvider>
      {/* Floating View Mode Switcher Pill */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setViewMode(prev => prev === 'catalog' ? 'modern' : 'catalog')}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-xl border border-[#c9c6b8] bg-[#ffffff] text-[#1c1c1a] hover:bg-[#f6f3e7] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer font-['IBM_Plex_Mono'] text-[12px] font-[600]"
          title="Toggle Portfolio View Mode"
          aria-label="Toggle between Card Catalog and Modern Terminal views"
        >
          {viewMode === 'catalog' ? (
            <>
              <Terminal size={15} className="text-[#1f2a44] group-hover:text-[#c0392b] transition-colors" />
              <span>Switch to Terminal View</span>
            </>
          ) : (
            <>
              <Layers size={15} className="text-[#c0392b]" />
              <span>Switch to Card Catalog</span>
            </>
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === 'catalog' ? (
          <motion.div
            key="catalog"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <CardCatalog />
          </motion.div>
        ) : (
          <motion.div
            key="modern"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ModernPortfolio />
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default App

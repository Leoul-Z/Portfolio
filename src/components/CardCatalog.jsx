import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Calendar, Clock, ZoomIn } from 'lucide-react'

import certUdacity from '../assets/certificates/udacity_programming_fundamentals.jpg'
import certAlxPF from '../assets/certificates/alx_professional_foundations.jpg'
import certAlxSE from '../assets/certificates/alx_software_engineering.jpg'
import certHuaweiOG from '../assets/certificates/huawei_hcia_opengauss.jpg'
import certHuaweiDC from '../assets/certificates/huawei_hcia_datacom.jpg'

const certificateData = {
  'alx-se': {
    title: 'ALX Software Engineering — Back-End',
    issuer: 'ALX Africa',
    date: 'Mar 2026',
    duration: '8 Months',
    image: certAlxSE,
    link: 'https://savanna.alxafrica.com/certificates/LFSyC93BY7',
    description: 'Specialization in Back-End Web Development: server architecture, RESTful APIs, relational databases, systems engineering, and deployment pipelines.'
  },
  'alx-pf': {
    title: 'ALX Professional Foundations',
    issuer: 'ALX Africa',
    date: 'Sep 2025',
    duration: '3 Months',
    image: certAlxPF,
    link: 'https://savanna.alxafrica.com/certificates/PHhJ5yGB8F',
    description: 'Professional Development Skills for the Digital Age: critical thinking, team collaboration, technical problem solving, and professional communication.'
  },
  'udacity-pf': {
    title: 'Programming Fundamentals Nanodegree',
    issuer: 'Udacity',
    date: 'Oct 2025',
    duration: 'Nanodegree',
    image: certUdacity,
    link: 'https://www.udacity.com/certificate/e/a12d95ec-793e-11f0-9d7a-abefb65b1531',
    description: 'Core computer science fundamentals: algorithms, data structures, computational logic, and problem-solving principles.'
  },
  'huawei-og': {
    title: 'HCIA-openGauss V1.0',
    issuer: 'Huawei Technologies',
    date: 'May 2025',
    duration: '~4 Months',
    image: certHuaweiOG,
    link: null,
    description: 'Enterprise openGauss database architecture, SQL optimization, query tuning, security management, and backup/recovery strategies.'
  },
  'huawei-dc': {
    title: 'HCIA-Datacom V1.0',
    issuer: 'Huawei Technologies',
    date: 'May 2025',
    duration: '~4 Months',
    image: certHuaweiDC,
    link: null,
    description: 'Data communications, routing and switching protocols, WLAN technologies, and enterprise network design.'
  }
}

function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!cert) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#1c1c1a]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 10 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[#ffffff] rounded-[3px] border-t-4 border-solid border-[#c0392b] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-solid border-[#c7d7ef] bg-[#fbfbf8]">
          <div>
            <span className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.15em] text-[#8a8a84] uppercase block">
              Official Credential · {cert.issuer}
            </span>
            <h3 className="font-['Instrument_Sans'] text-[20px] font-[600] text-[#1c1c1a] leading-tight mt-0.5">
              {cert.title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#1f2a44] text-[#ffffff] font-['IBM_Plex_Mono'] text-[11px] font-[600] tracking-wider uppercase hover:bg-[#c0392b] transition-colors"
              >
                <ExternalLink size={12} />
                <span>Verify Online</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-[2px] border border-solid border-[#c9c6b8] bg-[#ffffff] text-[#1c1c1a] hover:bg-[#e9e9e4] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={17} />
            </button>
          </div>
        </div>

        <div className="p-6 bg-[#e9e9e4] flex items-center justify-center overflow-y-auto">
          <img
            src={cert.image}
            alt={cert.title}
            className="max-w-full max-h-[60vh] object-contain rounded-[2px] shadow-md border border-solid border-[#c9c6b8]"
          />
        </div>

        <div className="px-6 py-3.5 bg-[#ffffff] border-t border-solid border-[#c7d7ef] flex flex-wrap items-center justify-between gap-4 font-['IBM_Plex_Mono'] text-[12px] text-[#3a3a36]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} className="text-[#8a8a84]" />
              <span>{cert.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#8a8a84]" />
              <span>{cert.duration}</span>
            </span>
          </div>
          <p className="text-[12px] text-[#6b6b66] max-w-md line-clamp-1">
            {cert.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

function CardCatalog() {
  const [activeCert, setActiveCert] = useState(null)
  const [stampFeedback, setStampFeedback] = useState(false)

  const handleStampAndSend = () => {
    setStampFeedback(true)
    setTimeout(() => {
      window.location.href = 'mailto:leoulzerihun06@gmail.com?subject=Hello%20Leoul%20-%20Opportunity%20from%20Portfolio'
    }, 600)
    setTimeout(() => setStampFeedback(false), 3000)
  }

  return (
    <div className="flex w-full flex-col items-center bg-[#e9e9e4] px-12 py-16 mobile:px-4 mobile:py-8 min-h-screen text-[#1c1c1a] font-['Instrument_Sans']">
      <div className="flex w-full max-w-[1080px] flex-col items-start gap-20 mobile:gap-12">
        
        {/* Header / Drawer Controls */}
        <header className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-6 mobile:flex-col mobile:flex-nowrap mobile:items-start">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[2px] border-2 border-solid border-[#1f2a44] bg-[#ffffff] shadow-sm">
              <span className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] text-[#1f2a44]">
                LZ
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="w-full font-['Instrument_Sans'] text-[15px] font-[600] leading-[23px] text-[#1c1c1a]">
                The Leoul Catalog
              </span>
              <span className="w-full font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#6b6b66] uppercase">
                Drawer A–G · Software Engineer
              </span>
            </div>
          </div>

          {/* Social Links & CV */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://github.com/Leoul-Z"
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-t-[6px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] px-3 py-1.5 hover:bg-white transition-colors cursor-pointer"
            >
              <span className="font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] text-[#3a3a36]">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/leoul-zerihun-7a4414347"
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-t-[6px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] px-3 py-1.5 hover:bg-white transition-colors cursor-pointer"
            >
              <span className="font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] text-[#3a3a36]">
                LinkedIn
              </span>
            </a>
            <a
              href="https://leetcode.com/u/Nasi4Z"
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-t-[6px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] px-3 py-1.5 hover:bg-white transition-colors cursor-pointer"
            >
              <span className="font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] text-[#3a3a36]">
                LeetCode
              </span>
            </a>
            <a
              href="https://t.me/leoniazz"
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-t-[6px] border border-solid border-[#c9c6b8] bg-[#f6f3e7] px-3 py-1.5 hover:bg-white transition-colors cursor-pointer"
            >
              <span className="font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] text-[#3a3a36]">
                Telegram
              </span>
            </a>
            <a
              href="#contact"
              className="flex items-center rounded-t-[6px] border border-solid border-[#c0392b] bg-[#c0392b] px-3 py-1.5 hover:bg-[#a83226] transition-colors cursor-pointer"
            >
              <span className="font-['IBM_Plex_Mono'] text-[12px] font-[600] leading-[18px] text-[#ffffff]">
                CV ↓
              </span>
            </a>
          </div>

          {/* Catalog Tab Navigation */}
          <nav className="flex grow shrink-0 items-end gap-1 border-b-4 border-solid border-[#c9c6b8] basis-full mobile:flex-wrap">
            <a
              href="#experience"
              className="flex items-center gap-2 rounded-t-[8px] bg-[#b7c0c9] px-4 py-2 hover:-translate-y-0.5 transition-transform cursor-pointer"
            >
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#36435c]">
                A
              </span>
              <span className="whitespace-nowrap font-['Instrument_Sans'] text-[14px] font-[600] leading-[20px] text-[#1c1c1a]">
                Experience
              </span>
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-t-[8px] bg-[#d8cfae] px-4 py-2 hover:-translate-y-0.5 transition-transform cursor-pointer"
            >
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#5e5222]">
                B
              </span>
              <span className="whitespace-nowrap font-['Instrument_Sans'] text-[14px] font-[600] leading-[20px] text-[#1c1c1a]">
                Projects
              </span>
            </a>
            <a
              href="#certifications"
              className="flex items-center gap-2 rounded-t-[8px] bg-[#c9d3c0] px-4 py-2 hover:-translate-y-0.5 transition-transform cursor-pointer"
            >
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#46523d]">
                C
              </span>
              <span className="whitespace-nowrap font-['Instrument_Sans'] text-[14px] font-[600] leading-[20px] text-[#1c1c1a]">
                Certifications
              </span>
            </a>
            <a
              href="#hackathons"
              className="flex items-center gap-2 rounded-t-[8px] bg-[#e8c4ae] px-4 py-2 hover:-translate-y-0.5 transition-transform cursor-pointer"
            >
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#6e3f26]">
                D
              </span>
              <span className="whitespace-nowrap font-['Instrument_Sans'] text-[14px] font-[600] leading-[20px] text-[#1c1c1a]">
                Hackathons
              </span>
            </a>
            <a
              href="#stack"
              className="flex items-center gap-2 rounded-t-[8px] bg-[#bfcbe0] px-4 py-2 hover:-translate-y-0.5 transition-transform cursor-pointer"
            >
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#36435c]">
                E
              </span>
              <span className="whitespace-nowrap font-['Instrument_Sans'] text-[14px] font-[600] leading-[20px] text-[#1c1c1a]">
                Stack
              </span>
            </a>
            <a
              href="#off-the-pitch"
              className="flex items-center gap-2 rounded-t-[8px] bg-[#9fc49a] px-4 py-2 hover:-translate-y-0.5 transition-transform cursor-pointer"
            >
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#2f5a2b]">
                F
              </span>
              <span className="whitespace-nowrap font-['Instrument_Sans'] text-[14px] font-[600] leading-[20px] text-[#1c1c1a]">
                Off the Pitch
              </span>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-t-[8px] bg-[#e6d58f] px-4 py-2 hover:-translate-y-0.5 transition-transform cursor-pointer"
            >
              <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#5e5222]">
                G
              </span>
              <span className="whitespace-nowrap font-['Instrument_Sans'] text-[14px] font-[600] leading-[20px] text-[#1c1c1a]">
                Contact
              </span>
            </a>
          </nav>
        </header>

        {/* Hero Section: Author Card No. 0001 */}
        <section id="home" className="flex w-full flex-col items-start relative">
          <div className="flex w-full items-start rounded-[2px] bg-[#f7f7f2] shadow-[0px_2px_6px_0px_#00000014] absolute left-6 top-4 h-full rotate-[2deg] mobile:hidden pointer-events-none" />
          <div className="flex w-full items-start rounded-[2px] bg-[#fbfbf8] shadow-[0px_2px_6px_0px_#00000014] absolute left-3 top-2 h-full -rotate-[1deg] mobile:hidden pointer-events-none" />
          
          <article className="flex w-full flex-col items-start overflow-hidden rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] shadow-[0px_10px_30px_0px_#1e1e1924] relative -rotate-[0.4deg] mobile:relative mobile:rotate-0 transition-transform duration-300 hover:rotate-0">
            <div className="flex w-full items-start justify-between px-12 pt-8 pb-4 gap-6 mobile:flex-col mobile:px-5 mobile:pt-6">
              <div className="flex flex-col items-start gap-1">
                <span className="w-full font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] tracking-[0.2em] text-[#8a8a84] uppercase">
                  Author card · No. 0001
                </span>
                <h1 className="w-full font-['Instrument_Sans'] text-[76px] font-[600] leading-[80px] tracking-[-0.03em] text-[#1c1c1a] mobile:text-[48px] mobile:leading-[56px]">
                  Leoul Zerihun
                </h1>
                <span className="w-full font-['IBM_Plex_Mono'] text-[15px] font-[400] leading-[23px] text-[#3a3a36]">
                  Software Engineer. Software Engineering student.
                </span>
              </div>
              <div className="flex flex-col items-end gap-1 border-l-2 border-solid border-[#1f2a44] pl-4 mobile:items-start mobile:border-l-0 mobile:border-t-2 mobile:pt-3 mobile:pl-0">
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                  Call no.
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[26px] font-[600] leading-[33px] text-[#1f2a44]">
                  ENG
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[26px] font-[600] leading-[33px] text-[#1f2a44]">
                  06.LZ
                </span>
              </div>
            </div>

            <div className="flex w-full flex-col items-start px-12 pb-10 mobile:px-5 mobile:pb-8">
              <div className="flex w-full gap-6 border-b border-solid border-[#c7d7ef] py-3 items-baseline mobile:flex-col mobile:gap-1">
                <span className="w-32 flex-none font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] tracking-[0.12em] text-[#c0392b] shrink-0 uppercase">
                  Subjects
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[14px] font-[400] leading-[21px] text-[#1c1c1a]">
                  1. Full-stack web. 2. Pixel-perfect UIs. 3. Scalable backends. 4. Problem-solving.
                </span>
              </div>
              <div className="flex w-full gap-6 border-b border-solid border-[#c7d7ef] py-3 items-baseline mobile:flex-col mobile:gap-1">
                <span className="w-32 flex-none font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] tracking-[0.12em] text-[#c0392b] shrink-0 uppercase">
                  Abstract
                </span>
                <span className="max-w-[640px] font-['IBM_Plex_Mono'] text-[17px] font-[400] leading-[29px] text-[#1c1c1a]">
                  Building clean, performant, and visually compelling digital experiences — from pixel-perfect UIs to scalable backends.
                </span>
              </div>
              <div className="flex w-full gap-6 border-b border-solid border-[#c7d7ef] py-3 items-baseline mobile:flex-col mobile:gap-1">
                <span className="w-32 flex-none font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] tracking-[0.12em] text-[#c0392b] shrink-0 uppercase">
                  Notes
                </span>
                <span className="max-w-[640px] font-['IBM_Plex_Mono'] text-[14px] font-[400] leading-[21px] text-[#1c1c1a]">
                  Curious and analytical. I enjoy breaking complex problems down into efficient, practical solutions, and I value discipline, consistency and attention to detail.
                </span>
              </div>
              <div className="flex w-full gap-6 border-b border-solid border-[#c7d7ef] py-3 items-baseline mobile:flex-col mobile:gap-1">
                <span className="w-32 flex-none font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] tracking-[0.12em] text-[#c0392b] shrink-0 uppercase">
                  See also
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[14px] font-[400] leading-[21px] text-[#1f4fa3]">
                  <a href="https://github.com/Leoul-Z" target="_blank" rel="noreferrer" className="underline hover:text-[#c0392b]">github.com/Leoul-Z</a> ·{' '}
                  <a href="https://www.linkedin.com/in/leoul-zerihun-7a4414347" target="_blank" rel="noreferrer" className="underline hover:text-[#c0392b]">linkedin</a> ·{' '}
                  <a href="https://t.me/leoniazz" target="_blank" rel="noreferrer" className="underline hover:text-[#c0392b]">telegram</a> ·{' '}
                  <a href="https://leetcode.com/u/Nasi4Z" target="_blank" rel="noreferrer" className="underline hover:text-[#c0392b]">leetcode</a> ·{' '}
                  <a href="mailto:leoulzerihun06@gmail.com" className="underline hover:text-[#c0392b]">leoulzerihun06@gmail.com</a>
                </span>
              </div>
            </div>

            {/* Stamp: OPEN TO WORK */}
            <div className="flex flex-col items-center rounded-[6px] border-[3px] border-solid border-[#c0392b] px-4 py-1.5 absolute top-12 right-[180px] -rotate-[8deg] opacity-85 mobile:top-12 mobile:right-[180px] mobile:opacity-85 mobile:static mobile:mx-5 mobile:mb-6 mobile:self-start mobile:-rotate-[6deg] pointer-events-none select-none">
              <span className="font-['IBM_Plex_Mono'] text-[24px] font-[700] leading-[26px] tracking-[0.08em] text-[#c0392b]">
                OPEN TO WORK
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.3em] text-[#c0392b] pt-1 uppercase">
                Roles &amp; internships
              </span>
            </div>

            {/* Punched hole at the bottom of the index card */}
            <div className="flex h-3 w-3 flex-none items-start rounded-[9999px] bg-[#e9e9e4] shadow-[inset_0px_1px_2px_0px_#00000040] absolute bottom-3 left-1/2 -translate-x-1/2" />
          </article>
        </section>

        {/* Section A: Experience */}
        <section id="experience" className="flex w-full flex-col items-start scroll-mt-24">
          <div className="flex w-full items-end pl-8 mobile:pl-2">
            <div className="flex items-center gap-3 rounded-t-[8px] bg-[#b7c0c9] px-6 py-2.5">
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#4a5562]">
                A
              </span>
              <span className="font-['Instrument_Sans'] text-[18px] font-[600] leading-[27px] text-[#1e2833]">
                Experience
              </span>
            </div>
          </div>
          
          <div className="flex w-full flex-col items-start gap-6 rounded-[2px] border-t-4 border-solid border-[#b7c0c9] bg-[#dedad0] px-8 py-8 mobile:gap-5 mobile:px-4 mobile:py-4 shadow-sm">
            
            {/* EXP 001 */}
            <article className="flex w-full gap-6 rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-6 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] items-stretch -rotate-[0.5deg] hover:rotate-0 transition-transform mobile:flex-col mobile:gap-3 mobile:items-stretch mobile:hover:rotate-0 mobile:rotate-0">
              <div className="flex grow shrink-0 basis-0 flex-col items-start">
                <div className="flex w-full items-center justify-between pb-2">
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                    EXP 001
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84]">
                    c.1
                  </span>
                </div>
                <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline mobile:flex-col mobile:gap-1">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                    Role
                  </span>
                  <span className="font-['Instrument_Sans'] text-[20px] font-[600] leading-[28px] text-[#1c1c1a]">
                    Software Engineer — Startup Job Simulation
                  </span>
                </div>
                <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline mobile:flex-col mobile:gap-1">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                    Org
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[21px] text-[#1c1c1a]">
                    Y Combinator × Forage
                  </span>
                </div>
                <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline mobile:flex-col mobile:gap-1">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                    Date
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[21px] text-[#1c1c1a]">
                    Sep 2026
                  </span>
                </div>
                <div className="flex w-full gap-4 py-2 items-baseline mobile:flex-col mobile:gap-1">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                    Notes
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[21px] text-[#1c1c1a]">
                    Hands-on full-stack and product analytics simulation: frontend improvements from feedback, backend updates for new features, and analysis of feature releases.
                  </span>
                </div>
              </div>
              <div className="flex w-44 flex-none items-center justify-center border-l border-dashed border-[#c7d7ef] pl-6 mobile:w-full mobile:flex-none mobile:justify-start mobile:border-none mobile:px-0 mobile:py-0">
                <div className="flex items-start rounded-[9999px] border-[3px] border-solid border-[#c0392b] px-3 py-1 -rotate-[8deg] opacity-85 select-none">
                  <span className="font-['IBM_Plex_Mono'] text-[18px] font-[700] leading-[26px] tracking-[0.1em] text-[#c0392b]">
                    COMPLETED
                  </span>
                </div>
              </div>
            </article>

            {/* EXP 002 */}
            <article className="flex w-full gap-6 rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-6 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] items-stretch rotate-[0.4deg] hover:rotate-0 transition-transform mobile:flex-col mobile:gap-3 mobile:items-stretch mobile:hover:rotate-0 mobile:rotate-0">
              <div className="flex grow shrink-0 basis-0 flex-col items-start">
                <div className="flex w-full items-center justify-between pb-2">
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                    EXP 002
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84]">
                    c.1
                  </span>
                </div>
                <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline mobile:flex-col mobile:gap-1">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                    Role
                  </span>
                  <span className="font-['Instrument_Sans'] text-[20px] font-[600] leading-[28px] text-[#1c1c1a]">
                    Summer Camp Participant — Development Department
                  </span>
                </div>
                <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline mobile:flex-col mobile:gap-1">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                    Org
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[21px] text-[#1c1c1a]">
                    INSA Summer Camp
                  </span>
                </div>
                <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline mobile:flex-col mobile:gap-1">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                    Date
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[21px] text-[#1c1c1a]">
                    Summer 2026
                  </span>
                </div>
                <div className="flex w-full gap-4 py-2 items-baseline mobile:flex-col mobile:gap-1">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                    Notes
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[21px] text-[#1c1c1a]">
                    Practical software development training; collaborated with a team to design and build a software project.
                  </span>
                </div>
              </div>
              <div className="flex w-44 flex-none items-center justify-center border-l border-dashed border-[#c7d7ef] pl-6 mobile:w-full mobile:flex-none mobile:justify-start mobile:border-none mobile:px-0 mobile:py-0">
                <div className="flex items-start rounded-[2px] px-3 py-1 border-[3px] border-double rotate-[7deg] border-[#c0392b] opacity-85 select-none">
                  <span className="font-['IBM_Plex_Mono'] text-[18px] font-[700] leading-[26px] tracking-[0.1em] text-[#c0392b]">
                    PARTICIPANT
                  </span>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* Section B: Projects */}
        <section id="projects" className="flex w-full flex-col items-start scroll-mt-24">
          <div className="flex w-full items-end pl-44 mobile:pl-2">
            <div className="flex items-center gap-3 rounded-t-[8px] bg-[#d8cfae] px-6 py-2.5">
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#5c5440]">
                B
              </span>
              <span className="font-['Instrument_Sans'] text-[18px] font-[600] leading-[27px] text-[#2c2818]">
                Projects
              </span>
            </div>
          </div>
          
          <div className="w-full items-start gap-6 rounded-[2px] border-t-4 border-solid border-[#d8cfae] bg-[#dedad0] px-8 pt-8 pb-12 grid grid-cols-2 mobile:gap-5 mobile:px-4 mobile:py-4 mobile:grid-cols-1 shadow-sm">
            
            {/* PRJ 001 - Hulu Rent */}
            <article className="flex flex-col items-start self-stretch rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-6 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] -rotate-[0.8deg] hover:rotate-0 transition-transform mobile:hover:rotate-0 mobile:rotate-0">
              <div className="flex w-full items-center justify-between pb-2">
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                  PRJ 001.HR
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84]">
                  c.1
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Title
                </span>
                <span className="font-['Instrument_Sans'] text-[22px] font-[600] leading-[30px] text-[#1c1c1a]">
                  Hulu Rent
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Date
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#1c1c1a]">
                  2026
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Subject
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#1c1c1a]">
                  React — Node.js — Express — PostgreSQL
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Summary
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[21px] text-[#1c1c1a]">
                  Property rental platform for finding and listing properties: advanced search filters, secure auth, and an intuitive owner dashboard.
                </span>
              </div>
              <div className="flex w-full gap-4 py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  See:
                </span>
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hulu-rent-xqpm.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer"
                    >
                      Live ↗
                    </a>
                    <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#8a8a84]">
                      ·
                    </span>
                    <a
                      href="https://github.com/HuluRent/HuluRent"
                      target="_blank"
                      rel="noreferrer"
                      className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer"
                    >
                      Source ↗
                    </a>
                  </div>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84]">
                    hulu-rent-xqpm.vercel.app
                  </span>
                </div>
              </div>
            </article>

            {/* PRJ 002 - DeskFlow */}
            <article className="flex flex-col items-start self-stretch rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-6 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] rotate-[0.8deg] translate-y-1 hover:rotate-0 transition-transform mobile:hover:rotate-0 mobile:rotate-0 mobile:translate-y-0">
              <div className="flex w-full items-center justify-between pb-2">
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                  PRJ 002.DF
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84]">
                  c.1
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Title
                </span>
                <span className="font-['Instrument_Sans'] text-[22px] font-[600] leading-[30px] text-[#1c1c1a]">
                  DeskFlow
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Date
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#1c1c1a]">
                  2026
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Subject
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#1c1c1a]">
                  React — Express — Prisma — PostgreSQL — JWT
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Summary
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[21px] text-[#1c1c1a]">
                  Full-stack helpdesk ticketing with role-based workflows for employees, technical staff and managers.
                </span>
              </div>
              <div className="flex w-full gap-4 py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  See:
                </span>
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://helpdesk-one-rho.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer"
                    >
                      Live ↗
                    </a>
                    <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#8a8a84]">
                      ·
                    </span>
                    <a
                      href="https://github.com/Leoul-Z/Helpdesk"
                      target="_blank"
                      rel="noreferrer"
                      className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer"
                    >
                      Source ↗
                    </a>
                  </div>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84]">
                    helpdesk-one-rho.vercel.app
                  </span>
                </div>
              </div>
            </article>

            {/* PRJ 003 - Petify */}
            <article className="flex flex-col items-start self-stretch rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-6 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] -rotate-[0.6deg] hover:rotate-0 transition-transform mobile:hover:rotate-0 mobile:rotate-0">
              <div className="flex w-full items-center justify-between pb-2">
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                  PRJ 003.PT
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84]">
                  c.1
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Title
                </span>
                <span className="font-['Instrument_Sans'] text-[22px] font-[600] leading-[30px] text-[#1c1c1a]">
                  Petify
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Date
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#1c1c1a]">
                  2026
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Subject
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#1c1c1a]">
                  React — PHP
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Summary
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[21px] text-[#1c1c1a]">
                  Pet shop app with category filtering, cart checkout and service appointment booking.
                </span>
              </div>
              <div className="flex w-full gap-4 py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  See:
                </span>
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://petify-plum.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer"
                    >
                      Live ↗
                    </a>
                    <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#8a8a84]">
                      ·
                    </span>
                    <a
                      href="https://github.com/Leoul-Z/Petify"
                      target="_blank"
                      rel="noreferrer"
                      className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer"
                    >
                      Source ↗
                    </a>
                  </div>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84]">
                    petify-plum.vercel.app
                  </span>
                </div>
              </div>
            </article>

            {/* PRJ 004 - Didactic AI */}
            <article id="prj-didactic" className="flex flex-col items-start self-stretch rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-6 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] rotate-[0.7deg] translate-y-1 hover:rotate-0 transition-transform mobile:hover:rotate-0 mobile:rotate-0 mobile:translate-y-0">
              <div className="flex w-full items-center justify-between pb-2">
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[600] leading-[17px] tracking-[0.15em] text-[#c0392b] uppercase">
                  PRJ 004.DA · AWS Finalist
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84]">
                  c.1
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Title
                </span>
                <span className="font-['Instrument_Sans'] text-[22px] font-[600] leading-[30px] text-[#1c1c1a]">
                  Didactic AI
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Date
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#1c1c1a]">
                  2026
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Subject
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#1c1c1a]">
                  React — FastAPI — PostgreSQL
                </span>
              </div>
              <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  Summary
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[21px] text-[#1c1c1a]">
                  Intelligent academic evaluation system featuring automated assessment, prompt engineering, and performance analytics — built for the AWS Hackathon (Finalist).
                </span>
              </div>
              <div className="flex w-full gap-4 py-2 items-baseline">
                <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] shrink-0 uppercase">
                  See:
                </span>
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://didactic-ai-tau.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer"
                    >
                      Live ↗
                    </a>
                    <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#8a8a84]">
                      ·
                    </span>
                    <a
                      href="https://github.com/eyustarX/didactic-ai"
                      target="_blank"
                      rel="noreferrer"
                      className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer"
                    >
                      Source ↗
                    </a>
                  </div>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84]">
                    didactic-ai-tau.vercel.app
                  </span>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* Section C: Certifications */}
        <section id="certifications" className="flex w-full flex-col items-start scroll-mt-24">
          <div className="flex w-full items-end pl-[344px] mobile:pl-2">
            <div className="flex items-center gap-3 rounded-t-[8px] bg-[#c9d3c0] px-6 py-2.5">
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#46523d]">
                C
              </span>
              <span className="font-['Instrument_Sans'] text-[18px] font-[600] leading-[27px] text-[#1f2a18]">
                Certifications
              </span>
            </div>
          </div>
          
          <div className="w-full items-start gap-6 rounded-[2px] border-t-4 border-solid border-[#c9d3c0] bg-[#dedad0] px-8 py-8 grid grid-cols-3 mobile:px-4 mobile:py-4 mobile:grid-cols-1 shadow-sm">
            
            {/* CRT 2026.02 - Y Combinator Job Simulation */}
            <article className="flex flex-col items-start gap-3 self-stretch overflow-hidden rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-5 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] -rotate-[1.2deg] hover:rotate-0 transition-transform mobile:rotate-0">
              <span className="w-full font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                CRT 2026.02
              </span>
              <span className="w-full font-['Instrument_Sans'] text-[20px] font-[600] leading-[25px] text-[#1c1c1a] border-b border-solid border-[#c7d7ef] pb-2">
                Software Engineer at a Start Up Job Simulation
              </span>
              <span className="w-full font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36] border-b border-solid border-[#c7d7ef] pb-2">
                Forage / Y Combinator · Sep 2026
              </span>
              <div className="flex w-full items-end justify-between gap-2 pt-1">
                <a
                  href="https://www.theforage.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-['IBM_Plex_Mono'] text-[12px] font-[600] leading-[18px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer"
                >
                  Verify →
                </a>
                <div className="flex items-start rounded-[9999px] border-[3px] border-solid border-[#c0392b] px-4 py-1 opacity-85 -rotate-[7deg] select-none">
                  <span className="font-['IBM_Plex_Mono'] text-[18px] font-[700] leading-[26px] tracking-[0.1em] text-[#c0392b]">
                    COMPLETED
                  </span>
                </div>
              </div>
            </article>

            {/* CRT 2026.01 - ALX Back-End */}
            <article className="flex flex-col items-start gap-3 self-stretch overflow-hidden rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-5 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] rotate-[0.8deg] translate-y-3 hover:rotate-0 transition-transform mobile:translate-y-0 mobile:rotate-0">
              <span className="w-full font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                CRT 2026.01
              </span>
              <span className="w-full font-['Instrument_Sans'] text-[20px] font-[600] leading-[25px] text-[#1c1c1a] border-b border-solid border-[#c7d7ef] pb-2">
                ALX Software Engineering — Back-End
              </span>
              <span className="w-full font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36] border-b border-solid border-[#c7d7ef] pb-2">
                ALX Africa · Mar 2026 · 8 mo
              </span>
              <div className="flex w-full items-end justify-between gap-2 pt-1">
                <button
                  onClick={() => setActiveCert(certificateData['alx-se'])}
                  className="font-['IBM_Plex_Mono'] text-[12px] font-[600] leading-[18px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer flex items-center gap-1"
                >
                  <span>Verify →</span>
                  <ZoomIn size={12} />
                </button>
                <div className="flex items-start rounded-[2px] border-[3px] border-solid border-[#c0392b] px-3 py-1 opacity-85 -rotate-[12deg] select-none">
                  <span className="font-['IBM_Plex_Mono'] text-[18px] font-[700] leading-[26px] tracking-[0.1em] text-[#c0392b]">
                    CERTIFIED
                  </span>
                </div>
              </div>
            </article>

            {/* CRT 2025.04 - Udacity */}
            <article className="flex flex-col items-start gap-3 self-stretch overflow-hidden rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-5 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] -rotate-[0.5deg] hover:rotate-0 transition-transform mobile:rotate-0">
              <span className="w-full font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                CRT 2025.04
              </span>
              <span className="w-full font-['Instrument_Sans'] text-[20px] font-[600] leading-[25px] text-[#1c1c1a] border-b border-solid border-[#c7d7ef] pb-2">
                Programming Fundamentals Nanodegree
              </span>
              <span className="w-full font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36] border-b border-solid border-[#c7d7ef] pb-2">
                Udacity · Oct 2025
              </span>
              <div className="flex w-full items-end justify-between gap-2 pt-1">
                <button
                  onClick={() => setActiveCert(certificateData['udacity-pf'])}
                  className="font-['IBM_Plex_Mono'] text-[12px] font-[600] leading-[18px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer flex items-center gap-1"
                >
                  <span>Verify →</span>
                  <ZoomIn size={12} />
                </button>
                <div className="flex items-start rounded-[2px] px-3 py-1 border-[3px] border-[#c0392b] opacity-85 border-double rotate-[8deg] select-none">
                  <span className="font-['IBM_Plex_Mono'] text-[18px] font-[700] leading-[26px] tracking-[0.1em] text-[#c0392b]">
                    NANODEGREE
                  </span>
                </div>
              </div>
            </article>

            {/* CRT 2025.03 - ALX Professional Foundations */}
            <article className="flex flex-col items-start gap-3 self-stretch overflow-hidden rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-5 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] rotate-[0.6deg] hover:rotate-0 transition-transform mobile:rotate-0">
              <span className="w-full font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                CRT 2025.03
              </span>
              <span className="w-full font-['Instrument_Sans'] text-[20px] font-[600] leading-[25px] text-[#1c1c1a] border-b border-solid border-[#c7d7ef] pb-2">
                ALX Professional Foundations
              </span>
              <span className="w-full font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36] border-b border-solid border-[#c7d7ef] pb-2">
                ALX Africa · Sep 2025
              </span>
              <div className="flex w-full items-end justify-between gap-2 pt-1">
                <button
                  onClick={() => setActiveCert(certificateData['alx-pf'])}
                  className="font-['IBM_Plex_Mono'] text-[12px] font-[600] leading-[18px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer flex items-center gap-1"
                >
                  <span>View →</span>
                  <ZoomIn size={12} />
                </button>
                <div className="flex items-start rounded-[9999px] border-[3px] border-solid border-[#c0392b] px-4 py-1 opacity-85 -rotate-[6deg] select-none">
                  <span className="font-['IBM_Plex_Mono'] text-[18px] font-[700] leading-[26px] tracking-[0.1em] text-[#c0392b]">
                    COMPLETED
                  </span>
                </div>
              </div>
            </article>

            {/* CRT 2025.02 - Huawei openGauss */}
            <article className="flex flex-col items-start gap-3 self-stretch overflow-hidden rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-5 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] -rotate-[0.9deg] translate-y-3 hover:rotate-0 transition-transform mobile:translate-y-0 mobile:rotate-0">
              <span className="w-full font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                CRT 2025.02
              </span>
              <span className="w-full font-['Instrument_Sans'] text-[20px] font-[600] leading-[25px] text-[#1c1c1a] border-b border-solid border-[#c7d7ef] pb-2">
                HCIA-openGauss V1.0
              </span>
              <span className="w-full font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36] border-b border-solid border-[#c7d7ef] pb-2">
                Huawei Technologies · May 2025
              </span>
              <div className="flex w-full items-end justify-between gap-2 pt-1">
                <button
                  onClick={() => setActiveCert(certificateData['huawei-og'])}
                  className="font-['IBM_Plex_Mono'] text-[12px] font-[600] leading-[18px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer flex items-center gap-1"
                >
                  <span>Verify →</span>
                  <ZoomIn size={12} />
                </button>
                <div className="flex items-start rounded-[2px] border-[3px] border-solid border-[#c0392b] px-3 py-1 opacity-85 rotate-[10deg] select-none">
                  <span className="font-['IBM_Plex_Mono'] text-[18px] font-[700] leading-[26px] tracking-[0.1em] text-[#c0392b]">
                    HCIA
                  </span>
                </div>
              </div>
            </article>

            {/* CRT 2025.01 - Huawei Datacom */}
            <article className="flex flex-col items-start gap-3 self-stretch overflow-hidden rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-5 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] rotate-[0.4deg] hover:rotate-0 transition-transform mobile:rotate-0">
              <span className="w-full font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                CRT 2025.01
              </span>
              <span className="w-full font-['Instrument_Sans'] text-[20px] font-[600] leading-[25px] text-[#1c1c1a] border-b border-solid border-[#c7d7ef] pb-2">
                HCIA-Datacom V1.0
              </span>
              <span className="w-full font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36] border-b border-solid border-[#c7d7ef] pb-2">
                Huawei Technologies · May 2025
              </span>
              <div className="flex w-full items-end justify-between gap-2 pt-1">
                <button
                  onClick={() => setActiveCert(certificateData['huawei-dc'])}
                  className="font-['IBM_Plex_Mono'] text-[12px] font-[600] leading-[18px] text-[#1f4fa3] underline hover:text-[#c0392b] cursor-pointer flex items-center gap-1"
                >
                  <span>Verify →</span>
                  <ZoomIn size={12} />
                </button>
                <div className="flex items-start rounded-[2px] px-3 py-1 border-[3px] border-[#c0392b] opacity-85 border-double -rotate-[9deg] select-none">
                  <span className="font-['IBM_Plex_Mono'] text-[18px] font-[700] leading-[26px] tracking-[0.1em] text-[#c0392b]">
                    HCIA
                  </span>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* Section D: Hackathons */}
        <section id="hackathons" className="flex w-full flex-col items-start scroll-mt-24">
          <div className="flex w-full items-end pl-[680px] mobile:pl-2">
            <div className="flex items-center gap-3 rounded-t-[8px] bg-[#e8c4ae] px-6 py-2.5">
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#6e3f26]">
                D
              </span>
              <span className="font-['Instrument_Sans'] text-[18px] font-[600] leading-[27px] text-[#3a1f10]">
                Hackathons
              </span>
            </div>
          </div>
          
          <div className="flex w-full flex-col items-start gap-6 rounded-[2px] border-t-4 border-solid border-[#e8c4ae] bg-[#dedad0] px-8 py-8 mobile:px-4 mobile:py-4 shadow-sm">
            <div className="flex w-full items-center justify-between">
              <span className="font-['Instrument_Sans'] text-[18px] font-[600] leading-[27px] text-[#1c1c1a]">
                Event log
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#6b6b66] uppercase">
                2 entries · verified builds
              </span>
            </div>
            
            <div className="w-full items-start gap-6 grid grid-cols-3 mobile:grid-cols-1">
              
              {/* HCK 001 */}
              <article className="flex flex-col items-start gap-3 self-stretch overflow-hidden rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-5 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] -rotate-[0.8deg] hover:rotate-0 transition-transform mobile:rotate-0">
                <div className="flex w-full items-center justify-between">
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                    HCK 001
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                    48 hrs
                  </span>
                </div>
                <span className="w-full font-['Instrument_Sans'] text-[20px] font-[600] leading-[25px] text-[#1c1c1a] border-b border-solid border-[#c7d7ef] pb-2">
                  Cashless Community M-PESA Hackathon 2026
                </span>
                <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] pb-2 items-baseline">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.12em] text-[#c0392b] uppercase">
                    Date
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36]">
                    2026 · Addis Ababa
                  </span>
                </div>
                <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] pb-2 items-baseline">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.12em] text-[#c0392b] uppercase">
                    Team
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36]">
                    Backend and Mobile Developer
                  </span>
                </div>
                <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] pb-2 items-baseline">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.12em] text-[#c0392b] uppercase">
                    Built
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36]">
                    E-Tourisum Platform with Flutter &amp; FastAPI.
                  </span>
                </div>
                <div className="flex w-full items-end justify-between pt-1 gap-2">
                  <a
                    href="#stack"
                    className="font-['IBM_Plex_Mono'] text-[12px] font-[600] leading-[18px] text-[#1f4fa3] underline hover:text-[#c0392b]"
                  >
                    Stack →
                  </a>
                  <div className="flex items-start rounded-[2px] border-[3px] border-solid border-[#c0392b] px-3 py-1 opacity-85 -rotate-[8deg] select-none">
                    <span className="font-['IBM_Plex_Mono'] text-[18px] font-[700] leading-[26px] tracking-[0.1em] text-[#c0392b]">
                      FINALIST
                    </span>
                  </div>
                </div>
              </article>

              {/* HCK 002 */}
              <article className="flex flex-col items-start gap-3 self-stretch overflow-hidden rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-5 pt-4 pb-5 shadow-[0px_4px_12px_0px_#0000001a] rotate-[0.6deg] translate-y-3 hover:rotate-0 transition-transform mobile:translate-y-0 mobile:rotate-0">
                <div className="flex w-full items-center justify-between">
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                    HCK 002
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                    24 hrs
                  </span>
                </div>
                <span className="w-full font-['Instrument_Sans'] text-[20px] font-[600] leading-[25px] text-[#1c1c1a] border-b border-solid border-[#c7d7ef] pb-2">
                  AWS Hackathon
                </span>
                <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] pb-2 items-baseline">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.12em] text-[#c0392b] uppercase">
                    Date
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36]">
                    2026 · Online
                  </span>
                </div>
                <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] pb-2 items-baseline">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.12em] text-[#c0392b] uppercase">
                    Team
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36]">
                    Full-stack Developer
                  </span>
                </div>
                <div className="flex w-full gap-4 border-b border-solid border-[#c7d7ef] pb-2 items-baseline">
                  <span className="w-16 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.12em] text-[#c0392b] uppercase">
                    Built
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36]">
                    Didactic AI, Intelligent Academic Evaluation with React, FastAPI &amp; PostgreSQL.
                  </span>
                </div>
                <div className="flex w-full items-end justify-between pt-1 gap-2">
                  <a
                    href="#prj-didactic"
                    className="font-['IBM_Plex_Mono'] text-[12px] font-[600] leading-[18px] text-[#1f4fa3] underline hover:text-[#c0392b]"
                  >
                    Project →
                  </a>
                  <div className="flex items-start rounded-[9999px] border-[3px] border-solid border-[#c0392b] px-4 py-1 opacity-85 rotate-[6deg] select-none">
                    <span className="font-['IBM_Plex_Mono'] text-[18px] font-[700] leading-[26px] tracking-[0.1em] text-[#c0392b]">
                      FINALIST
                    </span>
                  </div>
                </div>
              </article>


            </div>
          </div>
        </section>

        {/* Section E: Stack (Cross-reference card) */}
        <section id="stack" className="flex w-full flex-col items-start scroll-mt-24">
          <div className="flex w-full items-end pl-[512px] mobile:pl-2">
            <div className="flex items-center gap-3 rounded-t-[8px] bg-[#bfcbe0] px-6 py-2.5">
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#36435c]">
                E
              </span>
              <span className="font-['Instrument_Sans'] text-[18px] font-[600] leading-[27px] text-[#16203a]">
                Stack
              </span>
            </div>
          </div>
          
          <div className="flex w-full flex-col items-start rounded-[2px] border-t-4 border-solid border-[#bfcbe0] bg-[#dedad0] px-8 py-8 mobile:px-4 mobile:py-4 shadow-sm">
            <article className="flex w-full flex-col items-start rounded-[2px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-6 pt-4 pb-6 shadow-[0px_4px_12px_0px_#0000001a] rotate-[0.3deg] hover:rotate-0 transition-transform mobile:rotate-0">
              <div className="flex w-full items-center justify-between border-b border-solid border-[#c7d7ef] pb-2">
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                  Cross-reference card
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84]">
                  5 groups · 24 subjects
                </span>
              </div>
              <span className="w-full font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36] border-b border-solid border-[#c7d7ef] py-2">
                Leoul Zerihun — see also the following subjects:
              </span>

              {/* Languages */}
              <div className="flex w-full items-start gap-6 border-b border-solid border-[#c7d7ef] py-3 mobile:flex-col mobile:gap-2">
                <div className="flex w-36 flex-none flex-col items-start mobile:w-full">
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] tracking-[0.1em] text-[#c0392b]">
                    LANG
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84] uppercase">
                    Languages
                  </span>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-wrap items-center gap-2">
                  {['C++', 'Python', 'Java', 'JavaScript', 'PHP', 'SQL'].map((lang, idx) => (
                    <div key={lang} className="flex items-center gap-2 rounded-[2px] border border-solid border-[#c7d7ef] bg-[#f7f9fd] px-2.5 py-1">
                      <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#c0392b]">
                        LANG.0{idx + 1}
                      </span>
                      <span className="font-['IBM_Plex_Mono'] text-[14px] font-[400] leading-[21px] text-[#1c1c1a]">
                        {lang}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Front-end */}
              <div className="flex w-full items-start gap-6 border-b border-solid border-[#c7d7ef] py-3 mobile:flex-col mobile:gap-2">
                <div className="flex w-36 flex-none flex-col items-start mobile:w-full">
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] tracking-[0.1em] text-[#c0392b]">
                    FE
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84] uppercase">
                    Front-end
                  </span>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-wrap items-center gap-2">
                  {['HTML', 'CSS', 'React', 'Tailwind CSS', 'Flutter', 'Bootstrap', 'Vite'].map((fe, idx) => (
                    <div key={fe} className="flex items-center gap-2 rounded-[2px] border border-solid border-[#c7d7ef] bg-[#f7f9fd] px-2.5 py-1">
                      <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#c0392b]">
                        FE.0{idx + 1}
                      </span>
                      <span className="font-['IBM_Plex_Mono'] text-[14px] font-[400] leading-[21px] text-[#1c1c1a]">
                        {fe}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Back-end */}
              <div className="flex w-full items-start gap-6 border-b border-solid border-[#c7d7ef] py-3 mobile:flex-col mobile:gap-2">
                <div className="flex w-36 flex-none flex-col items-start mobile:w-full">
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] tracking-[0.1em] text-[#c0392b]">
                    BE
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84] uppercase">
                    Back-end
                  </span>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-wrap items-center gap-2">
                  {['Node.js', 'Express', 'FastAPI', 'Django', 'Resend'].map((be, idx) => (
                    <div key={be} className="flex items-center gap-2 rounded-[2px] border border-solid border-[#c7d7ef] bg-[#f7f9fd] px-2.5 py-1">
                      <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#c0392b]">
                        BE.0{idx + 1}
                      </span>
                      <span className="font-['IBM_Plex_Mono'] text-[14px] font-[400] leading-[21px] text-[#1c1c1a]">
                        {be}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data & Tooling */}
              <div className="flex w-full items-start gap-6 border-b border-solid border-[#c7d7ef] py-3 mobile:flex-col mobile:gap-2">
                <div className="flex w-36 flex-none flex-col items-start mobile:w-full">
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] tracking-[0.1em] text-[#c0392b]">
                    DATA
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84] uppercase">
                    Data &amp; tooling
                  </span>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-wrap items-center gap-2">
                  {['PostgreSQL', 'Prisma', 'Docker', 'Git'].map((data, idx) => (
                    <div key={data} className="flex items-center gap-2 rounded-[2px] border border-solid border-[#c7d7ef] bg-[#f7f9fd] px-2.5 py-1">
                      <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#c0392b]">
                        DATA.0{idx + 1}
                      </span>
                      <span className="font-['IBM_Plex_Mono'] text-[14px] font-[400] leading-[21px] text-[#1c1c1a]">
                        {data}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment */}
              <div className="flex w-full items-start gap-6 py-3 mobile:flex-col mobile:gap-2">
                <div className="flex w-36 flex-none flex-col items-start mobile:w-full">
                  <span className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] tracking-[0.1em] text-[#c0392b]">
                    DEPLOY
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#8a8a84] uppercase">
                    Deployment
                  </span>
                </div>
                <div className="flex grow shrink-0 basis-0 flex-wrap items-center gap-2">
                  {['Vercel', 'Render'].map((dep, idx) => (
                    <div key={dep} className="flex items-center gap-2 rounded-[2px] border border-solid border-[#c7d7ef] bg-[#f7f9fd] px-2.5 py-1">
                      <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#c0392b]">
                        DEPLOY.0{idx + 1}
                      </span>
                      <span className="font-['IBM_Plex_Mono'] text-[14px] font-[400] leading-[21px] text-[#1c1c1a]">
                        {dep}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </article>
          </div>
        </section>

        {/* Section F: Off the Pitch */}
        <section id="off-the-pitch" className="flex w-full flex-col items-start scroll-mt-24">
          <div className="flex w-full items-end pl-[680px] mobile:pl-2">
            <div className="flex items-center gap-3 rounded-t-[8px] bg-[#9fc49a] px-6 py-2.5">
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#2f5a2b]">
                F
              </span>
              <span className="font-['Instrument_Sans'] text-[18px] font-[600] leading-[27px] text-[#14301a]">
                Off the Pitch
              </span>
            </div>
          </div>
          
          <div className="flex w-full items-start gap-10 rounded-[2px] border-t-4 border-solid border-[#9fc49a] bg-[#dedad0] px-8 py-8 mobile:flex-col mobile:gap-8 mobile:px-4 mobile:py-4 shadow-sm">
            
            {/* Playlist / On Rotation */}
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-5 mobile:grow-0 mobile:basis-auto w-full">
              <div className="flex w-full justify-between border-b border-dashed border-[#b8b6ac] pb-2 items-baseline">
                <span className="font-['Instrument_Sans'] text-[18px] font-[600] leading-[27px] text-[#1c1c1a]">
                  On rotation
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#6b6b66] uppercase">
                  1 card
                </span>
              </div>
              
              <article className="flex w-full flex-col items-start gap-5 rounded-[6px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] px-6 pt-5 pb-6 shadow-[0px_6px_16px_0px_#0000001f] relative -rotate-[0.8deg] hover:rotate-0 transition-transform mobile:relative mobile:rotate-0">
                <div className="flex w-full items-center justify-between">
                  <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] tracking-[0.2em] text-[#8a8a84] uppercase">
                    Record card · Playlist
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#8a8a84]">
                    REC 001
                  </span>
                </div>
                
                <div className="flex w-full items-center gap-6 mobile:flex-col mobile:items-start">
                  <div className="flex h-40 w-40 flex-none items-center justify-end overflow-hidden rounded-[2px] bg-[#c0392b] shadow-[inset_0px_0px_0px_1px_#00000026] relative">
                    <div className="flex h-32 w-32 flex-none items-center justify-center rounded-[9999px] border-[10px] border-solid border-[#2a2a27] bg-[#1c1c1a] absolute right-[-44px] animate-[spin_20s_linear_infinite]">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-[9999px] bg-[#e8b04a]">
                        <div className="flex h-2 w-2 flex-none items-start rounded-[9999px] bg-[#1c1c1a]" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-0.5 absolute left-3 bottom-3">
                      <span className="font-['IBM_Plex_Mono'] text-[10px] font-[700] leading-[14px] tracking-[0.15em] text-[#ffffff] uppercase">
                        LZ · Vol. 1
                      </span>
                      <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[14px] tracking-[0.15em] text-[#ffffffb3] uppercase">
                        Side A / B
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3">
                    <span className="w-full font-['Instrument_Sans'] text-[30px] font-[600] leading-[34px] text-[#1c1c1a] border-b border-solid border-[#c7d7ef] pb-2">
                      My Playlist
                    </span>
                    <span className="w-full font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#3a3a36] border-b border-solid border-[#c7d7ef] pb-2">
                      What's playing while I code, commute and watch the match build-up.
                    </span>
                    <a
                      href="https://spotify.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-[2px] bg-[#1c1c1a] px-4 py-2 hover:bg-[#c0392b] transition-colors cursor-pointer"
                    >
                      <span className="font-['IBM_Plex_Mono'] text-[12px] font-[600] leading-[18px] tracking-[0.15em] text-[#ffffff] uppercase">
                        Listen ↗
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start rounded-[2px] border-[3px] border-solid border-[#c0392b] bg-[#ffffffe6] px-2 py-0.5 absolute top-[54px] left-4 -rotate-[10deg] mobile:hidden select-none">
                  <span className="font-['IBM_Plex_Mono'] text-[14px] font-[700] leading-[20px] tracking-[0.1em] text-[#c0392b]">
                    ON REPEAT
                  </span>
                </div>
              </article>
            </div>

            {/* Club Memberships */}
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-5 mobile:grow-0 mobile:basis-auto w-full">
              <div className="flex w-full justify-between border-b border-dashed border-[#b8b6ac] pb-2 items-baseline">
                <span className="font-['Instrument_Sans'] text-[18px] font-[600] leading-[27px] text-[#1c1c1a]">
                  Club memberships
                </span>
                <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#6b6b66] uppercase">
                  2 cards
                </span>
              </div>

              {/* Real Madrid Membership */}
              <article className="flex w-full overflow-hidden rounded-[6px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] shadow-[0px_6px_16px_0px_#0000001f] items-stretch relative rotate-[0.8deg] hover:rotate-0 transition-transform mobile:relative mobile:items-stretch mobile:rotate-0">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3 px-5 pt-4 pb-5">
                  <div className="flex w-full items-center justify-between">
                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] tracking-[0.2em] text-[#8a8a84] uppercase">
                      Season ticket · Membership
                    </span>
                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#8a8a84]">
                      MBR 1902
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-4">
                    <div className="flex h-16 w-16 flex-none items-center justify-center rounded-[9999px] bg-[#ffffff] border-[3px] border-double border-[#d4a017] shadow-sm">
                      <span className="font-['IBM_Plex_Mono'] text-[16px] font-[700] leading-[24px] text-[#3d195b]">
                        RM
                      </span>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Instrument_Sans'] text-[22px] font-[600] leading-[28px] text-[#1c1c1a]">
                        Real Madrid
                      </span>
                      <span className="font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] text-[#3a3a36]">
                        La Liga · Madrid
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between border-t border-solid border-[#c7d7ef] pt-3 gap-4">
                    <div className="flex flex-col items-start">
                      <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] tracking-[0.15em] text-[#c0392b] uppercase">
                        Home ground
                      </span>
                      <span className="font-['IBM_Plex_Mono'] text-[14px] font-[600] leading-[21px] text-[#1c1c1a]">
                        Santiago Bernabéu
                      </span>
                    </div>
                    <div className="flex items-start rounded-[2px] border-2 border-solid border-[#c0392b] px-1.5 py-0.5 opacity-85 -rotate-[8deg] select-none">
                      <span className="font-['IBM_Plex_Mono'] text-[11px] font-[700] leading-[16px] tracking-[0.1em] text-[#c0392b]">
                        ¡HALA MADRID!
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-20 flex-none flex-col items-center justify-center gap-2 border-l-2 border-dashed border-[#c9c6b8] bg-[#fdf8e4] px-2 py-4 mobile:w-14">
                  <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] tracking-[0.15em] text-[#8a8a84] uppercase">
                    Stub
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[18px] font-[700] leading-[24px] text-[#1c1c1a]">
                    RMA
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#8a8a84]">
                    ADMIT 1
                  </span>
                </div>
              </article>

              {/* Chelsea Membership */}
              <article className="flex w-full overflow-hidden rounded-[6px] border-t-[3px] border-solid border-[#c0392b] bg-[#ffffff] shadow-[0px_6px_16px_0px_#0000001f] items-stretch relative -rotate-[1deg] hover:rotate-0 transition-transform mobile:relative mobile:items-stretch mobile:rotate-0">
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-3 px-5 pt-4 pb-5">
                  <div className="flex w-full items-center justify-between">
                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] tracking-[0.2em] text-[#8a8a84] uppercase">
                      Season ticket · Membership
                    </span>
                    <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#8a8a84]">
                      MBR 1905
                    </span>
                  </div>
                  <div className="flex w-full items-center gap-4">
                    <div className="flex h-16 w-16 flex-none items-center justify-center rounded-[9999px] bg-[#034694] border-[3px] border-double border-[#ffffff] shadow-sm">
                      <span className="font-['IBM_Plex_Mono'] text-[16px] font-[700] leading-[24px] text-[#ffffff]">
                        CFC
                      </span>
                    </div>
                    <div className="flex grow shrink-0 basis-0 flex-col items-start">
                      <span className="font-['Instrument_Sans'] text-[22px] font-[600] leading-[28px] text-[#1c1c1a]">
                        Chelsea
                      </span>
                      <span className="font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] text-[#3a3a36]">
                        Premier League · London
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between border-t border-solid border-[#c7d7ef] pt-3 gap-4">
                    <div className="flex flex-col items-start">
                      <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] tracking-[0.15em] text-[#c0392b] uppercase">
                        Home ground
                      </span>
                      <span className="font-['IBM_Plex_Mono'] text-[14px] font-[600] leading-[21px] text-[#1c1c1a]">
                        Stamford Bridge
                      </span>
                    </div>
                    <div className="flex items-start rounded-[2px] border-2 border-solid border-[#c0392b] px-1.5 py-0.5 opacity-85 rotate-[6deg] select-none">
                      <span className="font-['IBM_Plex_Mono'] text-[11px] font-[700] leading-[16px] tracking-[0.1em] text-[#c0392b]">
                        KTBFFH
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-20 flex-none flex-col items-center justify-center gap-2 border-l-2 border-dashed border-[#c9c6b8] bg-[#fdf8e4] px-2 py-4 mobile:w-14">
                  <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] tracking-[0.15em] text-[#8a8a84] uppercase">
                    Stub
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[18px] font-[700] leading-[24px] text-[#1c1c1a]">
                    CHE
                  </span>
                  <span className="font-['IBM_Plex_Mono'] text-[10px] font-[400] leading-[15px] text-[#8a8a84]">
                    ADMIT 1
                  </span>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* Section G: Contact ("Date due slip") */}
        <section id="contact" className="flex w-full flex-col items-start scroll-mt-24">
          <div className="flex w-full items-end pl-8 mobile:pl-2">
            <div className="flex items-center gap-3 rounded-t-[8px] bg-[#e6d58f] px-6 py-2.5">
              <span className="font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#5e5222]">
                G
              </span>
              <span className="font-['Instrument_Sans'] text-[18px] font-[600] leading-[27px] text-[#2e280e]">
                Contact
              </span>
            </div>
          </div>
          
          <div className="flex w-full flex-col items-center rounded-[2px] border-t-4 border-solid border-[#e6d58f] bg-[#dedad0] px-8 py-10 mobile:px-4 mobile:py-6 shadow-sm">
            <article className="flex w-full max-w-[460px] flex-col items-start rounded-[2px] bg-[#fdf8e4] px-6 pt-5 pb-6 shadow-[0px_6px_16px_0px_#0000001f] -rotate-[1.5deg] hover:rotate-0 transition-transform mobile:rotate-0">
              <span className="w-full font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.25em] text-[#8a8a84] text-center uppercase">
                Date due slip
              </span>
              <span className="w-full font-['Instrument_Sans'] text-[24px] font-[600] leading-[33px] text-[#1c1c1a] text-center pb-3">
                Check out Leoul
              </span>
              
              <div className="flex w-full items-start border-y-2 border-solid border-[#1c1c1a] py-1">
                <span className="self-stretch font-['IBM_Plex_Mono'] text-[11px] font-[600] leading-[17px] text-[#3a3a36] w-1/2 uppercase">
                  Borrower
                </span>
                <span className="self-stretch font-['IBM_Plex_Mono'] text-[11px] font-[600] leading-[17px] text-[#3a3a36] w-1/2 uppercase">
                  Date due
                </span>
              </div>
              
              <div className="flex w-full items-start border-b border-solid border-[#c7d7ef] py-2">
                <span className="self-stretch font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#8a8a84] w-1/2 line-through">
                  Y Combinator × Forage
                </span>
                <span className="self-stretch font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#8a8a84] w-1/2">
                  SEP 2026
                </span>
              </div>
              
              <div className="flex w-full items-start border-b border-solid border-[#c7d7ef] py-2">
                <span className="self-stretch font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#8a8a84] w-1/2 line-through">
                  INSA Summer Camp
                </span>
                <span className="self-stretch font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#8a8a84] w-1/2">
                  SUMMER 2026
                </span>
              </div>
              
              <div className="flex w-full items-start border-b border-solid border-[#c7d7ef] py-2 bg-[#f6ebc9]/40">
                <span className="self-stretch font-['IBM_Plex_Mono'] text-[14px] font-[600] leading-[20px] text-[#c0392b] w-1/2">
                  You?
                </span>
                <span className="self-stretch font-['IBM_Plex_Mono'] text-[14px] font-[600] leading-[20px] text-[#c0392b] w-1/2">
                  ASAP
                </span>
              </div>
              
              <div className="flex w-full flex-col items-start gap-1 pt-5">
                <span className="w-full font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] tracking-[0.15em] text-[#8a8a84] uppercase">
                  Request via
                </span>
                <a
                  href="mailto:leoulzerihun06@gmail.com"
                  className="w-full font-['IBM_Plex_Mono'] text-[17px] font-[600] leading-[27px] text-[#1f4fa3] underline break-all hover:text-[#c0392b]"
                >
                  leoulzerihun06@gmail.com
                </a>
              </div>
              
              <div className="flex w-full flex-col items-start pt-3">
                <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                  <span className="w-20 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] uppercase">
                    LinkedIn
                  </span>
                  <a
                    href="https://www.linkedin.com/in/leoul-zerihun-7a4414347"
                    target="_blank"
                    rel="noreferrer"
                    className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#1f4fa3] underline hover:text-[#c0392b]"
                  >
                    leoul-zerihun
                  </a>
                </div>
                <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                  <span className="w-20 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] uppercase">
                    Telegram
                  </span>
                  <a
                    href="https://t.me/leoniazz"
                    target="_blank"
                    rel="noreferrer"
                    className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#1f4fa3] underline hover:text-[#c0392b]"
                  >
                    @leoniazz
                  </a>
                </div>
                <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                  <span className="w-20 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] uppercase">
                    GitHub
                  </span>
                  <a
                    href="https://github.com/Leoul-Z"
                    target="_blank"
                    rel="noreferrer"
                    className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#1f4fa3] underline hover:text-[#c0392b]"
                  >
                    @Leoul-Z
                  </a>
                </div>
                <div className="flex w-full gap-3 border-b border-solid border-[#c7d7ef] py-2 items-baseline">
                  <span className="w-20 flex-none font-['IBM_Plex_Mono'] text-[11px] font-[400] leading-[17px] text-[#c0392b] uppercase">
                    LeetCode
                  </span>
                  <a
                    href="https://leetcode.com/u/Nasi4Z"
                    target="_blank"
                    rel="noreferrer"
                    className="font-['IBM_Plex_Mono'] text-[13px] font-[400] leading-[20px] text-[#1f4fa3] underline hover:text-[#c0392b]"
                  >
                    u/Nasi4Z
                  </a>
                </div>
              </div>

              {/* Stamp & Send Action Button */}
              <button
                onClick={handleStampAndSend}
                className="flex w-full items-center justify-center rounded-[2px] bg-[#1c1c1a] px-4 py-3 mt-6 hover:bg-[#c0392b] transition-colors cursor-pointer"
              >
                <span className="font-['IBM_Plex_Mono'] text-[13px] font-[600] leading-[20px] tracking-[0.15em] text-[#ffffff] uppercase">
                  {stampFeedback ? '✓ STAMPED & OPENING MAIL...' : 'Stamp & send →'}
                </span>
              </button>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex w-full items-center justify-between border-t border-dashed border-[#b8b6ac] pt-6 mobile:flex-col mobile:items-start mobile:justify-start mobile:gap-3">
          <span className="font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] text-[#6b6b66]">
            © 2026 LEOUL ZERIHUN · CATALOGUED IN ADDIS ABABA
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Leoul-Z"
              target="_blank"
              rel="noreferrer"
              className="font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] text-[#3a3a36] underline hover:text-[#c0392b]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/leoul-zerihun-7a4414347"
              target="_blank"
              rel="noreferrer"
              className="font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] text-[#3a3a36] underline hover:text-[#c0392b]"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/Nasi4Z"
              target="_blank"
              rel="noreferrer"
              className="font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] text-[#3a3a36] underline hover:text-[#c0392b]"
            >
              LeetCode
            </a>
            <a
              href="https://t.me/leoniazz"
              target="_blank"
              rel="noreferrer"
              className="font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] text-[#3a3a36] underline hover:text-[#c0392b]"
            >
              Telegram
            </a>
            <a
              href="mailto:leoulzerihun06@gmail.com"
              className="font-['IBM_Plex_Mono'] text-[12px] font-[400] leading-[18px] text-[#3a3a36] underline hover:text-[#c0392b]"
            >
              Email
            </a>
          </div>
        </footer>

      </div>

      {/* Certificate Modal Viewer */}
      <AnimatePresence>
        {activeCert && (
          <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default CardCatalog


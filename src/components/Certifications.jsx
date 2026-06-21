import { motion, AnimatePresence } from 'framer-motion'
import { Award, Calendar, Clock, X, ZoomIn, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

import certUdacity   from '../assets/certificates/udacity_programming_fundamentals.jpg'
import certAlxPF     from '../assets/certificates/alx_professional_foundations.jpg'
import certAlxSE     from '../assets/certificates/alx_software_engineering.jpg'
import certHuaweiOG  from '../assets/certificates/huawei_hcia_opengauss.jpg'
import certHuaweiDC  from '../assets/certificates/huawei_hcia_datacom.jpg'

const items = [
  {
    title: 'ALX Software Engineering',
    subtitle: 'Back-End Web Development',
    issuer: 'ALX',
    date: 'Mar 2026',
    duration: '8 Months',
    image: certAlxSE,
    description: 'Completed a rigorous 4-month ALX Software Engineering Programme specialising in Back-End Web Development. Covered server-side architecture, RESTful API design, databases, and deployment pipelines.',
    accent: '#00E5A0',
    link: 'https://savanna.alxafrica.com/certificates/LFSyC93BY7'
  },
  {
    title: 'ALX Professional Foundations',
    subtitle: 'Professional Development for the Digital Age',
    issuer: 'ALX',
    date: 'Sep 2025',
    duration: '3 Months',
    image: certAlxPF,
    description: 'Awarded for completing Professional Development Skills for the Digital Age — covering critical thinking, communication, teamwork, and problem-solving in professional and tech environments.',
    accent: '#00BFFF',
    link: 'https://savanna.alxafrica.com/certificates/PHhJ5yGB8F'
  },
  {
    title: 'Programming Fundamentals',
    subtitle: 'Udacity Nanodegree',
    issuer: 'Udacity',
    date: 'Oct 2025',
    duration: 'Nanodegree',
    image: certUdacity,
    description: 'Verified Nanodegree completion from Udacity covering core programming concepts including algorithms, data structures, logic building, and problem-solving fundamentals essential for software engineering.',
    accent: '#02B3E4',
    link: 'https://www.udacity.com/certificate/e/a12d95ec-793e-11f0-9d7a-abefb65b1531'
  },
  {
    title: 'HCIA-openGauss V1.0',
    subtitle: 'Huawei Database Certification',
    issuer: 'Huawei',
    date: 'May 2025',
    duration: '~4 Months',
    image: certHuaweiOG,
    description: 'Huawei Certified ICT Associate in openGauss database technology. Covers database architecture, SQL operations, performance tuning, backup and recovery strategies, and database security management.',
    accent: '#CF0A2C',
    link: null
  },
  {
    title: 'HCIA-Datacom V1.0',
    subtitle: 'Huawei ICT Certification',
    issuer: 'Huawei',
    date: 'May 2025',
    duration: '~4 Months',
    image: certHuaweiDC,
    description: 'Huawei Certified ICT Associate in Data Communications. Covers networking fundamentals, IP routing and switching, WLAN, and data center network technologies used in enterprise environments.',
    accent: '#CF0A2C',
    link: null
  }
]
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function CertModal({ item, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/88 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#0E1318] rounded-2xl border border-white/12 overflow-hidden shadow-2xl"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/8">
          <div>
            <h3 className="text-sm font-bold text-white">{item.title}</h3>
            <p className="text-xs mt-0.5 font-semibold" style={{ color: item.accent }}>
              {item.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-semibold text-neon-cyan hover:text-white transition-colors px-3 py-1.5 border border-neon-cyan/30 rounded-lg bg-neon-cyan/5 hover:bg-neon-cyan/10"
              >
                <ExternalLink size={12} />
                Verify Certificate
              </a>
            )}
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="relative bg-[#050810] flex items-center justify-center p-6 md:p-10"
          style={{ minHeight: '320px' }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="max-w-full max-h-[62vh] object-contain rounded-lg"
            style={{ boxShadow: `0 0 60px ${item.accent}25` }}
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 px-5 py-3 border-t border-white/8 bg-white/[0.01]">
          <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <Calendar size={11} />{item.date}
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <Clock size={11} />{item.duration}
          </span>
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
            style={{ color: item.accent, borderColor: `${item.accent}35`, background: `${item.accent}12` }}
          >
            {item.issuer}
          </span>
          <p className="hidden sm:block text-[11px] text-slate-600 ml-auto max-w-xs line-clamp-1">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

function CertCard({ item, onOpen }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03, boxShadow: `0 0 35px ${item.accent}20` }}
      onClick={() => onOpen(item)}
      className="group flex flex-col bg-[#0E1318] rounded-xl overflow-hidden border border-white/8 hover:border-white/22 transition-all duration-300 cursor-pointer"
    >
      <div className="relative w-full bg-[#060A0D] overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500 ease-out"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318]/70 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/25 text-white text-xs font-semibold tracking-wide">
            <ZoomIn size={15} />
            View Certificate
          </div>
        </div>

        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
        />

        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border backdrop-blur-sm"
          style={{ color: item.accent, borderColor: `${item.accent}45`, background: `${item.accent}18` }}
        >
          {item.issuer}
        </div>
      </div>

      <div className="px-4 py-3.5 border-t border-white/5 flex flex-col gap-1">
        <h3 className="text-sm font-bold text-white group-hover:text-neon-cyan transition-colors duration-300 leading-snug">
          {item.title}
        </h3>
        <p className="text-[11px] font-semibold" style={{ color: item.accent }}>
          {item.subtitle}
        </p>
        <div className="flex items-center justify-between mt-1.5">
          <div className="flex items-center gap-3 text-[10px] text-slate-500">
            <span className="flex items-center gap-1"><Calendar size={10} />{item.date}</span>
            <span className="flex items-center gap-1"><Clock size={10} />{item.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-bold" style={{ color: item.accent }}>
            <Award size={11} />
            <span>Verified</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Certifications() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certifications" className="py-24 md:py-36 bg-bg-dark border-t border-white/5 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,242,254,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,254,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight inline-block mb-3">
            Certifications<span className="text-neon-cyan">.</span>
          </h2>
          <p className="text-muted-gray text-sm md:text-base font-normal max-w-xl mx-auto">
            Verified credentials from industry-leading programs — click any card to view the full certificate.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item, index) => (
            <CertCard key={index} item={item} onOpen={setSelected} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <CertModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default Certifications

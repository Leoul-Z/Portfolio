import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, X, ZoomIn, ExternalLink, CheckCircle2 } from 'lucide-react'
import { useState, useEffect } from 'react'

import certUdacity   from '../assets/certificates/udacity_programming_fundamentals.jpg'
import certAlxPF     from '../assets/certificates/alx_professional_foundations.jpg'
import certAlxSE     from '../assets/certificates/alx_software_engineering.jpg'
import certHuaweiOG  from '../assets/certificates/huawei_hcia_opengauss.jpg'
import certHuaweiDC  from '../assets/certificates/huawei_hcia_datacom.jpg'

const items = [
  {
    id: 'alx-se',
    title: 'ALX Software Engineering',
    subtitle: 'Back-End Web Development Specialization',
    issuer: 'ALX',
    issuerCategory: 'alx',
    date: 'Mar 2026',
    duration: '8 Months',
    image: certAlxSE,
    description: 'Completed a rigorous 8-month ALX Software Engineering Programme specialising in Back-End Web Development. Covered server-side architecture, RESTful API design, database schemas, and deployment pipelines.',
    accent: '#10B981', // Emerald
    link: 'https://savanna.alxafrica.com/certificates/LFSyC93BY7'
  },
  {
    id: 'alx-pf',
    title: 'ALX Professional Foundations',
    subtitle: 'Professional Development for the Digital Age',
    issuer: 'ALX',
    issuerCategory: 'alx',
    date: 'Sep 2025',
    duration: '3 Months',
    image: certAlxPF,
    description: 'Awarded for completing Professional Development Skills for the Digital Age — covering critical thinking, team collaboration, technical problem-solving, and communication in professional engineering environments.',
    accent: '#06B6D4', // Cyan
    link: 'https://savanna.alxafrica.com/certificates/PHhJ5yGB8F'
  },
  {
    id: 'udacity-pf',
    title: 'Programming Fundamentals',
    subtitle: 'Udacity Nanodegree',
    issuer: 'Udacity',
    issuerCategory: 'udacity',
    date: 'Oct 2025',
    duration: 'Nanodegree',
    image: certUdacity,
    description: 'Verified Nanodegree completion from Udacity covering core programming concepts including algorithms, data structures, computational logic, and problem-solving fundamentals essential for software engineering.',
    accent: '#38BDF8', // Sky Blue
    link: 'https://www.udacity.com/certificate/e/a12d95ec-793e-11f0-9d7a-abefb65b1531'
  },
  {
    id: 'huawei-og',
    title: 'HCIA-openGauss V1.0',
    subtitle: 'Huawei Enterprise Database Certification',
    issuer: 'Huawei',
    issuerCategory: 'huawei',
    date: 'May 2025',
    duration: '~4 Months',
    image: certHuaweiOG,
    description: 'Huawei Certified ICT Associate in openGauss database technology. Covers database architecture, SQL operations, query performance tuning, backup & recovery strategies, and enterprise database security management.',
    accent: '#EF4444', // Red
    link: null
  },
  {
    id: 'huawei-dc',
    title: 'HCIA-Datacom V1.0',
    subtitle: 'Huawei ICT Network Certification',
    issuer: 'Huawei',
    issuerCategory: 'huawei',
    date: 'May 2025',
    duration: '~4 Months',
    image: certHuaweiDC,
    description: 'Huawei Certified ICT Associate in Data Communications. Covers networking fundamentals, IP routing and switching, network protocols, WLAN, and data center network architectures used in enterprise environments.',
    accent: '#F59E0B', // Amber
    link: null
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

function CertModal({ item, onClose }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
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
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-strong)] overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-card)]">
          <div>
            <h3 id="cert-modal-title" className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              {item.title}
            </h3>
            <p className="text-xs font-mono font-medium mt-0.5" style={{ color: item.accent }}>
              {item.subtitle}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-[var(--accent-cyan)]/40 bg-[var(--accent-cyan)]/10 text-[var(--text-primary)] hover:bg-[var(--accent-cyan)] hover:text-white transition-all cursor-pointer"
              >
                <ExternalLink size={13} />
                <span>Verify Credential</span>
              </a>
            )}
            
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Certificate Image View */}
        <div className="relative bg-[var(--bg-page)] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
          <img
            src={item.image}
            alt={`${item.title} certificate`}
            className="max-w-full max-h-[58vh] object-contain rounded-lg border border-[var(--border-subtle)] shadow-lg"
          />
        </div>

        {/* Modal Footer Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-t border-[var(--border-subtle)] bg-[var(--bg-card)] text-xs text-[var(--text-secondary)]">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} className="text-[var(--text-muted)]" />
              <span>{item.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-[var(--text-muted)]" />
              <span>{item.duration}</span>
            </span>
            <span
              className="px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider"
              style={{ background: `${item.accent}20`, color: item.accent }}
            >
              {item.issuer}
            </span>
          </div>

          <p className="text-xs text-[var(--text-muted)] line-clamp-1 max-w-sm">
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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onClick={() => onOpen(item)}
      className="group flex flex-col rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
    >
      {/* Thumbnail with overlay */}
      <div className="relative w-full bg-[var(--bg-card)] overflow-hidden" style={{ aspectRatio: '16/10' }}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)]/95 via-transparent to-transparent" />

        {/* Hover Zoom pill */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-[2px]">
          <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-strong)] text-[var(--text-primary)] text-xs font-semibold shadow-lg">
            <ZoomIn size={14} />
            <span>View Full Certificate</span>
          </div>
        </div>

        {/* Issuer Tag */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider border backdrop-blur-sm shadow-sm"
          style={{ color: item.accent, borderColor: `${item.accent}50`, background: `${item.accent}15` }}
        >
          {item.issuer}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 border-t border-[var(--border-subtle)]">
        <div>
          <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors leading-snug">
            {item.title}
          </h3>
          <p className="text-xs font-mono font-medium mt-1" style={{ color: item.accent }}>
            {item.subtitle}
          </p>
          <p className="text-xs text-[var(--text-secondary)] mt-2 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Calendar size={11} />{item.date}</span>
            <span className="flex items-center gap-1"><Clock size={11} />{item.duration}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-emerald-400">
            <CheckCircle2 size={12} />
            <span>Verified</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Certifications() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all')

  const filterTabs = [
    { id: 'all', label: 'All Certifications' },
    { id: 'alx', label: 'ALX Africa' },
    { id: 'udacity', label: 'Udacity' },
    { id: 'huawei', label: 'Huawei' }
  ]

  const filteredItems = filter === 'all'
    ? items
    : items.filter(item => item.issuerCategory === filter)

  return (
    <section id="certifications" className="py-24 md:py-32 bg-[var(--bg-page)] border-t border-[var(--border-subtle)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--accent-cyan)] mb-3">
            <span>// Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Verified Certifications<span className="text-[var(--accent-cyan)] font-mono">.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Credentials awarded through competitive programs and rigorous software engineering curricula. Click any certificate to inspect full details and verify validity.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? 'bg-[var(--accent-cyan)] text-white font-semibold shadow-sm shadow-cyan-500/20'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <CertCard key={item.id} item={item} onOpen={setSelected} />
          ))}
        </motion.div>
      </div>

      {/* High-Resolution Modal */}
      <AnimatePresence>
        {selected && <CertModal item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default Certifications

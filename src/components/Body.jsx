import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon, TelegramIcon, LeetcodeIcon } from './Icons'

const socialLinks = [
  {
    icon: GithubIcon,
    href: 'https://github.com/Leoul-Z',
    label: 'GitHub',
    color: '#ffffff'
  },
  {
    icon: LinkedinIcon,
    href: 'https://linkedin.com/in/leoul-zerihun',
    label: 'LinkedIn',
    color: '#0A66C2'
  },
  {
    icon: TelegramIcon,
    href: 'https://t.me/chris_SMRJN',
    label: 'Telegram',
    color: '#229ED9'
  },
  {
    icon: LeetcodeIcon,
    href: 'https://leetcode.com/u/Nasi4Z',
    label: 'LeetCode',
    color: '#FFA116'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const iconRowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8
    }
  }
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

function Body() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center py-20 md:py-32 relative overflow-hidden bg-bg-dark">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16"
      >
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(0,242,254,0.08)',
                '0 0 50px rgba(0,242,254,0.2)',
                '0 0 20px rgba(0,242,254,0.08)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative rounded-lg p-2"
          >
            <svg viewBox="0 0 300 300" className="w-64 h-64 md:w-80 md:h-80 text-neon-cyan">
              <motion.circle
                cx="150" cy="150" r="120"
                fill="none"
                stroke="rgba(0,242,254,0.06)"
                strokeWidth="1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '150px 150px' }}
              />

              <motion.path
                d="M 50 250 L 50 50 L 250 50 L 250 250 L 195 250 M 105 250 L 50 250"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />

              <motion.rect
                x="46" y="46" width="12" height="12"
                fill="currentColor"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.8 }}
                style={{ transformOrigin: '52px 52px' }}
              />
              <motion.rect
                x="242" y="46" width="12" height="12"
                fill="currentColor"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 2.0 }}
                style={{ transformOrigin: '248px 52px' }}
              />
              <motion.rect
                x="242" y="242" width="12" height="12"
                fill="currentColor"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 2.1 }}
                style={{ transformOrigin: '248px 248px' }}
              />

              <motion.path
                d="M 125 235 L 110 250 L 125 265"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: 'easeInOut' }}
              />

              <motion.path
                d="M 143 270 L 157 230"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.4, ease: 'easeInOut' }}
              />

              <motion.path
                d="M 175 235 L 190 250 L 175 265"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.6, ease: 'easeInOut' }}
              />

              <motion.circle
                cx="150" cy="150" r="4"
                fill="currentColor"
                animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '150px 150px' }}
              />
            </svg>
          </motion.div>
        </motion.div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div variants={itemVariants}>
            <motion.span
              className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-neon-cyan mb-4 px-3 py-1 border border-neon-cyan/20 rounded-full bg-neon-cyan/5"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              Available for work
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2"
          >
            Hi, I'm Leoul<span className="text-neon-cyan font-black">.</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">Software </span>
            <span className="text-muted-gray">Engineer</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-muted-gray text-sm md:text-base leading-relaxed max-w-md mb-8"
          >
            Building clean, performant, and visually compelling digital experiences — from pixel-perfect UIs to scalable backends.
          </motion.p>

          <motion.div
            variants={iconRowVariants}
            className="flex items-center gap-3 flex-wrap"
          >
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                variants={iconVariants}
                whileHover={{
                  scale: 1.2,
                  y: -3,
                  boxShadow: `0 8px 25px ${color}30`
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group flex items-center justify-center w-11 h-11 rounded-xl border border-white/8 bg-white/4 text-slate-400 hover:text-white transition-all duration-300 overflow-hidden"
                style={{
                  '--icon-color': color
                }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{ background: `${color}15` }}
                />
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl border"
                  style={{ borderColor: `${color}50` }}
                />
                <span className="relative z-10 group-hover:text-[var(--icon-color)] transition-colors duration-300">
                  <Icon size={20} />
                </span>

                <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-[10px] font-semibold bg-[#1a2332] text-white px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-white/10">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neon-cyan text-bg-dark font-bold text-sm tracking-wide hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,242,254,0.3)]"
            >
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Body
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowUpRight, Copy, Check, ArrowUp, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TelegramIcon, LeetcodeIcon } from './Icons'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
}

function Footer() {
  const [copied, setCopied] = useState(false)
  const emailAddress = 'leoulzerihun06@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const contactLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/leoul-zerihun',
      handle: 'leoul-zerihun',
      icon: LinkedinIcon,
      accent: '#0A66C2',
      tag: 'Professional Network'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Leoul-Z',
      handle: 'Leoul-Z',
      icon: GithubIcon,
      accent: '#0EA5E9',
      tag: 'Code & Repositories'
    },
    {
      name: 'Telegram',
      href: 'https://t.me/chris_SMRJN',
      handle: '@chris_SMRJN',
      icon: TelegramIcon,
      accent: '#229ED9',
      tag: 'Direct Messaging'
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/u/Nasi4Z',
      handle: 'u/Nasi4Z',
      icon: LeetcodeIcon,
      accent: '#FFA116',
      tag: 'Algorithms & Problem Solving'
    }
  ]

  return (
    <footer id="contact" className="py-24 md:py-32 relative bg-[var(--bg-page)] border-t border-[var(--border-subtle)] overflow-hidden">
      
      {/* Ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full bg-cyan-500/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--accent-cyan)] mb-3">
            <span>// Contact &amp; Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Let's Build Something Together<span className="text-[var(--accent-cyan)] font-mono">.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            I am currently open to Software Engineering opportunities, internships, and technical collaborations. Feel free to reach out directly.
          </p>
        </div>

        {/* Contact Layout: Email Hero Card + Social Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Main Direct Email Action Card (6 cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-cyan)] mb-3">
                <Mail size={16} />
                <span>Primary Channel</span>
              </div>
              
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                Direct Email Communication
              </h3>
              
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                Have a question, opportunity, or project proposal? Send an email directly to my inbox or copy the address below.
              </p>

              {/* Email Box with One-Click Copy */}
              <div className="p-3.5 sm:p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] flex items-center justify-between gap-3 mb-6">
                <span className="font-mono text-xs sm:text-sm text-[var(--text-primary)] truncate font-medium">
                  {emailAddress}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] transition-all cursor-pointer shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Send Email CTA */}
            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="text-xs text-[var(--text-muted)]">Typical response time: &lt; 24h</span>
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--accent-cyan)] text-white hover:opacity-90 font-semibold text-xs transition-opacity cursor-pointer shadow-sm"
              >
                <span>Compose Email</span>
                <Send size={13} />
              </a>
            </div>
          </div>

          {/* Social Channels 2x2 Grid (6 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  variants={cardVariants}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-[var(--accent-cyan)] group-hover:border-[var(--accent-cyan)]/40 transition-colors">
                        <Icon size={20} />
                      </div>
                      <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <h4 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
                      {link.name}
                    </h4>
                    <span className="text-xs text-[var(--text-muted)] block mt-0.5 font-mono">
                      {link.handle}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-[var(--text-secondary)] mt-4 pt-3 border-t border-[var(--border-subtle)] block">
                    {link.tag}
                  </span>
                </motion.a>
              )
            })}
          </motion.div>

        </div>

        {/* Footer Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p className="font-mono">
            © 2026 Leoul Zerihun — Built with <span className="text-[var(--accent-cyan)]">React 19</span>, <span className="text-[var(--accent-cyan)]">Tailwind CSS</span> &amp; <span className="text-[var(--accent-cyan)]">Framer Motion</span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer

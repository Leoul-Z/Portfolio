import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Check, Copy, Terminal, ExternalLink, Sparkles, Code2, Database, ShieldCheck } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TelegramIcon, LeetcodeIcon } from './Icons'

const socialLinks = [
  {
    icon: GithubIcon,
    href: 'https://github.com/Leoul-Z',
    label: 'GitHub',
    color: '#0EA5E9'
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
    color: '#F59E0B'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

function Body() {
  const [activeTab, setActiveTab] = useState('profile.ts')
  const [copied, setCopied] = useState(false)

  const codeSnippets = {
    'profile.ts': `// leoul.ts - Engineering Profile
const engineer: Developer = {
  name: "Leoul Zerihun",
  role: "Software Engineer",
  specialization: "Back-End & Full-Stack Systems",
  focus: [
    "RESTful API Architecture",
    "Relational Database Design",
    "High-Performance Web Apps"
  ],
  education: "Software Engineering Student",
  status: "Open to Software Engineering roles"
};

export default engineer;`,
    'stack.json': `{
  "core_backend": ["Node.js", "Express", "Django", "PHP"],
  "databases": ["PostgreSQL", "openGauss", "SQL"],
  "frontend": ["React 19", "Tailwind CSS", "JavaScript"],
  "certifications": [
    "ALX Software Engineering (Back-End)",
    "Udacity Programming Fundamentals",
    "Huawei HCIA-openGauss & Datacom"
  ]
}`
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 md:py-24 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full mx-auto px-5 sm:px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live Availability Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-sm text-xs font-medium text-[var(--text-secondary)] shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Available for Software Engineering Roles</span>
              </div>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-4"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Leoul Zerihun
              </span>
              <span className="text-[var(--accent-cyan)] font-mono">.</span>
            </motion.h1>

            {/* Sub-headline / Role */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span className="font-mono text-lg sm:text-2xl font-semibold text-[var(--text-secondary)]">
                Software Engineer
              </span>
              <span className="text-[var(--text-muted)] font-mono text-base">•</span>
              <span className="text-base sm:text-xl font-medium text-[var(--accent-cyan)]">
                Back-End & Full-Stack
              </span>
            </motion.div>

            {/* Concise Value Proposition */}
            <motion.p
              variants={itemVariants}
              className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal"
            >
              Curious and analytical software engineer focused on designing clean architectures, scalable backends, reliable RESTful APIs, and responsive web applications.
            </motion.p>

            {/* Action Buttons: View Projects + Contact */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--text-primary)] text-[var(--bg-page)] hover:bg-[var(--accent-cyan)] hover:text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-cyan-500/10 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowDown size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-surface)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] font-semibold text-sm transition-all duration-200 cursor-pointer"
              >
                <span>Get In Touch</span>
                <ExternalLink size={15} />
              </a>

              <a
                href="#certifications"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] text-sm font-medium transition-colors cursor-pointer"
              >
                <ShieldCheck size={16} className="text-emerald-500" />
                <span>5 Verified Certs</span>
              </a>
            </motion.div>

            {/* Social Connect Pills */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mr-1 hidden sm:inline">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Leoul on ${label}`}
                    title={label}
                    className="w-10 h-10 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interactive Code & Terminal Bento Card (5 Cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-[var(--border-strong)]">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-card)]">
                {/* Traffic Light Window Dots */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-[var(--text-muted)] flex items-center gap-1.5">
                    <Terminal size={13} />
                    leoul@dev:~
                  </span>
                </div>

                {/* Copy Snippet Button */}
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-colors cursor-pointer"
                  title="Copy code snippet"
                  aria-label="Copy code snippet"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Tab Navigation */}
              <div className="flex items-center gap-1 px-3 pt-2 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                {['profile.ts', 'stack.json'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-t-md transition-colors cursor-pointer flex items-center gap-1.5 ${
                      activeTab === tab
                        ? 'bg-[var(--bg-card)] text-[var(--accent-cyan)] border-t-2 border-[var(--accent-cyan)] font-semibold'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <Code2 size={12} />
                    {tab}
                  </button>
                ))}
              </div>

              {/* Syntax Highlighted Terminal Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-[var(--text-secondary)] bg-[var(--bg-card)]">
                <pre className="m-0 whitespace-pre">
                  {activeTab === 'profile.ts' ? (
                    <code>
                      <span className="text-[var(--text-muted)]">// leoul.ts - Engineering Profile</span>{'\n'}
                      <span className="text-indigo-400">const</span> engineer: <span className="text-amber-400">Developer</span> = {'{'}{'\n'}
                      {'  '}name: <span className="text-emerald-400">"Leoul Zerihun"</span>,{'\n'}
                      {'  '}role: <span className="text-emerald-400">"Software Engineer"</span>,{'\n'}
                      {'  '}specialization: <span className="text-emerald-400">"Back-End & Full-Stack"</span>,{'\n'}
                      {'  '}focus: [{'\n'}
                      {'    '}<span className="text-cyan-400">"RESTful API Architecture"</span>,{'\n'}
                      {'    '}<span className="text-cyan-400">"Relational Database Design"</span>,{'\n'}
                      {'    '}<span className="text-cyan-400">"Clean & Maintainable Systems"</span>{'\n'}
                      {'  '}],{'\n'}
                      {'  '}status: <span className="text-emerald-400">"Ready to contribute"</span>{'\n'}
                      {'}'};{'\n\n'}
                      <span className="text-indigo-400">export default</span> engineer;
                    </code>
                  ) : (
                    <code>
                      {`{
  `}<span className="text-indigo-400">"backend"</span>: [<span className="text-emerald-400">"Node.js"</span>, <span className="text-emerald-400">"Express"</span>, <span className="text-emerald-400">"Django"</span>, <span className="text-emerald-400">"PHP"</span>],
  <span className="text-indigo-400">"databases"</span>: [<span className="text-cyan-400">"PostgreSQL"</span>, <span className="text-cyan-400">"openGauss"</span>, <span className="text-cyan-400">"SQL"</span>],
  <span className="text-indigo-400">"frontend"</span>: [<span className="text-amber-400">"React 19"</span>, <span className="text-amber-400">"Tailwind CSS"</span>, <span className="text-amber-400">"JavaScript"</span>],
  <span className="text-indigo-400">"verified_credentials"</span>: 5
{`}`}
                    </code>
                  )}
                </pre>
              </div>

              {/* Bottom Card Highlights / Stats Bar */}
              <div className="grid grid-cols-3 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-2.5 px-4 text-center">
                <div className="border-r border-[var(--border-subtle)] pr-2">
                  <span className="block text-sm font-bold font-mono text-[var(--accent-cyan)]">8+ Mos</span>
                  <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">ALX Backend</span>
                </div>
                <div className="border-r border-[var(--border-subtle)] px-2">
                  <span className="block text-sm font-bold font-mono text-emerald-400">5 Certs</span>
                  <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Verified</span>
                </div>
                <div className="pl-2">
                  <span className="block text-sm font-bold font-mono text-amber-400">3 Apps</span>
                  <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Full-Stack</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Quick Highlights Strip */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-surface)]/60 border border-[var(--border-subtle)]">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Code2 size={18} />
            </div>
            <div>
              <span className="block text-xs font-bold text-[var(--text-primary)]">Server-Side & APIs</span>
              <span className="text-[11px] text-[var(--text-muted)]">Node, Express, Django</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-surface)]/60 border border-[var(--border-subtle)]">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
              <Database size={18} />
            </div>
            <div>
              <span className="block text-xs font-bold text-[var(--text-primary)]">Relational Databases</span>
              <span className="text-[11px] text-[var(--text-muted)]">PostgreSQL & openGauss</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-surface)]/60 border border-[var(--border-subtle)]">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
              <Sparkles size={18} />
            </div>
            <div>
              <span className="block text-xs font-bold text-[var(--text-primary)]">Modern Frontends</span>
              <span className="text-[11px] text-[var(--text-muted)]">React 19 & Tailwind</span>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-surface)]/60 border border-[var(--border-subtle)]">
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <span className="block text-xs font-bold text-[var(--text-primary)]">Discipline & Rigor</span>
              <span className="text-[11px] text-[var(--text-muted)]">Clean code standards</span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Body

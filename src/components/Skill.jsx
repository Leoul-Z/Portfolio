import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiCplusplus, SiPython, SiHtml5, SiJavascript, SiTailwindcss, SiReact,
  SiDjango, SiPhp, SiNodedotjs, SiExpress, SiDocker, SiVercel, SiRender, SiGit,
  SiPostgresql
} from 'react-icons/si'
import { FaJava, FaCss3Alt, FaDatabase } from 'react-icons/fa'
import { Layers, Terminal, Server, Layout, Database, Wrench } from 'lucide-react'

const skillsData = [
  // Languages
  { name: 'C++', category: 'languages', tag: 'Core Language', logo: <SiCplusplus size={26} color="#00599C" /> },
  { name: 'Python', category: 'languages', tag: 'Scripting & Backend', logo: <SiPython size={26} color="#3776AB" /> },
  { name: 'Java', category: 'languages', tag: 'OOP & Systems', logo: <FaJava size={26} color="#E32D2F" /> },
  { name: 'JavaScript', category: 'languages', tag: 'ES6+ & Full-Stack', logo: <SiJavascript size={26} color="#F7DF1E" /> },
  { name: 'PHP', category: 'languages', tag: 'Server-Side Web', logo: <SiPhp size={26} color="#777BB4" /> },
  { name: 'SQL', category: 'languages', tag: 'Queries & Schemas', logo: <FaDatabase size={26} color="#336791" /> },

  // Backend
  { name: 'Node.js', category: 'backend', tag: 'JS Runtime', logo: <SiNodedotjs size={26} color="#339933" /> },
  { name: 'Express', category: 'backend', tag: 'RESTful APIs', logo: <SiExpress size={26} color="#94A3B8" /> },
  { name: 'Django', category: 'backend', tag: 'Python Framework', logo: <SiDjango size={26} color="#44B78B" /> },

  // Frontend
  { name: 'React', category: 'frontend', tag: 'Reactive UIs', logo: <SiReact size={26} color="#61DAFB" /> },
  { name: 'Tailwind CSS', category: 'frontend', tag: 'Utility Styling', logo: <SiTailwindcss size={26} color="#06B6D4" /> },
  { name: 'HTML5', category: 'frontend', tag: 'Semantic Markup', logo: <SiHtml5 size={26} color="#E34F26" /> },
  { name: 'CSS3', category: 'frontend', tag: 'Modern Styling', logo: <FaCss3Alt size={26} color="#1572B6" /> },

  // Databases & DevOps
  { name: 'PostgreSQL', category: 'database', tag: 'Relational DB', logo: <SiPostgresql size={26} color="#4169E1" /> },
  { name: 'Docker', category: 'devops', tag: 'Containerization', logo: <SiDocker size={26} color="#2496ED" /> },
  { name: 'Git', category: 'devops', tag: 'Version Control', logo: <SiGit size={26} color="#F05032" /> },
  { name: 'Vercel', category: 'devops', tag: 'Edge Deployment', logo: <SiVercel size={26} color="#94A3B8" /> },
  { name: 'Render', category: 'devops', tag: 'Cloud Hosting', logo: <SiRender size={26} color="#46E3B7" /> }
]

const categories = [
  { id: 'all', label: 'All Technologies', icon: Layers },
  { id: 'languages', label: 'Languages', icon: Terminal },
  { id: 'backend', label: 'Backend & APIs', icon: Server },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'database', label: 'Databases', icon: Database },
  { id: 'devops', label: 'DevOps & Tools', icon: Wrench }
]

const marqueeItems = [...skillsData, ...skillsData]

function Skill() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredSkills = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === selectedCategory || (selectedCategory === 'database' && s.name === 'SQL'))

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-[var(--bg-page)] border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--accent-cyan)] mb-3">
            <span>// Tech Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Skills &amp; Technologies<span className="text-[var(--accent-cyan)] font-mono">.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            The programming languages, frameworks, databases, and developer tooling I use to craft reliable software solutions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isSelected = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--accent-cyan)] text-white font-semibold shadow-sm shadow-cyan-500/20'
                    : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Interactive Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 mb-16"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-cyan)]/50 hover:bg-[var(--bg-card)] transition-all duration-200 flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-page)] border border-[var(--border-subtle)] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                  {skill.logo}
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[11px] text-[var(--text-muted)] mt-1 font-mono">
                  {skill.tag}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Continuous Marquee Ticker */}
        <div className="relative w-full rounded-2xl border border-[var(--border-subtle)] py-4 bg-[var(--bg-surface)]/60 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-[var(--bg-surface)] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-[var(--bg-surface)] to-transparent" />

          <div className="flex whitespace-nowrap animate-marquee">
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center text-xs sm:text-sm font-mono font-semibold text-[var(--text-secondary)] mx-4 sm:mx-6 select-none"
              >
                <div className="flex items-center gap-2">
                  <span className="shrink-0">{item.logo}</span>
                  <span>{item.name}</span>
                </div>
                <span className="text-[var(--border-strong)] ml-4 sm:ml-6 font-mono">•</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skill

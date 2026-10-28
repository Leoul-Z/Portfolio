import { motion } from 'framer-motion'
import { User, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function About() {
  const highlights = [
    {
      title: 'Problem Deconstruction',
      desc: 'Analytical approach to breaking complex systems into maintainable, modular components.'
    },
    {
      title: 'Back-End & Relational Data',
      desc: 'Deep focus on REST API design, query optimization, and structured database schemas.'
    },
    {
      title: 'Discipline & Consistency',
      desc: 'Commitment to high coding standards, thorough testing, and clean architecture.'
    },
    {
      title: 'Continuous Upskilling',
      desc: 'Regularly solving algorithmic problems on LeetCode and exploring modern dev tooling.'
    }
  ]

  return (
    <section id="about" className="py-24 md:py-32 relative bg-[var(--bg-page)] border-t border-[var(--border-subtle)]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-6xl mx-auto px-5 sm:px-6 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--accent-cyan)] mb-3">
            <span>// About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Engineering Background<span className="text-[var(--accent-cyan)] font-mono">.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            A look into my journey as a Software Engineering student, problem-solving mindset, and professional philosophy.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Narrative Card (8 Cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-[var(--accent-cyan)] mb-3">
                <User size={15} />
                <span>The Story</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">
                Curious, Analytical, and Passionate About Scalable Software
              </h3>
              <div className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  I am a <strong className="text-[var(--text-primary)] font-semibold">Software Engineering student</strong> with a relentless drive for problem-solving, structured learning, and building software that delivers tangible value.
                </p>
                <p>
                  My natural inclination is analytical: I thrive on understanding how complex systems function from the ground up, deconstructing intricate challenges into clean, modular building blocks, and executing practical implementations.
                </p>
                <p>
                  I hold myself to high standards of <strong className="text-[var(--text-primary)] font-semibold">discipline, consistency, and craftsmanship</strong>. Rather than settling for superficial solutions, I strive to deeply understand backend infrastructure, data flow, and performance implications to write software that stands the test of time.
                </p>
              </div>
            </div>

            {/* Quote / Philosophy strip */}
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center gap-3 text-xs sm:text-sm text-[var(--text-muted)] italic">
              <Sparkles size={16} className="text-[var(--accent-cyan)] shrink-0 not-italic" />
              <span>
                "Striving to approach engineering challenges thoughtfully and contribute to reliable, high-impact systems."
              </span>
            </div>
          </motion.div>

          {/* Quick Metrics & Highlights Card (4 Cols) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
                <ShieldCheck size={16} />
                <span>Quick Snapshot</span>
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-5">
                Key Credentials
              </h3>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <span className="text-xs font-mono text-[var(--accent-cyan)] block">8-Month Rigorous Track</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)] block mt-0.5">
                    ALX Back-End Engineering
                  </span>
                  <span className="text-xs text-[var(--text-muted)] mt-1 block">
                    REST APIs, databases, servers & architectures
                  </span>
                </div>

                <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <span className="text-xs font-mono text-emerald-400 block">Verified Nanodegree</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)] block mt-0.5">
                    Udacity Programming Fundamentals
                  </span>
                  <span className="text-xs text-[var(--text-muted)] mt-1 block">
                    Core algorithms, data structures & logic
                  </span>
                </div>

                <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)]">
                  <span className="text-xs font-mono text-amber-400 block">Huawei HCIA Certified</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)] block mt-0.5">
                    openGauss &amp; Datacom
                  </span>
                  <span className="text-xs text-[var(--text-muted)] mt-1 block">
                    Enterprise relational DBs &amp; networking
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-muted)] flex items-center justify-between">
              <span>Status:</span>
              <span className="text-emerald-400 font-semibold">Active Student &amp; Builder</span>
            </div>
          </motion.div>

          {/* Core Competencies Row (4 Tiles - 12 Cols) */}
          <motion.div variants={itemVariants} className="lg:col-span-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--accent-cyan)]/50 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--border-subtle)] text-[var(--accent-cyan)] flex items-center justify-center mb-3">
                    <CheckCircle2 size={17} />
                  </div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1.5">
                    {h.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}

export default About

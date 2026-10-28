import { motion } from 'framer-motion'
import { Globe, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './Icons'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function Project() {
  const projects = [
    {
      title: 'Hulu Rent',
      badge: 'Full-Stack Rental Platform',
      year: '2026',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
      description: 'A comprehensive property rental and discovery web application designed to simplify listing and finding properties. Built with advanced multi-parameter search filters, secure authentication, role separation, and responsive property management dashboards.',
      highlights: [
        'Advanced search & filtering engine for rental properties',
        'Secure JWT authentication & user role permissions',
        'Normalized PostgreSQL database schema for properties, bookings, and owners',
        'Clean responsive UI engineered with React and Tailwind CSS'
      ],
      github: 'https://github.com/HuluRent/HuluRent',
      website: 'https://hulu-rent-xqpm.vercel.app/'
    },
    {
      title: 'DeskFlow',
      badge: 'Enterprise Helpdesk System',
      year: '2026',
      tags: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT'],
      description: 'A robust multi-role ticketing and support system designed to streamline internal operations. Supports complete lifecycle management for tickets across employees, technical support staff, and administrative managers.',
      highlights: [
        'Role-Based Access Control (RBAC) across three distinct user tiers',
        'Database modeling with Prisma ORM and PostgreSQL',
        'Automated ticket status tracking, priority flags, and assignment queues',
        'Secure token-based authorization and session management'
      ],
      github: 'https://github.com/Leoul-Z/Helpdesk',
      website: 'https://helpdesk-one-rho.vercel.app/'
    },
    {
      title: 'Petify',
      badge: 'E-Commerce & Booking App',
      year: '2026',
      tags: ['React', 'PHP', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
      description: 'A dynamic pet shop platform featuring a decoupled architecture with a modern React frontend and a structured PHP RESTful backend. Provides product browsing, shopping cart workflows, and veterinary/grooming service appointment bookings.',
      highlights: [
        'Decoupled architecture: React UI communicating with PHP backend endpoints',
        'Dynamic catalog browsing with category-based filtering',
        'Interactive shopping cart state management & checkout simulation',
        'Service appointment reservation booking engine'
      ],
      github: 'https://github.com/Leoul-Z/Petify',
      website: 'https://petify-plum.vercel.app/'
    }
  ]

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-[var(--bg-page)] border-t border-[var(--border-subtle)]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto px-5 sm:px-6"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-xs font-mono text-[var(--accent-cyan)] mb-3">
            <span>// Production Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Featured Projects<span className="text-[var(--accent-cyan)] font-mono">.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            Real-world full-stack applications showcasing end-to-end development, relational database modeling, and performant user experiences.
          </p>
        </motion.div>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] p-6 sm:p-8 md:p-9 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="flex flex-col lg:flex-row gap-8 justify-between">
                
                {/* Project Info Column */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Title, Category & Year */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
                        {project.title}
                      </h3>
                      <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-[var(--border-subtle)] text-[var(--accent-cyan)]">
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-[var(--text-muted)] ml-auto">
                        {project.year}
                      </span>
                    </div>

                    {/* Summary Description */}
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Key Engineering Highlights */}
                    <div className="mb-6">
                      <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2.5">
                        Key Architectural Highlights:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[var(--accent-cyan)] font-mono text-sm leading-none mt-1">▸</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Strip: Tags & Action Links */}
                  <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded-md border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] hover:border-[var(--accent-cyan)] transition-all duration-200 cursor-pointer"
                        >
                          <GithubIcon size={15} />
                          <span>Source Code</span>
                        </a>
                      )}

                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--text-primary)] text-[var(--bg-page)] hover:bg-[var(--accent-cyan)] hover:text-white transition-all duration-200 shadow-sm cursor-pointer"
                        >
                          <Globe size={15} />
                          <span>Live Demo</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Project

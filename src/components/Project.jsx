import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function Project() {
  const projects = [
    {
      title: 'Hulu Rent',
      date: '2026',
      tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL'],
      description: 'A comprehensive property rental platform designed to streamline the process of finding and listing properties. It features advanced search filters, secure user authentication, and an intuitive property management interface for owners.',
      github: 'https://github.com/HuluRent/HuluRent',
      website: 'https://hulu-rent-xqpm.vercel.app/'
    },
    {
      title: 'DeskFlow',
      date: '2026',
      tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL'],
      description: 'A full-stack helpdesk ticketing system with role-based workflows for employees, technical staff, and managers — built with Express, React, PostgreSQL (Prisma), and JWT authentication.',
      github: 'https://github.com/Leoul-Z/Helpdesk',
      website: 'https://helpdesk-one-rho.vercel.app/'
    },
    {
      title: 'Petify',
      date: '2026',
      tags: ['React', 'PHP', 'Tailwind CSS', 'PostgreSQL'],
      description: 'A dynamic pet shop web application built with a React frontend and a PHP backend. Features product catalog browsing with custom category filtering, shopping cart checkout, and service appointment booking.',
      github: 'https://github.com/Leoul-Z/Petify',
      website: 'https://petify-plum.vercel.app/'
    },
    {
      title: 'ScoreSync',
      date: '2026',
      tags: ['React', 'REST API', 'HTML/CSS'],
      description: 'A real-time sports score platform providing live match updates and game information through a fast, responsive interface. Designed with performance and low latency in mind, integrating external live data streams.',
      github: 'https://github.com/Leoul-Z/ScoreSync'
    },
    {
      title: 'Planora',
      date: '2025',
      tags: ['Django', 'Python', 'HTML/CSS'],
      description: 'A task management application built with Django, featuring secure user authentication, role-based access control, database management, and a clean interactive UI.',
      github: 'https://github.com/Leoul-Z/Task-Management-API'
    }
  ]

  return (
    <section id="projects" className="py-24 md:py-36 relative bg-bg-main border-t border-secondary-muted">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-5xl mx-auto px-6"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-accent tracking-tight inline-block">
            Projects<span className="text-neon-cyan">.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.015,
                boxShadow: '0 0 40px rgba(0,242,254,0.07)'
              }}
              className="group block p-6 md:p-8 rounded-xl border border-secondary-muted bg-bg-surface hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col md:grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start">

                <div className="flex md:flex-col gap-3 md:gap-2 items-center md:items-start">
                  <span className="text-neon-cyan text-xs md:text-sm font-semibold tracking-wider">{project.date}</span>
                </div>

                <div className="flex flex-col gap-3 w-full">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-bold text-primary-accent transition-colors duration-300 flex items-center gap-2">
                      {project.title}
                    </h3>

                    <div className="hidden sm:flex flex-wrap gap-2 shrink-0">
                      {project.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded-md border border-secondary-muted bg-bg-main text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-text-muted leading-relaxed text-sm md:text-base">{project.description}</p>

                  <div className="flex sm:hidden flex-wrap gap-2 mt-1">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded-md border border-secondary-muted bg-bg-main text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-neon-cyan transition-colors duration-300"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                    
                    {project.website && (
                      <a 
                        href={project.website}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-text-muted hover:text-neon-cyan transition-colors duration-300"
                      >
                        <Globe size={16} />
                        <span>Live Website</span>
                      </a>
                    )}
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
import { motion } from 'framer-motion'
import {
  HtmlLogo, CssLogo, JsLogo, TailwindLogo, ReactLogo, SqlLogo,
  CppLogo, PythonLogo, DjangoLogo, GitLogo, PhpLogo, JavaLogo, PostgresqlLogo
} from './Icons'

const skills = [
  { name: 'HTML', logo: <HtmlLogo size={28} /> },
  { name: 'CSS', logo: <CssLogo size={28} /> },
  { name: 'JavaScript', logo: <JsLogo size={28} /> },
  { name: 'Tailwind CSS', logo: <TailwindLogo size={28} /> },
  { name: 'React.js', logo: <ReactLogo size={28} /> },
  { name: 'SQL', logo: <SqlLogo size={28} /> },
  { name: 'C++', logo: <CppLogo size={28} /> },
  { name: 'Python', logo: <PythonLogo size={28} /> },
  { name: 'Django', logo: <DjangoLogo size={28} /> },
  { name: 'Git', logo: <GitLogo size={28} /> },
  { name: 'PHP', logo: <PhpLogo size={28} /> },
  { name: 'Java', logo: <JavaLogo size={28} /> },
  { name: 'PostgreSQL', logo: <PostgresqlLogo size={28} /> }
]

const marqueeItems = [...skills, ...skills, ...skills]

function Skill() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 md:py-24 overflow-hidden bg-bg-dark border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight inline-block"
        >
          Skills<span className="text-neon-cyan">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-muted-gray text-sm mt-3"
        >
          Technologies I work with
        </motion.p>
      </div>

      <div className="relative w-full border-t border-b border-white/8 py-5 md:py-7 bg-[#0B0F13] flex overflow-x-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[#0B0F13] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[#0B0F13] to-transparent" />

        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.12, color: '#00F2FE' }}
              className="flex items-center text-sm md:text-base font-bold tracking-widest text-slate-400 mx-5 md:mx-7 select-none cursor-default transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0 transition-transform duration-200">{item.logo}</span>
                <span className="hover:text-white transition-colors duration-200">{item.name}</span>
              </div>
              <span className="text-neon-cyan ml-5 md:ml-7 font-black opacity-40">/</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative w-full py-5 md:py-7 bg-[#0B0F13] flex overflow-x-hidden mt-2">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-[#0B0F13] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-[#0B0F13] to-transparent" />

        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {marqueeItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.12 }}
              className="flex items-center text-sm md:text-base font-bold tracking-widest text-slate-600 mx-5 md:mx-7 select-none cursor-default hover:text-slate-400 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0 opacity-50">{item.logo}</span>
                <span>{item.name}</span>
              </div>
              <span className="text-white/10 ml-5 md:ml-7 font-black">/</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skill
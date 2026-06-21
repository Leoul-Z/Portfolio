import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

function About() {
  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden bg-bg-dark border-t border-white/5">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <motion.span
          className="text-[20rem] md:text-[32rem] font-extrabold text-slate-900/10 select-none font-mono"
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          /
        </motion.span>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-6 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight inline-block">
            About<span className="text-neon-cyan">.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto flex flex-col gap-6 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Software Engineer &amp; Web Developer
          </h3>

          <p className="text-muted-gray leading-relaxed font-normal text-sm md:text-base">
           I am a Software Engineering student dedicated to building clean, high-performance web applications and mastering complex computational challenges. My technical expertise centers on modern full-stack development, with a strong specialization in crafting responsive, user-centric interfaces using React, Tailwind CSS, and Vite. Driven by a deep interest in software efficiency and architectural integrity, I consistently sharpen my data structures and algorithmic problem-solving skills through dedicated LeetCode practice. I approach development with a focus on writing scalable, well-optimized code from the UI layer down to the underlying logic.
           
          </p>

          

          <motion.div
            className="flex flex-wrap justify-center gap-2 mt-2"
            variants={containerVariants}
          >
            {['React', 'Django', 'Python', 'JavaScript', 'Tailwind CSS', 'PostgreSQL'].map((skill, i) => (
              <motion.span
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.08, borderColor: 'rgba(0,242,254,0.5)' }}
                className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About

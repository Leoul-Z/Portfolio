import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TelegramIcon, LeetcodeIcon } from './Icons'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

function Footer() {
  const contactLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/leoul-zerihun-7a4414347',
      icon: <LinkedinIcon size={20} />,
      accent: '#0A66C2',
      description: 'Connect professionally'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Leoul-Z',
      icon: <GithubIcon size={20} />,
      accent: '#ffffff',
      description: 'See my code & projects'
    },
    {
      name: 'Telegram',
      href: 'https://t.me/chris_SMRJN',
      icon: <TelegramIcon size={20} />,
      accent: '#229ED9',
      description: '@chris_SMRJN'
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/u/Nasi4Z',
      icon: <LeetcodeIcon size={20} />,
      accent: '#FFA116',
      description: 'u/Nasi4Z'
    },
    {
      name: 'E-mail',
      href: 'mailto:leoulzerihun06@gmail.com',
      icon: <Mail size={20} />,
      accent: '#00F2FE',
      description: 'leoulzerihun06@gmail.com'
    }
  ]

  return (
    <footer id="contact" className="py-24 md:py-32 relative bg-bg-dark border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-neon-cyan/[0.03] blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 flex flex-col items-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight inline-block mb-3">
            Contact<span className="text-neon-cyan">.</span>
          </h2>
          <p className="text-muted-gray text-sm md:text-base font-normal">
            Let's work together — reach out on any platform
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-24"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              variants={cardVariants}
              whileHover={{
                scale: 1.025,
                boxShadow: `0 0 25px ${link.accent}20`
              }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between p-5 rounded-xl border border-white/8 bg-white/[0.01] hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-white/20"
                  style={{ '--link-accent': link.accent }}
                >
                  <span
                    className="text-slate-400 group-hover:text-[var(--link-accent)] transition-colors duration-300"
                    style={{ '--link-accent': link.accent }}
                  >
                    {link.icon}
                  </span>
                </div>

                <div>
                  <span className="block text-sm font-semibold text-white tracking-wide">
                    {link.name}
                  </span>
                  <span className="block text-[11px] text-slate-500 mt-0.5">
                    {link.description}
                  </span>
                </div>
              </div>

              <motion.div
                whileHover={{ x: 3, y: -3 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <ArrowUpRight
                  size={17}
                  className="text-slate-600 group-hover:text-neon-cyan transition-colors duration-300"
                />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full text-center border-t border-white/5 pt-10"
        >
          <p className="text-xs md:text-sm text-slate-500 font-medium">
            © 2026 Leoul Zerihun — Built with{' '}
            <span className="text-neon-cyan/70">React</span> &{' '}
            <span className="text-neon-cyan/70">Tailwind CSS</span>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
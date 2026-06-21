import { motion } from 'framer-motion'
import Header from './components/Header'
import Body from './components/Body'
import Skill from './components/Skill'
import About from './components/About'
import Project from './components/Project'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-bg-dark text-white min-h-screen selection:bg-neon-cyan/20 selection:text-white relative overflow-hidden">
      
      {/* Glowing Ambient Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 50, 0],
            scale: [1, 1.15, 0.9, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-[10%] w-[300px] h-[300px] rounded-full bg-neon-cyan/5 blur-[120px]"
        />
        <motion.div 
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 80, -60, 0],
            scale: [1, 0.85, 1.2, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[35%] right-[10%] w-[400px] h-[400px] rounded-full bg-neon-teal/5 blur-[150px]"
        />
        <motion.div 
          animate={{
            x: [0, 50, -60, 0],
            y: [0, 100, -80, 0],
            scale: [1, 1.1, 0.85, 1]
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-[20%] w-[350px] h-[350px] rounded-full bg-neon-cyan/5 blur-[130px]"
        />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          {/* Hero Section */}
          <Body />
          
          {/* Skills Section (Ticker marquee banner) */}
          <Skill />
          
          {/* About Section */}
          <About />
          
          {/* Projects Section */}
          <Project />
          
          {/* Certifications Section */}
          <Certifications />
        </main>
        
        {/* Contact Section & Footer Copyright */}
        <Footer />
      </div>
    </div>
  )
}

export default App

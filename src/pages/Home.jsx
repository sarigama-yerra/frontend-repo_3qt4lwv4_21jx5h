import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Cpu, Code2, Brain, Smartphone } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero with 3D name animation */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-300 to-teal-300 drop-shadow-[0_0_25px_rgba(56,189,248,0.45)]"
            style={{ filter: 'url(#water-displace)' }}
          >
            Software Engineer Graduate
          </motion.h1>
          <motion.p initial={{opacity:0, y: 12}} animate={{opacity:1, y:0}} transition={{delay:0.15}} className="mt-5 text-white/80 max-w-2xl">
            Building immersive, performant experiences across web, AI/ML, and mobile — with an eye for motion and craft.
          </motion.p>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className="mt-8 flex flex-wrap gap-3">
            <a href="/projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(20,184,166,0.45)] transition">See Projects</a>
            <a href="/contact" className="px-5 py-3 rounded-xl border border-white/15 bg-white/5 backdrop-blur-xl text-white/90 hover:bg-white/10 transition">Contact</a>
          </motion.div>
        </div>

        {/* Floating tech icons */}
        <div className="pointer-events-none absolute inset-0">
          {[Cpu, Code2, Brain, Smartphone].map((Icon, i) => (
            <motion.div key={i} className="absolute text-cyan-200/80" initial={{opacity:0, y: 20}} animate={{opacity:0.9, y:[0,-10,0]}} transition={{duration:6 + i, repeat:Infinity}} style={{left: `${15 + i*18}%`, top: `${20 + i*12}%`}}>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(56,189,248,0.25)]">
                <Icon className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Intro watery glass card */}
      <section className="relative py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/15 p-8 sm:p-12 overflow-hidden">
            <div className="absolute -inset-8 opacity-30" style={{ filter: 'url(#water-displace)' }}>
              <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(20,184,166,0.18),transparent_45%)]"/>
            </div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Crafting immersive interfaces</h2>
              <p className="mt-4 text-white/80 max-w-3xl">I blend engineering with aesthetics — creating products that feel fluid and alive. I enjoy systems design, real-time graphics, and delightful micro-interactions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

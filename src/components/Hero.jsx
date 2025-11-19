import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-xs text-white/70"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Available for full-time roles & select freelance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white"
          >
            Computer Engineer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400"> & Software Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-5 text-lg text-white/75 max-w-2xl"
          >
            I design and build performant systems, cloud-native applications, and delightful user experiences with a focus on reliability and aesthetics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition">See Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/15 bg-white/5 backdrop-blur-md text-white/90 hover:bg-white/10 transition">Get in touch</a>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative p-1 rounded-2xl bg-gradient-to-tr from-fuchsia-500/30 via-cyan-400/30 to-violet-500/30 backdrop-blur-xl border border-white/10"
          >
            <div className="rounded-2xl bg-black/60 p-6 border border-white/10">
              <div className="grid grid-cols-3 gap-3">
                {['C++','Python','React','Node.js','AWS','Docker','Kubernetes','MongoDB','PostgreSQL'].map((skill) => (
                  <div key={skill} className="text-center text-xs text-white/80 px-2 py-2 rounded-lg bg-white/5 border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.04)]">{skill}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 -bottom-24 h-48 blur-3xl" aria-hidden>
        <div className="h-full w-full bg-gradient-to-r from-fuchsia-600/40 via-cyan-500/40 to-violet-600/40 rounded-full pointer-events-none" />
      </div>
    </section>
  )
}

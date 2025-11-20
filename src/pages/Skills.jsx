import React from 'react'
import { motion } from 'framer-motion'

const spheres = [
  { name: 'React', level: 90, color: 'from-sky-400 to-cyan-300' },
  { name: 'Node.js', level: 82, color: 'from-teal-400 to-emerald-300' },
  { name: 'Python', level: 88, color: 'from-blue-400 to-sky-300' },
  { name: 'ML/AI', level: 75, color: 'from-cyan-400 to-teal-300' },
]

export default function SkillsPage() {
  return (
    <div className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {spheres.map((s, i) => (
            <motion.div key={s.name} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: i*0.05}} className="relative text-center">
              <div className="relative mx-auto h-40 w-40 rounded-full bg-gradient-to-br ${s.color} shadow-[inset_20px_20px_60px_rgba(255,255,255,0.12),_0_0_60px_rgba(56,189,248,0.25)]"
                   style={{ backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05))`, backdropFilter: 'blur(10px)' }}>
                <div className="absolute inset-0 rounded-full" style={{ filter: 'url(#water-displace)' }} />
                <div className="absolute top-3 left-6 h-10 w-10 bg-white/80 rounded-full blur-md" />
              </div>
              <div className="absolute inset-x-0 -bottom-4 h-10 bg-white/10 blur-xl rounded-full" />
              <p className="mt-8 text-white font-semibold">{s.name}</p>
              <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-500 to-teal-400" style={{ width: `${s.level}%` }} />
              </div>
              <p className="mt-1 text-white/70 text-sm">{s.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

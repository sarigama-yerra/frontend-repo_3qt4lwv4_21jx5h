import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const roles = [
  {
    company: 'TechNova Systems',
    title: 'Software Engineer',
    period: '2023 — Present',
    points: [
      'Led migration to microservices with Kubernetes, improving reliability and release cadence.',
      'Built CI/CD pipelines and observability stacks cutting MTTR by 35%.',
      'Collaborated cross-functionally to deliver high-impact product features.'
    ]
  },
  {
    company: 'Quantum Labs',
    title: 'Systems Engineering Intern',
    period: '2022 — 2023',
    points: [
      'Developed C++ modules for high-throughput data acquisition.',
      'Optimized network stack, reducing latency by 20%.',
      'Contributed to internal tooling and documentation.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_70%,rgba(34,211,238,0.12),transparent_50%),radial-gradient(600px_circle_at_90%_30%,rgba(168,85,247,0.15),transparent_50%)]" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-white/10 border border-white/10"><Briefcase className="w-5 h-5 text-white"/></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {roles.map((r) => (
            <motion.div
              key={r.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-xl">{r.title}</h3>
                  <p className="text-white/70">{r.company}</p>
                </div>
                <span className="text-sm text-white/60">{r.period}</span>
              </div>
              <ul className="mt-4 space-y-2 list-disc list-inside text-white/80">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

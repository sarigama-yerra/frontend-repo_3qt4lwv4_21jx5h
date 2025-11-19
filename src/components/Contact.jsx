import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something</h2>
          <p className="mt-3 text-white/70">Open to opportunities and collaborations. Drop a message and I’ll reply soon.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); alert('Thanks! Your message has been noted in this demo.'); }}
          className="mt-10 grid md:grid-cols-2 gap-6 rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl"
        >
          <input required placeholder="Your name" className="px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input required type="email" placeholder="Your email" className="px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <textarea required placeholder="Your message" rows={5} className="md:col-span-2 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-white/60 text-sm">Response within 24-48 hours.</p>
            <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition">Send</button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

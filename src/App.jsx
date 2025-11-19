import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(168,85,247,0.15),transparent),radial-gradient(1200px_600px_at_90%_20%,rgba(34,211,238,0.12),transparent)]"/>

      <Navbar />

      <main className="relative">
        <Hero />
        <Projects />
        <Experience />
        <Contact />

        <footer className="py-10 border-t border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white/60 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Computer Engineer Portfolio</p>
            <p>Built with React, Tailwind, Framer Motion, and Spline</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App

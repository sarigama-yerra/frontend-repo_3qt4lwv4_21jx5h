import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import WaterFX from './components/WaterFX'

function App() {
  return (
    <WaterFX>
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <footer className="py-10 border-t border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Software Engineer Graduate</p>
          <p>Built with React, Tailwind, Framer Motion, and Spline</p>
        </div>
      </footer>
    </WaterFX>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function CompanyCard({ name }: { name: string }) {
  return (
    <div className="card company-card">
      <p>{name}</p>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col items-center p-10 min-h-screen bg-gray-50">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-green-500 tracking-tight">DEBITA</h1>
        <p className="text-xl text-gray-500 mt-2">Gestión de Finanzas Operativas</p>
      </header>

      <section className="flex flex-wrap justify-center gap-6 w-full max-w-4xl">
        {/* Tarjeta de Add Company con Tailwind */}
        <div className="flex flex-col items-center justify-center w-52 h-52 border-2 border-dashed border-gray-400 rounded-2xl cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
          <span className="text-4xl text-gray-600 mb-2">+</span>
          <p className="text-gray-700 font-medium">Add Company</p>
        </div>
      </section>
      
      <footer className="mt-auto pt-10 text-sm text-gray-400">
        Derechos reservados - Debita 2026
      </footer>
    </div>
  )
}

export default App
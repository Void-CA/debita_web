import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function CompanyCard({ name }: { name: string }) {
  return (
    <div className="card company-card">
      <p>{name}</p>
    </div>
  )
}

function App() {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1 className="brand-title">DEBITA</h1>
        <h2 className="subtitle">Gestión de Finanzas Operativas</h2>
      </header>

      <section className="dashboard-grid">
        <CompanyCard name="+ Add Company" />
        <CompanyCard name="CompanyCard" />
        <CompanyCard name="CompanyCard" />
        <CompanyCard name="CompanyCard" />
      </section>
    </div>
  )
}

export default App
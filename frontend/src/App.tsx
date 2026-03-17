
import CompanyCard from "./features/companies/CompanyCard.tsx";
import { useCompanies } from './features/companies/hooks/queries.ts';

function App() {
  const { companies, loading, error, refetch } = useCompanies()
  if (error) return <p>{error}</p>
  
  return (

    <div className="flex flex-col items-center p-0.5 min-h-screen bg-white">

      <header className="text-center w-full h-24 mb-30 border-2 border-black rounded-2xl">
        <h1 className="text-xl font-sketch text-green-500 tracking-tight mt-4 font-semibold">DEBITA</h1>
        <p className="text-xl font-sketch text-green-500 font-semibold">Gestión de Finanzas Operativas</p>
      </header>

      <section className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">

        {/*
            Tarjeta de + Add Company 
        */}
        <div className="flex flex-col items-center justify-center w-60 h-45 bg-white border-3 border-black rounded-2xl cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200">
          <span className="text-2xl text-black mb-2 font-semibold">+</span>
          <p className="text-black font-semibold font-sketch text-xl">Add Company</p>
        </div>

        {/*
            Tarjetas de Empresas 
        */}

        {/* VIVO, aqui se usa la lista de companias*/}
          {companies.map(c => (
            <CompanyCard company_name={c.name} />
          ))}
      </section>
    
      {/* 
            Footer 
      */}
      <footer className="mt-auto pt-10 text-sm text-black font-sketch">
        Derechos reservados @ Debita 2026
      </footer>

    </div>
  )
}
export default App
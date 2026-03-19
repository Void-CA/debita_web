import CompanyCard from "./features/companies/CompanyCard.tsx";
import { useCompanies } from './features/companies/hooks/queries.ts';
import Background from './assets/background.jpg';

function App() {
  const { companies, loading, error, refetch } = useCompanies()
  
  if (error) return <p>{error}</p>
  
  return (
    <div 
      className="flex h-screen font-sketch bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Background})` }}
    >

      {/* Sidebar */}
      <aside className="w-64 border-r-2 border-black flex flex-col p-4 bg-white/10">

        {/* Título del Sidebar */}
        <div className="mb-10 mt-4 px-10">
          <h1 className="text-5xl text-white font-semibold tracking-tight">Debita</h1>
        </div>

        {/* Items de Navegación */}
        <nav className="flex flex-col gap-4">

          <button className="px-15 flex items-center gap-2 p-2 rounded-lg hover:shadow-black  hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer text-center bg-rgba(255, 255, 255, 0.9)">
            📊 Dashboard
          </button>

          <button className="px-15 flex items-center gap-2 p-2 rounded-lg hover:shadow-black hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer text-center bg-rgba(255, 255, 255, 0.9)">
            📝 Formulario
          </button>

          <button className="px-15 flex items-center gap-2 p-2 rounded-lg hover:shadow-black hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer text-center bg-rgba(255, 255, 255, 0.9)">
            📝 Solicitudes
          </button>

        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col p-8 overflow-y-auto bg-white/50">
        
        <header className="flex justify-between items-center mb-10 w-full">
          <h2 className="text-3xl font-semibold">Gestión de Finanzas Operativa</h2>
          
          {/* Botón de crear*/}
          <button className="px-4 py-2  rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white hover:-translate-y-1 hover:shadow-md hover:shadow-black transition-all duration-200 cursor-pointer">
            + Agregar Cliente
          </button>
        </header>

        {/*Tarjeta de Dashboard*/}
        <div className="flex flex-col items-center justify-center w-60 h-45 bg-white box-shadow rounded-2xl cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200">
          <p className="text-black font-semibold font-sketch text-xl">Dashboard</p>
        </div>

        {/* Sección de Tarjetas */}
        <section className="flex flex-wrap gap-6 w-full mt-8">
          {loading && <p>Cargando clientes...</p>}

          {companies?.map(c => (
            <CompanyCard key={c.name} company_name={c.name} />
          ))}
        </section>

      </main>

    </div>
  )
}

export default App
import CompanyCard from "./features/companies/CompanyCard.tsx";
import { useCompanies } from './features/companies/hooks/queries.ts';
import Background from './assets/Background.svg';
import React from "react";

function App() {
  const { companies, loading, error, refetch } = useCompanies()
  
  if (error) return <p>{error}</p>
  
  return (
    <div 
      className="flex h-screen font-poppins bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Background})` }}
    >

      {/* Sidebar */}
      <aside className="w-64 border-r-2 border-black flex flex-col p-4 bg-white/50">

        {/* Título del Sidebar */}
        <div className="mb-10 mt-4 px-8">
          <h1 className="text-5xl text-white font-semibold tracking-tight">Debita</h1>
        </div>

        {/* Items de Navegación */}
        <nav className="flex flex-col gap-4">

          <button className="flex flex-col items-center box-shadow px-15 mb-10  gap-2 p-2 rounded-lg hover:shadow-black  hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer text-center bg-rgba(255, 255, 255, 0.9)">
            Dashboard
          </button>

          <button className="flex flex-col items-center box-shadow px-15 mb-10  gap-2 p-2 rounded-lg hover:shadow-black hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer text-center bg-rgba(255, 255, 255, 0.9)">
            Clientes
          </button>

          <button className="flex flex-col items-center box-shadow px-15 mb-10  gap-2 p-2 rounded-lg hover:shadow-black hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer text-center bg-rgba(255, 255, 255, 0.9)">
            Facturas
          </button>

          <button className="flex flex-col items-center box-shadow px-15 mb-10 gap-2 p-2 rounded-lg hover:shadow-black hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer text-center bg-rgba(255, 255, 255, 0.9)">
            Pagos
          </button>

          <button className="flex flex-col items-center box-shadow ap-2 p-2 px-27 mt-40 rounded-lg hover:shadow-black hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer text-center bg-rgba(255, 255, 255, 0.9)">
            Perfil
          </button>

        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col p-8 overflow-y-auto bg-teal-100/80">
        
        <header className="flex justify-between items-center mb-10 w-300 px-10">

          <h2 className="flex flex-row text-4xl font-poppins font-semibold text-white">Gestión de Finanzas Operativa
          </h2>
           
          {/* Botón de crear*/}
          <button className="flex flex-row items-center px-4 py-2 rounded-lg font-poppins font-semibold bg-blue-500 hover:bg-blue-600 text-white hover:-translate-y-1 hover:shadow-md hover:shadow-black transition-all duration-200 cursor-pointer">
            + Agregar Cliente
          </button>

        </header>

        {/* Contenedor padre para separar las tarjetas */}
        <div className="flex flex-row gap-10 ml-10">

          {/*Tarjeta de Cliente eje*/}
          <div className="flex flex-col items-center justify-center w-70 h-50 bg-[#32b569] shadow-md rounded-3xl cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200">
            <p className="text-black font-semibold font-poppins text-xl">Empresa 1</p>
        
          </div>
          {/* Sección de Tarjetas */}
          <section className="flex flex-wrap gap-6 w-full mt-12 ml-10">
           {loading && <p>Cargando clientes...</p>}

            {companies?.map(c => (
             <CompanyCard key={c.name} company_name={c.name} />
           ))}
          </section>
        </div>
      </main>
      
    </div>
  )
}
export default App
import { useCompanies } from './features/companies/hooks/queries.ts';
import Background from './assets/Background.svg';
import React from "react";
import { useState } from 'react';
import CompanyCard from "./features/companies/CompanyCard.tsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Clientes from './features/pages/clients.tsx';
import Facturas from './features/pages/bills.tsx';
import Pagos from './features/pages/payments.tsx';

function App() {
  const { companies, loading, error, refetch } = useCompanies()
  const [mostrarModal, setMostrarModal] = useState(false);
  
  if (error) return <p>{error}</p>
  
  return (
    <BrowserRouter>
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

          <Link to="/" className="flex flex-col items-center box-shadow px-15 mb-10  gap-2 p-2 rounded-lg hover:shadow-black  hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer text-center bg-rgba(255, 255, 255, 0.9)">
            Dashboard
          </Link>

          <Link to="/clientes" className="flex flex-col items-center box-shadow px-15 mb-10  gap-2 p-2 rounded-lg hover:shadow-black hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer text-center bg-rgba(255, 255, 255, 0.9)">
            Clientes
          </Link>

          <Link to="/facturas" className="flex flex-col items-center box-shadow px-15 mb-10  gap-2 p-2 rounded-lg hover:shadow-black hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer text-center bg-rgba(255, 255, 255, 0.9)">
            Facturas
          </Link>

          <Link to="/pagos" className="flex flex-col items-center box-shadow px-15 mb-10 gap-2 p-2 rounded-lg hover:shadow-black hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer text-center bg-rgba(255, 255, 255, 0.9)">
            Pagos
          </Link>

          <Link to="/perfil" className="flex flex-col items-center box-shadow ap-2 p-2 px-27 mt-40 rounded-lg hover:shadow-black hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer text-center bg-rgba(255, 255, 255, 0.9)">
            Perfil
          </Link>

        </nav>

      </aside>

      {/* MAIN */}
      <main className="flex-1 flex flex-col p-8 overflow-y-auto bg-teal-100/80">
        
        <Routes>
          {/* RUTA DEL DASHBOARD*/}
          <Route path="/" element={
            <>
              <header className="flex justify-between items-center mb-10 w-300 px-10">
                <h2 className="flex flex-row text-4xl font-poppins font-semibold text-white">Gestión de Finanzas Operativa
                </h2>
                 
                {/* Botón de crear*/}
                <button 
                  onClick={() => setMostrarModal(true)}
                  className="flex flex-row items-center px-4 py-2 rounded-lg font-poppins font-semibold bg-blue-500 hover:bg-blue-600 text-white hover:-translate-y-1 hover:shadow-md hover:shadow-black transition-all duration-200 cursor-pointer"
                >
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
              
              {/* Modal */}
              {mostrarModal && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm">
                  <div className="bg-white p-8 rounded-2xl shadow-2xl w-500 flex flex-col gap-6 transform transition-all">
                    
                    <h3 className="text-3xl font-bold font-poppins text-gray-800 border-b-2 border-gray-100 pb-2">
                      Nuevo Cliente
                    </h3>
                    
                    <p className="text-gray-500 font-poppins">
                      Aquí pondremos los inputs (Nombre, Correo, Empresa, etc...)
                    </p>

                    <div className="flex justify-end gap-4 mt-4">

                      {/* Este botón apaga el interruptor */}
                      <button 
                        onClick={() => setMostrarModal(false)}
                        className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-poppins font-semibold transition-all cursor-pointer"
                      >
                        Cancelar
                      </button>
                      
                      <button className="px-6 py-2 bg-[#32b569] text-white rounded-lg hover:bg-green-600 font-poppins font-semibold hover:shadow-md transition-all cursor-pointer">
                        Guardar Cliente
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </>
          } />

          {/* RUTAS */}
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/facturas" element={<Facturas />} />
          <Route path="/pagos" element={<Pagos />} />
          {/* <Route path="/perfil" element={<Perfil />} /> Puedes crear esta página después */}

        </Routes>

      </main>
      
    </div>
    </BrowserRouter>
  )
}
export default App
// src/features/companies/SeleccionEmpresa.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Simulación de datos (esto vendrá luego de tu API)
const empresasRegistradas = [
  { id: 1, name: 'Empresa Eje', initials: 'EE' },
  { id: 2, name: 'Servicios Integrales S.A.', initials: 'SI' },
];

export default function SeleccionEmpresa() {
  const navigate = useNavigate();

  const handleSelectCompany = (companyId: number, companyName: string) => {
    console.log(`Seleccionada: ${companyName}`);
    
    localStorage.setItem('selectedCompanyName', companyName);
    navigate('/dashboard'); 
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-white font-poppins text-[#1f4e3d]">
      
      {/* Contenido Central */}
      <div className="flex-1 flex flex-col items-center justify-center p-10">
        
        {/* Logo y Título */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold tracking-tight">DEBITA</h1>
          <p className="text-lg text-gray-500 mt-2">Gestión de finanzas operativas empresariales</p>
        </div>

        {/* Cuadrícula de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {/* Botón de nueva empresa */}
          <button className="w-72 h-44 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-gray-400 hover:border-[#32b569] hover:text-[#32b569] hover:bg-green-50 transition-all cursor-pointer group">
            <span className="text-5xl mb-2 group-hover:scale-110 transition-transform">+</span>
            <span className="font-semibold text-sm">Registrar nueva empresa</span>
          </button>

          {/* Mapeo de empresas */}
          {empresasRegistradas.map(empresa => (
             <div 
               key={empresa.id} 
               onClick={() => handleSelectCompany(empresa.id, empresa.name)}
               className="w-72 h-44 border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:border-[#32b569] hover:-translate-y-1 transition-all bg-white"
             >
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-xl text-gray-800 leading-tight w-2/3">
                        {empresa.name}
                    </h3>
                    {/* Un avatar simple con iniciales */}
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500 text-lg">
                        {empresa.initials}
                    </div>
                </div>
                
                <p className="text-xs text-gray-400 font-medium">Último acceso: </p>
             </div>
          ))}
        </div>
      </div>

      {/* Footer Oscuro */}
      <footer className="bg-[#1f4e3d] text-white/70 text-center py-5 text-sm font-light">
        © 2026 DEBITA. Todos los derechos reservados.
      </footer>
    </div>
  );
}
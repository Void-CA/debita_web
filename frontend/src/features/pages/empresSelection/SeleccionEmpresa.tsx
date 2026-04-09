// src/features/companies/SeleccionEmpresa.tsx
import { useNavigate } from 'react-router-dom';

const empresasRegistradas = [
  { id: 1, name: 'Empresa Eje', initials: 'EE' },
  { id: 2, name: 'Servicios Integrales S.A.', initials: 'SI' },
];

export default function SeleccionEmpresa() {
  const navigate = useNavigate();

  const handleSelectCompany = (companyName: string) => {
    console.log(`Seleccionada: ${companyName}`);
    localStorage.setItem('selectedCompanyName', companyName);
    navigate('/dashboard'); 
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-white font-poppins text-[#1f4e3d] relative">
      
      <div className="absolute top-6 left-8">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors font-medium text-sm group cursor-pointer"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Cerrar sesión
        </button>
      </div>

      {/* Contenido Central */}
      <div className="flex-1 flex flex-col items-center justify-center p-10">
        
        {/* Logo y Título */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold tracking-tight">DEBITA</h1>
          <p className="text-lg text-gray-500 mt-2">Gestión de finanzas operativas empresariales</p>
        </div>

        {/* Cuadrícula de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          <button className="w-72 h-44 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-gray-400 hover:border-[#32b569] hover:text-[#32b569] hover:shadow-md hover:bg-green-50 hover:-translate-y-1 transition-all cursor-pointer group">
            <span className="text-5xl mb-2 group-hover:scale-110 transition-transform">+</span>
            <span className="font-semibold text-sm">Registrar nueva empresa</span>
          </button>

          {empresasRegistradas.map(empresa => (
             <div 
               key={empresa.id} 
               onClick={() => handleSelectCompany(empresa.name)}
               className="w-72 h-44 border border-gray-100 rounded-2xl shadow-sm p-6 flex flex-col justify-between cursor-pointer hover:shadow-md hover:border-[#32b569] hover:-translate-y-1 transition-all bg-white"
             >
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-xl text-gray-800 leading-tight w-2/3">
                        {empresa.name}
                    </h3>
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500 text-lg">
                        {empresa.initials}
                    </div>
                </div>
                
                <p className="text-xs text-gray-400 font-medium">Último acceso: Hoy</p>
             </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1f4e3d] text-white/70 text-center py-5 text-sm font-light">
        © 2026 DEBITA. Todos los derechos reservados.
      </footer>
    </div>
  );
}
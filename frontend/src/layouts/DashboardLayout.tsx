import { Link, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen font-poppins bg-[#f8f9fa]">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#212b27] flex flex-col justify-between shadow-xl z-10">
        <div>

          {/* Título */}
          <div className="flex flex-col p-6 mt-4 items-center justify-center">
            <h1 className="text-3xl text-white font-bold tracking-tight">
              DEBITA<span className="text-[#32b569]">.</span>
            </h1>
            <p className="text-[10px] text-gray-400 mt-1 tracking-widest font-semibold">FINANZAS OPERATIVAS</p>
          </div>

          {/* Navegación */}
          <nav className="flex flex-col gap-2 px-4 mt-6">
            
            <Link to="/dashboard" className="justify-center text-gray-300 hover:bg-[#2d3a34] hover:text-white px-4 py-3 rounded-lg transition-all flex items-center gap-3">
              Dashboard
            </Link>
            
            <Link to="/dashboard/clientes" className="justify-center text-gray-300 hover:bg-[#2d3a34] hover:text-white px-4 py-3 rounded-lg transition-all flex items-center gap-3">
              Clientes
            </Link>
            
            <Link to="/dashboard/facturas" className="justify-center text-gray-300 hover:bg-[#2d3a34] hover:text-white px-4 py-3 rounded-lg transition-all flex items-center gap-3">
              Facturas
            </Link>
            
            <Link to="/dashboard/pagos" className="justify-center text-gray-300 hover:bg-[#2d3a34] hover:text-white px-4 py-3 rounded-lg transition-all flex items-center gap-3">
              Pagos
            </Link>
          </nav>
        </div>

        <div className="p-6 mb-4 flex flex-col gap-4">
          
          {/* Botón Cambiar de empresa */}
          <Link 
            to="/seleccion-empresa" 
            className="flex items-center justify-center text-gray-300 bg-[#2d3a34] hover:bg-[#32b569] hover:text-white px-4 py-2.5 rounded-lg transition-all text-sm font-semibold border border-[#3b4c44] hover:border-[#32b569]"
          >
            ← Cambiar empresa
          </Link>

          {/* Botón Cerrar Sesión */}
          <Link 
            to="/login" 
            className="flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-400/10 px-4 py-2 rounded-lg transition-all text-sm font-semibold mt-2"
          >
             Cerrar sesión
          </Link>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        <Outlet /> 
      </main>

    </div>
  );
}
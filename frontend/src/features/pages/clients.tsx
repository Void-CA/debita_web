import { useState } from "react";
import CompanyCard from '../companies/CompanyCard';
import { useCompanies } from '../companies/hooks/queries';
export default function Clientes() {
    const { companies, loading, error } = useCompanies();
    const [mostrarModal, setMostrarModal] = useState(false);

  if (error) return <p>{error}</p>;

  return (
    <div className="p-8 w-full">
      <header className="flex justify-between items-center mb-10 w-full px-10">
        <h1 className="text-4xl font-poppins font-semibold text-gray-800">
          Gestión de Clientes
        </h1>
         
        {/* Botón de crear */}
        <button 
          onClick={() => setMostrarModal(true)}
          className="flex flex-row items-center px-4 py-2 rounded-lg font-poppins font-semibold bg-blue-500 hover:bg-blue-600 text-white hover:-translate-y-1 hover:shadow-md hover:shadow-black transition-all duration-200 cursor-pointer"
        >
          + Agregar Cliente
        </button>
      </header>


      {mostrarModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-100 flex flex-col gap-6 transform transition-all">
            <h3 className="text-3xl font-bold font-poppins text-gray-800 border-b-2 border-gray-100 pb-2">
              Agregar Cliente
            </h3>
            <p className="text-gray-500 font-poppins">
              Aquí pondremos los inputs (Nombre, Correo, Empresa, etc...)
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <button 
                onClick={() => setMostrarModal(false)}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-poppins font-semibold transition-all cursor-pointer"
              >
                Cancelar
              </button>
              <button className="px-6 py-2 bg-[#32b569] text-white rounded-lg hover:bg-green-600 font-poppins font-semibold hover:shadow-md transition-all cursor-pointer">
                + Añadir Cliente
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contenedor padre para separar las tarjetas */}
      <div className="flex flex-row gap-10 ml-10">
        
        {/* Tarjeta de Empresa Eje */}
        <div className="flex flex-col items-center justify-center w-70 h-50 bg-[#32b569] shadow-md rounded-3xl cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200">
          <p className="text-black font-semibold font-poppins text-xl">Empresa 1</p>
        </div>

        {/* Sección de Tarjetas Mapeadas */}
        <section className="flex flex-wrap gap-6 mt-12">
         {loading && <p>Cargando empresas...</p>}
          {companies?.map(c => (
           <CompanyCard key={c.name} company_name={c.name} />
         ))}
        </section>
      </div>
    </div>
  );
}
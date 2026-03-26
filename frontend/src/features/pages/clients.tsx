import React, { useState } from "react";
import ClientCard from '../companies/ClientCard';

const clientesDePrueba = [
  { id: "001", nombre: "Edgardo Windler", ruc: "J344986279", contacto: "228-017-4622 x6683" },
  { id: "002", nombre: "Nicolas Heathcote", ruc: "J020551111", contacto: "(391) 536-7165" },
  { id: "003", nombre: "Ulises Graham", ruc: "J420533711", contacto: "166-686-2974 x995" },
  { id: "004", nombre: "Vergie Rempel", ruc: "J916738654", contacto: "(338) 272-4993 x33237" },
];

export default function Clientes() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className="p-8 w-full font-poppins">
      
      {/* Header*/}
      <header className="flex justify-between items-center mb-8 pb-4 border-b-2 border-[#1f4e3d]">
        <h1 className="text-3xl font-bold text-gray-800">
          Clientes
        </h1>
         
        {/* Botón de crear */}
        <button 
          onClick={() => setMostrarModal(true)}
          className="flex items-center gap-2 px-5 py-2 rounded-lg font-semibold bg-[#1f4e3d] hover:bg-[#15362a] text-white transition-all duration-200 cursor-pointer text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          Nuevo Cliente
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {clientesDePrueba.map(cliente => (
           <ClientCard 
             key={cliente.id} 
             nombre={cliente.nombre} 
             ruc={cliente.ruc} 
             contacto={cliente.contacto}
             id={cliente.id}
           />
        ))}
      </div>

      {/* Modal */}
      {mostrarModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-125 flex flex-col gap-6 transform transition-all">
            <h3 className="text-3xl font-bold font-poppins text-gray-800 border-b-2 border-gray-100 pb-2">
              Agregar Cliente
            </h3>
            <p className="text-gray-500 font-poppins">
              Aquí pondremos los inputs (Nombre, Correo, Empresa, etc...)
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <button 
                onClick={() => setMostrarModal(false)}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-semibold transition-all cursor-pointer"
              >
                Cancelar
              </button>
              <button className="px-6 py-2 bg-[#1f4e3d] text-white rounded-lg hover:bg-[#15362a] font-semibold transition-all cursor-pointer">
                Guardar Cliente
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
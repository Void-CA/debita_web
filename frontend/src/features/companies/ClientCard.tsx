// src/features/clients/ClientCard.tsx (o donde prefieras guardarlo)
import React from 'react';

// Definimos los datos exactos que necesita la tarjeta
interface ClientCardProps {
  nombre: string;
  ruc: string;
  contacto: string;
  id: string;
}

export default function ClientCard({ nombre, ruc, contacto, id }: ClientCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-xl hover:border-[#32b569] hover:-translate-y-1 transition-all duration-300 cursor-pointer font-poppins">
      
      {/* 1. Header*/}
      <div className="flex justify-between items-start mb-5">
        <div className="w-12 h-12 bg-[#e6f5ef] rounded-xl flex items-center justify-center text-[#32b569]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <span className="border border-gray-100 text-gray-400 text-[9px] font-bold px-3 py-1 rounded-md tracking-wider">
          CLIENTE
        </span>
      </div>

      {/* Nombre */}
      <h3 className="text-gray-800 font-bold text-lg mb-5 truncate">{nombre}</h3>

      {/* Detalles */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="text-[#32b569] mt-0.5 opacity-70">
            <span className="font-bold text-sm">#</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-semibold tracking-wider">RUC</span>
            <span className="text-sm text-gray-600 font-medium">{ruc}</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="text-[#32b569] mt-0.5 opacity-70">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-semibold tracking-wider">CONTACTO</span>
            <span className="text-sm text-gray-600 font-medium truncate">{contacto}</span>
          </div>
        </div>
      </div>

      {/* Footer*/}
      <div className="flex justify-between items-center mt-auto pt-2 border-t border-transparent">
        <span className="text-gray-300 text-[10px] font-bold tracking-widest">#{id}</span>
        <svg className="w-4 h-4 text-[#32b569]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>

    </div>
  )
}
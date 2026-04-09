import { useState } from 'react';

const facturasMock = [
  { id: 'FAC-01059', cliente: 'EDGARDO WINDLER', clienteId: '2354186278', monto: 'C$1,944.20', emision: '27 FEB. 2026', vencimiento: '29 MAR. 2026', estado: 'UNPAID' },
  { id: 'FAC-03470', cliente: 'NICOLAS HEATHCOTE', clienteId: '3020527111', monto: 'C$1,704.22', emision: '18 FEB. 2026', vencimiento: '20 MAR. 2026', estado: 'UNPAID' },
  { id: 'FAC-05805', cliente: 'JAYDA BRUEN', clienteId: '252275727', monto: 'C$1,919.19', emision: '17 FEB. 2026', vencimiento: '19 MAR. 2026', estado: 'PARTIAL' },
  { id: 'FAC-04307', cliente: 'NICOLAS HEATHCOTE', clienteId: '3020527111', monto: 'C$2,445.03', emision: '13 FEB. 2026', vencimiento: '15 MAR. 2026', estado: 'PARTIAL' },
  { id: 'FAC-07686', cliente: 'EDGARDO WINDLER', clienteId: '2354186278', monto: 'C$1,733.04', emision: '12 FEB. 2026', vencimiento: '14 MAR. 2026', estado: 'OVERDUE' },
  { id: 'FAC-03498', cliente: 'MILAN GRIMES', clienteId: '2092605043', monto: 'C$834.23', emision: '11 FEB. 2026', vencimiento: '13 MAR. 2026', estado: 'OVERDUE' },
  { id: 'FAC-05059', cliente: 'JAYDA BRUEN', clienteId: '252275727', monto: 'C$2,412.00', emision: '10 FEB. 2026', vencimiento: '12 MAR. 2026', estado: 'OVERDUE' },
  { id: 'FAC-07991', cliente: 'ADRIAN JONES', clienteId: '2560302212', monto: 'C$1,557.72', emision: '09 FEB. 2026', vencimiento: '11 MAR. 2026', estado: 'PARTIAL' },
];

// Helper para los colores de los "badges" de estado
const getStatusColor = (status: string) => {
  switch (status) {
    case 'UNPAID': return 'bg-red-50 text-red-600 font-medium';
    case 'PARTIAL': return 'bg-amber-50 text-amber-600 font-medium';
    case 'OVERDUE': return 'bg-gray-100 text-gray-600 font-medium';
    default: return 'bg-gray-100 text-gray-600';
  }
};

export default function Facturas() {
  const [activeTab, setActiveTab] = useState('TODAS');

  return (
    <div className="p-8 w-full bg-white min-h-screen">
      {/* 1. Header y Botón Principal */}
      <header className="flex justify-between items-center mb-4 w-full">
        <h1 className="text-3xl font-poppins font-bold text-gray-800">
          Facturas
        </h1>
        <button className="bg-[#194034] hover:bg-[#112d24] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
          Nueva Factura
        </button>
      </header>

      {/* Línea divisoria verde */}
      <div className="w-full h-0.5 bg-[#194034] mb-6"></div>

      {/* 2. Barra de Controles (Pestañas, Buscador, Exportar) */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-4">
        
        {/* Pestañas (Tabs) */}
        <div className="flex bg-gray-50 border border-gray-200 rounded-md p-1">
          {['TODAS', 'PAGADAS', 'PENDIENTES'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-sm transition-all ${
                activeTab === tab 
                  ? 'bg-white shadow-sm text-[#194034]' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Buscador y Acciones */}
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <div className="relative w-full lg:w-64">
            <svg className="absolute left-3 top-2.5 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input 
              type="text" 
              placeholder="BUSCAR..." 
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm outline-none focus:border-[#194034] text-gray-600 placeholder-gray-400 uppercase"
            />
          </div>
          
          <button className="p-2 border border-gray-200 rounded-md text-gray-500 hover:bg-gray-50">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
          </button>

          <button className="bg-[#194034] hover:bg-[#112d24] text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            EXPORTAR
          </button>
        </div>
      </div>

      {/* 3. Tabla de Datos */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
            <tr>
              <th className="px-6 py-4"># FACTURA</th>
              <th className="px-6 py-4">CLIENTE</th>
              <th className="px-6 py-4">MONTO</th>
              <th className="px-6 py-4">EMISIÓN</th>
              <th className="px-6 py-4">VENCIMIENTO</th>
              <th className="px-6 py-4">ESTADO</th>
              <th className="px-6 py-4 text-right">ACCIONES</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {facturasMock.map((factura, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-800">{factura.id}</td>
                <td className="px-6 py-4">
                  <div className="font-bold text-xs text-gray-900">{factura.cliente}</div>
                  <div className="text-[10px] text-teal-600 font-semibold">{factura.clienteId}</div>
                </td>
                <td className="px-6 py-4 font-bold text-gray-900">{factura.monto}</td>
                <td className="px-6 py-4 text-gray-500 text-xs font-medium flex items-center gap-1.5 mt-2.5">
                  <svg className="text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {factura.emision}
                </td>
                <td className="px-6 py-4 text-gray-500 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <svg className="text-gray-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    {factura.vencimiento}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 text-[10px] tracking-wider rounded uppercase ${getStatusColor(factura.estado)}`}>
                    {factura.estado}
                  </span>
                </td>
                <td className="px-6 py-4 text-right text-xs font-bold">
                  <button className="text-[#194034] hover:text-[#112d24] mr-3 uppercase">VER</button>
                  <button className="text-gray-400 hover:text-gray-600 uppercase">EDITAR</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4. Paginación */}
      <div className="flex justify-between items-center mt-6 text-xs text-gray-400 font-semibold uppercase tracking-wider">
        <span>PÁGINA 1 / 4</span>
        <div className="flex gap-2">
          <button className="p-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="p-1 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>

    </div>
  );
}
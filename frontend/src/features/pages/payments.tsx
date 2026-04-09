import { useState } from 'react';

const pagosMock = [
  { id: 'PAG-0012', cliente: 'EDGARDO WINDLER', fecha: '01 MAR. 2026', metodo: 'Transferencia', referencia: 'TRX-99281', monto: 'C$ 1,944.20', estado: 'APLICADO' },
  { id: 'PAG-0011', cliente: 'NICOLAS HEATHCOTE', fecha: '28 FEB. 2026', metodo: 'Cheque', referencia: 'CH-0045', monto: 'C$ 1,000.00', estado: 'PARCIAL' },
  { id: 'PAG-0010', cliente: 'JAYDA BRUEN', fecha: '25 FEB. 2026', metodo: 'Efectivo', referencia: '-', monto: 'C$ 500.00', estado: 'APLICADO' },
];

export default function Pagos() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 w-full bg-slate-50 min-h-screen relative">
      {/* 1. Header Principal */}
      <header className="flex justify-between items-center mb-6 w-full">
        <div>
          <h1 className="text-3xl font-poppins font-bold text-gray-800">Pagos</h1>
          <p className="text-sm text-gray-500 mt-1">Historial de abonos y liquidaciones de facturas</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#194034] hover:bg-[#112d24] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          Registrar Pago
        </button>
      </header>

      {/* 2. Tabla Principal de Pagos (Fondo) */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
          <div className="relative w-72">
            <svg className="absolute left-3 top-2.5 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Buscar por cliente o referencia..." className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm outline-none focus:border-[#194034]" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white text-gray-500 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
              <tr>
                <th className="px-6 py-4"># PAGO</th>
                <th className="px-6 py-4">FECHA</th>
                <th className="px-6 py-4">CLIENTE</th>
                <th className="px-6 py-4">MÉTODO</th>
                <th className="px-6 py-4">REFERENCIA</th>
                <th className="px-6 py-4">MONTO</th>
                <th className="px-6 py-4">ESTADO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pagosMock.map((pago) => (
                <tr key={pago.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800">{pago.id}</td>
                  <td className="px-6 py-4 text-gray-500">{pago.fecha}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{pago.cliente}</td>
                  <td className="px-6 py-4 text-gray-600">{pago.metodo}</td>
                  <td className="px-6 py-4 text-gray-500 font-mono text-xs">{pago.referencia}</td>
                  <td className="px-6 py-4 font-bold text-[#194034]">{pago.monto}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-[10px] tracking-wider rounded uppercase font-medium ${
                      pago.estado === 'APLICADO' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {pago.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ========================================= */}
      {/* 3. MODAL: "Registrar Pago" (Según tu imagen) */}
      {/* ========================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-1">
                Registrar Pago<span className="text-teal-500">.</span>
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto">
              
              {/* Top Row: Cliente & Documentos */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">RECEPTOR / CLIENTE</label>
                  <div className="flex gap-2">
                    <select className="flex-1 border border-gray-200 rounded text-sm p-2.5 text-gray-600 outline-none focus:border-[#194034]">
                      <option>SELECCIONAR CLIENTE...</option>
                      <option>EDGARDO WINDLER</option>
                    </select>
                    <button className="border border-gray-200 rounded px-3 text-gray-500 hover:bg-gray-50 font-bold">+</button>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">VINCULAR DOCUMENTOS</label>
                  <input type="text" placeholder="⊕ ESPERANDO CLIENTE..." disabled className="w-full border border-gray-100 bg-gray-50 rounded text-sm p-2.5 text-gray-400 outline-none cursor-not-allowed" />
                </div>
              </div>

              {/* Middle: Desglose Table */}
              <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">DESGLOSE DE APLICACIÓN</span>
                </div>
                <table className="w-full text-left text-xs">
                  <thead className="text-gray-400 border-b border-gray-100">
                    <tr>
                      <th className="px-4 py-2 font-medium">FACTURA</th>
                      <th className="px-4 py-2 font-medium">TOTAL</th>
                      <th className="px-4 py-2 font-medium">PENDIENTE</th>
                      <th className="px-4 py-2 font-medium text-right">MONTO A APLICAR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={4} className="px-4 py-8 text-center text-gray-400 italic text-xs bg-gray-50/30">
                        NO HAY DOCUMENTOS VINCULADOS...
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bottom Row: Método, Ref, Notas */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">MÉTODO DE PAGO</label>
                  <select className="w-full border border-gray-200 rounded text-sm p-2.5 text-gray-600 outline-none focus:border-[#194034]">
                    <option></option>
                    <option>Transferencia Bancaria</option>
                    <option>Efectivo</option>
                    <option>Cheque</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">REFERENCIA / NRO. OPERACIÓN</label>
                  <input type="text" placeholder="NRO. COMPROBANTE" className="w-full border border-gray-200 rounded text-sm p-2.5 text-gray-600 outline-none focus:border-[#194034]" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">NOTAS ADICIONALES</label>
                <textarea rows={3} placeholder="OBSERVACIONES DEL PAGO..." className="w-full border border-gray-200 rounded text-sm p-3 text-gray-600 outline-none focus:border-[#194034] resize-none"></textarea>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 text-xs font-bold text-gray-500 hover:text-gray-800 transition-colors"
              >
                CANCELAR
              </button>
              <button className="bg-[#194034] hover:bg-[#112d24] text-white text-xs font-bold px-6 py-2.5 rounded shadow-sm transition-colors uppercase tracking-wider">
                REGISTRAR INGRESO
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
export function CashFlowChart() {
  return (
    <div className="flex flex-col xl:flex-row gap-6 mb-8 px-2">
      <div className="flex-1 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Resumen de Flujo de Caja</h3>
        <div className="w-full h-64 bg-slate-50 border border-dashed border-gray-300 rounded flex items-center justify-center">
          <p className="text-gray-400 text-sm">[ Gráfico Recharts aquí ]</p>
        </div>
      </div>

      <div className="w-full xl:w-72 flex flex-col gap-4">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">Selector de Fecha</label>
          <select className="w-full border border-gray-300 rounded-lg p-2.5 text-sm outline-none">
            <option>Últimos 30 días</option>
            <option>Este mes</option>
          </select>
        </div>
        <button className="w-full bg-[#1A2521] hover:bg-[#2A3F38] text-white font-medium py-3 rounded-xl transition-colors shadow-sm">
          + Nueva Factura
        </button>
      </div>
    </div>
  );
}
export default function Facturas() {
  return (
    <>
      <header className="flex justify-between items-center mb-10 w-300 px-10">
        <h1 className="flex flex-row text-4xl font-poppins font-semibold text-white">Página de Facturas
        </h1>
      </header>
      <main>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-white">Facturas</h2>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
              Agregar Factura
            </button>
          </div>
        </div>
      </main>
    </>
    
  );
}
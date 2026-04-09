import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './features/pages/login/login';
import SeleccionEmpresa from './features/pages/empresSelection/SeleccionEmpresa'; 
import Dashboard from './features/pages/dashboardpage/dashboard';
import Clientes from './features/pages/clientspage/clients';
import Facturas from './features/pages/billspage/bills';
import Pagos from './features/pages/paymentpage/payments';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/seleccion-empresa" element={<SeleccionEmpresa />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} /> 
          <Route path="clientes" element={<Clientes />} />
          <Route path="facturas" element={<Facturas />} />
          <Route path="pagos" element={<Pagos />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
// src/pages/dashboard/Dashboard.tsx
import { useCompanies } from '../../companies/hooks/queries';
import { SummaryCards } from './components/SummaryCards';
import { CashFlowChart } from './components/CashFlowChart';
import { UpcomingInvoices } from './components/UpcomingInvoices';
import { TopClients } from './components/TopClients';

export default function Dashboard() {
  const { error } = useCompanies();

  if (error) return <p className="text-red-500 p-8">{error}</p>;

  return (
    <div className="p-8 w-full bg-slate-50 min-h-screen">
      <header className="flex justify-between items-center mb-8 w-full px-2">
        <h1 className="text-3xl font-poppins font-semibold text-gray-800">
          Dashboard
        </h1>
      </header>

      <SummaryCards />
      <CashFlowChart />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 px-2">
        <UpcomingInvoices />
        <TopClients />
      </div>
    </div>
  );
}
import { useCompanies } from '../companies/hooks/queries';

export default function Dashboard() {
  const { error } = useCompanies();

  if (error) return <p>{error}</p>;

  return (
    <div className="p-8 w-full">
      <header className="flex justify-between items-center mb-10 w-full px-10">
        <h1 className="text-4xl font-poppins font-semibold text-gray-800">
          Dashboard
        </h1>
      </header>
      
    </div>
  );
}
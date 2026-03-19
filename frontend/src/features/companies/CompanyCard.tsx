export default function CompanyCard({ company_name }: { company_name: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-70 h-50 bg-[#32b569] shadow-md rounded-3xl cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200">
      <p>{company_name}</p>
    </div>
  )
}
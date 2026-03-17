export default function CompanyCard({ company_name }: { company_name: string }) {
  return (
    <div className="flex items-center justify-center font-sketch font-semibold w-60 h-45 bg-white border-3 border-black rounded-2xl cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-black transition-all duration-200 text-xl ">
      <p>{company_name}</p>
    </div>
  )
}
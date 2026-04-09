import { summaryData } from '../data/mockData';

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8 px-2">
      {summaryData.map((card, index) => (
        <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
          <h3 className="text-sm font-medium text-gray-500 mb-2">{card.title}</h3>
          <p className="text-2xl font-bold text-gray-800 mb-1">{card.amount}</p>
          <p className={`text-xs font-medium ${card.color}`}>{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
import React from 'react';

interface YearSelectorProps {
  selectedYear: number;
  onSelectYear: (year: number) => void;
}

const YEARS = Array.from({ length: 12 }, (_, i) => 2025 - i); // 2025 down to 2014

export const YearSelector: React.FC<YearSelectorProps> = ({ selectedYear, onSelectYear }) => {
  return (
    <div className="w-full overflow-x-auto py-6 border-b border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 flex gap-3 min-w-max">
        {YEARS.map((year) => (
          <button
            key={year}
            onClick={() => onSelectYear(year)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 transform ${
              selectedYear === year
                ? 'bg-gold-500 text-slate-950 shadow-lg shadow-gold-500/20 scale-105'
                : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};
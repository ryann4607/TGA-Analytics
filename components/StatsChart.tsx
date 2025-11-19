import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { YearData } from '../types';

interface StatsChartProps {
  data: YearData;
}

export const StatsChart: React.FC<StatsChartProps> = ({ data }) => {
  // Transform data for the chart
  const chartData = [
    {
      name: data.winner.name.length > 15 ? data.winner.name.substring(0, 15) + '...' : data.winner.name,
      fullName: data.winner.name,
      budget: data.winner.budgetNumeric,
      team: data.winner.estimatedTeamSize,
      type: 'Winner'
    },
    ...data.nominees.map(n => ({
      name: n.name.length > 15 ? n.name.substring(0, 15) + '...' : n.name,
      fullName: n.name,
      budget: n.budgetNumeric,
      team: n.estimatedTeamSize,
      type: 'Nominee'
    }))
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl">
          <p className="text-slate-200 font-bold mb-2">{payload[0].payload.fullName}</p>
          <p className="text-sm text-emerald-400">
            Budget: ~${payload[0].value}M
          </p>
          <p className="text-sm text-blue-400">
            Team: ~{payload[0].payload.team} devs
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 h-full">
      <h3 className="text-lg font-bold text-slate-200 mb-6">Budget Comparison (USD Millions)</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
            <XAxis type="number" stroke="#94a3b8" fontSize={12} tickFormatter={(val) => `$${val}M`} />
            <YAxis type="category" dataKey="name" stroke="#94a3b8" fontSize={12} width={100} />
            <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
            <Bar dataKey="budget" radius={[0, 4, 4, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.type === 'Winner' ? '#EAB308' : '#64748b'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-slate-500 mt-4 text-center">*Estimates based on industry reports</p>
    </div>
  );
};
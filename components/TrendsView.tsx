import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  ZAxis,
  Cell
} from 'recharts';
import { STATIC_DATA } from '../data/staticData';
import { YearData } from '../types';
import { TrendingUp, Users, Coins, Sparkles } from 'lucide-react';

interface TrendsViewProps {
  additionalData: Record<number, YearData>;
}

export const TrendsView: React.FC<TrendsViewProps> = ({ additionalData }) => {
  const { yearlyStats, allGames } = useMemo(() => {
    // Merge static data with any dynamically fetched data (like 2025) passed from App state
    const combinedData = { ...STATIC_DATA, ...additionalData };
    // Explicitly cast to YearData[] because Object.values on mixed records can sometimes result in unknown[]
    const years = (Object.values(combinedData) as YearData[]).sort((a, b) => a.year - b.year);
    
    const stats = years.map(yearData => {
      const games = [yearData.winner, ...yearData.nominees];
      // Filter out games with 0 budget for averages to avoid skewing
      const validGames = games.filter(g => g.budgetNumeric > 0);
      
      const totalBudget = validGames.reduce((acc, curr) => acc + curr.budgetNumeric, 0);
      const avgBudget = validGames.length > 0 ? totalBudget / validGames.length : 0;
      const indieCount = games.filter(g => g.isIndie).length;

      return {
        year: yearData.year,
        totalBudget: Math.round(totalBudget),
        avgBudget: Math.round(avgBudget),
        indieCount
      };
    });

    const flatGames = years.flatMap(yearData => {
      return [yearData.winner, ...yearData.nominees].map(game => ({
        name: game.name,
        year: yearData.year,
        budget: game.budgetNumeric,
        teamSize: game.estimatedTeamSize,
        isIndie: game.isIndie,
        isWinner: game.name === yearData.winner.name
      })).filter(g => g.budget > 0 && g.teamSize > 0); // Filter out unknown data points
    });

    return { yearlyStats: stats, allGames: flatGames };
  }, [additionalData]);

  const CustomScatterTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl z-50">
          <p className="text-slate-200 font-bold mb-1">{data.name} ({data.year})</p>
          <p className="text-xs text-gold-500 mb-2 uppercase font-bold">{data.isWinner ? 'Winner' : 'Nominee'}</p>
          <p className="text-sm text-emerald-400">Budget: ${data.budget}M</p>
          <p className="text-sm text-blue-400">Team: {data.teamSize} devs</p>
        </div>
      );
    }
    return null;
  };

  const CustomBarTooltip = ({ active, payload, label, unit = "" }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl">
          <p className="text-slate-200 font-bold mb-1">{label}</p>
          <p className="text-sm text-gold-500">
            {payload[0].value}{unit}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="animate-in fade-in duration-700 space-y-8 pb-12">
      {/* Header */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Historical Trends</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Analyzing the evolution of the video game industry through over a decade of Game Awards nominations, including 2025 projections.
        </p>
      </div>

      {/* Scatter Plot: Budget vs Team Size */}
      <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded bg-blue-500/10 text-blue-400">
             <Users className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-200">Production Scale</h3>
            <p className="text-xs text-slate-500">Budget (X) vs Studio Size (Y)</p>
          </div>
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.5} />
              <XAxis 
                type="number" 
                dataKey="budget" 
                name="Budget" 
                unit="M" 
                stroke="#94a3b8" 
                label={{ value: 'Budget ($M)', position: 'bottom', fill: '#64748b', fontSize: 12 }} 
              />
              <YAxis 
                type="number" 
                dataKey="teamSize" 
                name="Team Size" 
                stroke="#94a3b8" 
                label={{ value: 'Team Size', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12 }} 
              />
              <ZAxis type="number" range={[60, 400]} />
              <Tooltip content={<CustomScatterTooltip />} cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Games" data={allGames} fill="#8884d8">
                {allGames.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.isWinner ? '#EAB308' : (entry.isIndie ? '#818cf8' : '#475569')} 
                    fillOpacity={entry.isWinner ? 1 : 0.7}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-6 mt-4 text-xs text-slate-400">
           <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-gold-500"></span> Winner</div>
           <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-indigo-400"></span> Indie Nominee</div>
           <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-slate-600"></span> AAA Nominee</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart: Total Budget */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded bg-emerald-500/10 text-emerald-400">
               <Coins className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-200">Total Nominee Budget ($M)</h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yearlyStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip content={<CustomBarTooltip unit="M" />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                <Bar dataKey="totalBudget" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart: Average Budget */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
             <div className="p-2 rounded bg-teal-500/10 text-teal-400">
               <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-200">Avg Budget Per Game ($M)</h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yearlyStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} />
                <Tooltip content={<CustomBarTooltip unit="M" />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                <Bar dataKey="avgBudget" fill="#2dd4bf" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart: Indie Count */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 lg:col-span-2">
           <div className="flex items-center gap-3 mb-6">
             <div className="p-2 rounded bg-indigo-500/10 text-indigo-400">
               <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-200">Indie Games Nominated for GOTY</h3>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={yearlyStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} />
                <YAxis stroke="#94a3b8" fontSize={12} allowDecimals={false} />
                <Tooltip content={<CustomBarTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                <Bar dataKey="indieCount" fill="#818cf8" radius={[4, 4, 0, 0]}>
                   {yearlyStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.indieCount >= 2 ? '#6366f1' : '#818cf8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
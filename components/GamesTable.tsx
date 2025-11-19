import React from 'react';
import { GameInfo } from '../types';
import { Trophy, Users, Coins, Star, LayoutTemplate } from 'lucide-react';

interface GamesTableProps {
  winner: GameInfo;
  nominees: GameInfo[];
}

export const GamesTable: React.FC<GamesTableProps> = ({ winner, nominees }) => {
  const allGames = [winner, ...nominees];

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/30 shadow-xl">
      <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center gap-2">
        <LayoutTemplate className="w-5 h-5 text-gold-500" />
        <h3 className="text-lg font-bold text-white">Comparative Insights</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-400">
          <thead className="bg-slate-950 uppercase tracking-wider text-xs font-semibold text-slate-500">
            <tr>
              <th className="px-6 py-4">Game Details</th>
              <th className="px-6 py-4 text-center">Studio Size</th>
              <th className="px-6 py-4 text-center">Budget (Est.)</th>
              <th className="px-6 py-4 text-center">Category</th>
              <th className="px-6 py-4 text-center">Nominations</th>
              <th className="px-6 py-4 text-center">Wins</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {allGames.map((game, idx) => {
              const isWinner = idx === 0;
              return (
                <tr 
                  key={game.name} 
                  className={`transition-colors hover:bg-slate-800/40 ${isWinner ? 'bg-gold-500/5' : ''}`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {isWinner && <Trophy className="w-5 h-5 text-gold-500 shrink-0" />}
                      <div>
                        <div className={`font-bold text-base ${isWinner ? 'text-gold-500' : 'text-white'}`}>
                          {game.name}
                        </div>
                        <div className="text-xs text-slate-500">{game.developer}</div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-slate-300">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="font-mono">{game.estimatedTeamSize}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-slate-300">
                      <Coins className="w-4 h-4 text-green-400" />
                      <span className="font-mono">{game.estimatedBudgetUSD}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center">
                    {game.isIndie ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        Indie
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-700/30 text-slate-400 border border-slate-700">
                        AAA
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-lg font-bold text-white">{game.totalNominations}</span>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-center">
                     <div className="flex items-center justify-center gap-1">
                       {game.totalWins > 0 ? (
                         <>
                           <span className="text-lg font-bold text-gold-500">{game.totalWins}</span>
                           <Trophy className="w-3 h-3 text-gold-500/50" />
                         </>
                       ) : (
                         <span className="text-slate-600">-</span>
                       )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
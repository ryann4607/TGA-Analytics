import React from 'react';
import { GameInfo } from '../types';
import { Users, Coins, Award, Trophy, Star, Calendar } from 'lucide-react';

interface GameCardProps {
  game: GameInfo;
  type: 'winner' | 'nominee';
  rank?: number;
}

export const GameCard: React.FC<GameCardProps> = ({ game, type, rank }) => {
  const isWinner = type === 'winner';
  const isTBD = game.name === "To Be Announced";

  return (
    <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 hover:translate-y-[-4px] h-full ${
      isWinner 
        ? 'bg-gradient-to-b from-slate-800 to-slate-900 border border-gold-500/50 shadow-xl shadow-gold-500/10 p-8' 
        : 'bg-slate-900/50 border border-slate-800 hover:bg-slate-800 p-6'
    }`}>
      {/* Decorative Background Glow for Winner */}
      {isWinner && !isTBD && (
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/10 blur-3xl rounded-full pointer-events-none" />
      )}

      <div className="flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="space-y-1 w-full">
            <div className="flex items-center gap-2">
              {isWinner && <Award className="w-5 h-5 text-gold-500" />}
              <span className={`text-xs font-bold tracking-wider uppercase ${isWinner ? 'text-gold-500' : 'text-slate-400'}`}>
                {isWinner ? (isTBD ? 'Event Upcoming' : 'Game of the Year') : `Most Nominated #${rank}`}
              </span>
            </div>
            <h3 className={`font-bold ${isWinner ? 'text-3xl text-white' : 'text-xl text-slate-100'}`}>
              {game.name}
            </h3>
            <p className="text-slate-400 text-sm">{game.developer} • {game.publisher}</p>
          </div>
          
          {game.isIndie && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shrink-0 ml-2">
              INDIE
            </span>
          )}
        </div>

        <p className="text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
          {game.description}
        </p>

        {/* TBD State: Show Calendar instead of stats */}
        {isTBD ? (
          <div className="flex flex-col items-center justify-center py-6 border-t border-slate-800/50 mt-auto">
            <Calendar className="w-8 h-8 text-slate-600 mb-2" />
            <p className="text-slate-500 text-sm">Awards Ceremony Dec 2025</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 mt-auto mb-4">
               <div className="flex items-center gap-3">
                 <div className="p-1.5 rounded bg-slate-800/50 text-gold-500">
                   <Trophy className="w-4 h-4" />
                 </div>
                 <div>
                   <span className="text-lg font-bold text-white">{game.totalWins}</span>
                   <span className="text-xs text-slate-500 ml-1">Wins</span>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="p-1.5 rounded bg-slate-800/50 text-purple-400">
                   <Star className="w-4 h-4" />
                 </div>
                 <div>
                   <span className="text-lg font-bold text-white">{game.totalNominations}</span>
                   <span className="text-xs text-slate-500 ml-1">Noms</span>
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-slate-800 text-green-400">
                  <Coins className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Est. Budget</p>
                  <p className="text-sm font-mono text-slate-200">{game.estimatedBudgetUSD}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-slate-800 text-blue-400">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Team Size</p>
                  <p className="text-sm font-mono text-slate-200">{game.estimatedTeamSize} <span className="text-xs text-slate-500">devs</span></p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
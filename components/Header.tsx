import React from 'react';
import { Trophy, Sparkles, Share2 } from 'lucide-react';

interface HeaderProps {
  onShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShare }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-gold-500 to-amber-700 rounded-lg shadow-lg shadow-amber-900/20">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            TGA <span className="text-gold-500">Insights</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <div className="hidden md:flex items-center gap-1 mr-4">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Powered by Gemini 2.5</span>
          </div>
          
          <button 
            onClick={onShare}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all active:scale-95 border border-slate-700"
            aria-label="Share this view"
          >
            <Share2 className="w-4 h-4" />
            <span className="font-medium">Share</span>
          </button>
        </div>
      </div>
    </header>
  );
};
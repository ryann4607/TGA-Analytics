import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { YearSelector } from './components/YearSelector';
import { GameCard } from './components/GameCard';
import { StatsChart } from './components/StatsChart';
import { GamesTable } from './components/GamesTable';
import { TrendsView } from './components/TrendsView';
import { fetchYearData } from './services/geminiService';
import { YearData } from './types';
import { Loader2, AlertCircle, CheckCircle2, RefreshCw, BarChart2, Calendar } from 'lucide-react';

const CACHE_KEY = 'tga_insights_cache_v1';

type Tab = 'yearly' | 'trends';

const App: React.FC = () => {
  // Initialize year from URL parameter if available, otherwise default to 2024
  const [selectedYear, setSelectedYear] = useState<number>(() => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const yearParam = params.get('year');
        if (yearParam) {
          const year = parseInt(yearParam);
          // Validate year is within reasonable range
          if (year >= 2014 && year <= 2025) return year;
        }
      }
    } catch (e) {
      console.warn('Error accessing URL parameters:', e);
    }
    return 2024;
  });

  const [activeTab, setActiveTab] = useState<Tab>('yearly');
  const [data, setData] = useState<YearData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false);

  // Initialize cache from localStorage
  const [cache, setCache] = useState<Record<number, YearData>>(() => {
    try {
      const saved = localStorage.getItem(CACHE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.warn('Failed to load cache from localStorage:', e);
      return {};
    }
  });

  // Save to localStorage whenever cache updates
  useEffect(() => {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
    } catch (e) {
      console.warn('Failed to save cache to localStorage:', e);
    }
  }, [cache]);

  // Background Prefetch for 2025 (or future data) to populate Trends
  useEffect(() => {
    const prefetchPredictions = async () => {
      // Only prefetch if 2025 is missing from cache
      // This ensures Trends view has the latest 2025 data from Wikipedia without making the user wait if they click it
      if (!cache[2025]) {
        try {
          console.log('Prefetching 2025 data for Trends view...');
          const result = await fetchYearData(2025);
          setCache(prev => ({ ...prev, [2025]: result }));
        } catch (e) {
          console.warn("Background fetch for 2025 failed", e);
        }
      }
    };

    prefetchPredictions();
  }, []); // Run once on mount

  // Handle Year Selection and update URL
  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('year', year.toString());
      window.history.pushState({}, '', url);
    } catch (e) {
      // Silently fail in sandboxed environments where history API is restricted
      console.warn('Could not update URL history:', e);
    }
  };

  const handleShare = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.warn('Clipboard access failed or insecure context:', err);
      // Fallback for when clipboard API is blocked
      try {
        prompt('Copy this link to share:', window.location.href);
      } catch (e) {
        // Ignore if prompt is also blocked
      }
    }
  };

  const loadData = useCallback(async (year: number, forceRefresh = false) => {
    // Check cache first if not forcing refresh
    if (!forceRefresh && cache[year]) {
      setData(cache[year]);
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);

    try {
      // Pass forceRefresh as the second argument to bypass static data
      const result = await fetchYearData(year, forceRefresh);
      setCache(prev => ({ ...prev, [year]: result }));
      setData(result);
    } catch (err) {
      setError("Failed to fetch game data. Please check your API key or try again later.");
    } finally {
      setLoading(false);
    }
  }, [cache]);

  useEffect(() => {
    if (activeTab === 'yearly') {
      loadData(selectedYear);
    }
  }, [selectedYear, loadData, activeTab]); 

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-gold-500/30 pb-20 relative">
      <Header onShare={handleShare} />
      
      {/* Tab Switcher */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 flex gap-8">
          <button
            onClick={() => setActiveTab('yearly')}
            className={`flex items-center gap-2 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'yearly' 
                ? 'border-gold-500 text-gold-500' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Yearly Analysis
          </button>
          <button
            onClick={() => setActiveTab('trends')}
            className={`flex items-center gap-2 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'trends' 
                ? 'border-gold-500 text-gold-500' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart2 className="w-4 h-4" />
            Historical Trends
          </button>
        </div>
      </div>

      {activeTab === 'yearly' && (
        <YearSelector selectedYear={selectedYear} onSelectYear={handleYearChange} />
      )}

      {/* Toast Notification */}
      <div className={`fixed top-24 right-4 z-50 transition-all duration-300 transform ${showToast ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0 pointer-events-none'}`}>
        <div className="bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span className="font-medium text-sm">Link copied to clipboard!</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {activeTab === 'trends' ? (
          <TrendsView additionalData={cache} />
        ) : (
          <>
            {loading ? (
              <div className="flex flex-col items-center justify-center h-[60vh]">
                <Loader2 className="w-12 h-12 text-gold-500 animate-spin mb-4" />
                <p className="text-slate-400 animate-pulse">Searching the web for accurate data...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center h-[50vh] text-center">
                <div className="p-4 rounded-full bg-red-500/10 mb-4">
                  <AlertCircle className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Error Loading Data</h3>
                <p className="text-slate-400 max-w-md">{error}</p>
                <button 
                  onClick={() => loadData(selectedYear, true)}
                  className="mt-6 px-6 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-white transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : data ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Column: Winner & Table */}
                <div className="lg:col-span-2 flex flex-col gap-16">
                  
                  {/* Hero Section: Winner */}
                  <div>
                      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <span className="w-2 h-8 bg-gold-500 rounded-full"></span>
                      Game of the Year {data.year} 
                      {data.year > 2024 && <span className='text-xs bg-slate-800 px-2 py-1 rounded text-slate-400 ml-2'>(Prediction)</span>}
                      
                      <button 
                        onClick={() => loadData(selectedYear, true)}
                        className="ml-auto p-2 text-slate-500 hover:text-gold-500 hover:bg-slate-800 rounded-full transition-colors"
                        title="Force refresh from live web data"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                      </h2>
                      <GameCard game={data.winner} type="winner" />
                  </div>

                  {/* Table Section */}
                  <div className="pt-4">
                     <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 scroll-mt-32">
                        <span className="w-2 h-8 bg-slate-700 rounded-full"></span>
                        Game of the Year Nominees
                      </h2>
                      <GamesTable winner={data.winner} nominees={data.nominees} />
                  </div>
                </div>
                
                {/* Right Sidebar: Analysis & Stats (Sticky) */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-6 lg:sticky lg:top-24">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                       <h3 className="text-lg font-bold text-white mb-4">Year in Review</h3>
                       <p className="text-slate-300 leading-relaxed text-sm">
                         {data.summary}
                       </p>
                    </div>
                    <div className="flex-grow">
                        <StatsChart data={data} />
                    </div>
                  </div>
                </div>

              </div>
            ) : null}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
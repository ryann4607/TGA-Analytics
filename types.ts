export interface GameInfo {
  name: string;
  developer: string;
  publisher: string;
  isIndie: boolean;
  estimatedBudgetUSD: string; // Formatted string e.g., "$100M"
  estimatedTeamSize: number;
  description: string;
  budgetNumeric: number; // For charting (in millions)
  totalNominations: number;
  totalWins: number;
}

export interface YearData {
  year: number;
  winner: GameInfo;
  nominees: GameInfo[];
  summary: string;
  sourceUrls?: { title: string; uri: string }[];
}

export interface ChartDataPoint {
  name: string;
  budget: number;
  teamSize: number;
  type: 'Winner' | 'Nominee';
}
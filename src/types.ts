export interface Horse {
  id: number;
  name: string;
  jockey: string;
  trainer: string;
  form: string;
  isFavorite?: boolean;
  oddsGanhador: number;
  oddsPlace: number;
  color: string;
}

export interface CasinoGame {
  id: number;
  title: string;
  provider: string;
  minBet: string;
  maxBet: string;
  image: string;
  isLive?: boolean;
  players?: number;
  isVip?: boolean;
  isHot?: boolean;
}

export interface SlotGame {
  id: number;
  title: string;
  provider: string;
  image: string;
  isNew?: boolean;
  jackpot?: string;
}

export interface FeaturedGame {
  id: number;
  sport: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  oddsHome: number;
  oddsDraw: number;
  oddsAway: number;
  tipTitle: string;
  tipDescription: string;
  tipOdds: number;
  image: string;
}

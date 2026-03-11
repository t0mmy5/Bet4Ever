import { Horse, CasinoGame, SlotGame, FeaturedGame } from './types';

export const HORSES: Horse[] = [
  {
    id: 1,
    name: "Bolt de l'Odon",
    jockey: "B. Goop",
    trainer: "F. Leblanc",
    form: "1-3-2",
    isFavorite: true,
    oddsGanhador: 2.40,
    oddsPlace: 1.15,
    color: "bg-red-600"
  },
  {
    id: 2,
    name: "Galileo Star",
    jockey: "M. Abrivard",
    trainer: "Y. Desmet",
    form: "4-1-6",
    oddsGanhador: 5.80,
    oddsPlace: 2.10,
    color: "bg-blue-600"
  },
  {
    id: 3,
    name: "Royal King",
    jockey: "J.M. Bazire",
    trainer: "J.M. Bazire",
    form: "2-2-1",
    oddsGanhador: 4.20,
    oddsPlace: 1.80,
    color: "bg-yellow-500"
  }
];

export const CASINO_GAMES: CasinoGame[] = [
  {
    id: 1,
    title: "Lightning Roulette",
    provider: "Evolution",
    minBet: "€0.20",
    maxBet: "€2,000",
    image: "https://picsum.photos/seed/roulette1/400/300",
    isLive: true,
    players: 1245
  },
  {
    id: 2,
    title: "Speed Roulette",
    provider: "Evolution",
    minBet: "€0.50",
    maxBet: "€5,000",
    image: "https://picsum.photos/seed/roulette2/400/300",
    isLive: true,
    players: 850
  },
  {
    id: 3,
    title: "Blackjack VIP Gold",
    provider: "Evolution",
    minBet: "€50",
    maxBet: "€10,000",
    image: "https://picsum.photos/seed/blackjack1/400/300",
    isLive: true,
    isVip: true
  },
  {
    id: 4,
    title: "Crazy Time",
    provider: "Evolution",
    minBet: "€0.10",
    maxBet: "€2,500",
    image: "https://picsum.photos/seed/crazytime/400/300",
    isLive: true,
    isHot: true,
    players: 4562
  }
];

export const SLOTS: SlotGame[] = [
  {
    id: 1,
    title: "Gates of Olympus",
    provider: "Pragmatic Play",
    image: "https://picsum.photos/seed/slot1/300/400"
  },
  {
    id: 2,
    title: "Sweet Bonanza",
    provider: "Pragmatic Play",
    image: "https://picsum.photos/seed/slot2/300/400"
  },
  {
    id: 3,
    title: "Big Bass Splash",
    provider: "Reel Kingdom",
    image: "https://picsum.photos/seed/slot3/300/400"
  },
  {
    id: 4,
    title: "Cyber Spin",
    provider: "Nolimit City",
    image: "https://picsum.photos/seed/slot4/300/400",
    isNew: true
  }
];

export const FEATURED_GAMES: FeaturedGame[] = [
  {
    id: 1,
    sport: "Futebol",
    league: "Champions League",
    homeTeam: "Real Madrid",
    awayTeam: "Man City",
    time: "20:00",
    oddsHome: 2.45,
    oddsDraw: 3.40,
    oddsAway: 2.80,
    tipTitle: "Ambas Marcam",
    tipDescription: "Dois dos ataques mais poderosos do mundo frente a frente.",
    tipOdds: 1.65,
    image: "https://picsum.photos/seed/football1/800/400"
  },
  {
    id: 2,
    sport: "Futebol",
    league: "Premier League",
    homeTeam: "Arsenal",
    awayTeam: "Liverpool",
    time: "17:30",
    oddsHome: 2.10,
    oddsDraw: 3.50,
    oddsAway: 3.20,
    tipTitle: "Mais de 2.5 Golos",
    tipDescription: "Histórico recente de muitos golos entre as duas equipas.",
    tipOdds: 1.75,
    image: "https://picsum.photos/seed/football2/800/400"
  },
  {
    id: 3,
    sport: "Ténis",
    league: "Wimbledon",
    homeTeam: "Alcaraz",
    awayTeam: "Djokovic",
    time: "14:00",
    oddsHome: 1.90,
    oddsDraw: 0,
    oddsAway: 1.90,
    tipTitle: "Vencedor: Alcaraz",
    tipDescription: "O jovem espanhol está em excelente forma na relva.",
    tipOdds: 1.90,
    image: "https://picsum.photos/seed/tennis1/800/400"
  }
];

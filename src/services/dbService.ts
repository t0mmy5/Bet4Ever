import { supabase } from '../lib/supabase';
import { Horse, CasinoGame, FeaturedGame } from '../types';

export const dbService = {
  async getHorses(): Promise<Horse[]> {
    const { data, error } = await supabase
      .from('horses')
      .select('*')
      .order('id', { ascending: true });
    
    if (error) throw error;
    
    return (data || []).map((item: any) => ({
      id: item.id,
      name: item.name,
      jockey: item.jockey,
      trainer: item.trainer,
      form: item.form,
      isFavorite: item.is_favorite,
      oddsGanhador: Number(item.odds_ganhador),
      oddsPlace: Number(item.odds_place),
      color: item.color
    }));
  },

  async getCasinoGames(): Promise<CasinoGame[]> {
    const { data, error } = await supabase
      .from('casino_games')
      .select('*')
      .order('id', { ascending: true });
    
    if (error) throw error;
    
    return (data || []).map((item: any) => ({
      id: item.id,
      title: item.title,
      provider: item.provider,
      minBet: item.min_bet,
      maxBet: item.max_bet,
      image: item.image,
      isLive: item.is_live,
      players: item.players,
      isVip: item.is_vip,
      isHot: item.is_hot
    }));
  },

  async getFeaturedGames(): Promise<FeaturedGame[]> {
    const { data, error } = await supabase
      .from('featured_games')
      .select('*')
      .order('id', { ascending: true });
    
    if (error) throw error;
    
    return (data || []).map((item: any) => ({
      id: item.id,
      sport: item.sport,
      league: item.league,
      homeTeam: item.home_team,
      awayTeam: item.away_team,
      time: item.time,
      oddsHome: Number(item.odds_home),
      oddsDraw: Number(item.odds_draw),
      oddsAway: Number(item.odds_away),
      tipTitle: item.tip_title,
      tipDescription: item.tip_description,
      tipOdds: Number(item.tip_odds),
      image: item.image
    }));
  }
};

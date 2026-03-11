import { supabase } from '../lib/supabase';
import { Horse, CasinoGame, FeaturedGame } from '../types';

export const dbService = {
  async getHorses(): Promise<Horse[]> {
    const { data, error } = await supabase
      .from('horses')
      .select('*')
      .order('id', { ascending: true });
    
    if (error) throw error;
    return data as Horse[];
  },

  async getCasinoGames(): Promise<CasinoGame[]> {
    const { data, error } = await supabase
      .from('casino_games')
      .select('*')
      .order('id', { ascending: true });
    
    if (error) throw error;
    return data as CasinoGame[];
  },

  async getFeaturedGames(): Promise<FeaturedGame[]> {
    const { data, error } = await supabase
      .from('featured_games')
      .select('*')
      .order('id', { ascending: true });
    
    if (error) throw error;
    return data as FeaturedGame[];
  }
};

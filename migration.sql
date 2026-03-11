-- Create Horses table
CREATE TABLE horses (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  jockey TEXT NOT NULL,
  trainer TEXT NOT NULL,
  form TEXT NOT NULL,
  is_favorite BOOLEAN DEFAULT FALSE,
  odds_ganhador DECIMAL NOT NULL,
  odds_place DECIMAL NOT NULL,
  color TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Casino Games table
CREATE TABLE casino_games (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  provider TEXT NOT NULL,
  min_bet TEXT NOT NULL,
  max_bet TEXT NOT NULL,
  image TEXT NOT NULL,
  is_live BOOLEAN DEFAULT FALSE,
  players INTEGER DEFAULT 0,
  is_vip BOOLEAN DEFAULT FALSE,
  is_hot BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Featured Games table
CREATE TABLE featured_games (
  id SERIAL PRIMARY KEY,
  sport TEXT NOT NULL,
  league TEXT NOT NULL,
  home_team TEXT NOT NULL,
  away_team TEXT NOT NULL,
  time TEXT NOT NULL,
  odds_home DECIMAL NOT NULL,
  odds_draw DECIMAL NOT NULL,
  odds_away DECIMAL NOT NULL,
  tip_title TEXT NOT NULL,
  tip_description TEXT NOT NULL,
  tip_odds DECIMAL NOT NULL,
  image TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial data for Horses
INSERT INTO horses (name, jockey, trainer, form, is_favorite, odds_ganhador, odds_place, color)
VALUES 
('Bolt de l''Odon', 'B. Goop', 'F. Leblanc', '1-3-2', true, 2.40, 1.15, 'bg-red-600'),
('Galileo Star', 'M. Abrivard', 'Y. Desmet', '4-1-6', false, 5.80, 2.10, 'bg-blue-600'),
('Royal King', 'J.M. Bazire', 'J.M. Bazire', '2-2-1', false, 4.20, 1.80, 'bg-yellow-500');

-- Insert initial data for Casino Games
INSERT INTO casino_games (title, provider, min_bet, max_bet, image, is_live, players, is_vip, is_hot)
VALUES 
('Lightning Roulette', 'Evolution', '€0.20', '€2,000', 'https://picsum.photos/seed/roulette1/400/300', true, 1245, false, false),
('Speed Roulette', 'Evolution', '€0.50', '€5,000', 'https://picsum.photos/seed/roulette2/400/300', true, 850, false, false),
('Blackjack VIP Gold', 'Evolution', '€50', '€10,000', 'https://picsum.photos/seed/blackjack1/400/300', true, 0, true, false),
('Crazy Time', 'Evolution', '€0.10', '€2,500', 'https://picsum.photos/seed/crazytime/400/300', true, 4562, false, true);

-- Insert initial data for Featured Games
INSERT INTO featured_games (sport, league, home_team, away_team, time, odds_home, odds_draw, odds_away, tip_title, tip_description, tip_odds, image)
VALUES 
('Futebol', 'Champions League', 'Real Madrid', 'Man City', '20:00', 2.45, 3.40, 2.80, 'Ambas Marcam', 'Dois dos ataques mais poderosos do mundo frente a frente.', 1.65, 'https://picsum.photos/seed/football1/800/400'),
('Futebol', 'Premier League', 'Arsenal', 'Liverpool', '17:30', 2.10, 3.50, 3.20, 'Mais de 2.5 Golos', 'Histórico recente de muitos golos entre as duas equipas.', 1.75, 'https://picsum.photos/seed/football2/800/400'),
('Ténis', 'Wimbledon', 'Alcaraz', 'Djokovic', '14:00', 1.90, 0, 1.90, 'Vencedor: Alcaraz', 'O jovem espanhol está em excelente forma na relva.', 1.90, 'https://picsum.photos/seed/tennis1/800/400');

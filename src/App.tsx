/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  Wallet, 
  User, 
  Bell, 
  PlayCircle, 
  MapPin, 
  ChevronRight, 
  Trophy, 
  Zap, 
  BarChart3, 
  Users, 
  X,
  Home,
  Timer,
  ShoppingBasket,
  History,
  Menu as MenuIcon,
  Gamepad2,
  Dices,
  Lock,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HORSES, CASINO_GAMES, SLOTS, FEATURED_GAMES } from './constants';
import { Horse, CasinoGame, SlotGame, FeaturedGame } from './types';
import { dbService } from './services/dbService';

// --- Components ---

const LoginPage = () => (
  <div className="max-w-md mx-auto w-full px-6 py-12 flex flex-col items-center">
    <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
      <Lock className="size-8" />
    </div>
    <h2 className="text-3xl font-black italic uppercase tracking-tight mb-2">Bem-vindo de volta</h2>
    <p className="text-neutral-500 text-center mb-8">Introduza os seus dados para aceder à sua conta Bet4Ever.</p>
    
    <form className="w-full flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 ml-1">E-mail</label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
          <input 
            type="email" 
            placeholder="exemplo@email.com"
            className="w-full bg-white border border-neutral-200 rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 ml-1">Palavra-passe</label>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-neutral-400" />
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full bg-white border border-neutral-200 rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="size-4 rounded border-neutral-300 text-primary focus:ring-primary" />
          <span className="text-sm text-neutral-600">Lembrar-me</span>
        </label>
        <button className="text-sm text-primary font-bold hover:underline">Esqueceu-se?</button>
      </div>

      <button className="w-full bg-primary hover:bg-red-600 text-white font-black py-4 rounded-xl shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] mt-4">
        ENTRAR NA CONTA
      </button>

      <div className="relative flex items-center justify-center my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-200"></div>
        </div>
        <span className="relative bg-background-light px-4 text-xs font-bold text-neutral-400 uppercase tracking-widest">Ou continuar com</span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 bg-white border border-neutral-200 py-3 rounded-xl hover:bg-neutral-50 transition-colors font-bold text-sm">
          <img src="https://www.google.com/favicon.ico" className="size-4" alt="Google" />
          Google
        </button>
        <button className="flex items-center justify-center gap-2 bg-white border border-neutral-200 py-3 rounded-xl hover:bg-neutral-50 transition-colors font-bold text-sm">
          <img src="https://www.facebook.com/favicon.ico" className="size-4" alt="Facebook" />
          Facebook
        </button>
      </div>

      <p className="text-sm text-center text-neutral-500 mt-6">
        Ainda não tem conta? <button className="text-primary font-bold hover:underline">Registe-se aqui</button>
      </p>
    </form>
  </div>
);

const Header = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => (
  <header className="sticky top-0 z-50 w-full bg-primary text-white shadow-md">
    <div className="max-w-[1440px] mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-white rounded-lg flex items-center justify-center text-primary">
            <BarChart3 className="size-5 font-bold" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter uppercase italic">Bet4Ever</h1>
        </div>
        
        <nav className="hidden lg:flex items-center gap-6">
          <button 
            onClick={() => setActiveTab('sports')}
            className={`text-sm font-bold transition-opacity ${activeTab === 'sports' ? 'border-b-2 border-white pb-1' : 'opacity-80 hover:opacity-100'}`}
          >
            ESPORTES
          </button>
          <button className="text-sm font-bold opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1">
            <span className="size-2 bg-white rounded-full animate-pulse"></span> AO VIVO
          </button>
          <button 
            onClick={() => setActiveTab('casino')}
            className={`text-sm font-bold transition-opacity ${activeTab === 'casino' ? 'border-b-2 border-white pb-1' : 'opacity-80 hover:opacity-100'}`}
          >
            CASINO
          </button>
          <button 
            onClick={() => setActiveTab('horses')}
            className={`text-sm font-bold transition-opacity ${activeTab === 'horses' ? 'border-b-2 border-white pb-1' : 'opacity-80 hover:opacity-100'}`}
          >
            CAVALOS
          </button>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 size-4" />
          <input 
            className="bg-white/10 border-none rounded-full py-1.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-white/30 placeholder:text-white/60 w-48 xl:w-64" 
            placeholder="Procurar..." 
            type="text"
          />
        </div>
        <button className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-neutral-100 transition-colors">
          DEPOSITAR
        </button>
        <div className="flex items-center gap-2 bg-black/10 p-1 rounded-full pl-3">
          <span className="text-xs font-bold">€124.50</span>
          <div className="size-8 rounded-full bg-slate-300 overflow-hidden border-2 border-white/20">
            <img 
              alt="Profile" 
              src="https://picsum.photos/seed/user/100/100" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
);

const Sidebar = () => (
  <aside className="w-full lg:w-64 flex flex-col gap-6">
    <section className="bg-white rounded-xl p-4 shadow-sm border border-neutral-100">
      <h3 className="text-xs font-bold text-primary mb-4 uppercase tracking-wider">Próximas Corridas</h3>
      <div className="flex flex-col gap-1">
        {[
          { name: 'Chantilly', time: '14:30', active: true },
          { name: 'Vincennes', time: '14:45' },
          { name: 'Cheltenham', time: '15:10' },
          { name: 'Ascot', time: '15:25' }
        ].map((race) => (
          <button 
            key={race.name}
            className={`flex items-center justify-between p-2 rounded-lg transition-colors ${race.active ? 'bg-primary/5 text-primary font-semibold' : 'hover:bg-neutral-100'}`}
          >
            <span className="flex items-center gap-3">
              <MapPin className={`size-4 ${race.active ? 'text-primary' : 'text-neutral-400'}`} />
              {race.name}
            </span>
            <span className={`text-[10px] px-1.5 rounded ${race.active ? 'bg-primary text-white' : 'bg-neutral-200'}`}>
              {race.time}
            </span>
          </button>
        ))}
      </div>
    </section>

    <section className="bg-white rounded-xl p-4 shadow-sm border border-neutral-100">
      <h3 className="text-xs font-bold text-neutral-400 mb-4 uppercase tracking-wider">Filtros Populares</h3>
      <div className="flex flex-wrap gap-2">
        {['Trote', 'Galope', 'Obstáculos', 'Internacional'].map(filter => (
          <button key={filter} className="px-3 py-1.5 rounded-full border border-neutral-200 text-xs font-medium hover:border-primary transition-colors">
            {filter}
          </button>
        ))}
      </div>
    </section>
  </aside>
);

const HorseCard: React.FC<{ horse: Horse }> = ({ horse }) => (
  <div className="bg-white rounded-xl p-4 border border-neutral-100 hover:border-primary/30 transition-all shadow-sm group">
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center justify-center w-10">
        <span className="text-xl font-black italic text-neutral-300 group-hover:text-primary">{horse.id}</span>
        <div className={`size-6 ${horse.color} rounded-sm border-2 border-white flex items-center justify-center`}>
          <Zap className="text-white size-3 fill-current" />
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-bold text-lg leading-tight uppercase">{horse.name}</h4>
          <div className="flex gap-2 mt-1">
            <span className="text-[10px] font-bold bg-neutral-100 px-1.5 py-0.5 rounded text-neutral-500 italic">FORMA: {horse.form}</span>
            {horse.isFavorite && <span className="text-[10px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded">FAVORITO</span>}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs text-neutral-400 font-medium">Jóquei: <span className="text-neutral-900">{horse.jockey}</span></p>
          <p className="text-xs text-neutral-400 font-medium">Treinador: <span className="text-neutral-900">{horse.trainer}</span></p>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button className="h-12 w-24 bg-accent-yellow hover:scale-105 transition-transform rounded-lg flex flex-col items-center justify-center text-neutral-900 shadow-md">
            <span className="text-[10px] font-bold opacity-60">GANHADOR</span>
            <span className="text-lg font-black leading-none">{horse.oddsGanhador.toFixed(2)}</span>
          </button>
          <button className="h-12 w-24 bg-neutral-100 hover:bg-neutral-200 transition-colors rounded-lg flex flex-col items-center justify-center text-neutral-900">
            <span className="text-[10px] font-bold opacity-60 uppercase">Placé</span>
            <span className="text-lg font-black leading-none">{horse.oddsPlace.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const BetSlip = () => (
  <aside className="w-full lg:w-80">
    <div className="sticky top-24 flex flex-col gap-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100">
        <div className="bg-neutral-900 text-white px-4 py-3 flex items-center justify-between">
          <h3 className="text-sm font-bold tracking-tight uppercase">Caderneta de Apostas</h3>
          <span className="bg-primary text-[10px] px-1.5 py-0.5 rounded font-black">1</span>
        </div>
        <div className="p-4 flex flex-col gap-4">
          <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 relative">
            <button className="absolute top-2 right-2 text-neutral-400 hover:text-primary">
              <X className="size-4" />
            </button>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-primary uppercase">Ganhador • R1 C4</span>
              <span className="font-bold text-sm">Bolt de l'Odon</span>
              <div className="flex items-center justify-between mt-2">
                <div className="bg-white border rounded px-2 py-1 text-xs font-bold w-20 text-center">
                  €10.00
                </div>
                <div className="text-right">
                  <span className="text-xs text-neutral-400">Odds: </span>
                  <span className="font-black text-sm">2.40</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-dashed border-neutral-200 pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-neutral-500">Total Apostas</span>
              <span className="font-medium">€10.00</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-sm font-bold text-neutral-900">Ganhos Potenciais</span>
              <span className="text-xl font-black text-green-600">€24.00</span>
            </div>
          </div>
          
          <button className="w-full bg-primary hover:bg-red-600 text-white font-black py-4 rounded-xl shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98]">
            CONFIRMAR APOSTA
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary to-red-900 rounded-2xl p-5 text-white shadow-lg overflow-hidden relative">
        <div className="absolute -right-4 -top-4 size-24 bg-white/10 rounded-full blur-2xl"></div>
        <h4 className="text-lg font-black italic uppercase leading-tight mb-2">Bónus de <br/>Boas-Vindas</h4>
        <p className="text-xs text-white/80 mb-4 font-medium">Aposte €10 e ganhe €50 em apostas grátis.</p>
        <button className="bg-white text-primary text-xs font-black px-4 py-2 rounded-lg">ATIVAR AGORA</button>
      </div>
    </div>
  </aside>
);

const GameCard: React.FC<{ game: CasinoGame }> = ({ game }) => (
  <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200">
    <div className="aspect-[4/3] overflow-hidden relative">
      <img 
        alt={game.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        src={game.image} 
        referrerPolicy="no-referrer"
      />
      {game.isLive && (
        <div className="absolute top-2 left-2 flex items-center gap-1 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span> LIVE
        </div>
      )}
      {game.isVip && (
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          VIP
        </div>
      )}
      {game.players && (
        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded flex items-center gap-1">
          <Users className="size-3" /> {game.players.toLocaleString()}
        </div>
      )}
    </div>
    <div className="p-3">
      <h4 className="font-bold text-sm truncate">{game.title}</h4>
      <p className="text-xs text-slate-500">Min. {game.minBet} - Max. {game.maxBet}</p>
    </div>
  </div>
);

const SlotCard: React.FC<{ slot: SlotGame }> = ({ slot }) => (
  <div className="group cursor-pointer">
    <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-2 bg-slate-200">
      <img 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
        src={slot.image} 
        alt={slot.title}
        referrerPolicy="no-referrer"
      />
      {slot.isNew && (
        <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded">NEW</span>
      )}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button className="bg-primary text-white rounded-full p-3 shadow-lg shadow-primary/40">
          <PlayCircle className="size-6" />
        </button>
      </div>
    </div>
    <h4 className="font-bold text-sm truncate">{slot.title}</h4>
    <p className="text-xs text-slate-500 uppercase font-bold">{slot.provider}</p>
  </div>
);

const FeaturedGameCard: React.FC<{ game: FeaturedGame }> = ({ game }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
    <div className="relative h-48">
      <img 
        src={game.image} 
        alt={`${game.homeTeam} vs ${game.awayTeam}`}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className="bg-primary text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">{game.sport}</span>
        <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{game.league}</span>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
        <div>
          <div className="text-2xl font-black italic uppercase leading-none mb-1">{game.homeTeam}</div>
          <div className="text-2xl font-black italic uppercase leading-none">{game.awayTeam}</div>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold opacity-80 block mb-1">HOJE</span>
          <span className="text-lg font-black">{game.time}</span>
        </div>
      </div>
    </div>
    
    <div className="p-4">
      <div className="grid grid-cols-3 gap-2 mb-6">
        <button className="bg-neutral-50 hover:bg-neutral-100 p-3 rounded-xl flex flex-col items-center transition-colors">
          <span className="text-[10px] font-bold text-neutral-400 mb-1">1</span>
          <span className="font-black text-lg">{game.oddsHome.toFixed(2)}</span>
        </button>
        <button className="bg-neutral-50 hover:bg-neutral-100 p-3 rounded-xl flex flex-col items-center transition-colors">
          <span className="text-[10px] font-bold text-neutral-400 mb-1">X</span>
          <span className="font-black text-lg">{game.oddsDraw > 0 ? game.oddsDraw.toFixed(2) : '-'}</span>
        </button>
        <button className="bg-neutral-50 hover:bg-neutral-100 p-3 rounded-xl flex flex-col items-center transition-colors">
          <span className="text-[10px] font-bold text-neutral-400 mb-1">2</span>
          <span className="font-black text-lg">{game.oddsAway.toFixed(2)}</span>
        </button>
      </div>

      <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10 relative overflow-hidden">
        <div className="absolute -right-4 -top-4 opacity-10">
          <Trophy className="size-20 text-primary" />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-primary text-white p-1 rounded-lg">
            <Zap className="size-3 fill-current" />
          </div>
          <span className="text-xs font-black text-primary uppercase tracking-widest">Tip do Dia</span>
        </div>
        <h5 className="font-bold text-sm mb-1">{game.tipTitle}</h5>
        <p className="text-xs text-neutral-500 mb-3 leading-relaxed">{game.tipDescription}</p>
        <button className="w-full bg-primary text-white font-black py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-red-600 transition-colors shadow-lg shadow-primary/20">
          APOSTAR AGORA <span className="bg-white/20 px-2 py-0.5 rounded text-[10px]">{game.tipOdds.toFixed(2)}</span>
        </button>
      </div>
    </div>
  </div>
);

// --- Pages ---

const HorseRacingPage = ({ horses }: { horses: Horse[] }) => (
  <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-6 p-4 lg:p-6">
    <Sidebar />
    <main className="flex-1 flex flex-col gap-6">
      <section className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
        <img 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://picsum.photos/seed/race/1200/600" 
          alt="Race"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-sm flex items-center gap-1">
            <span className="size-1.5 bg-white rounded-full animate-pulse"></span> AO VIVO
          </span>
          <span className="bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">R1 C4 - CHANTILLY</span>
        </div>
        <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-white text-3xl font-black italic uppercase">Grande Prémio de Chantilly</h2>
            <p className="text-white/80 text-sm font-medium">14:30 • 2400m • Relva • Grupo 1 • Premium</p>
          </div>
          <button className="flex items-center gap-2 bg-primary hover:bg-red-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg transform active:scale-95">
            <PlayCircle className="size-5" />
            ASSISTIR EM DIRETO
          </button>
        </div>
      </section>

      <div className="bg-white p-1 rounded-xl flex gap-1 border border-neutral-100">
        <button className="flex-1 py-3 rounded-lg bg-primary text-white font-bold text-sm">Ganhador / Placé</button>
        <button className="flex-1 py-3 rounded-lg hover:bg-neutral-50 text-neutral-500 font-bold text-sm transition-colors">Multi-Aposta</button>
        <button className="flex-1 py-3 rounded-lg hover:bg-neutral-50 text-neutral-500 font-bold text-sm transition-colors">Estatísticas</button>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {horses.map(horse => <HorseCard key={horse.id} horse={horse} />)}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-neutral-100">
          <div className="flex items-center justify-between mb-4">
            <h5 className="font-bold flex items-center gap-2">
              <BarChart3 className="size-4 text-primary" />
              Análise do Especialista
            </h5>
            <button className="text-xs text-primary font-bold hover:underline">VER TUDO</button>
          </div>
          <p className="text-sm text-neutral-600 leading-relaxed italic">
            "Bolt de l'Odon chega em excelente forma e é o favorito indiscutível no piso de Chantilly. No entanto, Galileo Star mostrou potencial em distâncias semelhantes."
          </p>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-neutral-100">
          <div className="flex items-center justify-between mb-4">
            <h5 className="font-bold flex items-center gap-2">
              <Users className="size-4 text-primary" />
              Stats do Jóquei
            </h5>
            <button className="text-xs text-primary font-bold hover:underline">VER TUDO</button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs font-medium">
              <span>B. Goop (Últimas 10)</span>
              <span className="text-primary font-bold">40% Vitórias</span>
            </div>
            <div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-primary h-full w-[40%]"></div>
            </div>
            <div className="flex justify-between text-xs font-medium">
              <span>J.M. Bazire (Últimas 10)</span>
              <span className="text-primary font-bold">35% Vitórias</span>
            </div>
            <div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-primary h-full w-[35%]"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <BetSlip />
  </div>
);

const HomePage = ({ featuredGames }: { featuredGames: FeaturedGame[] }) => (
  <main className="max-w-[1440px] mx-auto w-full px-4 lg:px-20 py-8 flex flex-col gap-10">
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-xl text-white">
            <Trophy className="size-6" />
          </div>
          <div>
            <h2 className="text-2xl font-black italic uppercase tracking-tight">Jogos em Destaque</h2>
            <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest">Os confrontos mais importantes de hoje</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button className="px-4 py-2 bg-neutral-100 rounded-lg text-xs font-bold hover:bg-neutral-200 transition-colors">TODOS OS JOGOS</button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-red-600 transition-colors">AO VIVO</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredGames.map(game => <FeaturedGameCard key={game.id} game={game} />)}
      </div>
    </section>

    <section className="bg-neutral-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
        <img src="https://picsum.photos/seed/promo/800/800" className="w-full h-full object-cover" alt="Promo" />
      </div>
      <div className="relative z-10 max-w-xl">
        <span className="inline-block bg-accent-yellow text-neutral-900 text-[10px] font-black px-3 py-1 rounded-full mb-4 uppercase tracking-widest">Promoção Exclusiva</span>
        <h3 className="text-4xl font-black italic uppercase leading-tight mb-4">Multi-Aposta <br/><span className="text-primary">Boost de 50%</span></h3>
        <p className="text-neutral-400 text-lg mb-8">Adicione 5 ou mais seleções à sua caderneta e aumente os seus ganhos potenciais automaticamente.</p>
        <button className="bg-primary hover:bg-red-600 text-white font-black px-8 py-4 rounded-xl shadow-xl shadow-primary/20 transition-all transform active:scale-95">
          APROVEITAR AGORA
        </button>
      </div>
    </section>
  </main>
);

const CasinoPage = ({ casinoGames }: { casinoGames: CasinoGame[] }) => (
  <main className="max-w-[1440px] mx-auto w-full px-4 lg:px-20 py-8 flex flex-col gap-12">
    <section className="relative overflow-hidden rounded-xl bg-slate-900 text-white min-h-[350px] flex items-end">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover opacity-60" 
          src="https://picsum.photos/seed/casinohero/1200/600" 
          alt="Casino"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>
      <div className="relative z-10 p-8 md:p-12 w-full md:w-2/3">
        <span className="inline-block bg-primary px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Live Experience</span>
        <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight italic uppercase">LIVE CASINO LIKE <br/><span className="text-primary italic">NEVER BEFORE</span></h2>
        <p className="text-slate-300 text-lg mb-6 max-w-md">Join our premium tables with professional dealers and real-time multiplayer action.</p>
        <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg hover:scale-105 transition-transform uppercase tracking-wider">PLAY NOW</button>
      </div>
    </section>

    <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar border-b border-primary/10 pb-1">
      <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-t-lg font-bold">
        <MenuIcon className="size-4" /> All Games
      </button>
      <button className="flex items-center gap-2 px-6 py-3 hover:bg-primary/5 transition-colors font-semibold border-b-2 border-transparent">
        <Dices className="size-4" /> Roulette
      </button>
      <button className="flex items-center gap-2 px-6 py-3 hover:bg-primary/5 transition-colors font-semibold border-b-2 border-transparent">
        <Gamepad2 className="size-4" /> Blackjack
      </button>
    </div>

    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Home className="size-5 text-primary" />
          <h3 className="text-xl font-bold uppercase italic tracking-wide">Live Roulette</h3>
        </div>
        <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
          VIEW ALL <ChevronRight className="size-4" />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {casinoGames.map(game => <GameCard key={game.id} game={game} />)}
      </div>
    </section>

    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Zap className="size-5 text-primary" />
          <h2 className="text-2xl font-black italic uppercase tracking-tight">Popular Slots</h2>
        </div>
        <button className="text-primary font-bold text-sm uppercase hover:underline">View All</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {SLOTS.map(slot => <SlotCard key={slot.id} slot={slot} />)}
      </div>
    </section>

    <section className="bg-slate-900 rounded-2xl p-8 overflow-hidden relative group">
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
        <img 
          className="h-full w-full object-cover" 
          src="https://picsum.photos/seed/jackpot/400/400" 
          alt="Jackpot"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="size-8 text-yellow-500" />
          <h2 className="text-3xl font-black italic uppercase tracking-tight text-white">Daily Jackpot</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="bg-black/40 backdrop-blur rounded-xl p-6 border border-white/10 flex flex-col items-center">
            <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Current Prize Pool</span>
            <span className="text-5xl font-black text-white tabular-nums tracking-tighter">€482,901.55</span>
          </div>
          <div className="flex-1">
            <p className="text-slate-300 text-lg mb-6 max-w-lg">One lucky player will win the entire pool today. Spin any qualifying game for a chance to trigger the jackpot wheel.</p>
            <div className="flex gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-10 rounded-lg uppercase tracking-widest transition-all">Play Now</button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-10 rounded-lg uppercase tracking-widest border border-white/10 transition-all">How it works</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

const MobileNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => (
  <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-100 px-4 h-16 flex items-center justify-around z-50">
    <button 
      onClick={() => setActiveTab('sports')}
      className={`flex flex-col items-center gap-1 ${activeTab === 'sports' ? 'text-primary' : 'text-neutral-400'}`}
    >
      <Home className="size-5" />
      <span className="text-[10px] font-bold">Início</span>
    </button>
    <button 
      onClick={() => setActiveTab('casino')}
      className={`flex flex-col items-center gap-1 ${activeTab === 'casino' ? 'text-primary' : 'text-neutral-400'}`}
    >
      <Dices className="size-5" />
      <span className="text-[10px] font-bold">Casino</span>
    </button>
    <div className="-mt-8">
      <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-4 border-background-light">
        <ShoppingBasket className="size-6" />
      </button>
    </div>
    <button 
      onClick={() => setActiveTab('horses')}
      className={`flex flex-col items-center gap-1 ${activeTab === 'horses' ? 'text-primary' : 'text-neutral-400'}`}
    >
      <Zap className="size-5" />
      <span className="text-[10px] font-bold">Cavalos</span>
    </button>
    <button 
      onClick={() => setActiveTab('login')}
      className={`flex flex-col items-center gap-1 ${activeTab === 'login' ? 'text-primary' : 'text-neutral-400'}`}
    >
      <User className="size-5" />
      <span className="text-[10px] font-bold">Conta</span>
    </button>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('sports');
  const [horses, setHorses] = useState<Horse[]>(HORSES);
  const [casinoGames, setCasinoGames] = useState<CasinoGame[]>(CASINO_GAMES);
  const [featuredGames, setFeaturedGames] = useState<FeaturedGame[]>(FEATURED_GAMES);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [horsesData, casinoData, featuredData] = await Promise.all([
          dbService.getHorses(),
          dbService.getCasinoGames(),
          dbService.getFeaturedGames()
        ]);
        
        if (horsesData && horsesData.length > 0) setHorses(horsesData);
        if (casinoData && casinoData.length > 0) setCasinoGames(casinoData);
        if (featuredData && featuredData.length > 0) setFeaturedGames(featuredData);
      } catch (error) {
        console.error('Error fetching data from Supabase, using static fallback:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col pb-16 lg:pb-0">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="flex-1"
        >
          {activeTab === 'sports' ? (
            <HomePage featuredGames={featuredGames} />
          ) : activeTab === 'horses' ? (
            <HorseRacingPage horses={horses} />
          ) : activeTab === 'casino' ? (
            <CasinoPage casinoGames={casinoGames} />
          ) : (
            <LoginPage />
          )}
        </motion.div>
      </AnimatePresence>

      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <footer className="bg-white border-t border-neutral-100 py-12 px-4 lg:px-20 mt-12 hidden lg:block">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 text-primary mb-6">
              <BarChart3 className="size-8 font-bold" />
              <h2 className="text-xl font-extrabold tracking-tighter uppercase italic">Bet4Ever</h2>
            </div>
            <p className="text-sm text-slate-500 mb-6">Enjoy the best online betting and casino experience with thousands of games, live tables, and jackpots.</p>
          </div>
          <div>
            <h5 className="font-black italic uppercase text-sm tracking-widest mb-6">Sports</h5>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Futebol</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Ténis</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Basquetebol</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cavalos</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black italic uppercase text-sm tracking-widest mb-6">Casino</h5>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Slots</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Roleta</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Blackjack</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Jackpots</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-black italic uppercase text-sm tracking-widest mb-6">Support</h5>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Live Chat</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Payment Methods</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">© 2026 Bet4Ever. Play Responsibly.</p>
          <div className="flex items-center gap-4 grayscale opacity-50">
            <span className="text-xs font-black bg-slate-200 px-2 py-1 rounded">18+</span>
            <Trophy className="size-5" />
            <Zap className="size-5" />
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Injectable } from '@angular/core';
import { PlayerStat } from '../interfaces/player';

@Injectable({
  providedIn: 'root',
})
export class StatService {
  getPlayerStats() {
    const playerStat: PlayerStat = {
      goals: {
        players: [
          { rank: 1, player: 'Erling Haaland', team: 'Man City', total: 27 },
          { rank: 2, player: 'Cole Palmer', team: 'Chelsea', total: 22 },
          { rank: 3, player: 'Alexander Isak', team: 'Newcastle', total: 21 },
          { rank: 4, player: 'Phil Foden', team: 'Man City', total: 19 },
          {
            rank: 4,
            player: 'Dominic Solanke',
            team: 'Bournemouth',
            total: 19,
          },
          { rank: 4, player: 'Ollie Watkins', team: 'Aston Villa', total: 19 },
          { rank: 7, player: 'Mohamed Salah', team: 'Liverpool', total: 18 },
          { rank: 8, player: 'Son Heung-Min', team: 'Spurs', total: 17 },
          { rank: 9, player: 'Jarrod Bowen', team: 'West Ham', total: 16 },
          {
            rank: 9,
            player: 'Jean-Philippe Mateta',
            team: 'Crystal Palace',
            total: 16,
          },
        ],
      },
      assists: {
        players: [
          {
            rank: 1,
            player: 'Ollie Watkins',
            team: 'Aston Villa',
            total: 13,
          },
          { rank: 2, player: 'Cole Palmer', team: 'Chelsea', total: 11 },
          { rank: 3, player: 'Kevin De Bruyne', team: 'Man City', total: 10 },
          {
            rank: 3,
            player: 'Morgan Gibbs-White',
            team: 'Nottingham Forest',
            total: 10,
          },
          { rank: 3, player: 'Anthony Gordon', team: 'Newcastle', total: 10 },
          { rank: 3, player: 'Pascal Groß', team: 'Brighton', total: 10 },
          { rank: 3, player: 'Brennan Johnson', team: 'Spurs', total: 10 },
          { rank: 7, player: 'Mohamed Salah', team: 'Liverpool', total: 9 },
          { rank: 8, player: 'Son Heung-Min', team: 'Spurs', total: 10 },
          {
            rank: 8,
            player: 'Kieran Trippier',
            team: 'Newcastle',
            total: 10,
          },
        ],
      },
      passes: {
        players: [
          {
            rank: 1,
            player: 'Rodri',
            team: 'Man City',
            total: 3633,
          },
          { rank: 2, player: 'Lewis Dunk', team: 'Brighton', total: 3212 },
          { rank: 3, player: 'Pascal Groß', team: 'Brighton', total: 2927 },
          {
            rank: 4,
            player: 'Virgil van Dijk',
            team: 'Liverpool',
            total: 2872,
          },
          { rank: 5, player: 'William Saliba', team: 'Arsenal', total: 2839 },
          { rank: 6, player: 'Rúben Dias', team: 'Man City', total: 2608 },
          { rank: 7, player: 'Cristian Romero', team: 'Spurs', total: 2586 },
          {
            rank: 8,
            player: 'Jan Paul van Hecke',
            team: 'Brighton',
            total: 2396,
          },
          { rank: 9, player: 'Manuel Akanji', team: 'Man City', total: 2296 },
          {
            rank: 10,
            player: 'Maximilian Kilman',
            team: 'Wolves',
            total: 2286,
          },
        ],
      },
      cleanSheets: {
        players: [
          {
            rank: 1,
            player: 'David Raya',
            team: 'Arsenal',
            total: 16,
          },
          {
            rank: 2,
            player: 'Jordan Pickford',
            team: 'Everton',
            total: 13,
          },
          { rank: 3, player: 'Bernd Leno', team: 'Fulham', total: 10 },
          { rank: 3, player: 'Ederson', team: 'Man City', total: 10 },
          { rank: 5, player: 'André Onana', team: 'Man Utd', total: 9 },
          {
            rank: 6,
            player: 'Alisson Becker',
            team: 'Liverpool',
            total: 8,
          },
          {
            rank: 6,
            player: 'Emiliano Martínez',
            team: 'Aston Villa',
            total: 8,
          },
          {
            rank: 8,
            player: 'Mark Flekken',
            team: 'Brentford',
            total: 7,
          },
          { rank: 8, player: 'Neto', team: 'Bournemouth', total: 7 },
          {
            rank: 8,
            player: 'Guglielmo Vicario',
            team: 'Spurs',
            total: 7,
          },
        ],
      },
    };
    return playerStat;
  }
}

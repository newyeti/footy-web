export interface Player {
  rank: number;
  player: string;
  team: string;
  total: number;
}

export interface Players {
  players: Player[];
}

export interface PlayerStat {
  goals: Players;
  assists: Players;
  passes: Players;
  cleanSheets: Players;
}

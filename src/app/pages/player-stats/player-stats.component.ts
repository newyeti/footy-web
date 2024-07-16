import { Component } from '@angular/core';

import { Player } from '../../interfaces/player';
import { StatService } from '../../service/stat.service';
import { StatCardComponent } from '../stat-card/stat-card.component';

@Component({
  selector: 'app-player-stats',
  standalone: true,
  imports: [StatCardComponent],
  templateUrl: './player-stats.component.html',
  styleUrl: './player-stats.component.scss',
})
export class PlayerStatsComponent {
  goals: Player[] = [];
  assists: Player[] = [];
  passes: Player[] = [];
  cleanSheets: Player[] = [];

  constructor(private statService: StatService) {}

  ngOnInit(): void {
    const data = this.statService.getPlayerStats();
    this.goals = data.goals.players;
    this.assists = data.assists.players;
    this.passes = data.assists.players;
    this.cleanSheets = data.assists.players;
  }
}

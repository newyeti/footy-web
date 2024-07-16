import { Component } from '@angular/core';
import { PlayerStatsComponent } from '../player-stats/player-stats.component';

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [PlayerStatsComponent],
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.scss',
})
export class StatComponent {}

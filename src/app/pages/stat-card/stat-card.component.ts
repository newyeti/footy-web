import { Component, Input } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.modules';
import { Player } from '../../interfaces/player';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.scss',
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() players: Player[] = [];
}

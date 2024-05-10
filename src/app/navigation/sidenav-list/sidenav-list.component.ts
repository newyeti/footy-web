import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.modules';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav-list',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule],
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.scss',
})
export class SidenavListComponent {
  @Output() public sidenavClose = new EventEmitter<void>();
  @Output() public selectedMenu = new EventEmitter<string>();

  @Input() public selectedLeague: string = 'epl';

  public menulist: string[] = [
    'epl',
    'laliga',
    'bundesliga',
    'seriea',
    'ligue1',
  ];

  onSidenavClose() {
    this.sidenavClose.emit();
  }

  setActiveLeague(leagueName: string) {
    this.selectedLeague = leagueName;
    this.selectedMenu.emit(leagueName);
  }
}

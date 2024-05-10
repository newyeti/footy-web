import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.modules';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Constants } from '../../interfaces/constants';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() public sidenavToggle = new EventEmitter<void>();
  @Output() public selectedMenu = new EventEmitter<string>();
  @Input() public selectedLeague: string = 'epl';

  public isSmallScreen: boolean = false;

  public selectedTab = 'fixture';

  public menulist: string[] = [
    'epl',
    'laliga',
    'bundesliga',
    'seriea',
    'ligue1',
  ];

  constructor(private breakPointObserver: BreakpointObserver, router: Router) {}

  ngOnInit(): void {
    this.breakPointObserver
      .observe([`(max-width: ${Constants.SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen = state.matches;
      });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  setActiveLeague(leagueName: string) {
    this.selectedLeague = leagueName;
    this.selectedMenu.emit(leagueName);
  }

  setActiveTab(tabName: string) {
    this.selectedTab = tabName;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AngularMaterialModule } from './angular-material.modules';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Constants } from './interfaces/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LayoutComponent,
    AngularMaterialModule,
    HeaderComponent,
    SidenavListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'footy-web';

  public isSmallScreen: boolean = false;
  public selectedSideMenu: string = 'epl';

  constructor(
    private breakPointObserver: BreakpointObserver,
    private router: Router
  ) {}

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  ngOnInit(): void {
    this.breakPointObserver
      .observe([`(max-width: ${Constants.SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen = state.matches;
      });

    this.router.events.subscribe(() => {
      this.sidenav.close();
    });
  }

  setActiveMenu(menu: string) {
    this.selectedSideMenu = menu;
  }
}

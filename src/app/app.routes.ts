import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FixtureComponent } from './pages/fixture/fixture.component';
import { StandingsComponent } from './pages/standings/standings.component';
import { StatComponent } from './pages/stat/stat.component';
import { PlayersComponent } from './pages/players/players.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'fixture', component: FixtureComponent },
  { path: 'standings', component: StandingsComponent },
  { path: 'stat', component: StatComponent },
  { path: 'players', component: PlayersComponent },
];

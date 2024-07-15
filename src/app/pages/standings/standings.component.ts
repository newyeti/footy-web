import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.modules';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

export interface StandindsTable {
  position: number;
  club: string;
  played: number;
  won: number;
  draw: number;
  lost: number;
  goal_scored: number;
  goal_against: number;
  goal_diff: number;
  points: number;
  form: string;
}

const DATA: StandindsTable[] = [
  {
    position: 1,
    club: 'Arsenal',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 2,
    club: 'Aston Villa',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 3,
    club: 'Bournemouth',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 4,
    club: 'Brentford',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 5,
    club: 'Brighton And Hove Albion',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 6,
    club: 'Chelsea',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 7,
    club: 'Crystal Palance',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 8,
    club: 'Everton',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 9,
    club: 'Fulham',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 10,
    club: 'Ipswich Town',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 11,
    club: 'Leicester City',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 12,
    club: 'Liverpool',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 13,
    club: 'Manchester City',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 14,
    club: 'Manchester United',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 15,
    club: 'Newcastle United',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 16,
    club: 'Nottingham Forest',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 17,
    club: 'Southampton',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 18,
    club: 'Tottenham Hotspur',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 19,
    club: 'West Ham United',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
  {
    position: 20,
    club: 'Wolverhampton Wanderers',
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goal_scored: 0,
    goal_against: 0,
    goal_diff: 0,
    points: 0,
    form: 'WWWWW',
  },
];

interface Season {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.scss',
})
export class StandingsComponent {
  seasons: Season[] = [
    { value: 2022, viewValue: '2022/23' },
    { value: 2023, viewValue: '2023/24' },
    { value: 2024, viewValue: '2024/25' },
  ];

  currentSeason = this.seasons[this.seasons.length - 1].value;
  teamForm: string[] = ['W', 'W', 'D', 'L', 'W'];

  displayedColumns: string[] = [
    'position',
    'club',
    'played',
    'won',
    'draw',
    'lost',
    'goal_scored',
    'goal_against',
    'goal_diff',
    'points',
    'form',
  ];
  dataSource = new MatTableDataSource(DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

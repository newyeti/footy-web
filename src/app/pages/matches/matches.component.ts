import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.modules';
import { CommonModule } from '@angular/common';

interface Season {
  value: number;
  viewValue: string;
}

interface Club {
  value: string;
  viewValue: string;
}

interface Match {
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string;
  time: string;
  venue: string;
}

interface FixtureDay {
  date: Date;
  matches: Match[];
}

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [AngularMaterialModule, CommonModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss',
})
export class MatchesComponent {
  seasons: Season[] = [
    { value: 2022, viewValue: '2022/23' },
    { value: 2023, viewValue: '2023/24' },
    { value: 2024, viewValue: '2024/25' },
  ];

  clubs: Club[] = [
    { value: 'ManUtd', viewValue: 'Manchester United' },
    { value: 'Ars', viewValue: 'Arsenal' },
  ];

  currentSeason = this.seasons[this.seasons.length - 1].value;

  fixtureDays: FixtureDay[] = [
    {
      date: new Date('2024-08-16'),
      matches: [
        {
          homeTeam: 'Man Utd',
          homeTeamLogo: 'path_to_logo',
          awayTeam: 'Fulham',
          awayTeamLogo: 'path_to_logo',
          time: '15:00',
          venue: 'Old Trafford, Manchester',
        },
      ],
    },
    {
      date: new Date('2024-08-17'),
      matches: [
        {
          homeTeam: 'Ipswich',
          homeTeamLogo: 'path_to_logo',
          awayTeam: 'Liverpool',
          awayTeamLogo: 'path_to_logo',
          time: '07:30',
          venue: 'Portman Road, Ipswich',
        },
        {
          homeTeam: 'Arsenal',
          homeTeamLogo: 'path_to_logo',
          awayTeam: 'Wolves',
          awayTeamLogo: 'path_to_logo',
          time: '10:00',
          venue: 'Emirates Stadium, London',
        },
        {
          homeTeam: 'Everton',
          homeTeamLogo: 'path_to_logo',
          awayTeam: 'Brighton',
          awayTeamLogo: 'path_to_logo',
          time: '10:00',
          venue: 'Goodison Park, Liverpool',
        },
        {
          homeTeam: 'Newcastle',
          homeTeamLogo: 'path_to_logo',
          awayTeam: 'Southampton',
          awayTeamLogo: 'path_to_logo',
          time: '10:00',
          venue: "St. James' Park, Newcastle",
        },
        {
          homeTeam: "Nott'm Forest",
          homeTeamLogo: 'path_to_logo',
          awayTeam: 'Bournemouth',
          awayTeamLogo: 'path_to_logo',
          time: '10:00',
          venue: 'The City Ground, Nottingham',
        },
        {
          homeTeam: 'West Ham',
          homeTeamLogo: 'path_to_logo',
          awayTeam: 'Aston Villa',
          awayTeamLogo: 'path_to_logo',
          time: '12:30',
          venue: 'London Stadium, London',
        },
      ],
    },
    {
      date: new Date('2024-08-18'),
      matches: [
        {
          homeTeam: 'Brentford',
          homeTeamLogo: 'path_to_logo',
          awayTeam: 'Crystal Palace',
          awayTeamLogo: 'path_to_logo',
          time: '09:00',
          venue: 'Gtech Community Stadium, Brentford',
        },
        {
          homeTeam: 'Chelsea',
          homeTeamLogo: 'path_to_logo',
          awayTeam: 'Man City',
          awayTeamLogo: 'path_to_logo',
          time: '11:30',
          venue: 'Stamford Bridge, London',
        },
      ],
    },
    {
      date: new Date('2024-08-19'),
      matches: [
        {
          homeTeam: 'Leicester',
          homeTeamLogo: 'path_to_logo',
          awayTeam: 'Spurs',
          awayTeamLogo: 'path_to_logo',
          time: '15:00',
          venue: 'King Power Stadium, Leicester',
        },
      ],
    },
  ];
}

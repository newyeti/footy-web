import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.modules';
import { Season } from '../../interfaces/season';
import { MatTableDataSource } from '@angular/material/table';

interface Player {
  name: string;
  position: string;
  nationality: string;
}

const DATA: Player[] = [
  { name: 'Max Aarons', position: 'Defender', nationality: 'England' },
  { name: 'Max Aarons', position: 'Defender', nationality: 'England' },
  { name: 'Max Aarons', position: 'Defender', nationality: 'England' },
  { name: 'Max Aarons', position: 'Defender', nationality: 'England' },
  { name: 'Max Aarons', position: 'Defender', nationality: 'England' },
  { name: 'Max Aarons', position: 'Defender', nationality: 'England' },
  { name: 'Max Aarons', position: 'Defender', nationality: 'England' },
  { name: 'Max Aarons', position: 'Defender', nationality: 'England' },
];

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
})
export class PlayersComponent {
  seasons: Season[] = [
    { value: 2022, viewValue: '2022/23' },
    { value: 2023, viewValue: '2023/24' },
    { value: 2024, viewValue: '2024/25' },
  ];

  currentSeason = this.seasons[this.seasons.length - 1].value;

  displayedColumns: string[] = ['name', 'position', 'nationality'];
  dataSource = new MatTableDataSource(DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

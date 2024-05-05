import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.modules';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

import { Component, Output, EventEmitter } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material.modules';

@Component({
  selector: 'app-sidenav-list',
  standalone: true,
  imports: [AngularMaterialModule],
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.scss',
})
export class SidenavListComponent {
  @Output() public sidenavClose = new EventEmitter<void>();

  onSidenavClose() {
    this.sidenavClose.emit();
  }
}

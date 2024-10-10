import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'NavigationBar',
  templateUrl: './navigation-bar.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBar {
  openSidebar = false;

  toogleSidebar() {
    this.openSidebar = !this.openSidebar;
    console.log(this.openSidebar);
  }

}

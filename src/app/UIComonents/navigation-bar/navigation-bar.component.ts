import {Component} from '@angular/core';

@Component({
  selector: 'NavigationBar',
  templateUrl: './navigation-bar.component.html',
  standalone: true,
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBar {
  openSidebar = false;

  toogleSidebar() {
    this.openSidebar = !this.openSidebar;
    console.log(this.openSidebar);
  }

}

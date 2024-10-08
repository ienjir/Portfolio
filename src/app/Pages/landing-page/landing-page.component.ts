import { Component } from '@angular/core';
import { TranslocoService } from "@jsverse/transloco";
import {NavigationBar} from '../../UIComonents/navigation-bar/navigation-bar.component';
import {Terminal} from '../../UIComonents/terminal/terminal.component';

@Component({
  selector: 'LandingPage',
  templateUrl: './landing-page.component.html',
  standalone: true,
  imports: [
    NavigationBar,
    Terminal
  ],
  styleUrl: './landing-page.component.scss'
})
export class LandingPage {

  constructor(private translocoService: TranslocoService) {
  }
  changeLanguage(langCode: string) {
    this.translocoService.setActiveLang(langCode)
  }
}

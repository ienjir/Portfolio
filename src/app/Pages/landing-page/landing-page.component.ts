import { Component } from '@angular/core';
import { TranslocoService } from "@jsverse/transloco";
import {NavigationBar} from '../../UIComonents/navigation-bar/navigation-bar.component';
import {Terminal} from '../../UIComonents/terminal/terminal.component';
import { EditableTag } from '../../UIComonents/editable-tag/editable-tag.component';

@Component({
  selector: 'LandingPage',
  templateUrl: './landing-page.component.html',
  standalone: true,
  imports: [
    EditableTag,
    NavigationBar,
    Terminal,
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

import { Component } from '@angular/core';
import {TranslateModule,TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private translate: TranslateService,) { }

  translateEnglish() {
    this.translate.use('en');
   
  }
  translateGerman() {
    this.translate.use('de');
  }
}

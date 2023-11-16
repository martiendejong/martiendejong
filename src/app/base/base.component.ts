import { Component, QueryList, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FittextDirective } from '../fittext.directive';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  @ViewChildren(FittextDirective) fitTextDirectives: QueryList<FittextDirective> | undefined;
  constructor(public translate: TranslateService) {  
    var t = translate.currentLoader.getTranslation(translate.currentLang);
    t.subscribe(() => {
      this.fitTextDirectives?.forEach(directive => {
        directive.adjustFontSize();
      });
    });
  }

  // You can change the active language
  changeLanguage(language: string) {
    this.translate.use(language);    
  }
}
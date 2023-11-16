import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { FittextService } from './fittext.service';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  constructor(public translate: TranslateService, private cookieService: CookieService, private fittextService: FittextService) {
    this.translate.setDefaultLang('en'); // Set a default language
    this.detectLanguage();
  }

  detectLanguage() {
    var code = this.cookieService.get('language');
    if(code == undefined || code == "") {
      code = navigator.language.substring(0, 2);
    }
    if(!this.setLanguage(code)) {
      this.setLanguage('nl');
    }
  }

  getLanguage(code: string): any {
    return this.supportedLanguages.find(lang => lang.code == code);
  }

  supportedLanguages = [
    { code: 'en', name: 'English' },
    { code: 'nl', name: 'Nederlands' },
    { code: 'ru', name: 'Русский' },
    { code: 'zh', name: '中国人' },
    { code: 'pl', name: 'Polski' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'Polski' },
    { code: 'de', name: 'Deutsch' },
    { code: 'sw', name: 'Kiswahili' },
  ];

  pickLanguages() {
    return this.supportedLanguages.filter(lang => this.language.code != lang.code);
  }  

  language: any;

  setLanguage(code: string) {
    var language = this.getLanguage(code);
    if(language == undefined) return false;
    this.language = language;
    this.cookieService.set('language', this.language.code);    
    this.translate.use(this.language.code); // Use the default language  
    this.fittextService.triggerFontSizeAdjustment();
    return true;
  }
}
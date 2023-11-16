import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FittextService {
  private adjustFontSizeSubject = new Subject<void>();

  // Observable to trigger font size adjustment
  adjustFontSize$ = this.adjustFontSizeSubject.asObservable();

  // Method to trigger font size adjustment
  triggerFontSizeAdjustment() {
    this.adjustFontSizeSubject.next();
  }
}
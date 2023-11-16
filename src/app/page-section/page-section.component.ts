import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.scss']
})
export class PageSectionComponent {
  @Input() parts: number = 0;
  @Input() order: number = 0;
}
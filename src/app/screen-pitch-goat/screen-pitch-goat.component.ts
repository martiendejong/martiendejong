import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { TranslateService } from '@ngx-translate/core';
import { Location } from "@angular/common";
import { Meta, Title } from '@angular/platform-browser';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-screen-pitch-goat',
  templateUrl: './screen-pitch-goat.component.html',
  styleUrls: ['../content.scss', './screen-pitch-goat.component.scss']
})
export class ScreenPitchGoatComponent extends BaseComponent {
  constructor(translate: TranslateService, private location: Location, 
    private titleService: Title, private metaService: Meta) {
    super(translate);
  }
}
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as Aos from 'aos';
import { LocalizationService } from './localization.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { BaseComponent } from './base/base.component';

type NavigationItem = { title?: string, routerLink?: string, href?: string, image?: string };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit, AfterViewInit {
  constructor(translate: TranslateService, localization: LocalizationService, public route: ActivatedRoute,
    private router: Router, 
    private titleService: Title, private metaService: Meta,
    private location: Location) {
    super(translate);
  }

  title = 'Martien de Jong';

  ngAfterViewInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        var url = this.location.path(true);
        var index = url.indexOf('#');
        if(index > -1) {
          // After going to an anchor, remove the # in the url
          var newUrl = url.substring(0, index) + url.substring(index + 1);
          this.location.go(newUrl);
        } else {
          // When navigating to a page without #, instruct the browser to scroll to the corresponding anchor
          url = url.replace('/', '');
          if(url == '') url = 'home';
          var scrollElem = document.getElementById(url);
          if(scrollElem != null) {
            scrollElem.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }

  ngOnInit(): void {
    Aos.init();
  }

  setAnchor(anchor: string) {
    this.location.go(anchor);
  }
}
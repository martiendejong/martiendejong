import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageSectionComponent } from './page-section/page-section.component';
import { ClosestToCenterDirective } from './closest-to-center.directive';
import { BaseComponent } from './base/base.component';
import { FittextDirective } from './fittext.directive';

@NgModule({
  declarations: [
    FittextDirective,
    AppComponent,
    PageComponent,
    NavigationComponent,
    PageSectionComponent,
    ClosestToCenterDirective,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

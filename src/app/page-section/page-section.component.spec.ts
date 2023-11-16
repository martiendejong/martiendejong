import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionComponent } from './page-section.component';

describe('AppPageSectionComponent', () => {
  let component: PageSectionComponent;
  let fixture: ComponentFixture<PageSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSectionComponent]
    });
    fixture = TestBed.createComponent(PageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

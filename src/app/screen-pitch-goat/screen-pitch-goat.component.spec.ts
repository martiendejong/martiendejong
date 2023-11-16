import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPitchGoatComponent } from './screen-pitch-goat.component';

describe('ScreenPitchGoatComponent', () => {
  let component: ScreenPitchGoatComponent;
  let fixture: ComponentFixture<ScreenPitchGoatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenPitchGoatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScreenPitchGoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

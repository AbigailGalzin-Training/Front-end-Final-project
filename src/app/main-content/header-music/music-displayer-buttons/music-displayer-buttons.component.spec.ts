import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDisplayerButtonsComponent } from './music-displayer-buttons.component';

describe('MusicDisplayerButtonsComponent', () => {
  let component: MusicDisplayerButtonsComponent;
  let fixture: ComponentFixture<MusicDisplayerButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicDisplayerButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicDisplayerButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

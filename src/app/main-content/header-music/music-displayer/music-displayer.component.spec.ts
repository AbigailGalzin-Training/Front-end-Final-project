import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDisplayerComponent } from './music-displayer.component';

describe('MusicDisplayerComponent', () => {
  let component: MusicDisplayerComponent;
  let fixture: ComponentFixture<MusicDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

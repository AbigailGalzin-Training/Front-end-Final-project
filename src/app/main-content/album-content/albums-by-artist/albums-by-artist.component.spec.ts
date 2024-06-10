import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsByArtistComponent } from './albums-by-artist.component';

describe('AlbumsByArtistComponent', () => {
  let component: AlbumsByArtistComponent;
  let fixture: ComponentFixture<AlbumsByArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsByArtistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsByArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

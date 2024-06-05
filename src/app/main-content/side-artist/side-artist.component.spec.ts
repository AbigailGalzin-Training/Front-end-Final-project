import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideArtistComponent } from './side-artist.component';

describe('SideArtistComponent', () => {
    let component: SideArtistComponent;
    let fixture: ComponentFixture<SideArtistComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SideArtistComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SideArtistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

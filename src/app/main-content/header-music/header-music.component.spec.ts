import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMusicComponent } from './header-music.component';

describe('HeaderMusicComponent', () => {
    let component: HeaderMusicComponent;
    let fixture: ComponentFixture<HeaderMusicComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderMusicComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(HeaderMusicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

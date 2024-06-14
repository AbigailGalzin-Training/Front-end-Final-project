import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMusicComponent } from './navigation-music.component';

describe('NavigationMusicComponent', () => {
    let component: NavigationMusicComponent;
    let fixture: ComponentFixture<NavigationMusicComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavigationMusicComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NavigationMusicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

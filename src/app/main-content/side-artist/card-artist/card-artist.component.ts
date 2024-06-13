import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Album } from 'src/app/model/album';
import { AppState } from 'src/app/model/appstate.model';
import { setCurrentArtist } from 'src/app/ngrx/app.action';

@Component({
    selector: 'app-card-artist',
    templateUrl: './card-artist.component.html',
    styleUrls: ['./card-artist.component.sass'],
})
export class CardArtistComponent {
    @Input() nameArtist?: string = 'name artist';
    @Input() linkPhoto: string = '../../../../assets/music.png';

    constructor(private readonly store: Store<AppState>){
    }
    selectArtist() {
        if(this.nameArtist){
            this.store.dispatch(setCurrentArtist({artistName: this.nameArtist}));
        }
    }
}

import { Component } from '@angular/core';
import { Artist } from '../../../models/artist.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/model/appstate.model';
import { Observable } from 'rxjs';
import { selectAlbumsForCurrentArtist, selectCurrentArtist } from 'src/app/ngrx/app.selector';
import { Album } from 'src/app/model/album';

@Component({
    selector: 'app-albums-by-artist',
    templateUrl: './albums-by-artist.component.html',
    styleUrls: ['./albums-by-artist.component.sass'],
})
export class AlbumsByArtistComponent {
    public artist: Artist = {
        id: 1,
        name: 'Artist A',
        photo: 'Photo artist A',
    };

    currentArtist: Observable<string>;
    currentAlbums: Observable<Album[]> ;
    constructor(private readonly store: Store<AppState>){
        this.currentArtist = this.store.select(selectCurrentArtist);
        this.currentAlbums = this.store.select(selectAlbumsForCurrentArtist);
    }

}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../model/artist.model';
import { AppState } from '../../model/appstate.model';
import { Album } from '../../model/album';
import { Music } from '../../model/music.model';
import { Store } from '@ngrx/store';
import {
    selectAlbum,
    selectAllAlbums,
    selectAllArtists,
    selectAllSongs,
    selectSong,
} from '../app.selector';

@Component({
    selector: 'app-ngrx',
    templateUrl: './ngrx.component.html',
    styleUrls: ['./ngrx.component.sass'],
})
export class NgrxComponent {
    artists: Observable<Artist[]>;
    albums: Observable<Album[] | undefined>;
    songs: Observable<Music[] | undefined>;
    album: Observable<Album | undefined>;
    song: Observable<Music | undefined>;

    constructor(private readonly store: Store<AppState>) {
        this.artists = this.store.select(selectAllArtists);
        this.albums = this.store.select(selectAllAlbums('Coldplay'));
        this.songs = this.store.select(
            selectAllSongs('Coldplay', 'Parachutes'),
        );
        this.album = this.store.select(selectAlbum('Coldplay', 'Parachutes'));
        this.song = this.store.select(
            selectSong('Coldplay', 'Parachutes', 'Yellow'),
        );
    }
}

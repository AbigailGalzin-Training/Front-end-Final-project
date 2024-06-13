import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../model/artist.model';
import { AppState } from '../../model/appstate.model';
import { Album } from '../../model/album';
import { Store } from '@ngrx/store';
import { Song } from 'src/app/model/song.model';
import {
    selectAlbum,
    selectAllAlbums,
    selectAllArtists,
    selectAllSongs,
    selectSong,
    selectCurrentSongs
} from '../app.selector';
import { CurrentSong } from 'src/app/model/current-song.model';

@Component({
    selector: 'app-ngrx',
    templateUrl: './ngrx.component.html',
    styleUrls: ['./ngrx.component.sass'],
})
export class NgrxComponent {
    artists: Observable<Artist[]>;
    albums: Observable<Album[] | undefined>;
    songs: Observable<Song[] | undefined>;
    album: Observable<Album | undefined>;
    song: Observable<Song | undefined>;

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

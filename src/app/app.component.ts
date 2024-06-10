import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Artist } from './model/artist.model';
import { AppState } from './model/appstate.model';
import { selectAllArtists } from 'src/selectors/artist.selector';
import { Album } from './model/album';
import { Music } from './model/music.model';
import { selectAllAlbums } from 'src/selectors/albums.selector';
import { selectAllMusic } from 'src/selectors/music.selector';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {
    title = 'front-end-final-project';

    artists: Observable<Artist[]>;
    albums: Observable<Album[]>;
    music: Observable<Music[]>;

    constructor(private readonly store: Store<AppState>) {
        this.artists = this.store.pipe(select(selectAllArtists));
        this.albums = this.store.pipe(select(selectAllAlbums));
        this.music = this.store.pipe(select(selectAllMusic));
    }

    ngOnInit() {
        this.artists = this.store.select(selectAllArtists);
        this.albums = this.store.select(selectAllAlbums);
        this.music = this.store.select(selectAllMusic);
    }
}

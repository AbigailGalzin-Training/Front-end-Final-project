import { Component, Input } from '@angular/core';
import { Song } from '../../../model/song.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/model/appstate.model';
import { Observable } from 'rxjs';
import { selectAllSongs } from 'src/app/ngrx/app.selector';
import { addCurrentSong } from 'src/app/ngrx/app.action';

@Component({
    selector: 'app-album-card',
    templateUrl: './album-card.component.html',
    styleUrls: ['./album-card.component.sass'],
})
export class AlbumCardComponent {
    @Input() title: string | null = null;
    @Input() releaseDate: string | null = null;
    @Input() genre: string | null = null;
    @Input() photo: string | null = null;

    artist: string = 'Coldplay';
    album: string = 'Parachutes';
    songs: Observable<Song[] | undefined>;

    constructor(private readonly store: Store<AppState>) {
        this.songs = this.store.select(selectAllSongs(this.artist, this.album));
    }

    mockedSong: Song = {
        title: '',
        genre: '',
        releaseDate: '',
        duration: 0,
        songPath: '',
        imagePath: '',
    };

    onClick(currentSong: string) {
        addCurrentSong(this.artist, this.album, this.mockedSong);
    }
}

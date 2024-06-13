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
        title: "Bohemian Rhapsody",
        genre: "Rock",
        releaseDate: "1975-10-31",
        duration: 355,
        songPath: "../../../../assets/bohemian_rhapsody.mp3",
        imagePath: "../../../../assets/music.png"
    };

    onClick(currentSong: string) {
        this.store.dispatch(
            addCurrentSong({
                artistName: this.artist,
                albumTitle: this.album,
                song: this.mockedSong,
            }),
        );
    }
}

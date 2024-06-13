import { Component, Input } from '@angular/core';
import { Song } from '../../../model/song.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/model/appstate.model';
import { Observable } from 'rxjs';
import { selectAllSongs, selectCurrentSong } from 'src/app/ngrx/app.selector';
import { addCurrentSong } from 'src/app/ngrx/app.action';
import { CurrentSong } from 'src/app/model/current-song.model';

@Component({
    selector: 'app-album-card',
    templateUrl: './album-card.component.html',
    styleUrls: ['./album-card.component.sass'],
})
export class AlbumCardComponent {
    @Input() title!: string;
    @Input() releaseDate: string | null = null;
    @Input() genre: string | null = null;
    @Input() photo: string | null = null;
    @Input() songs!: Song[] | null;
    @Input() artistName!: string | null;

    currentSong: Observable<CurrentSong>;

    constructor(private readonly store: Store<AppState>) {
        this.currentSong = this.store.select(selectCurrentSong);
    }
    onClick(currentSong: Song) {
        this.store.dispatch(
            addCurrentSong({
                artistName: this.artistName !== null ? this.artistName : '',
                albumTitle: this.title,
                song: currentSong,
            }),
        );
    }
}

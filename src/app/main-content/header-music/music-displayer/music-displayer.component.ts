import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Song } from '../../../model/song.model'
import { CurrentSong } from '../../../model/current-song.model'
import * as moment from 'moment';
import { AppState } from 'src/app/model/appstate.model';
import { selectCurrentSongs } from 'src/app/ngrx/app.selector';

@Component({
    selector: 'app-music-displayer',
    templateUrl: './music-displayer.component.html',
    styleUrls: ['./music-displayer.component.sass']
})
export class MusicDisplayerComponent {
    shuffleActive: boolean = false;
    durationSong: number = 100;
    /*currentSong: Song = {
        title: "Bohemian Rhapsody",
        genre: "Rock",
        releaseDate: "1975-10-31",
        duration: 355,
        songPath: "../../../../assets/bohemian_rhapsody.mp3",
        imagePath: "../../../../assets/music.png"
    };*/
    audio = new Audio;

    currentSong!: CurrentSong;

    constructor(private readonly store: Store<AppState>) {
        this.store.select(selectCurrentSongs)
            .subscribe((currentSong) => {
                this.currentSong = currentSong;
            });

        this.audio.addEventListener('loadedmetadata', () => {
            this.durationSong = Math.round(this.audio.duration);
        });
    }

    randomSong() {
        /*
        this.shuffleActive = !this.shuffleActive;
        console.log(" audio.readyState : ", this.audio.readyState)
        */
    }

    durationSlider(event: any) {
        this.audio.currentTime = event.target.value;
    }
}

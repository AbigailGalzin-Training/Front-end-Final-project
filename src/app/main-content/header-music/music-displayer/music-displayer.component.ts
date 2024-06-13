import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Song } from '../../../model/song.model'
import * as moment from 'moment';

@Component({
    selector: 'app-music-displayer',
    templateUrl: './music-displayer.component.html',
    styleUrls: ['./music-displayer.component.sass']
})
export class MusicDisplayerComponent {
    shuffleActive: boolean = false;
    durationSong: number = 100;
    currentSong: Song = {
        title: "Bohemian Rhapsody",
        genre: "Rock",
        releaseDate: "1975-10-31",
        duration: 355,
        songPath: "../../../../assets/bohemian_rhapsody.mp3",
        imagePath: "../../../../assets/music.png"
    };
    audio = new Audio;

    updateCurrentTime() {
        // Force Angular to detect changes
        this.audio.currentTime = this.audio.currentTime;
    }

    constructor() {
        // TODO: this section should be deleted
        // once reducer is implemented
        this.audio.src = this.currentSong.songPath;
        let duration = this.audio.duration;
        console.log('Audio duration:', duration);

        //this.audio.play();

        this.audio.addEventListener('loadedmetadata', () => {
            this.durationSong = Math.round(this.audio.duration);
            console.log('Audio duration:', this.durationSong);
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

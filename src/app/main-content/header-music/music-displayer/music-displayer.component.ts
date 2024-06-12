import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Song } from '../../../model/song.model'

@Component({
    selector: 'app-music-displayer',
    templateUrl: './music-displayer.component.html',
    styleUrls: ['./music-displayer.component.sass']
})
export class MusicDisplayerComponent {
    durationSong: number = 1;
    currentSong: Song = {
        title: "Bohemian Rhapsody",
        genre: "Rock",
        releaseDate: "1975-10-31",
        duration: 355,
        songPath: "../../../../assets/bohemian_rhapsody.mp3",
        imagePath: "../../../../assets/music.png"
    };

    audio = new Audio;
    constructor() {
        // TODO: this section should be deleted
        // once reducer is implemented
        this.audio.src = this.currentSong.songPath;
        this.audio.play();
    }

    randomSong() {
        console.log("-- click on randomSong")
    }

    durationSlider(event: any) {
        this.audio.currentTime = event.target.value;
    }
}

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
    @Input() artistName?: string;
    @Input() songName?: string;
    @Input() genre?: string;

    currentSong: Song = {
        title: "Bohemian Rhapsody",
        genre: "Rock",
        releaseDate: "1975-10-31",
        duration: 354, // Duration in seconds
        songPath: "../../../../assets/bohemian_rhapsody.mp3",
        imagePath: "../../../../assets/music.png"
    };
    randomSong() {
        console.log("-- click on randomSong")
    }
}
